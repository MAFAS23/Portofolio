import React, { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream border-b border-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="font-display font-bold text-2xl tracking-tighter uppercase text-dark">
            MAFAS<span className="text-maroon">.</span>Dev
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-sm uppercase tracking-widest transition-colors ${
                activeSection === item.id 
                  ? 'text-maroon font-bold underline underline-offset-4 decoration-2' 
                  : 'text-dark/60 hover:text-dark'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <div className="md:hidden">
            <button className="w-10 h-10 border border-dark rounded-full flex items-center justify-center">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;