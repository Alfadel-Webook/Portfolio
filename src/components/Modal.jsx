import React from 'react';
import { createPortal } from 'react-dom';

const Modal = React.forwardRef(function Modal({ isOpen, onClose, children }, ref) {
  if (!isOpen) return null; 

  const modalContent = (
    <div 
    ref={ref}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white dark:bg-neutral-800 text-black 
      dark:text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 
          hover:text-gray-800 dark:hover:text-gray-300"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
});

export default Modal;