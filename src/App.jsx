import React, { useEffect } from 'react';
import Header from './components/Header';
import PageLayout from './components/PageLayout';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import IntroductionSection from './components/IntroductionSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AlmaMaterSection from './components/AlmaMaterSection';
import Footer from './components/Footer';

function App({ theme, toggleTheme }) {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <PageLayout>
        <HeroSection />
        <IntroductionSection />
        <SkillsSection />
        <ProjectsSection />
        <AlmaMaterSection />
        <ContactSection />
      </PageLayout>
      <Footer />
    </div>
  );
}

export default App;