// Template Library cho ứng dụng vẽ toán
// Mỗi template bao gồm mã Typst/CeTZ hoàn chỉnh

export const TEMPLATE_LIBRARY = {
  // ==================== HÌNH HỌC PHẲNG ====================
  'plane-geometry': {
    'triangles': [
      {
        id: 'tri-equilateral',
        name: 'Tam giác đều',
        category: 'triangles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let side = 4
  let height = (side * calc.sqrt(3)) / 2

  let A = (side/2, height)
  let B = (0, 0)
  let C = (side, 0)

  // Vẽ tam giác đều
  line(A, B, C, close: true, stroke: 1.5pt + black)

  // Nhãn đỉnh
  content(A, [A], anchor: "south")
  content(B, [B], anchor: "north-east")
  content(C, [C], anchor: "north-west")
})`
      },
      {
        id: 'tri-right',
        name: 'Tam giác vuông',
        category: 'triangles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let a = 3
  let b = 4
  let c = calc.sqrt(a*a + b*b)

  let A = (0, 0)
  let B = (a, 0)
  let C = (0, b)

  // Vẽ tam giác vuông
  line(A, B, C, close: true, stroke: 1.5pt + black)

  // Ký hiệu góc vuông
  line((0.3, 0), (0.3, 0.3), (0, 0.3), stroke: 0.5pt + gray)

  // Nhãn
  content(A, [A], anchor: "south-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")

  // Độ dài cạnh
  content((a/2, -0.3), [a], anchor: "north")
  content((-0.3, b/2), [b], anchor: "east")
  content((a/2, b/2), [c], anchor: "south-east")
})`
      },
      {
        id: 'tri-with-medians',
        name: 'Tam giác với đường trung tuyến',
        category: 'triangles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let A = (1, 4)
  let B = (-1, 0)
  let C = (4, 0)
  let Ma = ((B.x + C.x)/2, (B.y + C.y)/2)
  let Mb = ((A.x + C.x)/2, (A.y + C.y)/2)
  let Mc = ((A.x + B.x)/2, (A.y + B.y)/2)
  let G = ((A.x + B.x + C.x)/3, (A.y + B.y + C.y)/3)

  // Vẽ tam giác
  line(A, B, C, close: true, stroke: 1.5pt + black)

  // Đường trung tuyến
  line(A, Ma, stroke: 1pt + blue, dash: "dashed")
  line(B, Mb, stroke: 1pt + green, dash: "dashed")
  line(C, Mc, stroke: 1pt + red, dash: "dashed")

  // Trọng tâm
  circle(G, radius: 0.08, fill: orange)
  content(G, [G], anchor: "north-west")

  // Nhãn
  content(A, [A], anchor: "south")
  content(B, [B], anchor: "north-east")
  content(C, [C], anchor: "north-west")
  content(Ma, [M_a], anchor: "south")
  content(Mb, [M_b], anchor: "west")
  content(Mc, [M_c], anchor: "south-east")
})`
      },
      {
        id: 'tri-with-altitudes',
        name: 'Tam giác với đường cao',
        category: 'triangles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let A = (0, 4)
  let B = (-2, 0)
  let C = (3, 0)

  // Vẽ tam giác
  line(A, B, C, close: true, stroke: 1.5pt + black)

  // Đường cao từ A
  let Ha = (0, 0)
  line(A, Ha, stroke: 1pt + red, dash: "dashed")

  // Ký hiệu vuông góc
  line((0.2, 0), (0.2, 0.2), (0, 0.2), stroke: 0.5pt + red)

  // Nhãn
  content(A, [A], anchor: "south")
  content(B, [B], anchor: "north-east")
  content(C, [C], anchor: "north-west")
  content(Ha, [H_a], anchor: "south-east")
})`
      }
    ],

    'quadrilaterals': [
      {
        id: 'square-diagonals',
        name: 'Hình vuông với đường chéo',
        category: 'quadrilaterals',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let side = 4

  // Vẽ hình vuông
  rect((0, 0), (side, side), stroke: 1.5pt + black)

  // Đường chéo
  line((0, 0), (side, side), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))
  line((0, side), (side, 0), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Giao điểm đường chéo
  let O = (side/2, side/2)
  circle(O, radius: 0.05, fill: red)
  content(O, [O], anchor: "south-east")

  // Nhãn
  content((0, 0), [A], anchor: "north-east")
  content((side, 0), [B], anchor: "north-west")
  content((side, side), [C], anchor: "south-west")
  content((0, side), [D], anchor: "south-east")

  // Ký hiệu góc vuông
  line((0.3, 0), (0.3, 0.3), (0, 0.3), stroke: 0.5pt + gray)
})`
      },
      {
        id: 'parallelogram',
        name: 'Hình bình hành',
        category: 'quadrilaterals',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let A = (0, 0)
  let B = (4, 0)
  let C = (5, 3)
  let D = (1, 3)

  // Vẽ hình bình hành
  line(A, B, C, D, close: true, stroke: 1.5pt + black)

  // Đường chéo
  line(A, C, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))
  line(B, D, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Nhãn
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
})`
      },
      {
        id: 'trapezoid',
        name: 'Hình thang',
        category: 'quadrilaterals',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let A = (0, 0)
  let B = (5, 0)
  let C = (4, 3)
  let D = (1, 3)

  // Vẽ hình thang (AB // DC)
  line(A, B, C, D, close: true, stroke: 1.5pt + black)

  // Nhãn
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")

  // Ký hiệu song song
  line((2, 0.2), (3, 0.2), stroke: 0.5pt + red)
  line((2, 3.2), (3, 3.2), stroke: 0.5pt + red)
})`
      }
    ],

    'circles': [
      {
        id: 'circle-inscribed-triangle',
        name: 'Tam giác nội tiếp đường tròn',
        category: 'circles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let O = (0, 0)
  let R = 3

  // Vẽ đường tròn
  circle(O, radius: R, stroke: 1.5pt + gray)

  // Vẽ tam giác đều nội tiếp
  let A = (0, R)
  let B = (-R * calc.sqrt(3)/2, -R/2)
  let C = (R * calc.sqrt(3)/2, -R/2)

  line(A, B, C, close: true, stroke: 1.5pt + black)

  // Tâm
  circle(O, radius: 0.08, fill: black)
  content(O, [O], anchor: "north-east")

  // Nhãn
  content(A, [A], anchor: "south")
  content(B, [B], anchor: "east")
  content(C, [C], anchor: "west")
})`
      },
      {
        id: 'circle-tangent-point',
        name: 'Tiếp tuyến từ điểm ngoài',
        category: 'circles',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let O = (0, 0)
  let R = 2
  let M = (5, 0)
  let alpha = calc.acos(R/5)
  let A = (R*calc.cos(alpha), R*calc.sin(alpha))
  let B = (R*calc.cos(alpha), -R*calc.sin(alpha))

  // Vẽ đường tròn
  circle(O, radius: R, stroke: 1.5pt + black)

  // Tiếp tuyến
  line(M, A, stroke: 1pt + blue)
  line(M, B, stroke: 1pt + blue)

  // Bán kính
  line(O, A, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))
  line(O, B, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Đường nối tâm - điểm ngoài
  line(O, M, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Ký hiệu góc vuông
  content(O, [O], anchor: "north-east")
  content(M, [M], anchor: "west")
  content(A, [A], anchor: "south")
  content(B, [B], anchor: "north")
})`
      }
    ]
  },

  // ==================== HÌNH HỌC KHÔNG GIAN ====================
  'solid-geometry': {
    'pyramids': [
      {
        id: 'pyramid-triangular',
        name: 'Hình chóp tam giác đều',
        category: 'pyramids',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let S = (2, 5)
  let A = (0, 0)
  let B = (3, -1)
  let C = (4, 1)
  let H = (7/3, 0)

  // Cạnh khuất
  line(A, C, stroke: 1.5pt + black, dash: "dashed")

  // Đáy
  line(A, B, stroke: 1.5pt + black)
  line(B, C, stroke: 1.5pt + black)

  // Cạnh bên
  line(S, A, stroke: 1.5pt + black)
  line(S, B, stroke: 1.5pt + black)
  line(S, C, stroke: 1.5pt + black)

  // Đường cao
  line(S, H, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Nhãn
  content(S, [S], anchor: "south")
  content(A, [A], anchor: "east")
  content(B, [B], anchor: "north")
  content(C, [C], anchor: "west")
  content(H, [H], anchor: "north-east")
})`
      },
      {
        id: 'pyramid-square',
        name: 'Hình chóp tứ giác đều',
        category: 'pyramids',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let S = (2, 5)
  let A = (0, 0)
  let B = (3.5, 0)
  let C = (4, 1)
  let D = (0.5, 1)
  let H = ((A.x + B.x + C.x + D.x)/4, (A.y + B.y + C.y + D.y)/4)

  // Cạnh khuất
  line(A, D, stroke: 1.5pt + black, dash: "dashed")
  line(D, C, stroke: 1.5pt + black, dash: "dashed")

  // Đáy
  line(A, B, stroke: 1.5pt + black)
  line(B, C, stroke: 1.5pt + black)

  // Cạnh bên khuất
  line(S, D, stroke: 1.5pt + black, dash: "dashed")

  // Cạnh bên nhìn thấy
  line(S, A, stroke: 1.5pt + black)
  line(S, B, stroke: 1.5pt + black)
  line(S, C, stroke: 1.5pt + black)

  // Đường cao
  line(S, H, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Nhãn
  content(S, [S], anchor: "south")
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
  content(H, [H], anchor: "north")
})`
      }
    ],

    'prisms': [
      {
        id: 'prism-abc-midpoint',
        name: 'Lăng trụ ABC.A\'B\'C\' với trung điểm',
        category: 'prisms',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  // Tọa độ đáy dưới ABC
  let A = (0, 0)
  let B = (4, 0)
  let C = (2, 1.5)

  // Đáy trên A'B'C' (dịch lên trên)
  let h = 3
  let dx = 0.8
  let dy = 0.4
  let Ap = (A.x + dx, A.y + h + dy)
  let Bp = (B.x + dx, B.y + h + dy)
  let Cp = (C.x + dx, C.y + h + dy)

  // Trung điểm M của AB và N của A'B'
  let M = ((A.x + B.x)/2, (A.y + B.y)/2)
  let N = ((Ap.x + Bp.x)/2, (Ap.y + Bp.y)/2)

  // Cạnh khuất
  line(A, C, stroke: 1.5pt + black, dash: "dashed")
  line(A, Ap, stroke: 1.5pt + black, dash: "dashed")
  line(Ap, Cp, stroke: 1.5pt + black, dash: "dashed")

  // Đáy dưới (cạnh nhìn thấy)
  line(A, B, stroke: 1.5pt + black)
  line(B, C, stroke: 1.5pt + black)

  // Đáy trên
  line(Ap, Bp, stroke: 1.5pt + black)
  line(Bp, Cp, stroke: 1.5pt + black)

  // Cạnh bên nhìn thấy
  line(B, Bp, stroke: 1.5pt + black)
  line(C, Cp, stroke: 1.5pt + black)

  // Trung điểm M và N
  circle(M, radius: 0.07, fill: red)
  circle(N, radius: 0.07, fill: red)
  line(M, N, stroke: (paint: red, thickness: 1pt, dash: "dashed"))

  // Nhãn
  content(A, [A], anchor: "east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(Ap, [A'], anchor: "south-east")
  content(Bp, [B'], anchor: "south-west")
  content(Cp, [C'], anchor: "north")
  content(M, [M], anchor: "north")
  content(N, [N], anchor: "south")
})`
      },
      {
        id: 'box-space-diagonal',
        name: 'Hình hộp chữ nhật ABCD.A\'B\'C\'D\' - đường chéo không gian',
        category: 'prisms',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let l = 4   // chiều dài
  let w = 3   // chiều rộng (phối cảnh)
  let h = 2.5 // chiều cao
  let ox = w * 0.4
  let oy = w * 0.2

  // Mặt trước
  let A = (0, 0)
  let B = (l, 0)
  let C = (l, h)
  let D = (0, h)

  // Mặt sau
  let Ap = (ox, oy)
  let Bp = (l + ox, oy)
  let Cp = (l + ox, h + oy)
  let Dp = (ox, h + oy)

  // Mặt trước
  line(A, B, stroke: 1.5pt + black)
  line(B, C, stroke: 1.5pt + black)
  line(C, D, stroke: 1.5pt + black)
  line(D, A, stroke: 1.5pt + black)

  // Cạnh khuất
  line(A, Ap, stroke: 1.5pt + black, dash: "dashed")
  line(D, Dp, stroke: 1.5pt + black, dash: "dashed")
  line(Ap, Bp, stroke: 1.5pt + black, dash: "dashed")
  line(Ap, Dp, stroke: 1.5pt + black, dash: "dashed")

  // Cạnh nhìn thấy mặt sau
  line(B, Bp, stroke: 1.5pt + black)
  line(C, Cp, stroke: 1.5pt + black)
  line(Bp, Cp, stroke: 1.5pt + black)
  line(Cp, Dp, stroke: 1.5pt + black)

  // Đường chéo không gian AC'
  line(A, Cp, stroke: (paint: red, thickness: 1.2pt, dash: "dashed"))

  // Đường chéo đáy AC (phụ trợ)
  line(A, B, stroke: (paint: gray, thickness: 0.5pt, dash: "dotted"))

  // Nhãn
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
  content(Ap, [A'], anchor: "south-east")
  content(Bp, [B'], anchor: "south-west")
  content(Cp, [C'], anchor: "north-west")
  content(Dp, [D'], anchor: "north-east")
})`
      },
      {
        id: 'pyramid-with-cross-section',
        name: 'Hình chóp S.ABCD với thiết diện',
        category: 'prisms',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let S = (2, 5)
  let A = (0, 0)
  let B = (4, 0)
  let C = (4.5, 1.2)
  let D = (0.5, 1.2)

  // Trung điểm M của SA, N của SB, P của SC, Q của SD
  let M = ((S.x + A.x)/2, (S.y + A.y)/2)
  let N = ((S.x + B.x)/2, (S.y + B.y)/2)
  let P = ((S.x + C.x)/2, (S.y + C.y)/2)
  let Q = ((S.x + D.x)/2, (S.y + D.y)/2)

  // Cạnh khuất đáy
  line(A, D, stroke: 1.5pt + black, dash: "dashed")
  line(D, C, stroke: 1.5pt + black, dash: "dashed")

  // Cạnh bên khuất
  line(S, D, stroke: 1.5pt + black, dash: "dashed")

  // Đáy nhìn thấy
  line(A, B, stroke: 1.5pt + black)
  line(B, C, stroke: 1.5pt + black)

  // Cạnh bên nhìn thấy
  line(S, A, stroke: 1.5pt + black)
  line(S, B, stroke: 1.5pt + black)
  line(S, C, stroke: 1.5pt + black)

  // Thiết diện MNPQ (song song đáy, qua trung điểm)
  line(M, N, stroke: (paint: blue, thickness: 1.5pt))
  line(N, P, stroke: (paint: blue, thickness: 1.5pt))
  line(M, Q, stroke: (paint: blue, thickness: 1.5pt, dash: "dashed"))
  line(Q, P, stroke: (paint: blue, thickness: 1.5pt, dash: "dashed"))

  // Điểm trung điểm
  circle(M, radius: 0.07, fill: blue)
  circle(N, radius: 0.07, fill: blue)
  circle(P, radius: 0.07, fill: blue)
  circle(Q, radius: 0.07, fill: blue)

  // Nhãn
  content(S, [S], anchor: "south")
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
  content(M, [M], anchor: "east")
  content(N, [N], anchor: "west")
  content(P, [P], anchor: "west")
  content(Q, [Q], anchor: "east")
})`
      },
      {
        id: 'cube',
        name: 'Hình lập phương',
        category: 'prisms',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let a = 3
  let ox = 1
  let oy = 0.5

  // Mặt trước
  let A = (0, 0)
  let B = (a, 0)
  let C = (a, a)
  let D = (0, a)

  // Mặt sau
  let Ap = (ox, oy)
  let Bp = (a + ox, oy)
  let Cp = (a + ox, a + oy)
  let Dp = (ox, a + oy)

  // Mặt trước
  rect(A, (a, a), stroke: 1.5pt + black)

  // Cạnh nhìn thấy
  line(B, Bp, stroke: 1.5pt + black)
  line(C, Cp, stroke: 1.5pt + black)

  // Cạnh khuất
  line(A, Ap, stroke: 1.5pt + black, dash: "dashed")
  line(D, Dp, stroke: 1.5pt + black, dash: "dashed")
  line(Ap, Bp, stroke: 1.5pt + black, dash: "dashed")
  line(Bp, Cp, stroke: 1.5pt + black, dash: "dashed")
  line(Cp, Dp, stroke: 1.5pt + black, dash: "dashed")
  line(Dp, Ap, stroke: 1.5pt + black, dash: "dashed")

  // Nhãn
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
  content(Ap, [A'], anchor: "north-east")
  content(Bp, [B'], anchor: "north-west")
  content(Cp, [C'], anchor: "south-west")
  content(Dp, [D'], anchor: "south-east")
})`
      },
      {
        id: 'box',
        name: 'Hình hộp chữ nhật',
        category: 'prisms',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let l = 4
  let w = 3
  let h = 2
  let ox = 0.8
  let oy = 0.4

  // Mặt trước
  let A = (0, 0)
  let B = (l, 0)
  let C = (l, h)
  let D = (0, h)

  // Mặt sau
  let Ap = (ox, oy)
  let Bp = (l + ox, oy)
  let Cp = (l + ox, h + oy)
  let Dp = (ox, h + oy)

  // Mặt trước
  rect(A, (l, h), stroke: 1.5pt + black)

  // Cạnh nhìn thấy
  line(B, Bp, stroke: 1.5pt + black)
  line(C, Cp, stroke: 1.5pt + black)

  // Cạnh khuất
  line(A, Ap, stroke: 1.5pt + black, dash: "dashed")
  line(D, Dp, stroke: 1.5pt + black, dash: "dashed")
  line(Ap, Bp, stroke: 1.5pt + black, dash: "dashed")
  line(Bp, Cp, stroke: 1.5pt + black, dash: "dashed")
  line(Cp, Dp, stroke: 1.5pt + black, dash: "dashed")
  line(Dp, Ap, stroke: 1.5pt + black, dash: "dashed")

  // Nhãn
  content(A, [A], anchor: "north-east")
  content(B, [B], anchor: "north-west")
  content(C, [C], anchor: "south-west")
  content(D, [D], anchor: "south-east")
  content(Ap, [A'], anchor: "north-east")
  content(Bp, [B'], anchor: "north-west")
  content(Cp, [C'], anchor: "south-west")
  content(Dp, [D'], anchor: "south-east")
})`
      }
    ],

    'revolution': [
      {
        id: 'cylinder',
        name: 'Hình trụ',
        category: 'revolution',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let r = 2
  let h = 4
  let ratio = 0.3

  // Đáy dưới
  arc((0, 0), start: 0, stop: 180, radius: (r, r * ratio), stroke: 1.5pt + black)
  arc((0, 0), start: 180, stop: 360, radius: (r, r * ratio), stroke: 1.5pt + black, dash: "dashed")

  // Đường sinh
  line((-r, 0), (-r, h), stroke: 1.5pt + black)
  line((r, 0), (r, h), stroke: 1.5pt + black)

  // Đáy trên
  arc((0, h), start: 0, stop: 360, radius: (r, r * ratio), stroke: 1.5pt + black)

  // Trục
  line((0, 0), (0, h), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Nhãn
  content((0, 0), [O], anchor: "north-east")
  content((0, h), [O'], anchor: "south-east")
  content((r, h/2), [h], anchor: "west")
  content((r/2, -r * ratio - 0.3), [r], anchor: "north")
})`
      },
      {
        id: 'cone',
        name: 'Hình nón',
        category: 'revolution',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let r = 2
  let h = 4
  let ratio = 0.3
  let S = (0, h)
  let O = (0, 0)

  // Đáy
  arc(O, start: 0, stop: 180, radius: (r, r * ratio), stroke: 1.5pt + black)
  arc(O, start: 180, stop: 360, radius: (r, r * ratio), stroke: 1.5pt + black, dash: "dashed")

  // Đường sinh
  line(S, (-r, 0), stroke: 1.5pt + black)
  line(S, (r, 0), stroke: 1.5pt + black)

  // Trục
  line(O, S, stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Bán kính đáy
  line(O, (r, 0), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Nhãn
  content(S, [S], anchor: "south")
  content(O, [O], anchor: "north-east")
  content((r/2, -r * ratio - 0.3), [r], anchor: "north")
  content((r + 0.3, h/2), [h], anchor: "west")
})`
      },
      {
        id: 'sphere',
        name: 'Hình cầu',
        category: 'revolution',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *
  let O = (0, 0)
  let r = 3

  // Hình cầu
  circle(O, radius: r, stroke: 1.5pt + black)

  // Đường tròn lớn (phối cảnh)
  arc(O, start: 0, stop: 360, radius: (r, r * 0.3), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Bán kính
  line(O, (r, 0), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  // Tâm
  circle(O, radius: 0.08, fill: black)

  // Nhãn
  content(O, [O], anchor: "north-east")
  content((r/2, -0.3), [R], anchor: "north")
})`
      }
    ]
  },

  // ==================== ĐỒ THỊ HÀM SỐ ====================
  'graphs': {
    'polynomial': [
      {
        id: 'graph-linear',
        name: 'Đồ thị hàm bậc nhất',
        category: 'polynomial',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-5, -5), (5, 5), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-5, 0), (5, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((5.2, 0), [$x$], anchor: "west")

  line((0, -5), (0, 5), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 5.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = 2x + 1
  plot.plot(
    size: (10, 10),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-5, 5), x => 2 * x + 1, style: (stroke: blue + 1.5pt))
    }
  )

  content((3, 4.5), [$y = 2x + 1$], anchor: "east")
})`
      },
      {
        id: 'graph-quadratic',
        name: 'Đồ thị hàm bậc hai (Parabol)',
        category: 'polynomial',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-5, -5), (5, 5), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-5, 0), (5, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((5.2, 0), [$x$], anchor: "west")

  line((0, -5), (0, 5), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 5.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = x² - 2x - 3
  plot.plot(
    size: (10, 10),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-3, 5), x => x * x - 2 * x - 3, style: (stroke: red + 1.5pt), samples: 200)
    }
  )

  // Đỉnh parabol
  let vx = 1
  let vy = -4
  circle((vx, vy), radius: 0.08, fill: blue)
  content((vx, vy), [I(1, -4)], anchor: "north-east")

  // Giao điểm với Ox
  circle((-1, 0), radius: 0.05, fill: green)
  circle((3, 0), radius: 0.05, fill: green)

  content((1, 4.5), [$y = x^2 - 2x - 3$], anchor: "east")
})`
      }
    ],

    'trigonometric': [
      {
        id: 'graph-sine',
        name: 'Đồ thị hàm sin',
        category: 'trigonometric',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-7, -2), (7, 2), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-7, 0), (7, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((7.2, 0), [$x$], anchor: "west")

  line((0, -2), (0, 2), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 2.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = sin(x)
  plot.plot(
    size: (14, 4),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-2 * calc.pi, 2 * calc.pi), x => calc.sin(x), style: (stroke: blue + 1.5pt), samples: 200)
    }
  )

  // Các điểm đặc biệt
  circle((0, 0), radius: 0.05, fill: red)
  circle((calc.pi/2, 1), radius: 0.05, fill: red)
  circle((-calc.pi/2, -1), radius: 0.05, fill: red)

  content((3, 1.5), [$y = sin(x)$], anchor: "east")
})`
      },
      {
        id: 'graph-cosine',
        name: 'Đồ thị hàm cos',
        category: 'trigonometric',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-7, -2), (7, 2), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-7, 0), (7, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((7.2, 0), [$x$], anchor: "west")

  line((0, -2), (0, 2), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 2.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = cos(x)
  plot.plot(
    size: (14, 4),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-2 * calc.pi, 2 * calc.pi), x => calc.cos(x), style: (stroke: red + 1.5pt), samples: 200)
    }
  )

  content((3, 1.5), [$y = cos(x)$], anchor: "east")
})`
      }
    ],

    'exponential': [
      {
        id: 'graph-exponential',
        name: 'Đồ thị hàm mũ e^x',
        category: 'exponential',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-3, -1), (3, 5), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-3, 0), (3, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((3.2, 0), [$x$], anchor: "west")

  line((0, -1), (0, 5), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 5.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = e^x
  plot.plot(
    size: (6, 6),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-2, 2), x => calc.exp(x), style: (stroke: blue + 1.5pt), samples: 200)
    }
  )

  content((1, 4.5), [$y = e^x$], anchor: "east")
})`
      },
      {
        id: 'graph-logarithm',
        name: 'Đồ thị hàm logarit ln(x)',
        category: 'exponential',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-1, -3), (5, 3), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-1, 0), (5, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((5.2, 0), [$x$], anchor: "west")

  line((0, -3), (0, 3), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 3.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = ln(x)
  plot.plot(
    size: (6, 6),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (0.01, 5), x => calc.ln(x), style: (stroke: red + 1.5pt), samples: 200)
    }
  )

  // Tiệm cận đứng
  line((0, -3), (0, 3), stroke: (thickness: 0.5pt, paint: gray, dash: "dashed"))

  content((2, 2.5), [$y = ln(x)$], anchor: "east")
})`
      }
    ],

    'quartic': [
      {
        id: 'graph-quartic',
        name: 'Đồ thị hàm bậc 4',
        category: 'quartic',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-4, -5), (4, 5), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-4, 0), (4, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((4.2, 0), [$x$], anchor: "west")
  line((0, -5), (0, 5), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 5.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = x⁴ - 3x² + 2
  // Có cực trị tại x = 0 (cực đại cục bộ) và x = ±√(3/2) ≈ ±1.22
  plot.plot(
    size: (8, 10),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-2.5, 2.5), x => x * x * x * x - 3 * x * x + 2, style: (stroke: blue + 1.5pt), samples: 200)
    }
  )

  // Điểm cực trị
  circle((0, 2), radius: 0.08, fill: red)
  content((0, 2), [(0, 2)], anchor: "west")
  circle((calc.sqrt(1.5), -0.25), radius: 0.08, fill: green)
  circle((-calc.sqrt(1.5), -0.25), radius: 0.08, fill: green)

  content((2, 4.5), [$y = x^4 - 3x^2 + 2$], anchor: "east")
})`
      }
    ],

    'absolute': [
      {
        id: 'graph-absolute-linear',
        name: 'Đồ thị |x|',
        category: 'absolute',
        code: `#import "@preview/cetz:0.3.2": canvas, draw
#import "@preview/cetz-plot:0.1.1": plot
#set page(width: auto, height: auto, margin: 10pt)

#canvas({
  import draw: *

  grid((-5, -1), (5, 5), step: 1, stroke: luma(240))

  // Trục tọa độ
  line((-5, 0), (5, 0), mark: (end: ">"), stroke: 0.8pt + black)
  content((5.2, 0), [$x$], anchor: "west")

  line((0, -1), (0, 5), mark: (end: ">"), stroke: 0.8pt + black)
  content((0, 5.2), [$y$], anchor: "south")
  content((-0.3, -0.3), [$O$])

  // Đồ thị y = |x|
  plot.plot(
    size: (10, 6),
    x-tick-step: none, y-tick-step: none, axis-style: none,
    {
      plot.add(domain: (-5, 5), x => calc.abs(x), style: (stroke: blue + 1.5pt))
    }
  )

  content((3, 4.5), [$y = |x|$], anchor: "east")
})`
      }
    ]
  }
};

// ==================== BẢNG BIẾN THIÊN MẪU ====================
TEMPLATE_LIBRARY['variation-table'] = {
  'bbt-manual': [
    {
      id: 'bbt-cubic-example',
      name: 'BBT hàm bậc ba mẫu',
      category: 'bbt-manual',
      code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

// BBT hàm y = x³ - 3x + 2
// f'(x) = 3x² - 3 = 3(x-1)(x+1), nghiệm: x = -1 và x = 1

#canvas({
  import draw: *

  // Kích thước
  let LW = 1.4  // cột x/f'/f
  let BW = 0.9  // cột biên
  let IW = 2.3  // cột khoảng
  let CW = 1.4  // cột cực trị
  let RH = 1.1  // chiều cao hàng
  let TW = LW + 2*BW + 3*IW + 2*CW
  let TH = 3*RH

  // Khung bảng
  rect((0,0), (TW, TH), stroke: 1pt + black)
  line((0, RH), (TW, RH), stroke: 0.8pt + black)
  line((0, 2*RH), (TW, 2*RH), stroke: 0.8pt + black)
  line((LW, 0), (LW, TH), stroke: 1pt + black)

  // Nhãn cột đầu
  content((LW/2, 2.5*RH), [$x$])
  content((LW/2, 1.5*RH), [$f'(x)$])
  content((LW/2, 0.5*RH), [$f(x)$])

  // Cột cực trị x=-1
  let cx1 = LW + BW + IW + CW/2
  line((LW+BW+IW, 0), (LW+BW+IW, TH), stroke: 0.8pt + black)
  line((LW+BW+IW+CW, 0), (LW+BW+IW+CW, TH), stroke: 0.8pt + black)

  // Cột cực trị x=1
  let cx2 = LW + BW + 2*IW + 1.5*CW
  line((LW+BW+2*IW+CW, 0), (LW+BW+2*IW+CW, TH), stroke: 0.8pt + black)
  line((LW+BW+2*IW+2*CW, 0), (LW+BW+2*IW+2*CW, TH), stroke: 0.8pt + black)

  // Hàng x
  content((LW+BW/2, 2.5*RH), [$-infinity$])
  content((LW+BW+IW+CW/2, 2.5*RH), [$-1$])
  content((LW+BW+2*IW+1.5*CW, 2.5*RH), [$1$])
  content((TW-BW/2, 2.5*RH), [$+infinity$])

  // Hàng f'(x)
  content((LW+BW+IW/2, 1.5*RH), [$+$])
  content((LW+BW+IW+CW/2, 1.5*RH), [$0$])
  content((LW+BW+1.5*IW+CW, 1.5*RH), [$-$])
  content((LW+BW+2*IW+1.5*CW, 1.5*RH), [$0$])
  content((LW+BW+2.5*IW+2*CW, 1.5*RH), [$+$])

  // Hàng f(x) — mũi tên và giá trị
  content((LW+BW+0.1, 0.12*RH), [$-infinity$], anchor: "west")
  line((LW+BW+0.2, 0.12*RH), (LW+BW+IW-0.1, 0.88*RH), mark: (end: ">"), stroke: 0.8pt + black)
  content((LW+BW+IW+CW/2, 0.88*RH), [$4$])
  line((LW+BW+IW+CW+0.1, 0.88*RH), (LW+BW+2*IW+CW-0.1, 0.12*RH), mark: (end: ">"), stroke: 0.8pt + black)
  content((LW+BW+2*IW+1.5*CW, 0.12*RH), [$0$])
  line((LW+BW+2*IW+2*CW+0.1, 0.12*RH), (TW-BW-0.1, 0.88*RH), mark: (end: ">"), stroke: 0.8pt + black)
  content((TW-BW-0.1, 0.88*RH), [$+infinity$], anchor: "east")
})`
    },
    {
      id: 'bbt-composite',
      name: 'BBT hàm hợp u = g(t) rồi f(u)',
      category: 'bbt-manual',
      code: `#import "@preview/cetz:0.3.2": canvas, draw
#set page(width: auto, height: auto, margin: 10pt)

// Ví dụ: y = (x² - 1)² - 2(x² - 1) = t² - 2t  với t = x² - 1
// Đặt t = x² - 1, BBT của t: t' = 2x, CĐ x=0, t(0)=-1; t→+∞ khi x→±∞
// Sau đó thay vào y = t² - 2t

// BBT hàm số y = x⁴ - 4x² + 3 (triển khai từ hàm hợp trên)
// y' = 4x³ - 8x = 4x(x²-2), nghiệm: x=0, x=±√2

#canvas({
  import draw: *
  let LW = 1.4
  let BW = 0.9
  let IW = 2.0
  let CW = 1.4
  let RH = 1.1
  let TW = LW + 2*BW + 4*IW + 3*CW
  let TH = 3*RH

  rect((0,0), (TW, TH), stroke: 1pt + black)
  line((0, RH), (TW, RH), stroke: 0.8pt + black)
  line((0, 2*RH), (TW, 2*RH), stroke: 0.8pt + black)
  line((LW, 0), (LW, TH), stroke: 1pt + black)

  content((LW/2, 2.5*RH), [$x$])
  content((LW/2, 1.5*RH), [$y'$])
  content((LW/2, 0.5*RH), [$y$])

  // 3 cột cực trị
  for i in range(3) {
    let xl = LW + BW + (i+1)*IW + i*CW
    line((xl, 0), (xl, TH), stroke: 0.8pt + black)
    line((xl+CW, 0), (xl+CW, TH), stroke: 0.8pt + black)
  }

  // Hàng x: -∞, -√2, 0, √2, +∞
  content((LW+BW/2, 2.5*RH), [$-infinity$])
  content((LW+BW+IW+CW/2, 2.5*RH), [$-sqrt(2)$])
  content((LW+BW+2*IW+1.5*CW, 2.5*RH), [$0$])
  content((LW+BW+3*IW+2.5*CW, 2.5*RH), [$sqrt(2)$])
  content((TW-BW/2, 2.5*RH), [$+infinity$])

  // Hàng y': -, 0, +, 0, -, 0, +
  content((LW+BW+IW/2, 1.5*RH), [$-$])
  content((LW+BW+IW+CW/2, 1.5*RH), [$0$])
  content((LW+BW+1.5*IW+CW, 1.5*RH), [$+$])
  content((LW+BW+2*IW+1.5*CW, 1.5*RH), [$0$])
  content((LW+BW+2.5*IW+2*CW, 1.5*RH), [$-$])
  content((LW+BW+3*IW+2.5*CW, 1.5*RH), [$0$])
  content((LW+BW+3.5*IW+3*CW, 1.5*RH), [$+$])

  // Hàng y: giá trị tại các cực trị: f(-√2)=-1, f(0)=3, f(√2)=-1
  let hi = 0.88*RH
  let lo = 0.12*RH
  content((LW+BW+0.1, hi), [$+infinity$], anchor: "west")
  line((LW+BW+0.2, hi), (LW+BW+IW-0.1, lo), mark: (end: ">"), stroke: 0.8pt)
  content((LW+BW+IW+CW/2, lo), [$-1$])
  line((LW+BW+IW+CW+0.1, lo), (LW+BW+2*IW+CW-0.1, hi), mark: (end: ">"), stroke: 0.8pt)
  content((LW+BW+2*IW+1.5*CW, hi), [$3$])
  line((LW+BW+2*IW+2*CW+0.1, hi), (LW+BW+3*IW+2*CW-0.1, lo), mark: (end: ">"), stroke: 0.8pt)
  content((LW+BW+3*IW+2.5*CW, lo), [$-1$])
  line((LW+BW+3*IW+3*CW+0.1, lo), (TW-BW-0.1, hi), mark: (end: ">"), stroke: 0.8pt)
  content((TW-BW-0.1, hi), [$+infinity$], anchor: "east")
})`
    }
  ],

  // ==================== BÀI TOÁN THỰC TẾ ====================
  'real-world': {
    'trig-applications': [
      {
        id: 'realworld-lighthouse-elevation',
        name: 'Bài toán Ngọn hải đăng (AB=30m, 45° và 75°)',
        category: 'trig-applications',
        code: `#import "@preview/cetz:0.3.2": canvas, draw

#canvas({
  import draw: *

  // Bối cảnh: Bờ biển & Bầu trời
  rect((-1, -1.2), (7.7, 0), fill: rgb("#eab308").lighten(70%), stroke: none)
  rect((-1, 0), (7.7, 5.7), fill: rgb("#e0f2fe"), stroke: none)
  line((-1, 0), (7.7, 0), stroke: 1.5pt + black)

  // Ngọn Hải Đăng (Lighthouse)
  polygon((4.8, 0), (5.6, 0), (5.45, 3.6), (4.95, 3.6), fill: rgb("#ffffff"), stroke: 1pt + black)
  polygon((4.8, 0), (5.6, 0), (5.53, 0.9), (4.87, 0.9), fill: rgb("#dc2626"), stroke: 0.5pt + black)
  polygon((4.92, 1.8), (5.48, 1.8), (5.41, 2.7), (4.99, 2.7), fill: rgb("#dc2626"), stroke: 0.5pt + black)
  rect((4.98, 3.6), (5.42, 4.2), fill: rgb("#fde047"), stroke: 1pt + black)
  polygon((4.92, 4.2), (5.48, 4.2), (5.2, 4.7), fill: rgb("#dc2626"), stroke: 1pt + black)

  // Đường cao h (nét đứt đỏ)
  line((5.2, 0), (5.2, 4.2), stroke: (dash: "dashed", paint: rgb("#dc2626"), thickness: 1.5pt))
  content((5.65, 2.1), text(fill: rgb("#dc2626"), weight: "bold", [$h = ?$]))

  // Góc vuông tại H
  line((4.95, 0), (4.95, 0.25), (5.2, 0.25), stroke: 1pt + black)

  // Tia ngắm từ A và B tới đỉnh C
  line((1, 0), (5.2, 4.2), stroke: 1.5pt + rgb("#1d4ed8"))
  line((4, 0), (5.2, 4.2), stroke: 1.5pt + rgb("#1d4ed8"))

  // Cung chỉ góc
  arc((1, 0), start: 0deg, stop: 45deg, radius: 0.85, stroke: 1pt + black)
  content((2.25, 0.35), [$45^\\circ$])

  arc((4, 0), start: 0deg, stop: 75deg, radius: 0.65, stroke: 1pt + black)
  content((4.95, 0.35), [$75^\\circ$])

  // Mũi tên khoảng cách AB = 30 m
  line((1, -0.2), (4, -0.2), stroke: 1.2pt + rgb("#dc2626"), mark: (start: ">", end: ">"))
  content((2.5, -0.45), text(fill: rgb("#dc2626"), weight: "bold", [$30\\text{ m}$]))

  // Nhãn các điểm A, B, C, H
  circle((1, 0), radius: 0.07, fill: black)
  circle((4, 0), radius: 0.07, fill: black)
  circle((5.2, 0), radius: 0.07, fill: black)
  circle((5.2, 4.2), radius: 0.07, fill: black)

  content((1, -0.45), [$A$])
  content((4, -0.45), [$B$])
  content((5.2, -0.45), [$H$])
  content((5.2, 4.55), [$C$])
})`
      }
    ]
  }
};

// Helper function để lấy tất cả templates dưới dạng flat array
export function getAllTemplates() {
  const templates = [];
  Object.values(TEMPLATE_LIBRARY).forEach(category => {
    Object.values(category).forEach(subcategory => {
      subcategory.forEach(template => {
        templates.push(template);
      });
    });
  });
  return templates;
}

// Helper function để tìm template theo id
export function getTemplateById(templateId) {
  const allTemplates = getAllTemplates();
  return allTemplates.find(template => template.id === templateId);
}

// Helper function để lấy templates theo category
export function getTemplatesByCategory(categoryId) {
  const category = TEMPLATE_LIBRARY[categoryId];
  if (!category) return [];

  const templates = [];
  Object.values(category).forEach(subcategory => {
    templates.push(...subcategory);
  });
  return templates;
}
