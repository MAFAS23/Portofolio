import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-dark overflow-x-hidden scroll-smooth">
      <Header />
      <main>
        <Hero />
        <AboutAndSkills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;