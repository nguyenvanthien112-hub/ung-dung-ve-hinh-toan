// Hệ thống phân loại hình toán học từ lớp 6-12
export const SHAPE_CATEGORIES = {
  'plane-geometry': {
    id: 'plane-geometry',
    name: 'Hình học phẳng',
    icon: '📐',
    subcategories: {
      'triangles': {
        id: 'triangles',
        name: 'Tam giác',
        shapes: [
          { id: 'triangle-general', name: 'Tam giác thường', description: 'Tam giác bất kỳ với 3 cạnh hoặc 2 cạnh + 1 góc' },
          { id: 'triangle-right', name: 'Tam giác vuông', description: 'Tam giác có một góc vuông 90°' },
          { id: 'triangle-isosceles', name: 'Tam giác cân', description: 'Tam giác có 2 cạnh bằng nhau' },
          { id: 'triangle-equilateral', name: 'Tam giác đều', description: 'Tam giác có 3 cạnh bằng nhau' },
          { id: 'triangle-inscribed', name: 'Tam giác nội tiếp', description: 'Tam giác nội tiếp đường tròn' },
          { id: 'triangle-circumscribed', name: 'Tam giác ngoại tiếp', description: 'Tam giác ngoại tiếp đường tròn' },
          { id: 'triangle-with-medians', name: 'Tam giác với đường trung tuyến', description: 'Tam giác kèm các đường trung tuyến' },
          { id: 'triangle-with-altitudes', name: 'Tam giác với đường cao', description: 'Tam giác kèm các đường cao' },
          { id: 'triangle-with-bisectors', name: 'Tam giác với đường phân giác', description: 'Tam giác kèm các đường phân giác' }
        ]
      },
      'quadrilaterals': {
        id: 'quadrilaterals',
        name: 'Tứ giác',
        shapes: [
          { id: 'square', name: 'Hình vuông', description: '4 cạnh bằng nhau, 4 góc vuông' },
          { id: 'rectangle', name: 'Hình chữ nhật', description: '4 góc vuông, 2 cặp cạnh đối bằng nhau' },
          { id: 'rhombus', name: 'Hình thoi', description: '4 cạnh bằng nhau' },
          { id: 'parallelogram', name: 'Hình bình hành', description: '2 cặp cạnh đối song song và bằng nhau' },
          { id: 'trapezoid', name: 'Hình thang', description: 'Có 1 cặp cạnh đối song song' },
          { id: 'isosceles-trapezoid', name: 'Hình thang cân', description: 'Hình thang có 2 cạnh bên bằng nhau' },
          { id: 'kite', name: 'Hình diều', description: '2 cặp cạnh kề bằng nhau' },
          { id: 'quadrilateral-general', name: 'Tứ giác bất kỳ', description: 'Tứ giác với 4 đỉnh tùy ý' }
        ]
      },
      'circles': {
        id: 'circles',
        name: 'Đường tròn',
        shapes: [
          { id: 'circle-basic', name: 'Đường tròn cơ bản', description: 'Đường tròn tâm O bán kính R' },
          { id: 'circle-chord', name: 'Đường tròn với dây cung', description: 'Đường tròn và dây cung AB' },
          { id: 'circle-tangent', name: 'Tiếp tuyến đường tròn', description: 'Đường tròn và tiếp tuyến từ điểm ngoài' },
          { id: 'circle-secant', name: 'Cát tuyến đường tròn', description: 'Đường thẳng cắt đường tròn tại 2 điểm' },
          { id: 'two-circles-intersect', name: 'Hai đường tròn cắt nhau', description: '2 đường tròn cắt nhau tại 2 điểm' },
          { id: 'two-circles-tangent-external', name: 'Hai đường tròn tiếp xúc ngoài', description: '2 đường tròn tiếp xúc ngoài' },
          { id: 'two-circles-tangent-internal', name: 'Hai đường tròn tiếp xúc trong', description: '2 đường tròn tiếp xúc trong' },
          { id: 'circle-sector', name: 'Hình quạt', description: 'Hình quạt tròn với góc ở tâm' },
          { id: 'circle-segment', name: 'Hình viên phân', description: 'Phần hình tròn giới hạn bởi dây cung và cung tròn' }
        ]
      },
      'polygons': {
        id: 'polygons',
        name: 'Đa giác',
        shapes: [
          { id: 'pentagon', name: 'Ngũ giác', description: 'Đa giác 5 cạnh' },
          { id: 'pentagon-regular', name: 'Ngũ giác đều', description: 'Ngũ giác đều 5 cạnh bằng nhau' },
          { id: 'hexagon', name: 'Lục giác', description: 'Đa giác 6 cạnh' },
          { id: 'hexagon-regular', name: 'Lục giác đều', description: 'Lục giác đều 6 cạnh bằng nhau' },
          { id: 'octagon-regular', name: 'Bát giác đều', description: 'Bát giác đều 8 cạnh bằng nhau' },
          { id: 'polygon-regular', name: 'Đa giác đều n cạnh', description: 'Đa giác đều với n cạnh bằng nhau' }
        ]
      }
    }
  },
  'solid-geometry': {
    id: 'solid-geometry',
    name: 'Hình học không gian',
    icon: '📦',
    subcategories: {
      'pyramids': {
        id: 'pyramids',
        name: 'Hình chóp',
        shapes: [
          { id: 'pyramid-triangular', name: 'Hình chóp tam giác', description: 'Hình chóp đáy tam giác (tứ diện)' },
          { id: 'pyramid-square', name: 'Hình chóp tứ giác', description: 'Hình chóp đáy tứ giác' },
          { id: 'pyramid-regular', name: 'Hình chóp đều', description: 'Hình chóp có đáy là đa giác đều, đỉnh chiếu vuông góc xuống tâm đáy' },
          { id: 'pyramid-truncated', name: 'Hình chóp cụt', description: 'Hình chóp bị cắt bởi mặt phẳng song song với đáy' }
        ]
      },
      'prisms': {
        id: 'prisms',
        name: 'Lăng trụ',
        shapes: [
          { id: 'prism-triangular', name: 'Lăng trụ tam giác', description: 'Lăng trụ có đáy là tam giác' },
          { id: 'prism-quadrilateral', name: 'Lăng trụ tứ giác', description: 'Lăng trụ có đáy là tứ giác' },
          { id: 'prism-hexagonal', name: 'Lăng trụ lục giác', description: 'Lăng trụ có đáy là lục giác' },
          { id: 'box', name: 'Hình hộp chữ nhật', description: 'Hình hộp có 6 mặt đều là hình chữ nhật' },
          { id: 'cube', name: 'Hình lập phương', description: 'Hình hộp có 6 mặt đều là hình vuông bằng nhau' }
        ]
      },
      'revolution': {
        id: 'revolution',
        name: 'Hình tròn xoay',
        shapes: [
          { id: 'cylinder', name: 'Hình trụ', description: 'Hình tròn xoay tạo bởi hình chữ nhật quay quanh một cạnh' },
          { id: 'cone', name: 'Hình nón', description: 'Hình tròn xoay tạo bởi tam giác vuông quay quanh cạnh góc vuông' },
          { id: 'cone-truncated', name: 'Hình nón cụt', description: 'Hình nón bị cắt bởi mặt phẳng song song với đáy' },
          { id: 'sphere', name: 'Hình cầu', description: 'Hình tròn xoay tạo bởi nửa đường tròn quay quanh đường kính' },
          { id: 'sphere-section', name: 'Mặt cắt hình cầu', description: 'Hình cầu với mặt phẳng cắt' }
        ]
      },
      'planes-lines': {
        id: 'planes-lines',
        name: 'Mặt phẳng & Đường thẳng',
        shapes: [
          { id: 'plane-basic', name: 'Mặt phẳng', description: 'Mặt phẳng trong không gian' },
          { id: 'line-plane-intersect', name: 'Đường thẳng cắt mặt phẳng', description: 'Giao tuyến của đường thẳng và mặt phẳng' },
          { id: 'two-planes-intersect', name: 'Hai mặt phẳng cắt nhau', description: 'Giao tuyến của 2 mặt phẳng' },
          { id: 'line-perpendicular-plane', name: 'Đường thẳng vuông góc mặt phẳng', description: 'Đường thẳng vuông góc với mặt phẳng' }
        ]
      }
    }
  },
  'graphs': {
    id: 'graphs',
    name: 'Đồ thị hàm số',
    icon: '📈',
    subcategories: {
      'polynomial': {
        id: 'polynomial',
        name: 'Hàm đa thức',
        shapes: [
          { id: 'linear', name: 'Hàm bậc nhất', description: 'y = ax + b (đường thẳng)' },
          { id: 'quadratic', name: 'Hàm bậc hai', description: 'y = ax² + bx + c (parabol)' },
          { id: 'cubic', name: 'Hàm bậc ba', description: 'y = ax³ + bx² + cx + d' },
          { id: 'quartic', name: 'Hàm bậc bốn', description: 'y = ax⁴ + bx² + c' },
          { id: 'polynomial-general', name: 'Đa thức bậc cao', description: 'Đa thức bậc n' }
        ]
      },
      'rational': {
        id: 'rational',
        name: 'Hàm phân thức',
        shapes: [
          { id: 'hyperbola', name: 'Hàm số y = k/x', description: 'Đồ thị hypebol' },
          { id: 'rational-linear', name: 'Phân thức bậc nhất/bậc nhất', description: 'y = (ax+b)/(cx+d)' },
          { id: 'rational-general', name: 'Phân thức tổng quát', description: 'y = P(x)/Q(x)' }
        ]
      },
      'trigonometric': {
        id: 'trigonometric',
        name: 'Hàm lượng giác',
        shapes: [
          { id: 'sine', name: 'Hàm sin', description: 'y = sin(x)' },
          { id: 'cosine', name: 'Hàm cos', description: 'y = cos(x)' },
          { id: 'tangent', name: 'Hàm tan', description: 'y = tan(x)' },
          { id: 'trig-transform', name: 'Hàm lượng giác biến đổi', description: 'y = A·sin(Bx + C) + D' },
          { id: 'trig-combination', name: 'Tổ hợp lượng giác', description: 'y = a·sin(x) + b·cos(x)' }
        ]
      },
      'exponential': {
        id: 'exponential',
        name: 'Hàm mũ & Logarit',
        shapes: [
          { id: 'exponential', name: 'Hàm mũ', description: 'y = a^x' },
          { id: 'exponential-e', name: 'Hàm e^x', description: 'y = e^x' },
          { id: 'logarithm', name: 'Hàm logarit', description: 'y = log_a(x)' },
          { id: 'natural-log', name: 'Hàm ln', description: 'y = ln(x)' }
        ]
      },
      'absolute': {
        id: 'absolute',
        name: 'Hàm trị tuyệt đối',
        shapes: [
          { id: 'absolute-linear', name: 'Trị tuyệt đối bậc nhất', description: 'y = |ax + b|' },
          { id: 'absolute-quadratic', name: 'Trị tuyệt đối bậc hai', description: 'y = |ax² + bx + c|' },
          { id: 'absolute-composite', name: 'Hàm hợp trị tuyệt đối', description: 'y = |f(x)|' }
        ]
      },
      'parametric': {
        id: 'parametric',
        name: 'Đường cong tham số',
        shapes: [
          { id: 'parametric-circle', name: 'Đường tròn tham số', description: 'x = r·cos(t), y = r·sin(t)' },
          { id: 'parametric-ellipse', name: 'Elip tham số', description: 'x = a·cos(t), y = b·sin(t)' },
          { id: 'parametric-general', name: 'Đường cong tham số tổng quát', description: 'x = f(t), y = g(t)' }
        ]
      }
    }
  },
  'vectors': {
    id: 'vectors',
    name: 'Vectơ & Tọa độ',
    icon: '➡️',
    subcategories: {
      'plane-vectors': {
        id: 'plane-vectors',
        name: 'Vectơ trong mặt phẳng',
        shapes: [
          { id: 'vector-2d', name: 'Vectơ 2D', description: 'Vectơ trong mặt phẳng Oxy' },
          { id: 'vector-sum', name: 'Tổng vectơ', description: 'Quy tắc hình bình hành' },
          { id: 'vector-difference', name: 'Hiệu vectơ', description: 'Vectơ hiệu' },
          { id: 'vector-dot-product', name: 'Tích vô hướng', description: 'Góc giữa 2 vectơ' },
          { id: 'vector-projection', name: 'Hình chiếu vectơ', description: 'Hình chiếu của vectơ lên trục' }
        ]
      },
      'space-vectors': {
        id: 'space-vectors',
        name: 'Vectơ trong không gian',
        shapes: [
          { id: 'vector-3d', name: 'Vectơ 3D', description: 'Vectơ trong không gian Oxyz' },
          { id: 'vector-3d-sum', name: 'Tổng vectơ 3D', description: 'Quy tắc hình hộp' },
          { id: 'vector-cross-product', name: 'Tích có hướng', description: 'Vectơ pháp tuyến' },
          { id: 'coordinate-system-3d', name: 'Hệ tọa độ Oxyz', description: 'Hệ trục tọa độ không gian' }
        ]
      }
    }
  },
  'physics': {
    id: 'physics',
    name: 'Vật lý',
    icon: '⚡',
    subcategories: {
      'mechanics': {
        id: 'mechanics',
        name: 'Lực học',
        shapes: [
          { id: 'physics-inclined-plane', name: 'Mặt phẳng nghiêng', description: 'Vật trên mặt phẳng nghiêng với các lực tác dụng' },
          { id: 'physics-fbd', name: 'Sơ đồ lực (FBD)', description: 'Sơ đồ các lực tác dụng lên vật' },
          { id: 'physics-pulley', name: 'Ròng rọc', description: 'Hệ thống ròng rọc với hai vật' },
          { id: 'physics-spring', name: 'Lò xo', description: 'Lò xo treo vật với các lực đàn hồi' }
        ]
      },
      'optics': {
        id: 'optics',
        name: 'Quang học',
        shapes: [
          { id: 'physics-convex-lens', name: 'Thấu kính hội tụ', description: 'Thấu kính lồi với tia sáng và ảnh' },
          { id: 'physics-concave-lens', name: 'Thấu kính phân kỳ', description: 'Thấu kính lõm với tia sáng và ảnh ảo' },
          { id: 'physics-mirror-concave', name: 'Gương cầu lõm', description: 'Gương cầu lõm với tia phản xạ và ảnh' },
          { id: 'physics-mirror-convex', name: 'Gương cầu lồi', description: 'Gương cầu lồi với tia phản xạ và ảnh ảo' }
        ]
      },
      'kinematics': {
        id: 'kinematics',
        name: 'Đồ thị động học',
        shapes: [
          { id: 'physics-velocity-time', name: 'Đồ thị v-t', description: 'Đồ thị vận tốc theo thời gian' },
          { id: 'physics-position-time', name: 'Đồ thị x-t', description: 'Đồ thị vị trí theo thời gian' }
        ]
      },
      'electricity': {
        id: 'electricity',
        name: 'Điện học',
        shapes: [
          { id: 'physics-electric-field-positive', name: 'Điện trường điện tích dương', description: 'Đường sức điện trường từ điện tích dương' },
          { id: 'physics-electric-field-negative', name: 'Điện trường điện tích âm', description: 'Đường sức điện trường vào điện tích âm' },
          { id: 'physics-circuit-series', name: 'Mạch điện nối tiếp', description: 'Mạch điện gồm các điện trở nối tiếp' },
          { id: 'physics-circuit-parallel', name: 'Mạch điện song song', description: 'Mạch điện gồm các điện trở song song' }
        ]
      }
    }
  },
  'variation-table': {
    id: 'variation-table',
    name: 'Bảng biến thiên',
    icon: '📊',
    subcategories: {
      'bbt-auto': {
        id: 'bbt-auto',
        name: 'Tự động theo hàm số',
        shapes: [
          { id: 'bbt-quadratic', name: 'BBT Hàm bậc hai', description: 'y = ax² + bx + c' },
          { id: 'bbt-cubic', name: 'BBT Hàm bậc ba', description: 'y = ax³ + bx² + cx + d' },
          { id: 'bbt-quartic', name: 'BBT Hàm bậc bốn', description: 'y = ax⁴ + bx² + c' },
          { id: 'bbt-rational-11', name: 'BBT Phân thức bậc nhất/bậc nhất', description: 'y = (ax+b)/(cx+d)' }
        ]
      },
      'bbt-manual': {
        id: 'bbt-manual',
        name: 'Tùy chỉnh',
        shapes: [
          { id: 'bbt-custom', name: 'BBT Tùy chỉnh', description: 'Nhập tự do các giá trị x, dấu f\', giá trị f(x)' }
        ]
      },
      'sign-table': {
        id: 'sign-table',
        name: 'Bảng xét dấu',
        shapes: [
          { id: 'sign-product2', name: 'Tích hai nhân tử', description: 'f(x) = (a₁x+b₁)(a₂x+b₂)' },
          { id: 'sign-product3', name: 'Tích ba nhân tử', description: 'f(x) = (a₁x+b₁)(a₂x+b₂)(a₃x+b₃)' },
          { id: 'sign-fraction', name: 'Phân thức bậc nhất/bậc nhất', description: 'f(x) = (a₁x+b₁)/(a₂x+b₂)' }
        ]
      }
    }
  },

  'charts': {
    id: 'charts',
    name: 'Biểu đồ thống kê',
    icon: '📊',
    subcategories: {
      'bar-charts': {
        id: 'bar-charts',
        name: 'Biểu đồ cột',
        shapes: [
          { id: 'bar-chart',            name: 'Biểu đồ cột đứng',   description: 'Biểu đồ cột thẳng đứng, một chuỗi dữ liệu' },
          { id: 'bar-chart-horizontal', name: 'Biểu đồ cột ngang',  description: 'Biểu đồ cột nằm ngang, một chuỗi dữ liệu' },
          { id: 'bar-chart-grouped',    name: 'Biểu đồ cột nhóm',   description: 'Nhiều chuỗi dữ liệu đặt cạnh nhau theo nhóm' },
          { id: 'bar-chart-stacked',    name: 'Biểu đồ cột chồng',  description: 'Nhiều chuỗi dữ liệu xếp chồng lên nhau' }
        ]
      },
      'line-charts': {
        id: 'line-charts',
        name: 'Biểu đồ đoạn thẳng',
        shapes: [
          { id: 'line-chart',       name: 'Biểu đồ đường',              description: 'Biểu đồ đoạn thẳng nối các điểm dữ liệu' },
          { id: 'line-chart-multi', name: 'Biểu đồ đường nhiều chuỗi',  description: 'Nhiều đường dữ liệu trên cùng một biểu đồ' }
        ]
      },
      'pie-charts': {
        id: 'pie-charts',
        name: 'Biểu đồ hình tròn',
        shapes: [
          { id: 'pie-chart',   name: 'Biểu đồ tròn',   description: 'Biểu đồ hình tròn phân chia theo tỷ lệ phần trăm' },
          { id: 'donut-chart', name: 'Biểu đồ donut',  description: 'Biểu đồ hình tròn có lỗ giữa (donut/ring chart)' }
        ]
      },
      'frequency-charts': {
        id: 'frequency-charts',
        name: 'Biểu đồ tần số',
        shapes: [
          { id: 'histogram',          name: 'Biểu đồ tần số ghép nhóm',                      description: 'Biểu đồ cột sát nhau, trục Y là tần số (số lượng)' },
          { id: 'histogram-relative', name: 'Biểu đồ tần số tương đối ghép nhóm (cột)',       description: 'Biểu đồ cột sát nhau, trục Y là tỷ lệ phần trăm' },
          { id: 'line-chart-relative', name: 'Biểu đồ tần số tương đối ghép nhóm (đoạn thẳng)', description: 'Biểu đồ đường, trục Y là tỷ lệ phần trăm, điểm giữa các khoảng' }
        ]
      }
    }
  },

  'inequality': {
    id: 'inequality',
    name: 'Bất phương trình',
    icon: '📉',
    subcategories: {
      'inequality-region': {
        id: 'inequality-region',
        name: 'Miền nghiệm',
        shapes: [
          { id: 'inequality-region', name: 'Miền nghiệm hệ BPT bậc nhất', description: 'Hệ BPT bậc nhất hai ẩn (tối đa 3 BPT + x≥0, y≥0)' },
          { id: 'circle-region', name: 'Miền nghiệm BPT đường tròn', description: '(x-h)² + (y-k)² ≤ r² hoặc ≥ r²' },
          { id: 'parabola-region', name: 'Miền nghiệm BPT parabol', description: 'y ≤ ax² + bx + c hoặc y ≥ ax² + bx + c' },
          { id: 'mixed-region', name: 'Miền nghiệm hỗn hợp', description: 'Hệ BPT: đường thẳng + đường tròn' }
        ]
      }
    }
  },

  'real-world': {
    id: 'real-world',
    name: 'Bài toán thực tế',
    icon: '🏞️',
    subcategories: {
      'trig-applications': {
        id: 'trig-applications',
        name: 'Ứng dụng Lượng giác & Khoảng cách',
        shapes: [
          { id: 'lighthouse-elevation', name: 'Ngọn hải đăng / Tòa nhà (2 góc quan sát)', description: 'Quan sát ngọn hải đăng/tòa nhà từ 2 vị trí A và B (góc nghiêng α, β)' },
          { id: 'tree-shadow', name: 'Chiều cao cây / Cột cờ (Bóng râm)', description: 'Bài toán bóng râm và góc nâng mặt trời' },
          { id: 'two-ships-distance', name: 'Hai con tàu trên biển', description: 'Từ đỉnh đài quan sát nhìn xuống 2 con tàu' }
        ]
      }
    }
  }
};

// Helper function để lấy tất cả shapes dưới dạng flat array
export function getAllShapes() {
  const shapes = [];
  Object.values(SHAPE_CATEGORIES).forEach(category => {
    Object.values(category.subcategories).forEach(subcategory => {
      subcategory.shapes.forEach(shape => {
        shapes.push({
          ...shape,
          categoryId: category.id,
          categoryName: category.name,
          subcategoryId: subcategory.id,
          subcategoryName: subcategory.name
        });
      });
    });
  });
  return shapes;
}

// Helper function để tìm shape theo id
export function getShapeById(shapeId) {
  const allShapes = getAllShapes();
  return allShapes.find(shape => shape.id === shapeId);
}

// Helper function để lấy tất cả shapes trong một category
export function getShapesByCategory(categoryId) {
  const category = SHAPE_CATEGORIES[categoryId];
  if (!category) return [];

  const shapes = [];
  Object.values(category.subcategories).forEach(subcategory => {
    shapes.push(...subcategory.shapes.map(shape => ({
      ...shape,
      subcategoryId: subcategory.id,
      subcategoryName: subcategory.name
    })));
  });
  return shapes;
}

// Helper function để lấy tất cả shapes trong một subcategory
export function getShapesBySubcategory(categoryId, subcategoryId) {
  const category = SHAPE_CATEGORIES[categoryId];
  if (!category) return [];

  const subcategory = category.subcategories[subcategoryId];
  if (!subcategory) return [];

  return subcategory.shapes;
}
