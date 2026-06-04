import { SHAPE_CATEGORIES, getShapesBySubcategory } from '../data/shapeCategories.js';

function ShapeSelector({
  onSelectShape,
  selectedShapeId,
  activeCategoryId,
  onCategoryChange,
  activeSubcategoryId,
  onSubcategoryChange
}) {
  const handleCategoryClick = (categoryId) => {
    const next = activeCategoryId === categoryId ? null : categoryId;
    onCategoryChange(next);
    onSubcategoryChange(null);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    onSubcategoryChange(activeSubcategoryId === subcategoryId ? null : subcategoryId);
  };

  const handleShapeClick = (shape) => {
    onSelectShape(shape);
  };

  return (
    <div className="shape-selector">
      <h3>Chọn Loại Hình</h3>

      <div className="categories">
        {Object.values(SHAPE_CATEGORIES).map((category) => (
          <div key={category.id} className="category-group">
            <button
              className={`category-btn ${activeCategoryId === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.icon} {category.name}
            </button>

            {activeCategoryId === category.id && (
              <div className="subcategories">
                {Object.values(category.subcategories).map((subcategory) => {
                  const shapes = getShapesBySubcategory(category.id, subcategory.id);
                  return (
                    <div key={subcategory.id} className="subcategory-group">
                      <button
                        className={`subcategory-btn ${activeSubcategoryId === subcategory.id ? 'active' : ''}`}
                        onClick={() => handleSubcategoryClick(subcategory.id)}
                      >
                        {subcategory.name} ({shapes.length})
                      </button>

                      {activeSubcategoryId === subcategory.id && (
                        <div className="shapes-grid">
                          {shapes.map((shape) => (
                            <button
                              key={shape.id}
                              className={`shape-btn ${selectedShapeId === shape.id ? 'selected' : ''}`}
                              onClick={() => handleShapeClick(shape)}
                            >
                              {shape.name}
                              <span className="shape-desc">{shape.description}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapeSelector;
