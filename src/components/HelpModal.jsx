import { useState } from 'react';

const SECTIONS = [
  {
    id: 'builder',
    icon: '🎨',
    title: 'Form Builder — Tạo hình từ form',
    steps: [
      { step: '1', text: 'Chọn chế độ <strong>🎨 Form Builder</strong> trên thanh điều hướng.' },
      { step: '2', text: 'Bên trái: chọn <strong>loại hình vẽ</strong> (tam giác, đường tròn, đồ thị, vật lý...).' },
      { step: '3', text: '<strong>Điền thông số</strong> vào form (cạnh, bán kính, hàm số...). Hình vẽ tự cập nhật sau 0.5 giây.' },
      { step: '4', text: 'Bấm <strong>Tạo Hình Vẽ</strong> nếu muốn vẽ lại thủ công.' },
      { step: '5', text: 'Hình vẽ SVG xuất hiện ở cột <strong>bên phải</strong>. Dùng nút ⬇ SVG / ⬇ PNG để tải về.' },
    ],
    tip: 'Mã Typst được tạo tự động hiển thị phía dưới form — có thể sao chép để dùng lại.',
  },
  {
    id: 'style',
    icon: '🖌️',
    title: 'Tùy chỉnh Style — Màu nét, màu điểm, vùng tô',
    steps: [
      { step: '1', text: 'Sau khi chọn hình, mở mục <strong>🎨 Tùy chỉnh Style</strong> bên trái.' },
      { step: '2', text: 'Chọn <strong>màu nét vẽ</strong> và <strong>độ dày</strong> cho các cạnh của hình.' },
      { step: '3', text: 'Chọn <strong>kiểu nét</strong>: liền / đứt / chấm.' },
      { step: '4', text: 'Chọn <strong>màu điểm</strong> và kích thước nếu muốn hiển thị điểm có màu.' },
      { step: '5', text: 'Chọn <strong>màu nền (fill)</strong> và độ trong suốt để tô màu bên trong hình.' },
    ],
    tip: 'Hình vẽ tự cập nhật ngay khi thay đổi bất kỳ tùy chọn style nào.',
  },
  {
    id: 'annotation',
    icon: '✏️',
    title: 'Chú Thích Màu — Tô màu từng phần (ý a, ý b)',
    steps: [
      { step: '1', text: 'Mở mục <strong>✏️ Chú Thích Màu</strong> sau khi đã tạo hình.' },
      { step: '2', text: 'Bấm <strong>⦿ Điểm màu</strong>: nhập tọa độ x, y, nhãn (A/B/M), chọn màu → Thêm.' },
      { step: '3', text: 'Bấm <strong>— Cạnh màu</strong>: nhập tọa độ điểm đầu, điểm cuối, chọn màu và độ dày → Thêm.' },
      { step: '4', text: 'Bấm <strong>▲ Vùng tô</strong>: nhập các đỉnh theo dạng <code>x,y ; x,y ; x,y</code>, chọn màu và độ mờ → Thêm.' },
      { step: '5', text: 'Hình vẽ tự cập nhật với các màu mới. Bấm <strong>×</strong> để xóa chú thích.' },
    ],
    tip: 'Ví dụ ý a tô xanh △ABC: nhập "0,0 ; 5,0 ; 1.8,2.4" → màu xanh → độ mờ 30%. Ý b tô hồng tương tự.',
    example: '0,0 ; 5,0 ; 1.8,2.4',
  },
  {
    id: 'codeeditor',
    icon: '💻',
    title: 'Code Editor — Tự viết hoặc dùng Gemini AI',
    steps: [
      { step: '1', text: 'Chọn chế độ <strong>💻 Code Editor</strong> trên thanh điều hướng.' },
      { step: '2', text: '<strong>Tự động (Đồ thị)</strong>: Nhập hàm số y = f(x) và khoảng giá trị X để vẽ đồ thị hàm số.' },
      { step: '3', text: '<strong>Tự do (Manual)</strong>: Dán mã Typst/CeTZ hoặc trò chuyện bằng tiếng Việt với Gemini AI để vẽ hình.' },
      { step: '4', text: '<strong>Cách vẽ/sửa bằng AI:</strong> Mở nút <strong>🤖 Gemini AI</strong> ➔ Chat yêu cầu hoặc dán code cũ nhờ sửa ➔ Copy kết quả từ Gemini dán vào ô soạn thảo ➔ Bấm <strong>Tạo Hình Vẽ</strong>.' },
      { step: '5', text: 'Dùng <strong>📋 Mẫu Có Sẵn</strong> và <strong>🤖 Gợi Ý Prompt AI</strong> để thao tác nhanh hơn.' },
    ],
    tip: 'Bạn có thể copy mã của hình vẽ bất kỳ sang ô chat Gemini để nhờ AI căn chỉnh vị trí các điểm hoặc thêm bớt các đường nét.',
  },
  {
    id: 'promptbuilder',
    icon: '🤖',
    title: 'Tạo Prompt Màu Cho AI — Sinh mã Typst có màu từ Gemini',
    steps: [
      { step: '1', text: 'Vào <strong>💻 Code Editor</strong>, mở mục <strong>🎨 Tạo Prompt Màu Sắc Cho AI</strong>.' },
      { step: '2', text: 'Điền <strong>mô tả hình vẽ</strong>: "Tam giác ABC nội tiếp đường tròn tâm O bán kính 2".' },
      { step: '3', text: 'Thêm <strong>màu điểm</strong>: A → Đỏ, B → Xanh dương, O → Đen.' },
      { step: '4', text: 'Thêm <strong>màu cạnh</strong>: AB → Xanh lá 2pt, BC → Cam nét đứt.' },
      { step: '5', text: 'Thêm <strong>vùng tô</strong>: "Ý a — △ABC" → Xanh nhạt 30%, "Ý b — △ADE" → Hồng 25%.' },
      { step: '6', text: 'Bấm <strong>📋 Sao chép prompt</strong> → Dán vào <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Gemini AI</a>.' },
      { step: '7', text: 'Copy mã Typst Gemini trả về → Dán vào Code Editor (Manual) → Bấm Tạo Hình Vẽ.' },
    ],
    tip: 'Prompt tự chứa quy tắc kỹ thuật Typst bắt buộc, giúp Gemini sinh code đúng ngay lần đầu.',
  },
  {
    id: 'templates',
    icon: '📚',
    title: 'Thư Viện Mẫu — Dùng lại các hình có sẵn',
    steps: [
      { step: '1', text: 'Chọn chế độ <strong>📚 Templates</strong> trên thanh điều hướng.' },
      { step: '2', text: 'Duyệt các <strong>mẫu hình vẽ</strong> theo danh mục (hình học, đồ thị, vật lý...).' },
      { step: '3', text: 'Bấm vào một mẫu → tự chuyển sang Code Editor với mã đã điền sẵn.' },
      { step: '4', text: 'Dùng <strong>⚡ Truy cập nhanh Form Builder</strong> để mở thẳng form của một loại hình.' },
    ],
    tip: 'Kết hợp mẫu + chỉnh sửa thủ công trong Code Editor để tạo hình phức tạp nhanh hơn.',
  },
  {
    id: 'realworld',
    icon: '🏞️',
    title: 'Bài Toán Thực Tế — Hải đăng, tòa nhà, bóng cây, con tàu...',
    steps: [
      { step: '1', text: 'Vào <strong>🎨 Form Builder</strong> ➔ Chọn danh mục <strong>🏞️ Bài toán thực tế</strong>.' },
      { step: '2', text: 'Chọn loại bài toán: <strong>Ngọn hải đăng / Tòa nhà</strong> (quan sát từ 2 điểm), <strong>Chiều cao cây</strong> (bóng râm), hoặc <strong>Hai con tàu trên biển</strong>.' },
      { step: '3', text: 'Nhập khoảng cách AB (ví dụ 30m), các góc quan sát α, β và chọn bối cảnh cảnh vật (bờ biển, bầu trời, mặt đất).' },
      { step: '4', text: 'Hình vẽ SVG bối cảnh thực tế tự động cập nhật lập tức với đầy đủ đối tượng, tia ngắm, góc nghiêng và mũi tên kích thước.' },
      { step: '5', text: '<strong>Bài toán lạ/độc đáo:</strong> Dùng nút <strong>🤖 Gemini AI</strong> chat tiếng Việt (ví dụ: <em>"Vẽ cây cầu treo có dây cáp hình parabol..."</em>) để AI sinh mã vẽ hình tương ứng.' },
    ],
    tip: 'Tất cả các bài toán thực tế lượng giác, đại số (đồ thị parabol quả bóng nảy) và hình học không gian SGK mới đều được hỗ trợ.',
  },
  {
    id: 'export',
    icon: '⬇️',
    title: 'Tải về — SVG và PNG',
    steps: [
      { step: '1', text: 'Sau khi hình vẽ xuất hiện, hai nút <strong>⬇ SVG</strong> và <strong>⬇ PNG</strong> hiện trên thanh tiêu đề.' },
      { step: '2', text: '<strong>SVG</strong>: file vector, phóng to không vỡ, dùng cho Word/PowerPoint/LaTeX.' },
      { step: '3', text: '<strong>PNG</strong>: ảnh raster 2×, nền trắng, dùng cho đề thi, Google Docs.' },
    ],
    tip: 'Nên dùng SVG nếu cần chèn vào LaTeX hoặc chỉnh sửa thêm bằng Inkscape.',
  },
];

function HelpModal({ onClose }) {
  const [openId, setOpenId] = useState('builder');

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="help-header">
          <div className="help-title">
            <span className="help-title-icon">📖</span>
            <h2>Hướng Dẫn Sử Dụng</h2>
          </div>
          <button className="help-close" onClick={onClose} title="Đóng">×</button>
        </div>

        <p className="help-subtitle">
          Ứng dụng vẽ hình toán học dùng Typst + CeTZ — dành cho giáo viên và học sinh.
        </p>

        {/* Accordion sections */}
        <div className="help-body">
          {SECTIONS.map(sec => (
            <div key={sec.id} className={`help-section ${openId === sec.id ? 'open' : ''}`}>
              <button
                className="help-section-header"
                onClick={() => toggle(sec.id)}
              >
                <span className="help-sec-icon">{sec.icon}</span>
                <span className="help-sec-title">{sec.title}</span>
                <span className="help-chevron">{openId === sec.id ? '▾' : '▸'}</span>
              </button>

              {openId === sec.id && (
                <div className="help-section-body">
                  <ol className="help-steps">
                    {sec.steps.map(s => (
                      <li key={s.step} className="help-step">
                        <span className="help-step-num">{s.step}</span>
                        <span
                          className="help-step-text"
                          dangerouslySetInnerHTML={{ __html: s.text }}
                        />
                      </li>
                    ))}
                  </ol>
                  {sec.tip && (
                    <div className="help-tip">
                      <span className="help-tip-icon">💡</span>
                      <span>{sec.tip}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="help-footer">
          <span>Gặp vấn đề? Dùng <strong>🤖 Gemini AI</strong> để hỏi thêm về Typst/CeTZ.</span>
          <button className="primary btn-sm" onClick={onClose}>Đã hiểu, đóng lại</button>
        </div>

      </div>
    </div>
  );
}

export default HelpModal;
