// Form schemas định nghĩa input fields cho từng loại hình

export const FORM_SCHEMAS = {
  // ==================== HÌNH HỌC PHẲNG ====================

  // Tam giác
  'triangle-general': {
    fields: [
      { name: 'sideA', label: 'Cạnh a', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh b', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'sideC', label: 'Cạnh c', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true },
      { name: 'showAngles', label: 'Hiển thị góc', type: 'checkbox', default: false }
    ]
  },

  'triangle-right': {
    fields: [
      { name: 'sideA', label: 'Cạnh góc vuông a', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh góc vuông b', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'rightAngleAt', label: 'Góc vuông tại', type: 'select', options: ['A', 'B', 'C'], default: 'A' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'showRightAngleSymbol', label: 'Hiển thị ký hiệu góc vuông', type: 'checkbox', default: true },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'triangle-isosceles': {
    fields: [
      { name: 'base', label: 'Cạnh đáy', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'leg', label: 'Cạnh bên', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh trên', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh đáy trái', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh đáy phải', type: 'text', default: 'C' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true },
      { name: 'showEqualMarks', label: 'Hiển thị dấu cạnh bằng nhau', type: 'checkbox', default: true }
    ]
  },

  'triangle-equilateral': {
    fields: [
      { name: 'side', label: 'Độ dài cạnh', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true },
      { name: 'showEqualMarks', label: 'Hiển thị dấu cạnh bằng nhau', type: 'checkbox', default: true }
    ]
  },

  'triangle-inscribed': {
    fields: [
      { name: 'radius', label: 'Bán kính đường tròn', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'triangleType', label: 'Loại tam giác', type: 'select', options: ['Thường', 'Vuông', 'Cân', 'Đều'], default: 'Đều' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'showRadius', label: 'Hiển thị bán kính', type: 'checkbox', default: false }
    ]
  },

  // Tứ giác
  'square': {
    fields: [
      { name: 'side', label: 'Độ dài cạnh', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'rectangle': {
    fields: [
      { name: 'width', label: 'Chiều rộng', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'rhombus': {
    fields: [
      { name: 'side', label: 'Độ dài cạnh', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'angle', label: 'Góc nhọn', type: 'number', min: 10, max: 170, default: 60, unit: '°' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'parallelogram': {
    fields: [
      { name: 'width', label: 'Cạnh đáy', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'angle', label: 'Góc A', type: 'number', min: 10, max: 170, default: 60, unit: '°' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'trapezoid': {
    fields: [
      { name: 'bottomWidth', label: 'Cạnh đáy lớn', type: 'number', min: 0.1, max: 20, default: 6, unit: 'đơn vị' },
      { name: 'topWidth', label: 'Cạnh đáy nhỏ', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'isosceles-trapezoid': {
    fields: [
      { name: 'bottomWidth', label: 'Cạnh đáy lớn', type: 'number', min: 0.1, max: 20, default: 6, unit: 'đơn vị' },
      { name: 'topWidth', label: 'Cạnh đáy nhỏ', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'kite': {
    fields: [
      { name: 'diagH', label: 'Đường chéo dài', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'diagW', label: 'Đường chéo ngang', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'topRatio', label: 'Tỉ lệ phần trên (0-1)', type: 'number', min: 0.1, max: 0.9, default: 0.35, step: 0.05 },
      { name: 'labelA', label: 'Nhãn đỉnh trên', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh phải', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh dưới', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh trái', type: 'text', default: 'D' },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false }
    ]
  },

  'quadrilateral-general': {
    fields: [
      { name: 'ax', label: 'A: tọa độ x', type: 'number', min: -10, max: 20, default: 0, step: 0.5 },
      { name: 'ay', label: 'A: tọa độ y', type: 'number', min: -10, max: 20, default: 0, step: 0.5 },
      { name: 'bx', label: 'B: tọa độ x', type: 'number', min: -10, max: 20, default: 5, step: 0.5 },
      { name: 'by', label: 'B: tọa độ y', type: 'number', min: -10, max: 20, default: 0, step: 0.5 },
      { name: 'cx', label: 'C: tọa độ x', type: 'number', min: -10, max: 20, default: 6, step: 0.5 },
      { name: 'cy', label: 'C: tọa độ y', type: 'number', min: -10, max: 20, default: 4, step: 0.5 },
      { name: 'dx', label: 'D: tọa độ x', type: 'number', min: -10, max: 20, default: 1, step: 0.5 },
      { name: 'dy', label: 'D: tọa độ y', type: 'number', min: -10, max: 20, default: 4, step: 0.5 },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' }
    ]
  },

  // Đường tròn
  // Đa giác
  'pentagon': {
    fields: [
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'pentagon-regular': {
    fields: [
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'hexagon': {
    fields: [
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'hexagon-regular': {
    fields: [
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'octagon-regular': {
    fields: [
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  'polygon-regular': {
    fields: [
      { name: 'sides', label: 'Số cạnh', type: 'number', min: 3, max: 12, default: 6 },
      { name: 'radius', label: 'Bán kính ngoại tiếp', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'showSides', label: 'Hiển thị độ dài cạnh', type: 'checkbox', default: true }
    ]
  },

  // Tam giác đặc biệt
  'triangle-with-medians': {
    fields: [
      { name: 'sideA', label: 'Cạnh a', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh b', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'sideC', label: 'Cạnh c', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' }
    ]
  },

  'triangle-with-altitudes': {
    fields: [
      { name: 'sideA', label: 'Cạnh a', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh b', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'sideC', label: 'Cạnh c', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' }
    ]
  },

  'triangle-with-bisectors': {
    fields: [
      { name: 'sideA', label: 'Cạnh a', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh b', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'sideC', label: 'Cạnh c', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' }
    ]
  },

  'circle-basic': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'showRadius', label: 'Hiển thị bán kính', type: 'checkbox', default: true },
      { name: 'showCenter', label: 'Hiển thị tâm', type: 'checkbox', default: true }
    ]
  },

  'circle-chord': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'chordAngle', label: 'Góc dây cung (°)', type: 'number', min: 10, max: 350, default: 60, unit: '°' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelA', label: 'Nhãn điểm A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn điểm B', type: 'text', default: 'B' },
      { name: 'showRadius', label: 'Hiển thị bán kính', type: 'checkbox', default: true }
    ]
  },

  'circle-tangent': {
    fields: [
      { name: 'radius', label: 'Bán kính đường tròn', type: 'number', min: 0.1, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'distance', label: 'Khoảng cách từ M đến O', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelM', label: 'Nhãn điểm ngoài', type: 'text', default: 'M' },
      { name: 'labelA', label: 'Nhãn tiếp điểm 1', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn tiếp điểm 2', type: 'text', default: 'B' },
      { name: 'showBothTangents', label: 'Hiển thị cả 2 tiếp tuyến', type: 'checkbox', default: true }
    ]
  },

  'circle-secant': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'distance', label: 'Khoảng cách từ tâm đến cát tuyến', type: 'number', min: 0, max: 19, default: 1.5, step: 0.1, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelA', label: 'Nhãn giao điểm A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn giao điểm B', type: 'text', default: 'B' }
    ]
  },

  'two-circles-intersect': {
    fields: [
      { name: 'radius1', label: 'Bán kính R₁', type: 'number', min: 0.5, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'radius2', label: 'Bán kính R₂', type: 'number', min: 0.5, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'distance', label: 'Khoảng cách tâm', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelO1', label: 'Nhãn tâm O₁', type: 'text', default: 'O' },
      { name: 'labelO2', label: "Nhãn tâm O₂", type: 'text', default: "O'" }
    ]
  },

  'two-circles-tangent-external': {
    fields: [
      { name: 'radius1', label: 'Bán kính R₁', type: 'number', min: 0.5, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'radius2', label: 'Bán kính R₂', type: 'number', min: 0.5, max: 20, default: 1.5, unit: 'đơn vị' },
      { name: 'labelO1', label: 'Nhãn tâm O₁', type: 'text', default: 'O' },
      { name: 'labelO2', label: "Nhãn tâm O₂", type: 'text', default: "O'" }
    ]
  },

  'two-circles-tangent-internal': {
    fields: [
      { name: 'radius1', label: 'Bán kính lớn R₁', type: 'number', min: 1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'radius2', label: 'Bán kính nhỏ R₂', type: 'number', min: 0.5, max: 19, default: 1.5, unit: 'đơn vị' },
      { name: 'labelO1', label: 'Nhãn tâm O₁', type: 'text', default: 'O' },
      { name: 'labelO2', label: "Nhãn tâm O₂", type: 'text', default: "O'" }
    ]
  },

  'circle-sector': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'sectorAngle', label: 'Góc ở tâm (°)', type: 'number', min: 5, max: 355, default: 60, unit: '°' },
      { name: 'startAngle', label: 'Góc bắt đầu (°)', type: 'number', min: 0, max: 360, default: 0, unit: '°' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelA', label: 'Nhãn điểm A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn điểm B', type: 'text', default: 'B' },
      { name: 'showRadius', label: 'Hiển thị bán kính', type: 'checkbox', default: true }
    ]
  },

  'circle-segment': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'chordAngle', label: 'Góc dây cung (°)', type: 'number', min: 5, max: 175, default: 60, unit: '°' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'labelA', label: 'Nhãn điểm A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn điểm B', type: 'text', default: 'B' }
    ]
  },

  // ==================== HÌNH HỌC KHÔNG GIAN ====================

  'pyramid-triangular': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Trước' },
      { name: 'labelS', label: 'Nhãn đỉnh', type: 'text', default: 'S' },
      { name: 'labelA', label: 'Nhãn đáy A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đáy B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đáy C', type: 'text', default: 'C' },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true },
      { name: 'showHeight', label: 'Hiển thị đường cao', type: 'checkbox', default: false }
    ]
  },

  'pyramid-square': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Trước' },
      { name: 'labelS', label: 'Nhãn đỉnh', type: 'text', default: 'S' },
      { name: 'labelA', label: 'Nhãn đáy A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đáy B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đáy C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đáy D', type: 'text', default: 'D' },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true },
      { name: 'showHeight', label: 'Hiển thị đường cao', type: 'checkbox', default: false }
    ]
  },

  'prism-quadrilateral': {
    fields: [
      { name: 'length', label: 'Chiều dài', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'width', label: 'Chiều rộng', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'labelA1', label: "Nhãn đỉnh A'", type: 'text', default: "A'" },
      { name: 'labelB1', label: "Nhãn đỉnh B'", type: 'text', default: "B'" },
      { name: 'labelC1', label: "Nhãn đỉnh C'", type: 'text', default: "C'" },
      { name: 'labelD1', label: "Nhãn đỉnh D'", type: 'text', default: "D'" },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true }
    ]
  },

  'cube': {
    fields: [
      { name: 'side', label: 'Độ dài cạnh', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải', 'Trên'], default: 'Trước' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'labelA1', label: "Nhãn đỉnh A'", type: 'text', default: "A'" },
      { name: 'labelB1', label: "Nhãn đỉnh B'", type: 'text', default: "B'" },
      { name: 'labelC1', label: "Nhãn đỉnh C'", type: 'text', default: "C'" },
      { name: 'labelD1', label: "Nhãn đỉnh D'", type: 'text', default: "D'" },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true },
      { name: 'showDiagonals', label: 'Hiển thị đường chéo', type: 'checkbox', default: false }
    ]
  },

  'cylinder': {
    fields: [
      { name: 'radius', label: 'Bán kính đáy', type: 'number', min: 0.1, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Nghiêng'], default: 'Nghiêng' },
      { name: 'showAxis', label: 'Hiển thị trục', type: 'checkbox', default: true },
      { name: 'showHiddenLines', label: 'Hiển thị đường khuất', type: 'checkbox', default: true }
    ]
  },

  'cone': {
    fields: [
      { name: 'radius', label: 'Bán kính đáy', type: 'number', min: 0.1, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Nghiêng'], default: 'Nghiêng' },
      { name: 'labelS', label: 'Nhãn đỉnh', type: 'text', default: 'S' },
      { name: 'labelO', label: 'Nhãn tâm đáy', type: 'text', default: 'O' },
      { name: 'showAxis', label: 'Hiển thị trục', type: 'checkbox', default: true },
      { name: 'showGeneratrix', label: 'Hiển thị đường sinh', type: 'checkbox', default: true }
    ]
  },

  'sphere': {
    fields: [
      { name: 'radius', label: 'Bán kính', type: 'number', min: 0.1, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'showGreatCircle', label: 'Hiển thị đường tròn lớn', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục', type: 'checkbox', default: false }
    ]
  },

  // ==================== ĐỒ THỊ HÀM SỐ ====================

  'linear': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'quadratic': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showVertex', label: 'Hiển thị đỉnh parabol', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'cubic': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'd', label: 'Hệ số d', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'hyperbola': {
    fields: [
      { name: 'k', label: 'Hệ số k', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'sine': {
    fields: [
      { name: 'amplitude', label: 'Biên độ A', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'frequency', label: 'Tần số B', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'phase', label: 'Pha C', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'offset', label: 'Dịch D', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -6.28 },
      { name: 'maxX', label: 'X max', type: 'number', default: 6.28 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  // ==================== VECTƠ ====================

  'vector-2d': {
    fields: [
      { name: 'x', label: 'Tọa độ x', type: 'number', min: -10, max: 10, default: 3, step: 0.1 },
      { name: 'y', label: 'Tọa độ y', type: 'number', min: -10, max: 10, default: 2, step: 0.1 },
      { name: 'startX', label: 'Điểm đầu x', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'startY', label: 'Điểm đầu y', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'label', label: 'Nhãn vectơ', type: 'text', default: 'a' },
      { name: 'showComponents', label: 'Hiển thị thành phần', type: 'checkbox', default: true },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true }
    ]
  },

  'vector-sum': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 3, step: 0.1 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 2, step: 0.1 },
      { name: 'x2', label: 'Vectơ b - x', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'y2', label: 'Vectơ b - y', type: 'number', min: -10, max: 10, default: 3, step: 0.1 },
      { name: 'method', label: 'Phương pháp', type: 'select', options: ['Hình bình hành', 'Nối tiếp'], default: 'Hình bình hành' },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true }
    ]
  },

  // ==================== ĐỒ THỊ BỔ SUNG ====================

  'tangent': {
    fields: [
      { name: 'amplitude', label: 'Biên độ A', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'frequency', label: 'Tần số B', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -2 },
      { name: 'maxX', label: 'X max', type: 'number', default: 2 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true }
    ]
  },

  'exponential': {
    fields: [
      { name: 'base', label: 'Cơ số a', type: 'number', min: 0.1, max: 10, default: 2, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -3 },
      { name: 'maxX', label: 'X max', type: 'number', default: 3 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'logarithm': {
    fields: [
      { name: 'minX', label: 'X min', type: 'number', default: 0.1 },
      { name: 'maxX', label: 'X max', type: 'number', default: 10 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true }
    ]
  },

  'absolute-linear': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'absolute-quadratic': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, default: -2, step: 0.1 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -10, max: 10, default: -3, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  // ==================== MẶT PHẲNG & ĐƯỜNG THẲNG KHÔNG GIAN ====================

  'plane-basic': {
    fields: [
      { name: 'planeName', label: 'Tên mặt phẳng', type: 'text', default: 'α' },
      { name: 'showLabels', label: 'Hiển thị nhãn góc', type: 'checkbox', default: false },
      { name: 'labelA', label: 'Nhãn góc A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn góc B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn góc C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn góc D', type: 'text', default: 'D' }
    ]
  },

  'line-plane-intersect': {
    fields: [
      { name: 'planeName', label: 'Tên mặt phẳng', type: 'text', default: 'α' },
      { name: 'lineName', label: 'Tên đường thẳng', type: 'text', default: 'd' },
      { name: 'intersectLabel', label: 'Nhãn điểm giao', type: 'text', default: 'A' }
    ]
  },

  'two-planes-intersect': {
    fields: [
      { name: 'plane1Name', label: 'Tên mặt phẳng 1', type: 'text', default: 'α' },
      { name: 'plane2Name', label: 'Tên mặt phẳng 2', type: 'text', default: 'β' },
      { name: 'intersectLineName', label: 'Tên giao tuyến', type: 'text', default: 'd' }
    ]
  },

  'line-perpendicular-plane': {
    fields: [
      { name: 'planeName', label: 'Tên mặt phẳng', type: 'text', default: 'α' },
      { name: 'lineName', label: 'Tên đường thẳng', type: 'text', default: 'd' },
      { name: 'footLabel', label: 'Nhãn chân đường vuông góc', type: 'text', default: 'H' },
      { name: 'showFoot', label: 'Hiển thị chân', type: 'checkbox', default: true }
    ]
  },

  // ==================== VECTƠ 3D ====================

  'vector-3d': {
    fields: [
      { name: 'x', label: 'Tọa độ x', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'y', label: 'Tọa độ y', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'z', label: 'Tọa độ z', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'label', label: 'Nhãn vectơ', type: 'text', default: 'a' },
      { name: 'showComponents', label: 'Hiển thị thành phần', type: 'checkbox', default: true }
    ]
  },

  'vector-3d-sum': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'z1', label: 'Vectơ a - z', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'x2', label: 'Vectơ b - x', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'y2', label: 'Vectơ b - y', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'z2', label: 'Vectơ b - z', type: 'number', min: -10, max: 10, default: 1, step: 0.5 }
    ]
  },

  'vector-cross-product': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'z1', label: 'Vectơ a - z', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'x2', label: 'Vectơ b - x', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'y2', label: 'Vectơ b - y', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'z2', label: 'Vectơ b - z', type: 'number', min: -10, max: 10, default: 0, step: 0.5 }
    ]
  },

  'coordinate-system-3d': {
    fields: [
      { name: 'axisLength', label: 'Độ dài trục', type: 'number', min: 2, max: 10, default: 4, step: 0.5 },
      { name: 'labelX', label: 'Nhãn trục x', type: 'text', default: 'x' },
      { name: 'labelY', label: 'Nhãn trục y', type: 'text', default: 'y' },
      { name: 'labelZ', label: 'Nhãn trục z', type: 'text', default: 'z' }
    ]
  },

  // ==================== CÁC SCHEMA CÒN THIẾU ====================

  // Tam giác ngoại tiếp (incircle)
  'triangle-circumscribed': {
    fields: [
      { name: 'sideA', label: 'Cạnh a (BC)', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'sideB', label: 'Cạnh b (AC)', type: 'number', min: 0.5, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'sideC', label: 'Cạnh c (AB)', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelI', label: 'Nhãn tâm nội tiếp', type: 'text', default: 'I' },
      { name: 'showRadius', label: 'Hiển thị bán kính nội tiếp', type: 'checkbox', default: true }
    ]
  },

  // Hình chóp cụt
  'pyramid-truncated': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy lớn', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'topSize', label: 'Cạnh đáy nhỏ', type: 'number', min: 0.5, max: 19, default: 2.5, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Trước' },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true }
    ]
  },

  // Hình chóp đều (reuse pyramid-square schema)
  'pyramid-regular': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy', type: 'number', min: 0.1, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.1, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Trước' },
      { name: 'labelS', label: 'Nhãn đỉnh', type: 'text', default: 'S' },
      { name: 'labelA', label: 'Nhãn đáy A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đáy B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đáy C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đáy D', type: 'text', default: 'D' },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true },
      { name: 'showHeight', label: 'Hiển thị đường cao', type: 'checkbox', default: false }
    ]
  },

  // Lăng trụ tam giác
  'prism-triangular': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy', type: 'number', min: 0.5, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Phải' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelA1', label: "Nhãn đỉnh A'", type: 'text', default: "A'" },
      { name: 'labelB1', label: "Nhãn đỉnh B'", type: 'text', default: "B'" },
      { name: 'labelC1', label: "Nhãn đỉnh C'", type: 'text', default: "C'" },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true }
    ]
  },

  // Lăng trụ lục giác
  'prism-hexagonal': {
    fields: [
      { name: 'baseSize', label: 'Cạnh đáy', type: 'number', min: 0.5, max: 20, default: 2, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'perspective', label: 'Góc nhìn', type: 'select', options: ['Trước', 'Trái', 'Phải'], default: 'Phải' },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true }
    ]
  },

  // Hình hộp chữ nhật
  'box': {
    fields: [
      { name: 'length', label: 'Chiều dài', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'width', label: 'Chiều rộng', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 4, unit: 'đơn vị' },
      { name: 'labelA', label: 'Nhãn đỉnh A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn đỉnh B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelD', label: 'Nhãn đỉnh D', type: 'text', default: 'D' },
      { name: 'labelA1', label: "Nhãn đỉnh A'", type: 'text', default: "A'" },
      { name: 'labelB1', label: "Nhãn đỉnh B'", type: 'text', default: "B'" },
      { name: 'labelC1', label: "Nhãn đỉnh C'", type: 'text', default: "C'" },
      { name: 'labelD1', label: "Nhãn đỉnh D'", type: 'text', default: "D'" },
      { name: 'showHiddenEdges', label: 'Hiển thị cạnh khuất', type: 'checkbox', default: true }
    ]
  },

  // Hình nón cụt
  'cone-truncated': {
    fields: [
      { name: 'radiusBottom', label: 'Bán kính đáy lớn', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'radiusTop', label: 'Bán kính đáy nhỏ', type: 'number', min: 0.1, max: 19, default: 1.5, unit: 'đơn vị' },
      { name: 'height', label: 'Chiều cao', type: 'number', min: 0.5, max: 20, default: 5, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm đáy lớn', type: 'text', default: 'O' },
      { name: 'labelO1', label: "Nhãn tâm đáy nhỏ", type: 'text', default: "O'" },
      { name: 'showAxis', label: 'Hiển thị trục & kích thước', type: 'checkbox', default: true }
    ]
  },

  // Mặt cắt hình cầu
  'sphere-section': {
    fields: [
      { name: 'radius', label: 'Bán kính cầu', type: 'number', min: 0.5, max: 20, default: 3, unit: 'đơn vị' },
      { name: 'sectionHeight', label: 'Chiều cao mặt cắt', type: 'number', min: -10, max: 10, default: 1, step: 0.1, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'showAxis', label: 'Hiển thị kích thước', type: 'checkbox', default: true }
    ]
  },

  // Đồ thị bổ sung (reuse schema có sẵn)
  'cosine': {
    fields: [
      { name: 'amplitude', label: 'Biên độ A', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'frequency', label: 'Tần số B', type: 'number', min: 0.1, max: 10, default: 1, step: 0.1 },
      { name: 'phase', label: 'Pha C', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'offset', label: 'Dịch D', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -6.28 },
      { name: 'maxX', label: 'X max', type: 'number', default: 6.28 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'trig-transform': {
    fields: [
      { name: 'amplitude', label: 'Biên độ A', type: 'number', min: 0.1, max: 10, default: 2, step: 0.1 },
      { name: 'frequency', label: 'Tần số B', type: 'number', min: 0.1, max: 10, default: 2, step: 0.1 },
      { name: 'phase', label: 'Pha C', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'offset', label: 'Dịch D', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -6.28 },
      { name: 'maxX', label: 'X max', type: 'number', default: 6.28 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'trig-combination': {
    fields: [
      { name: 'sinCoeff', label: 'Hệ số a (của sin x)', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'cosCoeff', label: 'Hệ số b (của cos x)', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'minX', label: 'X min', type: 'number', default: -6.28 },
      { name: 'maxX', label: 'X max', type: 'number', default: 6.28 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'exponential-e': {
    fields: [
      { name: 'base', label: 'Cơ số a', type: 'number', min: 0.1, max: 10, default: 2.718, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -3 },
      { name: 'maxX', label: 'X max', type: 'number', default: 3 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'natural-log': {
    fields: [
      { name: 'minX', label: 'X min', type: 'number', default: 0.1 },
      { name: 'maxX', label: 'X max', type: 'number', default: 10 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true }
    ]
  },

  'rational-linear': {
    fields: [
      { name: 'numerA', label: 'Tử số: hệ số a (của x)', type: 'number', min: -10, max: 10, step: 1, default: 2 },
      { name: 'numerB', label: 'Tử số: hệ số b', type: 'number', min: -20, max: 20, step: 1, default: 1 },
      { name: 'denomC', label: 'Mẫu số: hệ số c (của x)', type: 'number', min: -10, max: 10, step: 1, default: 1 },
      { name: 'denomD', label: 'Mẫu số: hệ số d', type: 'number', min: -20, max: 20, step: 1, default: -3 },
      { name: 'minX', label: 'X min', type: 'number', default: -8 },
      { name: 'maxX', label: 'X max', type: 'number', default: 8 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'rational-general': {
    fields: [
      { name: 'k', label: 'Hệ số k (y = k/x)', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAsymptotes', label: 'Hiển thị tiệm cận', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'quartic': {
    fields: [
      { name: 'a', label: 'Hệ số a (x⁴)', type: 'number', min: -5, max: 5, default: 1, step: 0.5 },
      { name: 'b', label: 'Hệ số b (x²)', type: 'number', min: -10, max: 10, default: -3, step: 0.5 },
      { name: 'c', label: 'Hệ số c (hằng số)', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'minX', label: 'X min', type: 'number', default: -4 },
      { name: 'maxX', label: 'X max', type: 'number', default: 4 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'polynomial-general': {
    fields: [
      { name: 'a', label: 'Hệ số a (x³)', type: 'number', min: -5, max: 5, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b (x²)', type: 'number', min: -10, max: 10, default: -3, step: 0.1 },
      { name: 'c', label: 'Hệ số c (x)', type: 'number', min: -10, max: 10, default: 0, step: 0.1 },
      { name: 'd', label: 'Hệ số d', type: 'number', min: -10, max: 10, default: 2, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  'absolute-composite': {
    fields: [
      { name: 'a', label: 'Hệ số a (x²)', type: 'number', min: -10, max: 10, default: 1, step: 0.1 },
      { name: 'b', label: 'Hệ số b (x)', type: 'number', min: -10, max: 10, default: -2, step: 0.1 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -10, max: 10, default: -3, step: 0.1 },
      { name: 'minX', label: 'X min', type: 'number', default: -5 },
      { name: 'maxX', label: 'X max', type: 'number', default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true },
      { name: 'showAxis', label: 'Hiển thị trục tọa độ', type: 'checkbox', default: true }
    ]
  },

  // Đường cong tham số
  'parametric-circle': {
    fields: [
      { name: 'radius', label: 'Bán kính r', type: 'number', min: 0.5, max: 10, default: 3, unit: 'đơn vị' },
      { name: 'labelO', label: 'Nhãn tâm', type: 'text', default: 'O' },
      { name: 'showArrow', label: 'Hiển thị mũi tên hướng t', type: 'checkbox', default: true }
    ]
  },

  'parametric-ellipse': {
    fields: [
      { name: 'semiA', label: 'Bán trục a', type: 'number', min: 0.5, max: 10, default: 4, unit: 'đơn vị' },
      { name: 'semiB', label: 'Bán trục b', type: 'number', min: 0.5, max: 10, default: 2.5, unit: 'đơn vị' },
      { name: 'showAxes', label: 'Hiển thị bán trục', type: 'checkbox', default: true }
    ]
  },

  'parametric-general': {
    fields: [
      { name: 'freqX', label: 'Tần số n (x)', type: 'number', min: 1, max: 8, default: 3, step: 1 },
      { name: 'freqY', label: 'Tần số m (y)', type: 'number', min: 1, max: 8, default: 2, step: 1 },
      { name: 'phaseX', label: 'Pha δ (x)', type: 'number', min: -3.14, max: 3.14, default: 0, step: 0.1 },
      { name: 'phaseY', label: 'Pha δ (y)', type: 'number', min: -3.14, max: 3.14, default: 0, step: 0.1 },
      { name: 'ampX', label: 'Biên độ A (x)', type: 'number', min: 0.5, max: 8, default: 3, step: 0.5 },
      { name: 'ampY', label: 'Biên độ B (y)', type: 'number', min: 0.5, max: 8, default: 3, step: 0.5 }
    ]
  },

  // Vectơ bổ sung
  'vector-difference': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'x2', label: 'Vectơ b - x', type: 'number', min: -10, max: 10, default: 1, step: 0.5 },
      { name: 'y2', label: 'Vectơ b - y', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true }
    ]
  },

  'vector-dot-product': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'x2', label: 'Vectơ b - x', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'y2', label: 'Vectơ b - y', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true }
    ]
  },

  'vector-projection': {
    fields: [
      { name: 'x1', label: 'Vectơ a - x', type: 'number', min: -10, max: 10, default: 3, step: 0.5 },
      { name: 'y1', label: 'Vectơ a - y', type: 'number', min: -10, max: 10, default: 2, step: 0.5 },
      { name: 'x2', label: 'Vectơ b - x (hướng chiếu)', type: 'number', min: -10, max: 10, default: 4, step: 0.5 },
      { name: 'y2', label: 'Vectơ b - y (hướng chiếu)', type: 'number', min: -10, max: 10, default: 0, step: 0.5 },
      { name: 'showGrid', label: 'Hiển thị lưới', type: 'checkbox', default: true }
    ]
  },

  // ==================== VẬT LÝ ====================

  'physics-inclined-plane': {
    fields: [
      { name: 'angle', label: 'Góc nghiêng α (°)', type: 'number', min: 5, max: 80, default: 30, unit: '°' },
      { name: 'length', label: 'Chiều dài mặt nghiêng', type: 'number', min: 2, max: 15, default: 7, unit: 'đơn vị' },
      { name: 'labelAngle', label: 'Nhãn góc', type: 'text', default: 'α' },
      { name: 'showForces', label: 'Hiển thị trọng lực', type: 'checkbox', default: true },
      { name: 'showNormal', label: 'Hiển thị lực pháp tuyến', type: 'checkbox', default: true },
      { name: 'showFriction', label: 'Hiển thị lực ma sát', type: 'checkbox', default: false },
      { name: 'showAngleLabel', label: 'Hiển thị nhãn góc', type: 'checkbox', default: true }
    ]
  },

  'physics-fbd': {
    fields: [
      { name: 'forceW', label: 'Độ lớn trọng lực', type: 'number', min: 0.5, max: 8, default: 3, step: 0.5 },
      { name: 'forceN', label: 'Độ lớn lực pháp tuyến', type: 'number', min: 0.5, max: 8, default: 3, step: 0.5 },
      { name: 'forceF', label: 'Độ lớn lực ma sát', type: 'number', min: 0.5, max: 8, default: 2, step: 0.5 },
      { name: 'forceT', label: 'Độ lớn lực tác dụng', type: 'number', min: 0.5, max: 8, default: 2, step: 0.5 },
      { name: 'labelW', label: 'Nhãn trọng lực', type: 'text', default: 'P' },
      { name: 'labelN', label: 'Nhãn lực pháp tuyến', type: 'text', default: 'N' },
      { name: 'labelF', label: 'Nhãn lực ma sát', type: 'text', default: 'f' },
      { name: 'labelT', label: 'Nhãn lực tác dụng', type: 'text', default: 'F' },
      { name: 'showWeight', label: 'Hiển thị trọng lực', type: 'checkbox', default: true },
      { name: 'showNormal', label: 'Hiển thị lực pháp tuyến', type: 'checkbox', default: true },
      { name: 'showFriction', label: 'Hiển thị lực ma sát', type: 'checkbox', default: true },
      { name: 'showApplied', label: 'Hiển thị lực tác dụng', type: 'checkbox', default: false }
    ]
  },

  'physics-pulley': {
    fields: [
      { name: 'mass1', label: 'Khối lượng m₁', type: 'number', min: 0.5, max: 20, default: 2, unit: 'kg' },
      { name: 'mass2', label: 'Khối lượng m₂', type: 'number', min: 0.5, max: 20, default: 3, unit: 'kg' },
      { name: 'label1', label: 'Nhãn vật 1', type: 'text', default: 'm₁' },
      { name: 'label2', label: 'Nhãn vật 2', type: 'text', default: 'm₂' },
      { name: 'showTension', label: 'Hiển thị lực căng', type: 'checkbox', default: true }
    ]
  },

  'physics-spring': {
    fields: [
      { name: 'springLength', label: 'Chiều dài lò xo', type: 'number', min: 1, max: 10, default: 3, unit: 'đơn vị' },
      { name: 'mass', label: 'Khối lượng vật', type: 'number', min: 0.1, max: 20, default: 2, unit: 'kg' },
      { name: 'labelK', label: 'Nhãn lò xo', type: 'text', default: 'k' },
      { name: 'labelM', label: 'Nhãn vật nặng', type: 'text', default: 'm' },
      { name: 'showForces', label: 'Hiển thị lực', type: 'checkbox', default: true }
    ]
  },

  'physics-convex-lens': {
    fields: [
      { name: 'focalLength', label: 'Tiêu cự f', type: 'number', min: 0.5, max: 10, default: 2.5, unit: 'đơn vị' },
      { name: 'objectDist', label: 'Khoảng cách vật d', type: 'number', min: 0.5, max: 15, default: 5, unit: 'đơn vị' },
      { name: 'objectHeight', label: 'Chiều cao vật', type: 'number', min: 0.5, max: 5, default: 2, unit: 'đơn vị' },
      { name: 'labelF', label: 'Nhãn tiêu điểm', type: 'text', default: 'F' },
      { name: 'labelO', label: 'Nhãn quang tâm', type: 'text', default: 'O' },
      { name: 'showRays', label: 'Hiển thị tia sáng', type: 'checkbox', default: true },
      { name: 'showImage', label: 'Hiển thị ảnh', type: 'checkbox', default: true }
    ]
  },

  'physics-concave-lens': {
    fields: [
      { name: 'focalLength', label: 'Tiêu cự |f|', type: 'number', min: 0.5, max: 10, default: 2.5, unit: 'đơn vị' },
      { name: 'objectDist', label: 'Khoảng cách vật d', type: 'number', min: 0.5, max: 15, default: 4, unit: 'đơn vị' },
      { name: 'objectHeight', label: 'Chiều cao vật', type: 'number', min: 0.5, max: 5, default: 2, unit: 'đơn vị' },
      { name: 'labelF', label: 'Nhãn tiêu điểm', type: 'text', default: 'F' },
      { name: 'labelO', label: 'Nhãn quang tâm', type: 'text', default: 'O' },
      { name: 'showRays', label: 'Hiển thị tia sáng', type: 'checkbox', default: true },
      { name: 'showImage', label: 'Hiển thị ảnh', type: 'checkbox', default: true }
    ]
  },

  'physics-mirror-concave': {
    fields: [
      { name: 'radius', label: 'Bán kính cong R', type: 'number', min: 1, max: 15, default: 5, unit: 'đơn vị' },
      { name: 'objectDist', label: 'Khoảng cách vật d', type: 'number', min: 0.5, max: 15, default: 6, unit: 'đơn vị' },
      { name: 'objectHeight', label: 'Chiều cao vật', type: 'number', min: 0.5, max: 5, default: 2, unit: 'đơn vị' },
      { name: 'labelF', label: 'Nhãn tiêu điểm F', type: 'text', default: 'F' },
      { name: 'labelC', label: 'Nhãn tâm cong C', type: 'text', default: 'C' },
      { name: 'labelO', label: 'Nhãn đỉnh gương', type: 'text', default: 'O' },
      { name: 'showImage', label: 'Hiển thị ảnh', type: 'checkbox', default: true }
    ]
  },

  'physics-mirror-convex': {
    fields: [
      { name: 'radius', label: 'Bán kính cong R', type: 'number', min: 1, max: 15, default: 4, unit: 'đơn vị' },
      { name: 'objectDist', label: 'Khoảng cách vật d', type: 'number', min: 0.5, max: 15, default: 5, unit: 'đơn vị' },
      { name: 'objectHeight', label: 'Chiều cao vật', type: 'number', min: 0.5, max: 5, default: 2, unit: 'đơn vị' },
      { name: 'labelF', label: 'Nhãn tiêu điểm F', type: 'text', default: 'F' },
      { name: 'labelC', label: 'Nhãn tâm cong C', type: 'text', default: 'C' },
      { name: 'labelO', label: 'Nhãn đỉnh gương', type: 'text', default: 'O' },
      { name: 'showImage', label: 'Hiển thị ảnh ảo', type: 'checkbox', default: true }
    ]
  },

  'physics-velocity-time': {
    fields: [
      { name: 'v0', label: 'Vận tốc ban đầu v₀', type: 'number', min: -10, max: 20, default: 0, unit: 'm/s' },
      { name: 'v1', label: 'Vận tốc v₁', type: 'number', min: -10, max: 20, default: 5, unit: 'm/s' },
      { name: 't1', label: 'Thời điểm t₁', type: 'number', min: 0.5, max: 20, default: 4, unit: 's' },
      { name: 'v2', label: 'Vận tốc v₂', type: 'number', min: -10, max: 20, default: 5, unit: 'm/s' },
      { name: 't2', label: 'Thời điểm t₂', type: 'number', min: 1, max: 20, default: 7, unit: 's' },
      { name: 'v3', label: 'Vận tốc v₃', type: 'number', min: -10, max: 20, default: 0, unit: 'm/s' },
      { name: 't3', label: 'Thời điểm t₃', type: 'number', min: 1, max: 30, default: 10, unit: 's' },
      { name: 'showArea', label: 'Tô màu diện tích', type: 'checkbox', default: true }
    ]
  },

  'physics-position-time': {
    fields: [
      { name: 'x0', label: 'Tọa độ ban đầu x₀', type: 'number', min: -20, max: 20, default: 0, unit: 'm' },
      { name: 'v0', label: 'Vận tốc đầu v₀', type: 'number', min: -20, max: 20, default: 3, unit: 'm/s' },
      { name: 'a', label: 'Gia tốc a', type: 'number', min: -10, max: 10, default: -0.5, step: 0.1, unit: 'm/s²' },
      { name: 'tMax', label: 'Thời gian tối đa', type: 'number', min: 1, max: 30, default: 8, unit: 's' }
    ]
  },

  'physics-electric-field-positive': {
    fields: [
      { name: 'numLines', label: 'Số đường sức', type: 'number', min: 4, max: 16, default: 8, step: 1 },
      { name: 'charge', label: 'Nhãn điện tích', type: 'text', default: '+Q' }
    ]
  },

  'physics-electric-field-negative': {
    fields: [
      { name: 'numLines', label: 'Số đường sức', type: 'number', min: 4, max: 16, default: 8, step: 1 },
      { name: 'charge', label: 'Nhãn điện tích', type: 'text', default: '−Q' }
    ]
  },

  'physics-circuit-series': {
    fields: [
      { name: 'numResistors', label: 'Số điện trở', type: 'number', min: 1, max: 4, default: 2, step: 1 },
      { name: 'labelBattery', label: 'Nhãn nguồn điện', type: 'text', default: 'E, r' },
      { name: 'labelR', label: 'Nhãn điện trở', type: 'text', default: 'R' }
    ]
  },

  'physics-circuit-parallel': {
    fields: [
      { name: 'numResistors', label: 'Số điện trở', type: 'number', min: 1, max: 4, default: 2, step: 1 },
      { name: 'labelBattery', label: 'Nhãn nguồn điện', type: 'text', default: 'E, r' },
      { name: 'labelR', label: 'Nhãn điện trở', type: 'text', default: 'R' }
    ]
  },

  // ==================== BẢNG BIẾN THIÊN ====================

  'bbt-quadratic': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -10, max: 10, step: 0.5, default: 1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -20, max: 20, step: 0.5, default: -2 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -20, max: 20, step: 0.5, default: 1 }
    ]
  },

  'bbt-cubic': {
    fields: [
      { name: 'a', label: 'Hệ số a', type: 'number', min: -5, max: 5, step: 0.5, default: 1 },
      { name: 'b', label: 'Hệ số b', type: 'number', min: -10, max: 10, step: 0.5, default: -3 },
      { name: 'c', label: 'Hệ số c', type: 'number', min: -10, max: 10, step: 0.5, default: 0 },
      { name: 'd', label: 'Hệ số d', type: 'number', min: -10, max: 10, step: 0.5, default: 2 }
    ]
  },

  'bbt-rational-11': {
    fields: [
      { name: 'numerA', label: 'Tử số: hệ số a', type: 'number', min: -10, max: 10, step: 1, default: 1 },
      { name: 'numerB', label: 'Tử số: hệ số b', type: 'number', min: -10, max: 10, step: 1, default: 0 },
      { name: 'denomC', label: 'Mẫu số: hệ số c', type: 'number', min: -10, max: 10, step: 1, default: 1 },
      { name: 'denomD', label: 'Mẫu số: hệ số d', type: 'number', min: -10, max: 10, step: 1, default: -1 }
    ]
  },

  'bbt-custom': {
    fields: [
      { name: 'critPoints', label: 'Điểm tới hạn x (cách nhau bởi dấu phẩy)', type: 'text', default: '-1, 2' },
      { name: 'intervalSigns', label: 'Dấu f\'(x) trong từng khoảng (+/-)', type: 'text', default: '+, -, +' },
      { name: 'fxAtCrits', label: 'Giá trị f(x) tại điểm tới hạn', type: 'text', default: '3, -1' },
      { name: 'fxAtLeft', label: 'Giá trị f(x) khi x→-∞', type: 'text', default: '+∞' },
      { name: 'fxAtRight', label: 'Giá trị f(x) khi x→+∞', type: 'text', default: '+∞' }
    ]
  },

  'bbt-quartic': {
    fields: [
      { name: 'a', label: 'Hệ số a (của x⁴)', type: 'number', min: -5, max: 5, step: 0.5, default: 1 },
      { name: 'b', label: 'Hệ số b (của x²)', type: 'number', min: -10, max: 10, step: 0.5, default: -3 },
      { name: 'c', label: 'Hệ số c (hằng số)', type: 'number', min: -20, max: 20, step: 0.5, default: 2 }
    ]
  },

  // ── Miền nghiệm hệ BPT bậc nhất hai ẩn ────────────────────────────────────
  'inequality-region': {
    fields: [
      { name: 'a1',    label: 'BPT 1 — hệ số a₁ (của x)', type: 'number', step: 1, default: 1 },
      { name: 'b1',    label: 'BPT 1 — hệ số b₁ (của y)', type: 'number', step: 1, default: 1 },
      { name: 'c1',    label: 'BPT 1 — vế phải c₁',       type: 'number', step: 1, default: 4 },
      { name: 'sign1', label: 'BPT 1 — dấu',               type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'a2',    label: 'BPT 2 — hệ số a₂',         type: 'number', step: 1, default: 2 },
      { name: 'b2',    label: 'BPT 2 — hệ số b₂',         type: 'number', step: 1, default: 1 },
      { name: 'c2',    label: 'BPT 2 — vế phải c₂',       type: 'number', step: 1, default: 6 },
      { name: 'sign2', label: 'BPT 2 — dấu',               type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'a3',    label: 'BPT 3 — hệ số a₃ (=0 để bỏ)', type: 'number', step: 1, default: 0 },
      { name: 'b3',    label: 'BPT 3 — hệ số b₃',         type: 'number', step: 1, default: 0 },
      { name: 'c3',    label: 'BPT 3 — vế phải c₃',       type: 'number', step: 1, default: 0 },
      { name: 'sign3', label: 'BPT 3 — dấu',               type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'xge0',     label: 'Thêm ràng buộc x ≥ 0', type: 'checkbox', default: true },
      { name: 'yge0',     label: 'Thêm ràng buộc y ≥ 0', type: 'checkbox', default: true },
      { name: 'minX',     label: 'Trục X — giá trị min',  type: 'number', step: 1, default: -1 },
      { name: 'maxX',     label: 'Trục X — giá trị max',  type: 'number', step: 1, default: 6 },
      { name: 'minY',     label: 'Trục Y — giá trị min',  type: 'number', step: 1, default: -1 },
      { name: 'maxY',     label: 'Trục Y — giá trị max',  type: 'number', step: 1, default: 6 },
      { name: 'showGrid', label: 'Hiển thị lưới',         type: 'checkbox', default: true }
    ]
  },

  // ── Bảng xét dấu ───────────────────────────────────────────────────────────
  'sign-product2': {
    fields: [
      { name: 'a1', label: 'Nhân tử 1: hệ số a₁ (a₁x + b₁)', type: 'number', step: 1, default: 1 },
      { name: 'b1', label: 'Nhân tử 1: hằng số b₁',           type: 'number', step: 1, default: -1 },
      { name: 'a2', label: 'Nhân tử 2: hệ số a₂',             type: 'number', step: 1, default: 1 },
      { name: 'b2', label: 'Nhân tử 2: hằng số b₂',           type: 'number', step: 1, default: 2 }
    ]
  },

  'sign-product3': {
    fields: [
      { name: 'a1', label: 'Nhân tử 1: hệ số a₁', type: 'number', step: 1, default: 1 },
      { name: 'b1', label: 'Nhân tử 1: hằng số b₁', type: 'number', step: 1, default: -2 },
      { name: 'a2', label: 'Nhân tử 2: hệ số a₂', type: 'number', step: 1, default: 1 },
      { name: 'b2', label: 'Nhân tử 2: hằng số b₂', type: 'number', step: 1, default: 1 },
      { name: 'a3', label: 'Nhân tử 3: hệ số a₃', type: 'number', step: 1, default: 1 },
      { name: 'b3', label: 'Nhân tử 3: hằng số b₃', type: 'number', step: 1, default: 3 }
    ]
  },

  'sign-fraction': {
    fields: [
      { name: 'a1', label: 'Tử số: hệ số a₁ (a₁x + b₁)', type: 'number', step: 1, default: 1 },
      { name: 'b1', label: 'Tử số: hằng số b₁',           type: 'number', step: 1, default: -1 },
      { name: 'a2', label: 'Mẫu số: hệ số a₂',            type: 'number', step: 1, default: 1 },
      { name: 'b2', label: 'Mẫu số: hằng số b₂',          type: 'number', step: 1, default: 2 }
    ]
  },

  // ── Miền nghiệm BPT đường tròn ─────────────────────────────────────────────
  'circle-region': {
    fields: [
      { name: 'h',        label: 'Tâm h (tọa độ x)',      type: 'number', step: 0.5, default: 0 },
      { name: 'k',        label: 'Tâm k (tọa độ y)',      type: 'number', step: 0.5, default: 0 },
      { name: 'rad',      label: 'Bán kính r',             type: 'number', min: 0.1, step: 0.5, default: 3 },
      { name: 'sign',     label: 'Dấu BPT',                type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'minX',     label: 'Trục X — min',           type: 'number', step: 1, default: -5 },
      { name: 'maxX',     label: 'Trục X — max',           type: 'number', step: 1, default: 5 },
      { name: 'minY',     label: 'Trục Y — min',           type: 'number', step: 1, default: -5 },
      { name: 'maxY',     label: 'Trục Y — max',           type: 'number', step: 1, default: 5 },
      { name: 'showGrid', label: 'Hiển thị lưới',          type: 'checkbox', default: true }
    ]
  },

  // ── Miền nghiệm BPT parabol ────────────────────────────────────────────────
  'parabola-region': {
    fields: [
      { name: 'a',        label: 'Hệ số a (y = ax² + bx + c)', type: 'number', step: 0.5, default: 1 },
      { name: 'b',        label: 'Hệ số b',                     type: 'number', step: 0.5, default: 0 },
      { name: 'c',        label: 'Hệ số c',                     type: 'number', step: 0.5, default: 0 },
      { name: 'sign',     label: 'Dấu BPT',                     type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'minX',     label: 'Trục X — min',                type: 'number', step: 1, default: -4 },
      { name: 'maxX',     label: 'Trục X — max',                type: 'number', step: 1, default: 4 },
      { name: 'minY',     label: 'Trục Y — min',                type: 'number', step: 1, default: -3 },
      { name: 'maxY',     label: 'Trục Y — max',                type: 'number', step: 1, default: 6 },
      { name: 'showGrid', label: 'Hiển thị lưới',               type: 'checkbox', default: true }
    ]
  },

  // ── Miền nghiệm hỗn hợp: đường thẳng + đường tròn ────────────────────────
  'mixed-region': {
    fields: [
      { name: 'h',          label: 'Tâm đường tròn h',          type: 'number', step: 0.5, default: 0 },
      { name: 'k',          label: 'Tâm đường tròn k',          type: 'number', step: 0.5, default: 0 },
      { name: 'rad',        label: 'Bán kính r',                 type: 'number', min: 0.1, step: 0.5, default: 2 },
      { name: 'circleSign', label: 'Dấu BPT đường tròn',        type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'a1',         label: 'BPT 1 — hệ số a₁ (x)',      type: 'number', step: 1, default: 1 },
      { name: 'b1',         label: 'BPT 1 — hệ số b₁ (y)',      type: 'number', step: 1, default: 1 },
      { name: 'c1',         label: 'BPT 1 — vế phải c₁',        type: 'number', step: 1, default: 3 },
      { name: 'sign1',      label: 'BPT 1 — dấu',               type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'a2',         label: 'BPT 2 — hệ số a₂ (=0 bỏ)', type: 'number', step: 1, default: 0 },
      { name: 'b2',         label: 'BPT 2 — hệ số b₂',          type: 'number', step: 1, default: 0 },
      { name: 'c2',         label: 'BPT 2 — vế phải c₂',        type: 'number', step: 1, default: 0 },
      { name: 'sign2',      label: 'BPT 2 — dấu',               type: 'select', options: ['≤', '≥'], default: '≤' },
      { name: 'xge0',       label: 'Thêm ràng buộc x ≥ 0',      type: 'checkbox', default: false },
      { name: 'yge0',       label: 'Thêm ràng buộc y ≥ 0',      type: 'checkbox', default: false },
      { name: 'minX',       label: 'Trục X — min',               type: 'number', step: 1, default: -4 },
      { name: 'maxX',       label: 'Trục X — max',               type: 'number', step: 1, default: 4 },
      { name: 'minY',       label: 'Trục Y — min',               type: 'number', step: 1, default: -4 },
      { name: 'maxY',       label: 'Trục Y — max',               type: 'number', step: 1, default: 4 },
      { name: 'showGrid',   label: 'Hiển thị lưới',              type: 'checkbox', default: true }
    ]
  },

  // ==================== BIỂU ĐỒ THỐNG KÊ ====================

  'bar-chart': {
    fields: [
      { name: 'labels',     label: 'Nhãn danh mục (cách nhau bằng dấu phẩy)', type: 'text', default: '2020, 2021, 2022, 2023' },
      { name: 'values',     label: 'Giá trị (cách nhau bằng dấu phẩy)',        type: 'text', default: '10, 25, 15, 30' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                          type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                              type: 'text', default: 'Năm' },
      { name: 'yLabel',     label: 'Nhãn trục y',                              type: 'text', default: 'Giá trị' },
      { name: 'showValues', label: 'Hiển thị số trên cột',                     type: 'checkbox', default: true },
      { name: 'showGrid',   label: 'Hiển thị lưới ngang',                      type: 'checkbox', default: true },
      { name: 'userYMax',   label: 'Giá trị tối đa trục Y (để trống = tự động)', type: 'text', default: '' },
      { name: 'userYStep',  label: 'Bước chia trục Y (để trống = tự động)',     type: 'text', default: '' }
    ]
  },

  'bar-chart-horizontal': {
    fields: [
      { name: 'labels',     label: 'Nhãn danh mục (cách nhau bằng dấu phẩy)', type: 'text', default: 'Toán, Văn, Anh, Lý, Hóa' },
      { name: 'values',     label: 'Giá trị (cách nhau bằng dấu phẩy)',        type: 'text', default: '8, 7, 9, 8.5, 7.5' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                          type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                              type: 'text', default: 'Điểm' },
      { name: 'yLabel',     label: 'Nhãn trục y',                              type: 'text', default: '' },
      { name: 'showValues', label: 'Hiển thị số trên cột',                     type: 'checkbox', default: true },
      { name: 'showGrid',   label: 'Hiển thị lưới dọc',                        type: 'checkbox', default: true },
      { name: 'userYMax',   label: 'Giá trị tối đa trục X (để trống = tự động)', type: 'text', default: '' },
      { name: 'userYStep',  label: 'Bước chia trục X (để trống = tự động)',     type: 'text', default: '' }
    ]
  },

  'bar-chart-grouped': {
    fields: [
      { name: 'labels',       label: 'Nhãn danh mục — năm, tháng, vùng... (cách nhau bằng dấu phẩy)', type: 'text', default: '2010, 2015, 2021' },
      { name: 'series1Values',label: 'Chuỗi 1 — giá trị (cách nhau bằng dấu phẩy)',                   type: 'text', default: '2.47, 3.17, 3.93' },
      { name: 'series2Values',label: 'Chuỗi 2 — giá trị (để trống nếu không dùng)',                   type: 'text', default: '2.73, 3.55, 4.88' },
      { name: 'series3Values',label: 'Chuỗi 3 — giá trị (để trống nếu không dùng)',                   type: 'text', default: '' },
      { name: 'series1Label', label: 'Tên chuỗi 1 (hiển thị trong chú giải)',                         type: 'text', default: 'Khai thác' },
      { name: 'series2Label', label: 'Tên chuỗi 2',                                                   type: 'text', default: 'Nuôi trồng' },
      { name: 'series3Label', label: 'Tên chuỗi 3',                                                   type: 'text', default: 'Chuỗi 3' },
      { name: 'title',        label: 'Tiêu đề biểu đồ (để trống nếu không cần)',                      type: 'text', default: '' },
      { name: 'xLabel',       label: 'Nhãn trục X (ví dụ: Năm)',                                      type: 'text', default: 'Năm' },
      { name: 'yLabel',       label: 'Nhãn trục Y (ví dụ: Sản lượng (triệu tấn))',                   type: 'text', default: '' },
      { name: 'showValues',   label: 'Hiển thị số trên mỗi cột',                                      type: 'checkbox', default: true },
      { name: 'showGrid',     label: 'Hiển thị lưới ngang',                                           type: 'checkbox', default: true },
      { name: 'showLegend',   label: 'Hiển thị chú giải (tên các chuỗi)',                             type: 'checkbox', default: true },
      { name: 'userYMax',     label: 'Giá trị tối đa trục Y (để trống = tự động)',                    type: 'text', default: '' },
      { name: 'userYStep',    label: 'Bước chia trục Y (để trống = tự động)',                         type: 'text', default: '' }
    ]
  },

  'bar-chart-stacked': {
    fields: [
      { name: 'labels',       label: 'Nhãn danh mục (cách nhau bằng dấu phẩy)',   type: 'text', default: 'Q1, Q2, Q3, Q4' },
      { name: 'series1Values',label: 'Chuỗi 1 — giá trị (cách nhau bằng dấu phẩy)', type: 'text', default: '10, 25, 15, 30' },
      { name: 'series2Values',label: 'Chuỗi 2 — giá trị (để trống nếu không dùng)', type: 'text', default: '8, 20, 18, 25' },
      { name: 'series3Values',label: 'Chuỗi 3 — giá trị (để trống nếu không dùng)', type: 'text', default: '' },
      { name: 'series1Label', label: 'Nhãn chuỗi 1',                              type: 'text', default: 'Chuỗi 1' },
      { name: 'series2Label', label: 'Nhãn chuỗi 2',                              type: 'text', default: 'Chuỗi 2' },
      { name: 'series3Label', label: 'Nhãn chuỗi 3',                              type: 'text', default: 'Chuỗi 3' },
      { name: 'title',        label: 'Tiêu đề biểu đồ',                          type: 'text', default: '' },
      { name: 'xLabel',       label: 'Nhãn trục x',                              type: 'text', default: '' },
      { name: 'yLabel',       label: 'Nhãn trục y',                              type: 'text', default: '' },
      { name: 'showValues',   label: 'Hiển thị số trong cột',                    type: 'checkbox', default: false },
      { name: 'showGrid',     label: 'Hiển thị lưới ngang',                      type: 'checkbox', default: true },
      { name: 'showLegend',   label: 'Hiển thị chú giải',                        type: 'checkbox', default: true },
      { name: 'userYMax',     label: 'Giá trị tối đa trục Y (để trống = tự động)', type: 'text', default: '' },
      { name: 'userYStep',    label: 'Bước chia trục Y (để trống = tự động)',     type: 'text', default: '' }
    ]
  },

  'line-chart': {
    fields: [
      { name: 'labels',     label: 'Nhãn danh mục (cách nhau bằng dấu phẩy)', type: 'text', default: '2019, 2020, 2021, 2022, 2023' },
      { name: 'values',     label: 'Giá trị (cách nhau bằng dấu phẩy)',        type: 'text', default: '10, 15, 12, 20, 18' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                          type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                              type: 'text', default: '' },
      { name: 'yLabel',     label: 'Nhãn trục y',                              type: 'text', default: '' },
      { name: 'showPoints', label: 'Hiển thị điểm dữ liệu',                    type: 'checkbox', default: true },
      { name: 'showValues', label: 'Hiển thị số liệu',                         type: 'checkbox', default: false },
      { name: 'showGrid',   label: 'Hiển thị lưới ngang',                      type: 'checkbox', default: true },
      { name: 'userYMax',   label: 'Giá trị tối đa trục Y (để trống = tự động)', type: 'text', default: '' },
      { name: 'userYStep',  label: 'Bước chia trục Y (để trống = tự động)',     type: 'text', default: '' }
    ]
  },

  'line-chart-multi': {
    fields: [
      { name: 'labels',       label: 'Nhãn danh mục (cách nhau bằng dấu phẩy)',   type: 'text', default: '2019, 2020, 2021, 2022, 2023' },
      { name: 'series1Values',label: 'Chuỗi 1 — giá trị (cách nhau bằng dấu phẩy)', type: 'text', default: '10, 15, 12, 20, 18' },
      { name: 'series2Values',label: 'Chuỗi 2 — giá trị (để trống nếu không dùng)', type: 'text', default: '5, 8, 10, 14, 16' },
      { name: 'series3Values',label: 'Chuỗi 3 — giá trị (để trống nếu không dùng)', type: 'text', default: '' },
      { name: 'series1Label', label: 'Nhãn chuỗi 1',                              type: 'text', default: 'Chuỗi 1' },
      { name: 'series2Label', label: 'Nhãn chuỗi 2',                              type: 'text', default: 'Chuỗi 2' },
      { name: 'series3Label', label: 'Nhãn chuỗi 3',                              type: 'text', default: 'Chuỗi 3' },
      { name: 'title',        label: 'Tiêu đề biểu đồ',                          type: 'text', default: '' },
      { name: 'xLabel',       label: 'Nhãn trục x',                              type: 'text', default: '' },
      { name: 'yLabel',       label: 'Nhãn trục y',                              type: 'text', default: '' },
      { name: 'showPoints',   label: 'Hiển thị điểm dữ liệu',                    type: 'checkbox', default: true },
      { name: 'showValues',   label: 'Hiển thị số liệu',                         type: 'checkbox', default: false },
      { name: 'showGrid',     label: 'Hiển thị lưới ngang',                      type: 'checkbox', default: true },
      { name: 'showLegend',   label: 'Hiển thị chú giải',                        type: 'checkbox', default: true },
      { name: 'userYMax',     label: 'Giá trị tối đa trục Y (để trống = tự động)', type: 'text', default: '' },
      { name: 'userYStep',    label: 'Bước chia trục Y (để trống = tự động)',     type: 'text', default: '' }
    ]
  },

  // ==================== BIỂU ĐỒ HÌNH TRÒN ====================

  'pie-chart': {
    fields: [
      { name: 'labels',      label: 'Nhãn các phần (cách nhau bằng dấu phẩy)',    type: 'text', default: 'Toán, Văn, Anh, Lý, Hóa' },
      { name: 'values',      label: 'Giá trị các phần (cách nhau bằng dấu phẩy)', type: 'text', default: '30, 20, 25, 15, 10' },
      { name: 'title',       label: 'Tiêu đề biểu đồ',                            type: 'text', default: '' },
      { name: 'radius',      label: 'Bán kính (cm)',                               type: 'number', min: 1, max: 6, step: 0.5, default: 3 },
      { name: 'showLabels',  label: 'Hiển thị nhãn trong phần',                   type: 'checkbox', default: true },
      { name: 'showPercent', label: 'Hiển thị phần trăm trong phần',              type: 'checkbox', default: true },
      { name: 'showLegend',  label: 'Hiển thị chú thích bên phải',               type: 'checkbox', default: true }
    ]
  },

  'donut-chart': {
    fields: [
      { name: 'labels',      label: 'Nhãn các phần (cách nhau bằng dấu phẩy)',    type: 'text', default: 'Toán, Văn, Anh, Lý, Hóa' },
      { name: 'values',      label: 'Giá trị các phần (cách nhau bằng dấu phẩy)', type: 'text', default: '30, 20, 25, 15, 10' },
      { name: 'title',       label: 'Tiêu đề biểu đồ',                            type: 'text', default: '' },
      { name: 'centerText',  label: 'Chữ ở giữa vòng tròn (để trống = không có)', type: 'text', default: '' },
      { name: 'radius',      label: 'Bán kính ngoài (cm)',                         type: 'number', min: 1, max: 6, step: 0.5, default: 3 },
      { name: 'innerRatio',  label: 'Tỷ lệ lỗ giữa (0.3–0.8)',                    type: 'number', min: 0.3, max: 0.8, step: 0.05, default: 0.55 },
      { name: 'showLabels',  label: 'Hiển thị nhãn trong phần',                   type: 'checkbox', default: false },
      { name: 'showPercent', label: 'Hiển thị phần trăm trong phần',              type: 'checkbox', default: true },
      { name: 'showLegend',  label: 'Hiển thị chú thích bên phải',               type: 'checkbox', default: true }
    ]
  },

  // ==================== BIỂU ĐỒ TẦN SỐ GHÉP NHÓM ====================

  'histogram': {
    fields: [
      { name: 'labels',     label: 'Nhãn khoảng — dạng [a;b) cách nhau bằng dấu phẩy', type: 'text', default: '[0;0.5), [0.5;1), [1;1.5), [1.5;2), [2;2.5)' },
      { name: 'values',     label: 'Tần số (cách nhau bằng dấu phẩy)',                  type: 'text', default: '21, 15, 33, 25, 6' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                                   type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                                       type: 'text', default: 'Thời gian (giờ)' },
      { name: 'yLabel',     label: 'Nhãn trục y',                                       type: 'text', default: 'Số học sinh' },
      { name: 'color',      label: 'Màu cột',                                           type: 'select', default: 'blue', options: ['blue', 'red', 'olive', 'orange', 'purple', 'teal'] },
      { name: 'showValues', label: 'Hiển thị số trên cột',                              type: 'checkbox', default: true },
      { name: 'showGrid',   label: 'Hiển thị lưới ngang',                               type: 'checkbox', default: true },
      { name: 'userYMax',   label: 'Giá trị tối đa trục Y (để trống = tự động)',        type: 'text', default: '' },
      { name: 'userYStep',  label: 'Bước chia trục Y (để trống = tự động)',              type: 'text', default: '' }
    ]
  },

  'histogram-relative': {
    fields: [
      { name: 'labels',     label: 'Nhãn khoảng — dạng [a;b) cách nhau bằng dấu phẩy', type: 'text', default: '[0;0.5), [0.5;1), [1;1.5), [1.5;2), [2;2.5)' },
      { name: 'values',     label: 'Tần số (cách nhau bằng dấu phẩy)',                  type: 'text', default: '21, 15, 33, 25, 6' },
      { name: 'totalN',     label: 'Tổng n (để trống = tự tính từ tần số)',             type: 'text', default: '' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                                   type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                                       type: 'text', default: 'Thời gian (giờ)' },
      { name: 'yLabel',     label: 'Nhãn trục y',                                       type: 'text', default: 'Tần suất (%)' },
      { name: 'color',      label: 'Màu cột',                                           type: 'select', default: 'blue', options: ['blue', 'red', 'olive', 'orange', 'purple', 'teal'] },
      { name: 'showValues', label: 'Hiển thị % trên cột',                               type: 'checkbox', default: true },
      { name: 'showGrid',   label: 'Hiển thị lưới ngang',                               type: 'checkbox', default: true }
    ]
  },

  'line-chart-relative': {
    fields: [
      { name: 'labels',     label: 'Nhãn khoảng — dạng [a;b), giống histogram',         type: 'text', default: '[0;0.5), [0.5;1), [1;1.5), [1.5;2), [2;2.5)' },
      { name: 'values',     label: 'Tần số (cách nhau bằng dấu phẩy)',                  type: 'text', default: '21, 15, 33, 25, 6' },
      { name: 'totalN',     label: 'Tổng n (để trống = tự tính từ tần số)',             type: 'text', default: '' },
      { name: 'title',      label: 'Tiêu đề biểu đồ',                                   type: 'text', default: '' },
      { name: 'xLabel',     label: 'Nhãn trục x',                                       type: 'text', default: 'Thời gian (giờ)' },
      { name: 'yLabel',     label: 'Nhãn trục y',                                       type: 'text', default: 'Tần suất (%)' },
      { name: 'color',      label: 'Màu đường',                                         type: 'select', default: 'blue', options: ['blue', 'red', 'olive', 'orange', 'purple', 'teal'] },
      { name: 'showPoints', label: 'Hiển thị điểm dữ liệu',                            type: 'checkbox', default: true },
      { name: 'showValues', label: 'Hiển thị % tại điểm',                               type: 'checkbox', default: true },
      { name: 'showGrid',   label: 'Hiển thị lưới ngang',                               type: 'checkbox', default: true }
    ]
  },

  // ==================== BÀI TOÁN THỰC TẾ ====================
  'lighthouse-elevation': {
    fields: [
      { name: 'distanceAB', label: 'Khoảng cách AB', type: 'text', default: '30 m' },
      { name: 'angleA', label: 'Góc tại điểm A (°)', type: 'number', min: 5, max: 85, default: 45, unit: '°' },
      { name: 'angleB', label: 'Góc tại điểm B (°)', type: 'number', min: 5, max: 85, default: 75, unit: '°' },
      { name: 'objectType', label: 'Vật thể cần tính chiều cao', type: 'select', default: 'lighthouse', options: [
          { value: 'lighthouse', label: 'Ngọn hải đăng (Sọc đỏ - trắng)' },
          { value: 'building', label: 'Tòa nhà cao tầng' },
          { value: 'tower', label: 'Tháp truyền hình' },
          { value: 'flagpole', label: 'Cột cờ' }
        ]
      },
      { name: 'bgType', label: 'Bối cảnh cảnh vật', type: 'select', default: 'sea-sky', options: [
          { value: 'sea-sky', label: 'Bờ biển & Bầu trời' },
          { value: 'land-sky', label: 'Mặt đất & Bầu trời' },
          { value: 'simple', label: 'Đơn giản (chỉ có đường đất)' }
        ]
      },
      { name: 'labelA', label: 'Nhãn điểm A', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn điểm B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn đỉnh C', type: 'text', default: 'C' },
      { name: 'labelH', label: 'Nhãn chân H', type: 'text', default: 'H' },
      { name: 'labelHeight', label: 'Nhãn chiều cao', type: 'text', default: 'h = ?' }
    ]
  },

  'tree-shadow': {
    fields: [
      { name: 'shadowLength', label: 'Chiều dài bóng râm', type: 'text', default: '12 m' },
      { name: 'angleSun', label: 'Góc mặt trời (°)', type: 'number', min: 10, max: 80, default: 60, unit: '°' },
      { name: 'objectType', label: 'Loại cây / Vật thể', type: 'select', default: 'tree', options: [
          { value: 'tree', label: 'Cây xanh' },
          { value: 'flagpole', label: 'Cột cờ' }
        ]
      },
      { name: 'labelA', label: 'Nhãn điểm A (bóng râm)', type: 'text', default: 'A' },
      { name: 'labelB', label: 'Nhãn gốc B', type: 'text', default: 'B' },
      { name: 'labelC', label: 'Nhãn ngọn C', type: 'text', default: 'C' },
      { name: 'labelHeight', label: 'Nhãn chiều cao', type: 'text', default: 'h = ?' }
    ]
  },

  'two-ships-distance': {
    fields: [
      { name: 'towerHeight', label: 'Chiều cao đài quan sát', type: 'text', default: '50 m' },
      { name: 'angleDepressionA', label: 'Góc hạ tới Tàu A (°)', type: 'number', min: 5, max: 80, default: 30, unit: '°' },
      { name: 'angleDepressionB', label: 'Góc hạ tới Tàu B (°)', type: 'number', min: 5, max: 80, default: 45, unit: '°' },
      { name: 'labelA', label: 'Nhãn tàu A', type: 'text', default: 'Tàu A' },
      { name: 'labelB', label: 'Nhãn tàu B', type: 'text', default: 'Tàu B' },
      { name: 'labelDist', label: 'Nhãn khoảng cách', type: 'text', default: 'd = ?' }
    ]
  }
};

// Helper function để lấy schema theo shape id
// Các shape đồ thị hàm số hỗ trợ keyPoints
const GRAPH_SHAPE_IDS = new Set([
  'linear', 'quadratic', 'cubic', 'quartic', 'polynomial-general',
  'hyperbola', 'rational-linear', 'rational-general',
  'sine', 'cosine', 'tangent', 'trig-transform', 'trig-combination',
  'exponential', 'exponential-e', 'logarithm', 'natural-log',
  'absolute-linear', 'absolute-quadratic', 'absolute-composite',
  'parametric-circle', 'parametric-ellipse', 'parametric-general'
]);

const KEY_POINTS_FIELD = {
  name: 'keyPoints',
  label: 'Điểm đặc biệt (VD: A(1;2), B(-1;3))',
  type: 'text',
  default: ''
};

export function getFormSchema(shapeId) {
  const schema = FORM_SCHEMAS[shapeId];
  if (!schema) return null;
  if (GRAPH_SHAPE_IDS.has(shapeId)) {
    return { ...schema, fields: [...schema.fields, KEY_POINTS_FIELD] };
  }
  return schema;
}

// Helper function để lấy giá trị mặc định
export function getDefaultValues(shapeId) {
  const schema = FORM_SCHEMAS[shapeId];
  if (!schema) return {};

  const defaults = {};
  schema.fields.forEach(field => {
    defaults[field.name] = field.default;
  });
  return defaults;
}
