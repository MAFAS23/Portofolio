import React from 'react';
import { ExperienceItem } from '../../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Unicorn Indonesia',
    period: '2021 - Present',
    achievements: [
      'Led the migration of legacy codebase to Next.js, improving load time by 40%.',
      'Mentored a team of 5 junior developers and established code quality standards.',
      'Implemented a comprehensive design system used across 3 major products.'
    ]
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Digital Agency Asia',
    period: '2019 - 2021',
    achievements: [
      'Developed 15+ custom websites for high-profile clients in retail and banking.',
      'Optimized database queries reducing server costs by 20%.',
      'Integrated third-party payment gateways (Midtrans, Xendit).'
    ]
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'StartUp Indo',
    period: '2018 - 2019',
    achievements: [
      'Built responsive landing pages using React and SCSS.',
      'Collaborated with UI/UX designers to implement pixel-perfect interfaces.'
    ]
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-white border-b border-dark/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-16 text-center md:text-left">
          Work History
        </h2>

        {/* Timeline Container */}
        <div className="relative ml-4 md:ml-8 space-y-16">

          {/* Vertical Line - Single Source of Truth for Alignment */}
          {/* Centered exactly on the left edge of this container */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-dark transform -translate-x-1/2"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16">

              {/* Timeline Dot Wrapper - Anchored to Line */}
              <div className="absolute left-0 top-2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 pointer-events-none">
                {/* Pulsing Aura */}
                <div className="absolute w-4 h-4 bg-maroon rounded-full opacity-30 animate-subtle-pulse"></div>
                {/* Main Dot */}
                <div className="relative w-4 h-4 bg-maroon border-2 border-cream rounded-full z-10 shadow-sm"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="font-display text-3xl md:text-4xl uppercase font-bold">{exp.role}</h3>
                <span className="font-mono text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</span>
              </div>

              <div className="font-display text-xl text-maroon mb-6">{exp.company}</div>

              <ul className="space-y-3">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="font-sans text-gray-700 flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-dark rounded-full shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;