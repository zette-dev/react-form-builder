import { FormField, FormData, FormErrors } from '../types/form.types';

export const validateField = (field: FormField, value: string | number | boolean | undefined): string[] => {
  const errors: string[] = [];
  // TODO: Add validation rules as needed
  
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