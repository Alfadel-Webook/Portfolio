import React, { useState } from 'react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#introduction' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Alma Mater', href: '#alma-mater' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('Home');

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-300/80 dark:bg-neutral-900/80 text-black dark:text-white transition-colors duration-300 sticky top-0 z-50 shadow-lg rounded-b-xl backdrop-blur">
      <div className="text-2xl font-extrabold flex items-center gap-2">
        <span>Abdulaziz Alfadel</span>
      </div>
      <nav>
        <ul className="flex gap-8 list-none m-0 p-0 font-semibold">
          {navLinks.map(link => (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`uppercase tracking-wider text-base px-2 pb-2 transition-colors duration-200
                  ${active === link.label
                    ? 'text-indigo-600 font-bold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-400'}
                `}
                style={{ letterSpacing: '0.08em' }}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-1 rounded transition-all duration-300
                    ${active === link.label
                      ? 'w-4/5 bg-indigo-500 opacity-100'
                      : 'w-0 bg-indigo-500 opacity-0'}
                  `}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        onClick={toggleTheme}
        className={`
          ml-4 px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 flex items-center gap-2
          ${theme === 'light'
            ? 'bg-white text-gray-800 hover:bg-neutral-900 hover:text-white'
            : 'bg-neutral-900 text-gray-100 hover:bg-white hover:text-neutral-900'
          }
        `}
        aria-label="Toggle dark/light mode"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </header>
  );
}