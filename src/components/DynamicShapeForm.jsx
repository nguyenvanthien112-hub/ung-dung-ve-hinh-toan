import { getFormSchema, getDefaultValues } from '../data/formSchemas.js';
import ShapeGuidePanel from './ShapeGuidePanel.jsx';

function DynamicShapeForm({ shapeId, formValues, onValueChange, onGenerate }) {
  const schema = getFormSchema(shapeId);

  if (!schema) {
    return (
      <div className="empty-form">
        <p>Chưa có form cho loại hình này.</p>
        <p>Vui lòng chọn chế độ Code Editor để tự viết mã Typst.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      <ShapeGuidePanel shapeId={shapeId} />
      <div className="form-fields">
        {schema.fields.map((field) => (
          <div key={field.name} className="field-group">
            <label htmlFor={field.name}>
              {field.label}
              {field.unit && <span className="unit"> ({field.unit})</span>}
            </label>

            {field.type === 'text' && (
              <input
                id={field.name}
                type="text"
                value={formValues[field.name] ?? field.default}
                onChange={(e) => onValueChange(field.name, e.target.value)}
              />
            )}

            {field.type === 'number' && (
              <input
                id={field.name}
                type="number"
                min={field.min}
                max={field.max}
                step={field.step || 0.1}
                value={formValues[field.name] ?? field.default}
                onChange={(e) => onValueChange(field.name, e.target.value)}
              />
            )}

            {field.type === 'select' && (
              <select
                id={field.name}
                value={formValues[field.name] || field.default}
                onChange={(e) => onValueChange(field.name, e.target.value)}
              >
                {(field.options || []).map((option) => {
                  const val = typeof option === 'object' && option !== null ? option.value : option;
                  const lbl = typeof option === 'object' && option !== null ? option.label : option;
                  return (
                    <option key={val} value={val}>
                      {lbl}
                    </option>
                  );
                })}
              </select>
            )}

            {field.type === 'checkbox' && (
              <input
                id={field.name}
                type="checkbox"
                checked={formValues[field.name] ?? field.default}
                onChange={(e) => onValueChange(field.name, e.target.checked)}
              />
            )}

            {field.type === 'color' && (
              <input
                id={field.name}
                type="color"
                value={formValues[field.name] ?? field.default ?? '#000000'}
                onChange={(e) => onValueChange(field.name, e.target.value)}
              />
            )}

            {field.type === 'range' && (
              <div className="range-field">
                <input
                  id={field.name}
                  type="range"
                  min={field.min ?? 0}
                  max={field.max ?? 1}
                  step={field.step ?? 0.05}
                  value={formValues[field.name] ?? field.default ?? 0}
                  onChange={(e) => onValueChange(field.name, parseFloat(e.target.value))}
                />
                <span className="range-value">
                  {field.unit === '%'
                    ? `${Math.round((formValues[field.name] ?? field.default ?? 0) * 100)}%`
                    : `${formValues[field.name] ?? field.default ?? 0}${field.unit || ''}`}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button type="submit" className="primary generate-btn">
        Tạo Hình Vẽ
      </button>
    </form>
  );
}

export default DynamicShapeForm;
