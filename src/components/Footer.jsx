import React from 'react';
import '../index.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-neutral-900 text-center py-6 text-sm text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Abdulaziz Alfadel</p>
      </footer>
    );
}