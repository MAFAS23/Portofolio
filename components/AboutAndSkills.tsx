import React from 'react';
import { SkillGroup } from '../types';

const skills: SkillGroup[] = [
  { category: 'Frontend', items: ['Compose', 'XML', 'Swift', 'Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Backend', items: ['Java', 'PostgreSQL', 'Kotlin', 'Python', 'REST API'] },
  { category: 'Tools', items: ['Git/GitHub', 'Firebase', 'Selenium', 'Katalon', 'Figma', 'Jaspersoft'] },
];

// Helper function to get DevIcon URL for each skill
const getIconUrl = (skill: string): string => {
  const iconMap: { [key: string]: string } = {
    'Compose': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg',
    'XML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg',
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',

    'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg',
    'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    'JasperSoft': 'https://logodix.com/logo/1745693.png',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
    'Katalon': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  };

  return iconMap[skill] || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg';
};

const AboutAndSkills: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 border-b border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: About Text */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl uppercase mb-8">
              About Me<span className="text-maroon">.</span>
            </h2>
            <div className="font-sans text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                Hello, I'm Athif. I specialize in engineering high-performance mobile applications for <span className="font-bold text-dark">Android & Cross-platform</span> ecosystems. Distinct from my mobile work, I am deeply invested in <span className="font-bold text-dark">Python development</span>, specifically for <span className="font-bold text-dark">data extraction (scraping)</span> and <span className="font-bold text-dark">automation testing</span>.
              </p>
              <p>
                I thrive in collaborative environments where I can apply this diverse skillset. My background includes delivering impactful results on complex projects, such as large-scale ERP solutions for business operations.
              </p>
            </div>



            {/* Certificates */}
            <div className="mt-12 pt-8 border-t border-dark/20">
              {/* <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Certified By</p>
              <div className="flex gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2 font-bold font-display text-xl"><i className="fa-brands fa-google text-2xl"></i> Google</div>
                <div className="flex items-center gap-2 font-bold font-display text-xl"><i className="fa-brands fa-aws text-2xl"></i> AWS</div>
              </div> */}
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest mb-8 text-maroon">Tech Stack</h3>
            <div className="space-y-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <h4 className="font-display text-2xl uppercase mb-4 border-l-4 border-maroon pl-3">{group.category}</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center gap-2 group cursor-default"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src={getIconUrl(skill)} alt={skill} className="w-full h-full group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="font-mono text-xs text-center text-gray-700 group-hover:text-maroon transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;