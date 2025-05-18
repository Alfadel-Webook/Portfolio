import React from 'react';

export default function PageLayout({ children }) {
  return (
    <main className="max-w-screen-lg mx-auto my-8 px-4 text-center">
      {children}
    </main>
  );
}