import { FormSchema, FormData, SubmissionResponse } from '../types/form.types';

// Mock API functions to simulate real network requests
const mockDelay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

// Sample form schema
const SAMPLE_FORM_SCHEMA: FormSchema = {
  title: "User Registration Form",
  fields: [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      required: true,
      placeholder: "Enter your first name"
    },
    {
      id: "lastName",
      type: "text",
      label: "Last Name",
      required: true,
      placeholder: "Enter your last name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "Enter your email",
      validation: {
        pattern: "^[^@]+@[^@]+\\.[^@]+$",
        message: "Please enter a valid email address"
      }
    },
    {
      id: "age",
      type: "number",
      label: "Age",
      required: false,
      placeholder: "Enter your age",
      validation: {
        min: 18,
        max: 100,
        message: "Age must be between 18 and 100"
      }
    },
    {
      id: "country",
      type: "select",
      label: "Country",
      required: true,
      options: [
        { value: "", label: "Select a country" },
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "au", label: "Australia" },
        { value: "de", label: "Germany" }
      ]
    },
    {
      id: "bio",
      type: "textarea",
      label: "Biography",
      required: false,
      placeholder: "Tell us about yourself..."
    },
    {
      id: "subscribe",
      type: "checkbox",
      label: "Subscribe to newsletter",
      required: false
    }
  ]
};

export const fetchFormSchema = async (): Promise<FormSchema> => {
  console.log('Fetching form schema...');
  await mockDelay(1000); // Simulate network delay
  
  // Occasionally simulate a network error for testing
  if (Math.random() < 0.1) {
    throw new Error('Failed to load form schema. Please check your connection.');
  }
  
  return SAMPLE_FORM_SCHEMA;
};

export const submitForm = async (formData: FormData): Promise<SubmissionResponse> => {
  console.log('Submitting form data:', formData);
  await mockDelay(1500); // Simulate network delay
  
  // Randomly simulate submission failures for testing error handling
  if (Math.random() < 0.3) {
    throw new Error('Submission failed. Please try again.');
  }
  
  return {
    success: true,
    message: 'Form submitted successfully!',
    submittedData: formData
  };
};