import React from 'react';
import Button from './Button';
import '../index.css';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-300 dark:bg-neutral-900
     text-black dark:text-white transition-colors duration-300">
      <div className="text-xl font-bold">Abdulaziz Alfadel</div>
      <nav>
        <ul className="flex gap-4 list-none m-0 p-0 text-gray-800 dark:text-gray-100 font-medium">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#introduction" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <Button
        onClick={toggleTheme}
        variant="header"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </header>
  );
}