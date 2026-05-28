'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatIDo from './components/sections/WhatIDo';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import GitHubActivity from './components/sections/GitHubActivity';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
