import React, { useState, useEffect } from 'react';
import { FormSchema, FormData, FormErrors } from '../../types/form.types';
import { fetchFormSchema, submitForm } from '../../utils/mockApi';
import FormField from './FormField';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const FormBuilder: React.FC = () => {
    // TODO: Add state management for:
    const [schema, setSchema] = useState<FormSchema | null>(null);
    const [formData, setFormData] = useState<FormData>({});
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string>('');
    const [submitSuccess, setSubmitSuccess] = useState<string>('');
    const [fetchError, setFetchError] = useState<string>('');

    // TODO: Implement useEffect to fetch form schema on component mount
    useEffect(() => {
        loadFormSchema();
    }, []);

    const loadFormSchema = async (): Promise<void> => {
        // TODO: Implement schema fetching with error handling
    };

    const handleFieldChange = (fieldId: string, value: string | number | boolean): void => {
        // TODO: Update form data and clear field errors
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        // TODO: Implement form validation and submission
    };

    // Loading state
    if (isLoading) {
        return <LoadingSpinner message="Loading form..." />;
    }

    // Error state
    if (fetchError) {
        return (
            <ErrorMessage
                message={fetchError}
                onRetry={loadFormSchema}
            />
        );
    }

    // No schema loaded
    if (!schema) {
        return <ErrorMessage message="No form schema available" />;
    }

    return (
        <div className="form-container">
            <h2 className="form-title">{schema.title}</h2>

            {submitSuccess && (
                <div className="success-message">{submitSuccess}</div>
            )}

            {submitError && (
                <div className="error-message">{submitError}</div>
            )}

            {/* TODO implement form with fields from `schema.fields` and form submission button */}

        </div>
    );
};

export default FormBuilder;