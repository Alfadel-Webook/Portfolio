import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  console.error('Could not find #root container');
} else {
  const root = createRoot(container);

  const Root = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);

      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    return <App theme={theme} toggleTheme={toggleTheme} />;
  };

  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}