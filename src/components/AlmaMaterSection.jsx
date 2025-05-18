import React, { useState } from 'react';

export default function AlmaMaterSection() {
  const [highlighted, setHighlighted] = useState(null);

  const almaMaterEntries = [
    {
      university: 'University of Northumbria',
      degree: 'BSc in Computer Science',
      period: 'Class of 2024',
      honors: 'Graduated with Honors',
      image: '../public/assets/northumbria.png',
    },
  ];

  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-8">Alma Mater</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {almaMaterEntries.map((entry, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHighlighted(idx)}
            onMouseLeave={() => setHighlighted(null)}
            className={`
              bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100
              p-8 rounded shadow-md transition-transform duration-300
              hover:shadow-lg hover:bg-gray-50
              w-full max-w-[1200px] mx-auto
              sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] hover:scale-105
            `}
          >
            <img
              src={entry.image}
              alt={`${entry.university} logo`}
              className="w-[400px] max-w-full rounded mb-6 object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold mb-2 transition-colors duration-300">
              {entry.university}
            </h3>
            <p className="text-base font-semibold">{entry.degree}</p>
            <p className="text-base">{entry.period}</p>
            <p className="italic text-base">{entry.honors}</p>
          </div>
        ))}
      </div>
    </section>
  );
}