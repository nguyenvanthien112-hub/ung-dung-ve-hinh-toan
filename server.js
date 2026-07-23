import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// ── CORS ────────────────────────────────────────────────────────
// Khi production: cho phép cùng origin (frontend được serve từ backend)
// Khi dev local: cho phép localhost
app.use(cors({
  origin: IS_PRODUCTION
    ? true  // cùng origin — backend serve frontend
    : (_origin, cb) => cb(null, true),  // cho phép mọi localhost trong dev
  credentials: true
}));

app.use(express.json({ limit: '2mb' }));

// ── Serve Frontend (chỉ khi production) ─────────────────────────
if (IS_PRODUCTION) {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
}

// ── Tìm đường dẫn typst phù hợp với OS ─────────────────────────
function getTypstCommand() {
  // Render (Linux): dùng binary đã download vào thư mục gốc
  if (process.platform !== 'win32') {
    const linuxBin = path.join(__dirname, 'typst-linux');
    if (fs.existsSync(linuxBin)) return `"${linuxBin}"`;
    // Fallback: typst trong PATH
    return 'typst';
  }
  // Windows (dev local)
  return `.\\typst.exe`;
}

// ── Auto-fix lệnh LaTeX → Typst (Gemini hay sinh ra sai) ─────────
function sanitizeTypstCode(code) {
  // Degree: ^\circ → ° (phổ biến nhất)
  code = code.replace(/\^\s*\\circ\b/g, '°');

  // Greek letters lowercase: \alpha → alpha, \beta → beta, ...
  const greekLower = ['alpha','beta','gamma','delta','epsilon','zeta','eta',
    'theta','iota','kappa','lambda','mu','nu','xi','pi','rho','sigma',
    'tau','upsilon','phi','chi','psi','omega'];
  for (const g of greekLower) {
    code = code.replace(new RegExp(`\\\\${g}\\b`, 'g'), g);
  }

  // Greek letters uppercase: \Gamma → Gamma, ...
  const greekUpper = ['Gamma','Delta','Theta','Lambda','Xi','Pi','Sigma',
    'Upsilon','Phi','Psi','Omega'];
  for (const g of greekUpper) {
    code = code.replace(new RegExp(`\\\\${g}\\b`, 'g'), g);
  }

  // Math symbols
  code = code.replace(/\\infty\b/g, '∞');
  code = code.replace(/\\rightarrow\b/g, '→');
  code = code.replace(/\\leftarrow\b/g, '←');
  code = code.replace(/\\Rightarrow\b/g, '⇒');
  code = code.replace(/\\Leftarrow\b/g, '⇐');
  code = code.replace(/\\leftrightarrow\b/g, '↔');
  code = code.replace(/\\leq\b|\\le\b/g, '<=');
  code = code.replace(/\\geq\b|\\ge\b/g, '>=');
  code = code.replace(/\\neq\b|\\ne\b/g, '≠');
  code = code.replace(/\\approx\b/g, '≈');
  code = code.replace(/\\times\b/g, '×');
  code = code.replace(/\\cdot\b/g, '·');
  code = code.replace(/\\pm\b/g, '±');
  code = code.replace(/\\mp\b/g, '∓');
  code = code.replace(/\\in\b/g, '∈');
  code = code.replace(/\\notin\b/g, '∉');
  code = code.replace(/\\subset\b/g, '⊂');
  code = code.replace(/\\cup\b/g, '∪');
  code = code.replace(/\\cap\b/g, '∩');
  code = code.replace(/\\forall\b/g, '∀');
  code = code.replace(/\\exists\b/g, '∃');
  code = code.replace(/\\partial\b/g, '∂');
  code = code.replace(/\\nabla\b/g, '∇');

  return code;
}

// ── API: Compile Typst → SVG ─────────────────────────────────────
app.post('/api/compile', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  const sanitized = sanitizeTypstCode(code);

  // Dùng thư mục /tmp trên Linux, __dirname trên Windows
  const tmpDir = process.platform !== 'win32' ? '/tmp' : __dirname;
  const uid = Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  const tempTypPath = path.join(tmpDir, `typst_${uid}.typ`);
  const tempSvgPath = path.join(tmpDir, `typst_${uid}.svg`);

  fs.writeFileSync(tempTypPath, sanitized, 'utf8');

  const typstCmd = getTypstCommand();
  const command = `${typstCmd} compile "${tempTypPath}" "${tempSvgPath}"`;

  exec(command, { timeout: 30000 }, (error, stdout, stderr) => {
    // Dọn file tạm
    try { if (fs.existsSync(tempTypPath)) fs.unlinkSync(tempTypPath); } catch (_) {}

    if (error) {
      console.error(`Typst error:`, stderr || error.message);
      try { if (fs.existsSync(tempSvgPath)) fs.unlinkSync(tempSvgPath); } catch (_) {}
      return res.status(500).json({ error: 'Compilation failed', details: stderr || error.message });
    }

    try {
      if (fs.existsSync(tempSvgPath)) {
        let svgContent = fs.readFileSync(tempSvgPath, 'utf8');
        fs.unlinkSync(tempSvgPath);

        // Chuẩn hóa SVG để tự động mở rộng 100% tràn khung hình
        svgContent = svgContent.replace(/<svg\b([^>]*)>/, (match, head) => {
          let newHead = head.replace(/\bwidth="[^"]*"/g, 'width="100%"');
          newHead = newHead.replace(/\bheight="[^"]*"/g, 'height="100%"');
          if (!newHead.includes('width=')) newHead += ' width="100%"';
          if (!newHead.includes('height=')) newHead += ' height="100%"';
          return `<svg ${newHead}>`;
        });

        res.json({ svg: svgContent });
      } else {
        res.status(500).json({ error: 'SVG file was not generated' });
      }
    } catch (readError) {
      console.error(`Read SVG error:`, readError);
      res.status(500).json({ error: 'Failed to read generated SVG' });
    }
  });
});

// ── Health check ─────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), platform: process.platform });
});

// ── Fallback: trả về index.html cho mọi route (SPA) ─────────────
if (IS_PRODUCTION) {
  app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// ── Khởi động server ─────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port} [${IS_PRODUCTION ? 'production' : 'development'}]`);
  console.log(`🔧 Typst command: ${getTypstCommand()}`);

  // ── Keep-Alive: tự ping mỗi 14 phút để không bị Render ngủ đông ──
  if (IS_PRODUCTION) {
    // Render tự cung cấp RENDER_EXTERNAL_HOSTNAME, hoặc dùng URL cố định làm fallback
    const hostname =
      process.env.RENDER_EXTERNAL_URL ||
      (process.env.RENDER_EXTERNAL_HOSTNAME
        ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`
        : 'https://ung-dung-ve-hinh-toan-2.onrender.com');

    const pingUrl = `${hostname}/api/health`;
    console.log(`⏰ Keep-alive ping mỗi 14 phút → ${pingUrl}`);

    setInterval(() => {
      import('https').then(({ default: https }) => {
        https.get(pingUrl, (res) => {
          console.log(`[Keep-alive] ✅ OK — ${new Date().toLocaleTimeString('vi-VN')}`);
          res.resume();
        }).on('error', (err) => {
          console.warn(`[Keep-alive] ❌ thất bại:`, err.message);
        });
      }).catch(() => {});
    }, 14 * 60 * 1000);
  }
});