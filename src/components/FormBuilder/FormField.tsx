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

    // TODO: Implement form fields
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'date':
      case 'textarea':
      case 'select':
      case 'checkbox':
      case 'radio':
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