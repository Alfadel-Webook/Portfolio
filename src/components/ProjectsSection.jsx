import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Front-end Developer at Webook.com',
      description: 'Currently working with the Front-end team at Webook.com',
      details: 'At Webook.com, I contributed to building scalable front-end apps such as the Webook.com SuperApp using React and Tailwind CSS.',
      image: '/assets/wbk-logo.svg',
    },
    {
      id: 2,
      title: 'Screenwriter at Red Palm Pictures',
      description: 'Wrote and translated multiple film projects, including "Thuraya" (TBA 2026).',
      details: 'Collaborated with the studio behind Nourah, winner of the Special Mention Award at Cannes 2024, on projects such as Thuraya (TBA 2026), a blockbuster revenge film set in 1919 Al Ula, providing Screenwriting and Translation services.',
      image: '/assets/redpalm.png',
    },
    {
      id: 3,
      title: 'Voice Actor at Gearbox Software',
      description: 'Auditioned and was shortlisted for lead roles in "Borderlands 3" (2019).',
      details: 'Auditioned for the roles of "Fl4K" and "Billy Zane" (two playable characters) and the roles of "Katagawa Jr." and "Troy Calypso" (two villains)',
      image: '/assets/gearbox.png',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(closeModal, 5000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <section id="projects" className="mb-6">
      <h2 className="text-4xl p-8 text-center font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
        <div
        key={project.id}
        className="bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 p-6 rounded shadow-md max-w-sm 
        w-full text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
            <img
              src={project.image}
              alt={project.title}
              className="w-30 h-30 mx-auto mb-4 object-contain hover:transform 
              transition-tansform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-6">{project.title}</h3>
            <p className="text-sm mb-6">{project.description}</p>
            <Button
              onClick={() => openModal(project)}
              variant="modal"
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-sm mb-4">{selectedProject.details}</p>
            <Button
              onClick={closeModal}
              variant="modal"
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}