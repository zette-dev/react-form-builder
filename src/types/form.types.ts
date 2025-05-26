// Core form types
export interface FormField {
    id: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'date';
    label: string;
    required: boolean;
    placeholder?: string;
    options?: SelectOption[];
    validation?: ValidationRule;
  }
  
  export interface SelectOption {
    value: string;
    label: string;
  }
  
  export interface ValidationRule {
    pattern?: string;
    min?: number;
    max?: number;
    message: string;
  }
  
  export interface FormSchema {
    title: string;
    fields: FormField[];
  }
  
  export interface FormData {
    [key: string]: string | number | boolean;
  }
  
  export interface FormErrors {
    [key: string]: string;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
  }
  
  export interface SubmissionResponse extends ApiResponse<FormData> {
    submittedData?: FormData;
  }