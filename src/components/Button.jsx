import React from 'react';

const Button = React.forwardRef(
  ({ onClick, children, variant = 'default', type = 'button', as = 'button', ...props }, ref) => {
    const baseClasses =
      'px-4 py-2 rounded text-sm font-semibold cursor-pointer transition-colors duration-300';
    const variants = {
      default: 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
      header: 'bg-white dark:bg-neutral-900 text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      introduction: 'bg-white dark:bg-neutral-900 text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      contact: 'bg-white dark:bg-neutral-900 text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      modal: 'bg-white dark:bg-neutral-900 text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
    };

    const Component = as;

    return (
      <Component
        ref={ref}
        onClick={onClick}
        type={as === 'button' ? type : undefined}
        className={`${baseClasses} ${variants[variant]}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default Button;