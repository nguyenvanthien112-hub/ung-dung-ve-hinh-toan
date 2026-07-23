// Generator cho các bài toán thực tế (Real-world Geometry Problems)
// Đã tối ưu kích thước canvas rộng mở (12x7 units) & phông chữ to (13-14pt) sắc nét

// 1. Ngọn hải đăng / Tòa nhà (Quan sát từ 2 điểm A, B)
export function generateLighthouseElevation(params = {}) {
  const {
    distanceAB = '30 m',
    angleA = 45,
    angleB = 75,
    objectType = 'lighthouse', // 'lighthouse' | 'building' | 'tower' | 'flagpole'
    bgType = 'sea-sky', // 'sea-sky' | 'land-sky' | 'simple'
    labelA = 'A',
    labelB = 'B',
    labelC = 'C',
    labelH = 'H',
    labelHeight = 'h = ?',
    strokeColor = '#1d4ed8',
    dimColor = '#dc2626'
  } = params;

  const aDeg = Number(angleA) || 45;
  const bDeg = Number(angleB) || 75;

  const aRad = (aDeg * Math.PI) / 180;
  const bRad = (bDeg * Math.PI) / 180;

  // Tọa độ rộng mở cho hình to đẹp (xA = 1.5, xB = 6.0)
  const xA = 1.5;
  const xB = 6.0;

  const tanA = Math.tan(aRad);
  const tanB = Math.tan(bRad);

  let xH = (xB * tanB - xA * tanA) / (tanB - tanA);
  if (!isFinite(xH) || xH <= xB) xH = 8.5;

  let h = (xH - xA) * tanA;
  if (!isFinite(h) || h <= 0) h = 5.5;

  // Scale vừa đẹp trong canvas (tối đa 5.2 đơn vị)
  const maxH = 5.2;
  let scaleRatio = 1.0;
  if (h > maxH) {
    scaleRatio = maxH / h;
  }

  const scaledH = Number((h * scaleRatio).toFixed(2));
  const scaledXH = Number(((xH - xA) * scaleRatio + xA).toFixed(2));
  const xC = scaledXH;
  const yC = scaledH;
  const rightBound = Math.max(11.5, scaledXH + 2.5);

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

`;

  // 1. Vẽ bối cảnh (Background) rộng 12.5 đơn vị
  if (bgType === 'sea-sky') {
    code += `  // Bối cảnh: Bờ biển & Bầu trời\n`;
    code += `  rect((-1.5, -1.4), (${rightBound}, 0), fill: rgb("#eab308").lighten(70%), stroke: none)\n`;
    code += `  rect((-1.5, 0), (${rightBound}, ${yC + 1.8}), fill: rgb("#e0f2fe"), stroke: none)\n`;
    code += `  line((-1.5, 0), (${rightBound}, 0), stroke: 2pt + black)\n\n`;
  } else if (bgType === 'land-sky') {
    code += `  // Bối cảnh: Mặt đất & Bầu trời\n`;
    code += `  rect((-1.5, -1.4), (${rightBound}, 0), fill: rgb("#d97706").lighten(65%), stroke: none)\n`;
    code += `  rect((-1.5, 0), (${rightBound}, ${yC + 1.8}), fill: rgb("#f0f9ff"), stroke: none)\n`;
    code += `  line((-1.5, 0), (${rightBound}, 0), stroke: 2pt + black)\n\n`;
  } else {
    code += `  // Bối cảnh đơn giản: Đường mặt đất\n`;
    code += `  line((-1.5, 0), (${rightBound}, 0), stroke: 2pt + black)\n\n`;
  }

  // 2. Vẽ vật thể thực tế (Object at H) - kích thước lớn
  if (objectType === 'lighthouse') {
    const objWBase = 1.2;
    const objWTop = 0.7;
    const bodyH = Math.max(0.8, yC - 0.8);

    code += `  // Ngọn Hải Đăng (Lighthouse)\n`;
    code += `  line((${scaledXH - objWBase/2}, 0), (${scaledXH + objWBase/2}, 0), (${scaledXH + objWTop/2}, ${bodyH.toFixed(2)}), (${scaledXH - objWTop/2}, ${bodyH.toFixed(2)}), close: true, fill: rgb("#ffffff"), stroke: 1.2pt + black)\n`;
    
    // Các sọc màu đỏ
    const stripe1H = bodyH * 0.25;
    const stripe2H = bodyH * 0.5;
    const stripe3H = bodyH * 0.75;

    code += `  line((${scaledXH - objWBase/2}, 0), (${scaledXH + objWBase/2}, 0), (${scaledXH + (objWBase - (objWBase-objWTop)*0.25)/2}, ${stripe1H.toFixed(2)}), (${scaledXH - (objWBase - (objWBase-objWTop)*0.25)/2}, ${stripe1H.toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 0.8pt + black)\n`;
    code += `  line((${scaledXH - (objWBase - (objWBase-objWTop)*0.5)/2}, ${stripe2H.toFixed(2)}), (${scaledXH + (objWBase - (objWBase-objWTop)*0.5)/2}, ${stripe2H.toFixed(2)}), (${scaledXH + (objWBase - (objWBase-objWTop)*0.75)/2}, ${stripe3H.toFixed(2)}), (${scaledXH - (objWBase - (objWBase-objWTop)*0.75)/2}, ${stripe3H.toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 0.8pt + black)\n`;

    // Phòng kính ngọn đèn (Lantern room)
    code += `  rect((${scaledXH - 0.32}, ${bodyH.toFixed(2)}), (${scaledXH + 0.32}, ${yC.toFixed(2)}), fill: rgb("#fde047"), stroke: 1.2pt + black)\n`;
    // Mái nón màu đỏ
    code += `  line((${scaledXH - 0.4}, ${yC.toFixed(2)}), (${scaledXH + 0.4}, ${yC.toFixed(2)}), (${scaledXH}, ${(yC + 0.7).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 1.2pt + black)\n\n`;

  } else if (objectType === 'building') {
    code += `  // Tòa nhà cao tầng (Building)\n`;
    code += `  rect((${scaledXH - 0.8}, 0), (${scaledXH + 0.8}, ${yC.toFixed(2)}), fill: rgb("#94a3b8"), stroke: 1.5pt + black)\n`;
    for (let wy = 0.6; wy < yC - 0.6; wy += 1.0) {
      code += `  rect((${scaledXH - 0.55}, ${wy.toFixed(2)}), (${scaledXH - 0.15}, ${(wy + 0.5).toFixed(2)}), fill: rgb("#e2e8f0"), stroke: 0.8pt + black)\n`;
      code += `  rect((${scaledXH + 0.15}, ${wy.toFixed(2)}), (${scaledXH + 0.55}, ${(wy + 0.4).toFixed(2)}), fill: rgb("#e2e8f0"), stroke: 0.8pt + black)\n`;
    }
    code += `\n`;

  } else if (objectType === 'tower') {
    code += `  // Tháp truyền hình / Tháp sắt (Tower)\n`;
    code += `  line((${scaledXH - 0.9}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 2pt + black)\n`;
    code += `  line((${scaledXH + 0.9}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 2pt + black)\n`;
    code += `  line((${scaledXH}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 1.2pt + black)\n`;
    for (let ty = 0.9; ty < yC; ty += 0.9) {
      code += `  line((${scaledXH - 0.9 * (1 - ty/yC)}, ${ty.toFixed(2)}), (${scaledXH + 0.9 * (1 - ty/yC)}, ${ty.toFixed(2)}), stroke: 1pt + black)\n`;
    }
    code += `\n`;
  } else {
    code += `  // Cột cờ (Flagpole)\n`;
    code += `  line((${scaledXH}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 2.5pt + black)\n`;
    code += `  line((${scaledXH}, ${yC.toFixed(2)}), (${scaledXH - 1.2}, ${(yC - 0.4).toFixed(2)}), (${scaledXH}, ${(yC - 0.8).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: none)\n\n`;
  }

  // 3. Đường nét đứt biểu diễn chiều cao h (chữ to 14pt)
  code += `  // Đường cao h (nét đứt đỏ)\n`;
  code += `  line((${scaledXH}, 0), (${xC}, ${yC}), stroke: (dash: "dashed", paint: rgb("${dimColor}"), thickness: 2pt))\n`;
  code += `  content((${scaledXH + 0.65}, ${(yC / 2).toFixed(2)}), text(14pt, fill: rgb("${dimColor}"), weight: "bold", [$${labelHeight}$]))\n\n`;

  // 4. Ký hiệu góc vuông tại H
  code += `  // Góc vuông tại H\n`;
  code += `  line((${scaledXH - 0.35}, 0), (${scaledXH - 0.35}, 0.35), (${scaledXH}, 0.35), stroke: 1.2pt + black)\n\n`;

  // 5. Tia ngắm AC và BC (nét nổi bật 2pt)
  code += `  // Tia ngắm từ A và B tới đỉnh C\n`;
  code += `  line((${xA}, 0), (${xC}, ${yC}), stroke: 2pt + rgb("${strokeColor}"))\n`;
  code += `  line((${xB}, 0), (${xC}, ${yC}), stroke: 2pt + rgb("${strokeColor}"))\n\n`;

  // 6. Cung chỉ góc nghiêng (chữ to 13pt)
  code += `  // Cung chỉ góc\n`;
  code += `  arc((${xA}, 0), start: 0deg, stop: ${aDeg}deg, radius: 1.2, stroke: 1.2pt + black)\n`;
  code += `  content((${xA + 1.8}, 0.5), text(13pt, weight: "bold", [$${aDeg}°$]))\n`;

  code += `  arc((${xB}, 0), start: 0deg, stop: ${bDeg}deg, radius: 0.95, stroke: 1.2pt + black)\n`;
  code += `  content((${xB + 1.35}, 0.5), text(13pt, weight: "bold", [$${bDeg}°$]))\n\n`;

  // 7. Mũi tên đo khoảng cách AB (chữ to 14pt)
  code += `  // Mũi tên khoảng cách AB = ${distanceAB}\n`;
  code += `  line((${xA}, -0.3), (${xB}, -0.3), stroke: 1.8pt + rgb("${dimColor}"), mark: (start: ">", end: ">"))\n`;
  code += `  content((${((xA + xB) / 2).toFixed(2)}, -0.65), text(14pt, fill: rgb("${dimColor}"), weight: "bold", [$${distanceAB}$]))\n\n`;

  // 8. Đỉnh & Nhãn điểm (chữ to 14pt)
  code += `  // Nhãn các điểm A, B, C, H\n`;
  code += `  circle((${xA}, 0), radius: 0.1, fill: black)\n`;
  code += `  circle((${xB}, 0), radius: 0.1, fill: black)\n`;
  code += `  circle((${scaledXH}, 0), radius: 0.1, fill: black)\n`;
  code += `  circle((${xC}, ${yC}), radius: 0.1, fill: black)\n\n`;

  code += `  content((${xA}, -0.65), text(14pt, weight: "bold", [$${labelA}$]))\n`;
  code += `  content((${xB}, -0.65), text(14pt, weight: "bold", [$${labelB}$]))\n`;
  code += `  content((${scaledXH}, -0.65), text(14pt, weight: "bold", [$${labelH}$]))\n`;
  code += `  content((${xC}, ${yC + 0.45}), text(14pt, weight: "bold", [$${labelC}$]))\n`;

  code += `})\n`;

  return code;
}

// 2. Chiều cao cây xanh / Cột cờ (Bóng râm & Góc mặt trời)
export function generateTreeShadow(params = {}) {
  const {
    shadowLength = '12 m',
    angleSun = 60,
    objectType = 'tree', // 'tree' | 'flagpole'
    labelA = 'A',
    labelB = 'B',
    labelC = 'C',
    labelHeight = 'h = ?',
    strokeColor = '#16a34a',
    dimColor = '#dc2626'
  } = params;

  const sunDeg = Number(angleSun) || 60;
  const sunRad = (sunDeg * Math.PI) / 180;
  const tanSun = Math.tan(sunRad);

  const xA = 1.5;
  const xB = 7.0;
  const shadowSpan = xB - xA; // 5.5 units

  let h = shadowSpan * tanSun;
  if (!isFinite(h) || h <= 0) h = 5.2;
  if (h > 5.5) h = 5.5;

  const xC = xB;
  const yC = h;

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

  // Bối cảnh: Bãi cỏ & Mặt trời (Kích thước rộng 11.5x7.0 units)
  rect((-1.5, -1.2), (10.0, 0), fill: rgb("#dcfce7"), stroke: none)
  rect((-1.5, 0), (10.0, ${yC + 1.8}), fill: rgb("#f0f9ff"), stroke: none)
  line((-1.5, 0), (10.0, 0), stroke: 2pt + black)

  // Mặt trời phía trên góc trái (tia nắng)
  circle((0.2, ${yC + 1.2}), radius: 0.55, fill: rgb("#facc15"), stroke: 1.2pt + rgb("#eab308"))
  line((0.2, ${yC + 1.2}), (${xC}, ${yC}), stroke: (dash: "dotted", paint: rgb("#eab308"), thickness: 2pt))

  // Cây xanh ở điểm B (Kích thước to đẹp)
`;

  if (objectType === 'tree') {
    code += `  // Thân cây lớn\n`;
    code += `  rect((${xB - 0.35}, 0), (${xB + 0.35}, ${(yC * 0.4).toFixed(2)}), fill: rgb("#78350f"), stroke: 1pt + black)\n`;
    code += `  // Tán cây lá xanh lớn\n`;
    code += `  circle((${xB}, ${(yC * 0.72).toFixed(2)}), radius: ${(yC * 0.38).toFixed(2)}, fill: rgb("${strokeColor}"), stroke: 1.5pt + black)\n`;
  } else {
    code += `  // Cột cờ lớn\n`;
    code += `  line((${xB}, 0), (${xB}, ${yC.toFixed(2)}), stroke: 2.5pt + black)\n`;
    code += `  line((${xB}, ${yC.toFixed(2)}), (${xB - 1.2}, ${(yC - 0.35).toFixed(2)}), (${xB}, ${(yC - 0.7).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: none)\n`;
  }

  code += `
  // Chiều cao h (nét đứt đỏ, chữ to 14pt)
  line((${xB}, 0), (${xC}, ${yC.toFixed(2)}), stroke: (dash: "dashed", paint: rgb("${dimColor}"), thickness: 2pt))
  content((${xB + 0.8}, ${(yC / 2).toFixed(2)}), text(14pt, fill: rgb("${dimColor}"), weight: "bold", [$${labelHeight}$]))

  // Tia nắng tạo góc nâng (Tia AC)
  line((${xA}, 0), (${xC}, ${yC.toFixed(2)}), stroke: 2pt + rgb("#0284c7"))

  // Cung chỉ góc mặt trời tại A (chữ to 13pt)
  arc((${xA}, 0), start: 0deg, stop: ${sunDeg}deg, radius: 1.1, stroke: 1.2pt + black)
  content((${xA + 1.6}, 0.5), text(13pt, weight: "bold", [$${sunDeg}°$]))

  // Mũi tên chỉ bóng râm AB (chữ to 14pt)
  line((${xA}, -0.3), (${xB}, -0.3), stroke: 1.8pt + rgb("${dimColor}"), mark: (start: ">", end: ">"))
  content(${((xA + xB) / 2).toFixed(2)}, -0.65, text(14pt, fill: rgb("${dimColor}"), weight: "bold", [$${shadowLength}$]))

  // Góc vuông tại B
  line((${xB - 0.35}, 0), (${xB - 0.35}, 0.35), (${xB}, 0.35), stroke: 1.2pt + black)

  // Nhãn các điểm (chữ to 14pt)
  circle((${xA}, 0), radius: 0.1, fill: black)
  circle((${xB}, 0), radius: 0.1, fill: black)
  circle((${xC}, ${yC.toFixed(2)}), radius: 0.1, fill: black)

  content((${xA}, -0.65), text(14pt, weight: "bold", [$${labelA}$]))
  content((${xB}, -0.65), text(14pt, weight: "bold", [$${labelB}$]))
  content((${xC}, ${(yC + 0.45).toFixed(2)}), text(14pt, weight: "bold", [$${labelC}$]))
})
`;

  return code;
}

// 3. Hai con tàu trên biển quan sát từ đài ngắm
export function generateTwoShipsDistance(params = {}) {
  const {
    towerHeight = '50 m',
    angleDepressionA = 30,
    angleDepressionB = 45,
    labelA = 'Tàu A',
    labelB = 'Tàu B',
    labelC = 'Đỉnh tháp C',
    labelH = 'Chân tháp H',
    labelDist = 'd = ?'
  } = params;

  const xB = 5.5;
  const xA = 9.0;

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

  // Bối cảnh: Biển xanh & Tháp quan sát (Kích thước rộng 11.5x6.5 units)
  rect((-1.0, -1.4), (10.5, 0), fill: rgb("#0284c7").lighten(60%), stroke: none)
  rect((-1.0, 0), (10.5, 5.5), fill: rgb("#f0f9ff"), stroke: none)
  line((-1.0, 0), (10.5, 0), stroke: 2pt + black)

  // Ngọn hải đăng / Ngọn tháp ở H(1.0, 0)
  rect((0.5, 0), (1.5, 4.8), fill: rgb("#475569"), stroke: 1.2pt + black)
  circle((1.0, 4.8), radius: 0.1, fill: black)
  content((1.0, -0.65), text(14pt, weight: "bold", [$${labelH}$]))
  content((1.0, 5.25), text(14pt, weight: "bold", [$${labelC}$]))

  // Chiều cao tháp (chữ to 14pt)
  content((0.2, 2.4), text(14pt, fill: rgb("#dc2626"), weight: "bold", [$${towerHeight}$]))

  // Đường nằm ngang từ C (phương nằm ngang để tính góc hạ)
  line((1.0, 4.8), (8.5, 4.8), stroke: (dash: "dashed", paint: gray, thickness: 1.2pt))

  // Tia nhìn từ C tới Tàu B và Tàu A
  line((1.0, 4.8), (${xB}, 0), stroke: 2pt + rgb("#2563eb"))
  line((1.0, 4.8), (${xA}, 0), stroke: 2pt + rgb("#059669"))

  // Vẽ 2 chiếc thuyền to đẹp trên biển
  line((${xB - 0.6}, 0), (${xB + 0.6}, 0), (${xB + 0.4}, -0.35), (${xB - 0.4}, -0.35), close: true, fill: rgb("#b91c1c"), stroke: 1pt + black)
  line((${xB}, 0), (${xB}, 0.7), stroke: 1.5pt + black)

  line((${xA - 0.6}, 0), (${xA + 0.6}, 0), (${xA + 0.4}, -0.35), (${xA - 0.4}, -0.35), close: true, fill: rgb("#047857"), stroke: 1pt + black)
  line((${xA}, 0), (${xA}, 0.7), stroke: 1.5pt + black)

  // Mũi tên khoảng cách giữa 2 tàu (chữ to 14pt)
  line((${xB}, -0.7), (${xA}, -0.7), stroke: 1.8pt + rgb("#dc2626"), mark: (start: ">", end: ">"))
  content(${((xB + xA)/2).toFixed(2)}, -1.0, text(14pt, fill: rgb("#dc2626"), weight: "bold", [$${labelDist}$]))

  // Nhãn tàu (chữ to 14pt)
  content((${xB}, 1.05), text(14pt, weight: "bold", [$${labelB}$]))
  content((${xA}, 1.05), text(14pt, weight: "bold", [$${labelA}$]))

  // Cung chỉ góc hạ tại C (chữ to 13pt)
  arc((1.0, 4.8), start: 0deg, stop: -30deg, radius: 1.5, stroke: 1.2pt + black)
  content((3.0, 4.4), text(13pt, weight: "bold", [$${angleDepressionA}°$]))

  arc((1.0, 4.8), start: 0deg, stop: -45deg, radius: 1.0, stroke: 1.2pt + black)
  content((2.3, 3.9), text(13pt, weight: "bold", [$${angleDepressionB}°$]))
})
`;

  return code;
}

// Router chung cho generator bài toán thực tế
export function generateRealWorldGeometry(shapeId, params = {}) {
  switch (shapeId) {
    case 'lighthouse-elevation':
      return generateLighthouseElevation(params);
    case 'tree-shadow':
      return generateTreeShadow(params);
    case 'two-ships-distance':
      return generateTwoShipsDistance(params);
    default:
      return generateLighthouseElevation(params);
  }
}
