import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AlmaMaterSection from './components/AlmaMaterSection';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-white min-h-screen transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-1">
          <section id="hero"><HeroSection /></section>
          <section id="introduction"><IntroductionSection /></section>
          <section id="skills"><SkillsSection /></section>
          <section id="projects"><ProjectsSection /></section>
          <section id="alma-mater"><AlmaMaterSection /></section>
          <section id="contact"><ContactSection /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;