import React from 'react';
import { FormField as FormFieldType } from '../../types/form.types';

interface FormFieldProps {
  field: FormFieldType;
  value: string | number | boolean | undefined;
  onChange: (fieldId: string, value: string | number | boolean) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    let fieldValue: string | number | boolean = e.target.value;
    
    // Handle different input types
    if (field.type === 'number') {
      fieldValue = e.target.value ? Number(e.target.value) : '';
    } else if (field.type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    
    onChange(field.id, fieldValue);
  };

  const renderInput = (): JSX.Element => {
    const baseProps = {
      id: field.id,
      className: `form-input ${error ? 'error' : ''}`,
      required: field.required,
    };

    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'date':
        return (
          <input
            {...baseProps}
            type={field.type}
            value={value as string | number || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            {...baseProps}
            className={`form-textarea ${error ? 'error' : ''}`}
            value={value as string || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={4}
          />
        );
      
      case 'select':
        return (
          <select
            {...baseProps}
            className={`form-select ${error ? 'error' : ''}`}
            value={value as string || ''}
            onChange={handleChange}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <label>
            <input
              type="checkbox"
              id={field.id}
              className="form-checkbox"
              checked={value as boolean || false}
              onChange={handleChange}
              required={field.required}
            />
            {field.label}
          </label>
        );
      
      // TODO: Implement radio button type
      case 'radio':
        return <p>Radio buttons not implemented yet</p>;
      
      default:
        return <p>Unsupported field type: {field.type}</p>;
    }
  };

  // Special rendering for checkbox (label is handled differently)
  if (field.type === 'checkbox') {
    return (
      <div className="form-field">
        {renderInput()}
        {error && <div className="form-error">{error}</div>}
      </div>
    );
  }

  return (
    <div className="form-field">
      <label htmlFor={field.id} className="form-label">
        {field.label}
        {field.required && <span style={{ color: '#dc3545' }}> *</span>}
      </label>
      {renderInput()}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
};

export default FormField;