import React from 'react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Java/Mobile Developer',
    company: 'PT. Multi Bahana Informatika',
    period: '2024 - Present',
    achievements: [
      'Developed a high-performance Android application using Kotlin for real-time financial data visualization, ensuring seamless integration with a Java-based REST API backend.',
      'Contributed to the full-stack development of a Regional Asset Management (Barang Milik Daerah/BMD) system, implementing robust backend logic using Java and responsive frontend components with PrimeFaces.',
      'Built and deployed RESTful APIs to facilitate secure and efficient data synchronization between the server and client-side applications.',
      'Designed intuitive UI/UX layouts and interactive prototypes using Figma for both mobile and web applications, translating requirements into user-friendly interfaces before implementation.',
    ]
  },
  {
    id: '2',
    role: 'Intern Information System Analyst',
    company: 'PT. GMF Aero Asia',
    period: 'Jul 2023 - Sep 2023',
    achievements: [
      'Successfully updated the IT project Blueprint, ensuring accurate and relevant documentation to support project needs.',
      'Contributed to the enhancement of the PMO website\'s UI, improving user experience based on user feedback.',
      'Acquired foundational knowledge in Moodle E-Learning development, adding valuable skills to my professional portfolio.',
    ]
  },
  {
    id: '3',
    role: 'Intern Business Process Automation',
    company: 'PT. Mega Central Finance',
    period: 'Dec 2022 - May 2023',
    achievements: [
      'Proficiently operated and managed KOFAX RPA automation systems to optimize operational efficiency.Responsibilities included ensuring the timely execution of automated tasks.',
      'Delivered real - time monitoring for cloud systems and provided accurate reports, contributing to enhanced decision- making.',
      'Compiled monthly project outcome reports that provided in -depth insights into project progress, which were utilized by management for strategic decision - making.',
      'Assisted in troubleshooting and resolving issues within the Tracker application, facilitating seamless problem - solving interactions between users and helpers.This involved promptly addressing user requests for assistance, coordinating support efforts, and ensuring timely resolution of problems',
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
                <h3 className="font-display text-3xl md:text-4xl uppercase font-bold">{exp.company}</h3>
                <span className="font-mono text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</span>
              </div>

              <div className="font-display text-xl text-maroon mb-6">{exp.role}</div>

              <ul className="space-y-3">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start font-sans text-gray-700">
                    <span className="mr-3 mt-[0.6em] w-1.5 h-1.5 bg-dark rounded-full shrink-0" />
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