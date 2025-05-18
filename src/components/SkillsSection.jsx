import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg 
  transition-transform duration-300 transform hover:-translate-y-1 text-center 
  font-bold text-sm max-w-xs flex items-center justify-center">
    {skill}
  </div>
);

SkillCard.defaultProps = {
  skill: 'Unnamed skill',
};

export default function SkillsSection() {
  const technicalSkills = ['React', 'Javascript', 'CSS', 'Git'];
  const creativeSkills = ['Screenwriting', 'Creative Translation', 'Voice Acting'];

  return (
    <section className="flex flex-col items-center justify-center ext-center p-6">
      <h2 className="text-4xl font-bold">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
        {technicalSkills.map((skill, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 
            px-6 py-7 rounded text-sm font-bold shadow-md flex-[1_1_120px] max-w-xs 
            transition-transform duration-300 hover:-translate-y-1 
            hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center justify-center"
          >
            {skill}
          </div>
        ))}
      </div>

      <h3 className="text-4xl font-bold mb-8 mt-8">Creative Skills</h3>
      <div className="skills-flex flex flex-wrap justify-center gap-3 mb-8">
        {creativeSkills.map((skill, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 
                       px-6 py-6 rounded shadow-md hover:shadow-lgtext-sm font-bold flex-[1_1_120px] max-w-xs 
                       transition-transform duration-300 hover:-translate-y-1 
                       hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center justify-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}