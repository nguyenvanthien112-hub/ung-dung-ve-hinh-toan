// Generator registry - map shape IDs to their generator functions

import {
  generateTriangle,
  generateRightTriangle,
  generateIsoscelesTriangle,
  generateEquilateralTriangle,
  generateInscribedTriangle,
  generateCircumscribedTriangle,
  generateSquare,
  generateRectangle,
  generateRhombus,
  generateParallelogram,
  generateTrapezoid,
  generateKite,
  generateQuadrilateralGeneral,
  generateRegularPolygon,
  generateCircle,
  generateCircleChord,
  generateTangentCircle,
  generateCircleSecant,
  generateTwoCirclesIntersect,
  generateTwoCirclesTangentExternal,
  generateTwoCirclesTangentInternal,
  generateCircleSector,
  generateCircleSegment,
  generateTriangleWithMedians,
  generateTriangleWithAltitudes,
  generateTriangleWithBisectors
} from './planeGeometry.js';

import {
  generatePyramid,
  generateTruncatedPyramid,
  generatePrism,
  generateCube,
  generateBox,
  generateCylinder,
  generateCone,
  generateTruncatedCone,
  generateSphere,
  generateSphereSection,
  generatePlaneBasic,
  generateLinePlaneIntersect,
  generateTwoPlanesIntersect,
  generateLinePerpendicularPlane
} from './solidGeometry.js';

import {
  generateBBTQuadratic,
  generateBBTCubic,
  generateBBTQuartic,
  generateBBTRational11,
  generateBBTCustom
} from './variationTable.js';

import {
  generateLinearGraph,
  generateQuadraticGraph,
  generateCubicGraph,
  generateHyperbolaGraph,
  generateRationalLinearGraph,
  generateTrigCombinationGraph,
  generateQuarticGraph,
  generateSineGraph,
  generateCosineGraph,
  generateTangentGraph,
  generateExponentialGraph,
  generateLogarithmGraph,
  generateAbsoluteLinearGraph,
  generateAbsoluteGraph,
  generateVector2D,
  generateVectorSum,
  generateVectorDifference,
  generateVectorDotProduct,
  generateVectorProjection,
  generateVector3D,
  generateVector3DSum,
  generateVectorCrossProduct,
  generateCoordinateSystem3D,
  generateParametricCircle,
  generateParametricEllipse,
  generateParametricGeneral
} from './graphs.js';

import {
  generateInclinedPlane,
  generateFreeBodyDiagram,
  generatePulley,
  generateSpringSystem,
  generateConvexLens,
  generateConcaveLens,
  generateConcaveMirror,
  generateConvexMirror,
  generateVelocityTimeGraph,
  generatePositionTimeGraph,
  generateElectricFieldPositive,
  generateElectricFieldNegative,
  generateCircuitSeries,
  generateCircuitParallel
} from './physics.js';

import {
  generateLighthouseElevation,
  generateTreeShadow,
  generateTwoShipsDistance
} from './realWorldGeometry.js';

import { generateInequalityRegion, generateCircleRegion, generateParabolaRegion, generateMixedRegion } from './inequalities.js';

import {
  generateBarChart,
  generateBarChartHorizontal,
  generateBarChartGrouped,
  generateBarChartStacked,
  generateLineChart,
  generateLineChartMulti,
  generatePieChart,
  generateDonutChart,
  generateHistogram,
  generateHistogramRelative,
  generateLineChartRelative
} from './charts.js';

import {
  generateSignProduct2,
  generateSignProduct3,
  generateSignFraction
} from './signTable.js';

import { getFormSchema } from '../data/formSchemas.js';
import { parseKeyPoints, renderKeyPoints } from './utils.js';

// Wrap a graph generator to support keyPoints param ("A(1;2), B(2;3)")
function withKeyPoints(generator) {
  return function(params) {
    const code = generator(params);
    const pts = parseKeyPoints(params.keyPoints || '');
    if (!pts.length) return code;
    const ptCode = '\n\n  // Điểm đặc biệt\n' + renderKeyPoints(pts) + '\n';
    const lastClose = code.lastIndexOf('})');
    if (lastClose === -1) return code;
    return code.slice(0, lastClose) + ptCode + code.slice(lastClose);
  };
}

const GENERATOR_MAP = {
  // Tam giác
  'triangle-general': generateTriangle,
  'triangle-right': generateRightTriangle,
  'triangle-isosceles': generateIsoscelesTriangle,
  'triangle-equilateral': generateEquilateralTriangle,
  'triangle-inscribed': generateInscribedTriangle,
  'triangle-circumscribed': generateCircumscribedTriangle,
  'triangle-with-medians': generateTriangleWithMedians,
  'triangle-with-altitudes': generateTriangleWithAltitudes,
  'triangle-with-bisectors': generateTriangleWithBisectors,

  // Tứ giác
  'square': generateSquare,
  'rectangle': generateRectangle,
  'rhombus': generateRhombus,
  'parallelogram': generateParallelogram,
  'trapezoid': generateTrapezoid,
  'isosceles-trapezoid': generateTrapezoid,
  'kite': generateKite,
  'quadrilateral-general': generateQuadrilateralGeneral,

  // Đường tròn
  'circle-basic': generateCircle,
  'circle-chord': generateCircleChord,
  'circle-tangent': generateTangentCircle,
  'circle-secant': generateCircleSecant,
  'two-circles-intersect': generateTwoCirclesIntersect,
  'two-circles-tangent-external': generateTwoCirclesTangentExternal,
  'two-circles-tangent-internal': generateTwoCirclesTangentInternal,
  'circle-sector': generateCircleSector,
  'circle-segment': generateCircleSegment,

  // Đa giác
  'pentagon': (p) => generateRegularPolygon({ ...p, sides: 5 }),
  'pentagon-regular': (p) => generateRegularPolygon({ ...p, sides: 5 }),
  'hexagon': (p) => generateRegularPolygon({ ...p, sides: 6 }),
  'hexagon-regular': (p) => generateRegularPolygon({ ...p, sides: 6 }),
  'octagon-regular': (p) => generateRegularPolygon({ ...p, sides: 8 }),
  'polygon-regular': generateRegularPolygon,

  // Hình không gian - Chóp
  'pyramid-triangular': (params) => generatePyramid({ ...params, baseType: 'triangular' }),
  'pyramid-square': (params) => generatePyramid({ ...params, baseType: 'square' }),
  'pyramid-regular': (params) => generatePyramid({ ...params, baseType: 'square' }),
  'pyramid-truncated': generateTruncatedPyramid,

  // Lăng trụ
  'prism-triangular': (params) => generatePrism({ ...params, baseType: 'triangular' }),
  'prism-quadrilateral': generateBox,
  'prism-hexagonal': (params) => generatePrism({ ...params, baseType: 'hexagonal' }),
  'box': generateBox,
  'cube': generateCube,

  // Hình tròn xoay
  'cylinder': generateCylinder,
  'cone': generateCone,
  'cone-truncated': generateTruncatedCone,
  'sphere': generateSphere,
  'sphere-section': generateSphereSection,

  // Mặt phẳng & Đường thẳng
  'plane-basic': generatePlaneBasic,
  'line-plane-intersect': generateLinePlaneIntersect,
  'two-planes-intersect': generateTwoPlanesIntersect,
  'line-perpendicular-plane': generateLinePerpendicularPlane,

  // Đồ thị hàm số
  'linear': withKeyPoints(generateLinearGraph),
  'quadratic': withKeyPoints(generateQuadraticGraph),
  'cubic': withKeyPoints(generateCubicGraph),
  'quartic': withKeyPoints(generateQuarticGraph),
  'polynomial-general': withKeyPoints(generateCubicGraph),
  'hyperbola': withKeyPoints(generateHyperbolaGraph),
  'rational-linear': withKeyPoints(generateRationalLinearGraph),
  'rational-general': withKeyPoints(generateHyperbolaGraph),
  'sine': withKeyPoints(generateSineGraph),
  'cosine': withKeyPoints(generateCosineGraph),
  'tangent': withKeyPoints(generateTangentGraph),
  'trig-transform': withKeyPoints(generateSineGraph),
  'trig-combination': withKeyPoints(generateTrigCombinationGraph),
  'exponential': withKeyPoints(generateExponentialGraph),
  'exponential-e': withKeyPoints(generateExponentialGraph),
  'logarithm': withKeyPoints(generateLogarithmGraph),
  'natural-log': withKeyPoints(generateLogarithmGraph),
  'absolute-linear': withKeyPoints(generateAbsoluteLinearGraph),
  'absolute-quadratic': withKeyPoints(generateAbsoluteGraph),
  'absolute-composite': withKeyPoints(generateAbsoluteGraph),
  'parametric-circle': withKeyPoints(generateParametricCircle),
  'parametric-ellipse': withKeyPoints(generateParametricEllipse),
  'parametric-general': withKeyPoints(generateParametricGeneral),

  // Bảng biến thiên
  'bbt-quadratic': generateBBTQuadratic,
  'bbt-cubic': generateBBTCubic,
  'bbt-quartic': generateBBTQuartic,
  'bbt-rational-11': generateBBTRational11,
  'bbt-custom': generateBBTCustom,

  // Vectơ
  'vector-2d': generateVector2D,
  'vector-sum': generateVectorSum,
  'vector-difference': generateVectorDifference,
  'vector-dot-product': generateVectorDotProduct,
  'vector-projection': generateVectorProjection,
  'vector-3d': generateVector3D,
  'vector-3d-sum': generateVector3DSum,
  'vector-cross-product': generateVectorCrossProduct,
  'coordinate-system-3d': generateCoordinateSystem3D,

  // Vật lý - Lực học
  'physics-inclined-plane': generateInclinedPlane,
  'physics-fbd': generateFreeBodyDiagram,
  'physics-pulley': generatePulley,
  'physics-spring': generateSpringSystem,

  // Vật lý - Quang học
  'physics-convex-lens': generateConvexLens,
  'physics-concave-lens': generateConcaveLens,
  'physics-mirror-concave': generateConcaveMirror,
  'physics-mirror-convex': generateConvexMirror,

  // Vật lý - Đồ thị động học
  'physics-velocity-time': generateVelocityTimeGraph,
  'physics-position-time': generatePositionTimeGraph,

  // Vật lý - Điện học
  'physics-electric-field-positive': generateElectricFieldPositive,
  'physics-electric-field-negative': generateElectricFieldNegative,
  'physics-circuit-series': generateCircuitSeries,
  'physics-circuit-parallel': generateCircuitParallel,

  // Miền nghiệm bất phương trình
  'inequality-region': generateInequalityRegion,
  'circle-region': generateCircleRegion,
  'parabola-region': generateParabolaRegion,
  'mixed-region': generateMixedRegion,

  // Bảng xét dấu
  'sign-product2': generateSignProduct2,
  'sign-product3': generateSignProduct3,
  'sign-fraction': generateSignFraction,

  // Biểu đồ thống kê
  'bar-chart': generateBarChart,
  'bar-chart-horizontal': generateBarChartHorizontal,
  'bar-chart-grouped': generateBarChartGrouped,
  'bar-chart-stacked': generateBarChartStacked,
  'line-chart': generateLineChart,
  'line-chart-multi': generateLineChartMulti,
  'pie-chart': generatePieChart,
  'donut-chart': generateDonutChart,

  // Biểu đồ tần số
  'histogram': generateHistogram,
  'histogram-relative': generateHistogramRelative,
  'line-chart-relative': generateLineChartRelative,

  // Bài toán thực tế
  'lighthouse-elevation': generateLighthouseElevation,
  'tree-shadow': generateTreeShadow,
  'two-ships-distance': generateTwoShipsDistance
};

export function getGenerator(shapeId) {
  return GENERATOR_MAP[shapeId] || null;
}

export function getDefaultValues(shapeId) {
  const schema = getFormSchema(shapeId);
  if (!schema) return {};

  const defaults = {};
  schema.fields.forEach(field => {
    defaults[field.name] = field.default;
  });
  return defaults;
}

export const AVAILABLE_SHAPES = Object.keys(GENERATOR_MAP);
