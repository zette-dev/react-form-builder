import { FormField, FormData, FormErrors } from '../types/form.types';

export const validateField = (field: FormField, value: string | number | boolean | undefined): string[] => {
  const errors: string[] = [];
  
  // Required field validation
  if (field.required && (value === undefined || value === null || value === '')) {
    errors.push(`${field.label} is required`);
    return errors;
  }
  
  // Skip other validations if field is not required and empty
  if (!field.required && (value === undefined || value === null || value === '')) {
    return errors;
  }
  
  // Email validation
  if (field.type === 'email' && field.validation?.pattern) {
    const emailRegex = new RegExp(field.validation.pattern);
    if (typeof value === 'string' && !emailRegex.test(value)) {
      errors.push(field.validation.message);
    }
  }
  
  // Number validation
  if (field.type === 'number' && field.validation) {
    const numValue = Number(value);
    if (field.validation.min !== undefined && numValue < field.validation.min) {
      errors.push(field.validation.message);
    }
    if (field.validation.max !== undefined && numValue > field.validation.max) {
      errors.push(field.validation.message);
    }
  }
  
  // TODO: Add more validation rules as needed
  
  return errors;
};

export const validateForm = (schema: { fields: FormField[] }, formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  schema.fields.forEach(field => {
    const fieldErrors = validateField(field, formData[field.id]);
    if (fieldErrors.length > 0) {
      errors[field.id] = fieldErrors[0]; // Show first error only
    }
  });
  
  return errors;
};