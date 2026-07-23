// Generator cho các bài toán thực tế (Real-world Geometry Problems)

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

  // Tọa độ tính toán chuẩn toán học
  const xA = 1.0;
  const xB = 4.0;

  const tanA = Math.tan(aRad);
  const tanB = Math.tan(bRad);

  let xH = (xB * tanB - xA * tanA) / (tanB - tanA);
  if (!isFinite(xH) || xH <= xB) xH = 5.2;

  let h = (xH - xA) * tanA;
  if (!isFinite(h) || h <= 0) h = 4.2;

  // Scale cho đẹp trong canvas
  const maxH = 4.5;
  let scaleRatio = 1.0;
  if (h > maxH) {
    scaleRatio = maxH / h;
  }

  const scaledH = Number((h * scaleRatio).toFixed(2));
  const scaledXH = Number(((xH - xA) * scaleRatio + xA).toFixed(2));
  const xC = scaledXH;
  const yC = scaledH;

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

`;

  // 1. Vẽ bối cảnh (Background)
  if (bgType === 'sea-sky') {
    code += `  // Bối cảnh: Bờ biển & Bầu trời\n`;
    code += `  rect((-1, -1.2), (${scaledXH + 2.5}, 0), fill: rgb("#eab308").lighten(70%), stroke: none)\n`;
    code += `  rect((-1, 0), (${scaledXH + 2.5}, ${yC + 1.5}), fill: rgb("#e0f2fe"), stroke: none)\n`;
    code += `  line((-1, 0), (${scaledXH + 2.5}, 0), stroke: 1.5pt + black)\n\n`;
  } else if (bgType === 'land-sky') {
    code += `  // Bối cảnh: Mặt đất & Bầu trời\n`;
    code += `  rect((-1, -1.2), (${scaledXH + 2.5}, 0), fill: rgb("#d97706").lighten(65%), stroke: none)\n`;
    code += `  rect((-1, 0), (${scaledXH + 2.5}, ${yC + 1.5}), fill: rgb("#f0f9ff"), stroke: none)\n`;
    code += `  line((-1, 0), (${scaledXH + 2.5}, 0), stroke: 1.5pt + black)\n\n`;
  } else {
    code += `  // Bối cảnh đơn giản: Đường mặt đất\n`;
    code += `  line((-1, 0), (${scaledXH + 2.5}, 0), stroke: 1.5pt + black)\n\n`;
  }

  // 2. Vẽ vật thể thực tế (Object at H)
  if (objectType === 'lighthouse') {
    const objWBase = 0.8;
    const objWTop = 0.5;
    const bodyH = Math.max(0.5, yC - 0.6);

    code += `  // Ngọn Hải Đăng (Lighthouse)\n`;
    code += `  line((${scaledXH - objWBase/2}, 0), (${scaledXH + objWBase/2}, 0), (${scaledXH + objWTop/2}, ${bodyH.toFixed(2)}), (${scaledXH - objWTop/2}, ${bodyH.toFixed(2)}), close: true, fill: rgb("#ffffff"), stroke: 1pt + black)\n`;
    
    // Các sọc màu đỏ
    const stripe1H = bodyH * 0.25;
    const stripe2H = bodyH * 0.5;
    const stripe3H = bodyH * 0.75;

    code += `  line((${scaledXH - objWBase/2}, 0), (${scaledXH + objWBase/2}, 0), (${scaledXH + (objWBase - (objWBase-objWTop)*0.25)/2}, ${stripe1H.toFixed(2)}), (${scaledXH - (objWBase - (objWBase-objWTop)*0.25)/2}, ${stripe1H.toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 0.5pt + black)\n`;
    code += `  line((${scaledXH - (objWBase - (objWBase-objWTop)*0.5)/2}, ${stripe2H.toFixed(2)}), (${scaledXH + (objWBase - (objWBase-objWTop)*0.5)/2}, ${stripe2H.toFixed(2)}), (${scaledXH + (objWBase - (objWBase-objWTop)*0.75)/2}, ${stripe3H.toFixed(2)}), (${scaledXH - (objWBase - (objWBase-objWTop)*0.75)/2}, ${stripe3H.toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 0.5pt + black)\n`;

    // Phòng kính ngọn đèn (Lantern room)
    code += `  rect((${scaledXH - 0.22}, ${bodyH.toFixed(2)}), (${scaledXH + 0.22}, ${yC.toFixed(2)}), fill: rgb("#fde047"), stroke: 1pt + black)\n`;
    // Mái nón màu đỏ
    code += `  line((${scaledXH - 0.28}, ${yC.toFixed(2)}), (${scaledXH + 0.28}, ${yC.toFixed(2)}), (${scaledXH}, ${(yC + 0.5).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: 1pt + black)\n\n`;

  } else if (objectType === 'building') {
    code += `  // Tòa nhà cao tầng (Building)\n`;
    code += `  rect((${scaledXH - 0.5}, 0), (${scaledXH + 0.5}, ${yC.toFixed(2)}), fill: rgb("#94a3b8"), stroke: 1.2pt + black)\n`;
    for (let wy = 0.5; wy < yC - 0.5; wy += 0.8) {
      code += `  rect((${scaledXH - 0.35}, ${wy.toFixed(2)}), (${scaledXH - 0.1}, ${(wy + 0.4).toFixed(2)}), fill: rgb("#e2e8f0"), stroke: 0.5pt + black)\n`;
      code += `  rect((${scaledXH + 0.1}, ${wy.toFixed(2)}), (${scaledXH + 0.35}, ${(wy + 0.4).toFixed(2)}), fill: rgb("#e2e8f0"), stroke: 0.5pt + black)\n`;
    }
    code += `\n`;

  } else if (objectType === 'tower') {
    code += `  // Tháp truyền hình / Tháp sắt (Tower)\n`;
    code += `  line((${scaledXH - 0.6}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 1.5pt + black)\n`;
    code += `  line((${scaledXH + 0.6}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 1.5pt + black)\n`;
    code += `  line((${scaledXH}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 1pt + black)\n`;
    for (let ty = 0.8; ty < yC; ty += 0.8) {
      code += `  line((${scaledXH - 0.6 * (1 - ty/yC)}, ${ty.toFixed(2)}), (${scaledXH + 0.6 * (1 - ty/yC)}, ${ty.toFixed(2)}), stroke: 0.8pt + black)\n`;
    }
    code += `\n`;
  } else {
    code += `  // Cột cờ (Flagpole)\n`;
    code += `  line((${scaledXH}, 0), (${scaledXH}, ${yC.toFixed(2)}), stroke: 2pt + black)\n`;
    code += `  line((${scaledXH}, ${yC.toFixed(2)}), (${scaledXH - 0.8}, ${(yC - 0.25).toFixed(2)}), (${scaledXH}, ${(yC - 0.5).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: none)\n\n`;
  }

  // 3. Đường nét đứt biểu diễn chiều cao h
  code += `  // Đường cao h (nét đứt đỏ)\n`;
  code += `  line((${scaledXH}, 0), (${xC}, ${yC}), stroke: (dash: "dashed", paint: rgb("${dimColor}"), thickness: 1.5pt))\n`;
  code += `  content((${scaledXH + 0.45}, ${(yC / 2).toFixed(2)}), text(fill: rgb("${dimColor}"), weight: "bold", [$${labelHeight}$]))\n\n`;

  // 4. Ký hiệu góc vuông tại H
  code += `  // Góc vuông tại H\n`;
  code += `  line((${scaledXH - 0.25}, 0), (${scaledXH - 0.25}, 0.25), (${scaledXH}, 0.25), stroke: 1pt + black)\n\n`;

  // 5. Tia ngắm AC và BC (nét đường thẳng toán học)
  code += `  // Tia ngắm từ A và B tới đỉnh C\n`;
  code += `  line((${xA}, 0), (${xC}, ${yC}), stroke: 1.5pt + rgb("${strokeColor}"))\n`;
  code += `  line((${xB}, 0), (${xC}, ${yC}), stroke: 1.5pt + rgb("${strokeColor}"))\n\n`;

  // 6. Cung chỉ góc nghiêng
  code += `  // Cung chỉ góc\n`;
  code += `  arc((${xA}, 0), start: 0deg, stop: ${aDeg}deg, radius: 0.85, stroke: 1pt + black)\n`;
  code += `  content((${xA + 1.25}, 0.35), [$${aDeg}°$])\n`;

  code += `  arc((${xB}, 0), start: 0deg, stop: ${bDeg}deg, radius: 0.65, stroke: 1pt + black)\n`;
  code += `  content((${xB + 0.95}, 0.35), [$${bDeg}°$])\n\n`;

  // 7. Mũi tên đo khoảng cách AB
  code += `  // Mũi tên khoảng cách AB = ${distanceAB}\n`;
  code += `  line((${xA}, -0.2), (${xB}, -0.2), stroke: 1.2pt + rgb("${dimColor}"), mark: (start: ">", end: ">"))\n`;
  code += `  content((${((xA + xB) / 2).toFixed(2)}, -0.45), text(fill: rgb("${dimColor}"), weight: "bold", [$${distanceAB}$]))\n\n`;

  // 8. Đỉnh & Nhãn điểm
  code += `  // Nhãn các điểm A, B, C, H\n`;
  code += `  circle((${xA}, 0), radius: 0.07, fill: black)\n`;
  code += `  circle((${xB}, 0), radius: 0.07, fill: black)\n`;
  code += `  circle((${scaledXH}, 0), radius: 0.07, fill: black)\n`;
  code += `  circle((${xC}, ${yC}), radius: 0.07, fill: black)\n\n`;

  code += `  content((${xA}, -0.45), [$${labelA}$])\n`;
  code += `  content((${xB}, -0.45), [$${labelB}$])\n`;
  code += `  content((${scaledXH}, -0.45), [$${labelH}$])\n`;
  code += `  content((${xC}, ${yC + 0.35}), [$${labelC}$])\n`;

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

  const xA = 1.0;
  const xB = 4.5;
  const shadowSpan = xB - xA; // 3.5

  let h = shadowSpan * tanSun;
  if (!isFinite(h) || h <= 0) h = 4.0;
  if (h > 4.5) h = 4.5;

  const xC = xB;
  const yC = h;

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

  // Bối cảnh: Bãi cỏ & Mặt trời
  rect((-1, -1.0), (6.0, 0), fill: rgb("#dcfce7"), stroke: none)
  rect((-1, 0), (6.0, ${yC + 1.5}), fill: rgb("#f0f9ff"), stroke: none)
  line((-1, 0), (6.0, 0), stroke: 1.5pt + black)

  // Mặt trời phía trên góc trái (tia nắng)
  circle((0.2, ${yC + 1.0}), radius: 0.4, fill: rgb("#facc15"), stroke: 1pt + rgb("#eab308"))
  line((0.2, ${yC + 1.0}), (${xC}, ${yC}), stroke: (dash: "dotted", paint: rgb("#eab308"), thickness: 1.5pt))

  // Cây xanh ở điểm B
`;

  if (objectType === 'tree') {
    code += `  // Thân cây\n`;
    code += `  rect((${xB - 0.2}, 0), (${xB + 0.2}, ${(yC * 0.4).toFixed(2)}), fill: rgb("#78350f"), stroke: 0.8pt + black)\n`;
    code += `  // Tán cây lá xanh\n`;
    code += `  circle((${xB}, ${(yC * 0.7).toFixed(2)}), radius: ${(yC * 0.35).toFixed(2)}, fill: rgb("${strokeColor}"), stroke: 1pt + black)\n`;
  } else {
    code += `  // Cột cờ\n`;
    code += `  line((${xB}, 0), (${xB}, ${yC.toFixed(2)}), stroke: 2pt + black)\n`;
    code += `  line((${xB}, ${yC.toFixed(2)}), (${xB - 0.8}, ${(yC - 0.25).toFixed(2)}), (${xB}, ${(yC - 0.5).toFixed(2)}), close: true, fill: rgb("#dc2626"), stroke: none)\n`;
  }

  code += `
  // Chiều cao h (nét đứt đỏ)
  line((${xB}, 0), (${xC}, ${yC.toFixed(2)}), stroke: (dash: "dashed", paint: rgb("${dimColor}"), thickness: 1.5pt))
  content((${xB + 0.6}, ${(yC / 2).toFixed(2)}), text(fill: rgb("${dimColor}"), weight: "bold", [$${labelHeight}$]))

  // Tia nắng tạo góc nâng (Tia AC)
  line((${xA}, 0), (${xC}, ${yC.toFixed(2)}), stroke: 1.5pt + rgb("#0284c7"))

  // Cung chỉ góc mặt trời tại A
  arc((${xA}, 0), start: 0deg, stop: ${sunDeg}deg, radius: 0.8, stroke: 1pt + black)
  content((${xA + 1.2}, 0.35), [$${sunDeg}°$])

  // Mũi tên chỉ bóng râm AB
  line((${xA}, -0.2), (${xB}, -0.2), stroke: 1.2pt + rgb("${dimColor}"), mark: (start: ">", end: ">"))
  content((${((xA + xB) / 2).toFixed(2)}, -0.45), text(fill: rgb("${dimColor}"), weight: "bold", [$${shadowLength}$]))

  // Góc vuông tại B
  line((${xB - 0.25}, 0), (${xB - 0.25}, 0.25), (${xB}, 0.25), stroke: 1pt + black)

  // Nhãn các điểm
  circle((${xA}, 0), radius: 0.07, fill: black)
  circle((${xB}, 0), radius: 0.07, fill: black)
  circle((${xC}, ${yC.toFixed(2)}), radius: 0.07, fill: black)

  content((${xA}, -0.45), [$${labelA}$])
  content((${xB}, -0.45), [$${labelB}$])
  content((${xC}, ${(yC + 0.35).toFixed(2)}), [$${labelC}$])
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

  let code = `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

  // Bối cảnh: Biển xanh & Tháp quan sát
  rect((-0.5, -1.0), (7.0, 0), fill: rgb("#0284c7").lighten(60%), stroke: none)
  rect((-0.5, 0), (7.0, 4.8), fill: rgb("#f0f9ff"), stroke: none)
  line((-0.5, 0), (7.0, 0), stroke: 1.5pt + black)

  // Ngọn hải đăng / Ngọn tháp ở H(0.5, 0)
  rect((0.2, 0), (0.8, 4.0), fill: rgb("#475569"), stroke: 1pt + black)
  circle((0.5, 4.0), radius: 0.07, fill: black)
  content((0.5, -0.45), [$${labelH}$])
  content((0.5, 4.35), [$${labelC}$])

  // Chiều cao tháp
  content((0.0, 2.0), text(fill: rgb("#dc2626"), weight: "bold", [$${towerHeight}$]))

  // Đường nằm ngang từ C (phương nằm ngang để tính góc hạ)
  line((0.5, 4.0), (5.5, 4.0), stroke: (dash: "dashed", paint: gray, thickness: 1pt))

  // Hai con tàu A và B trên biển
  const xB = 4.0;
  const xA = 6.2;

  // Tia nhìn từ C tới Tàu B và Tàu A
  line((0.5, 4.0), (${xB}, 0), stroke: 1.5pt + rgb("#2563eb"))
  line((0.5, 4.0), (${xA}, 0), stroke: 1.5pt + rgb("#059669"))

  // Vẽ 2 hình chiếc thuyền đơn giản
  line((${xB - 0.4}, 0), (${xB + 0.4}, 0), (${xB + 0.25}, -0.25), (${xB - 0.25}, -0.25), close: true, fill: rgb("#b91c1c"), stroke: 0.8pt + black)
  line((${xB}, 0), (${xB}, 0.5), stroke: 1pt + black)

  line((${xA - 0.4}, 0), (${xA + 0.4}, 0), (${xA + 0.25}, -0.25), (${xA - 0.25}, -0.25), close: true, fill: rgb("#047857"), stroke: 0.8pt + black)
  line((${xA}, 0), (${xA}, 0.5), stroke: 1pt + black)

  // Mũi tên khoảng cách giữa 2 tàu
  line((${xB}, -0.5), (${xA}, -0.5), stroke: 1.2pt + rgb("#dc2626"), mark: (start: ">", end: ">"))
  content((${((xB + xA)/2).toFixed(2)}, -0.75), text(fill: rgb("#dc2626"), weight: "bold", [$${labelDist}$]))

  // Nhãn tàu
  content((${xB}, 0.75), [$${labelB}$])
  content((${xA}, 0.75), [$${labelA}$])

  // Cung chỉ góc hạ tại C
  arc((0.5, 4.0), start: 0deg, stop: -30deg, radius: 1.2, stroke: 1pt + black)
  content((2.0, 3.65), [$${angleDepressionA}°$])

  arc((0.5, 4.0), start: 0deg, stop: -45deg, radius: 0.8, stroke: 1pt + black)
  content((1.5, 3.25), [$${angleDepressionB}°$])
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
