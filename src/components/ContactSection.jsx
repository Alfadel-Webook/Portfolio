import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import '../index.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        setError(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
        formRef.current?.elements[key]?.focus();
        return false;
      }
      if (key === 'email' && !validateEmail(value)) {
        setError('Enter a valid email.');
        formRef.current?.elements[key]?.focus();
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 
      text-center py-8 px-4 mb-8 mt-8 max-w-4xl mx-auto shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold mt-6 mb-6">Get in Touch!</h2>
      {!isSubmitted && (
        <form
          ref={formRef}
          className="max-w-md mx-auto flex flex-col gap-7 text-left"
          onSubmit={handleSubmit}
        >
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className="form-group flex flex-col">
              <label htmlFor={field} className="font-bold mb-2 capitalize">{field}</label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  rows="5"
                  value={formData[field]}
                  onChange={handleChange}
                  className="form-input p-2 rounded-md bg-gray-200 
                  dark:bg-gray-200 text-gray-900 dark:text-gray-100 border-none"
                  autoComplete="off"
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  className="form-input p-2 rounded-md bg-gray-200 
                  dark:bg-gray-200 text-gray-900 dark:text-gray-100 border-none"
                  autoComplete={field === 'name' ? 'name' : 'email'}
                />
              )}
            </div>
          ))}
          {error && (
            <div className="text-red-600 font-semibold text-sm">{error}</div>
          )}
          <Button type="submit" variant="contact">
            Send Message
          </Button>
        </form>
      )}
      {isSubmitted && (
        <div className="mt-5 dark:text-gray-100 text-gray-900">
          Thank you for reaching out! I will get back to you soon.
        </div>
      )}
    </section>
  );
}