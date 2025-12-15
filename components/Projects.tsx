import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Dashboard SIKeuda App',
    description: 'A government mobile app designed to track and visualize Bandar Lampung\'s regional financial data in real-time.',
    image: 'https://raw.githubusercontent.com/MAFAS23/Portofolio/refs/heads/main/public/image/sikeuda.png',
    techStack: ['Kotlin', 'XML', 'PostgreSQL', 'Rest-API', 'Firebase'],
    githubUrl: '#',
    liveUrl: 'https://drive.google.com/file/d/1Xpfg0TPJ6C3ij28kGkADAyCnE2FPML5u/view?usp=sharing'
  },
  {
    id: '2',
    title: 'Dashboard SIPD Aset App',
    description: 'Mobile-based solution for tracking and visualizing regional government assets in real-time.',
    image: 'https://github.com/MAFAS23/Portofolio/blob/main/public/image/sipd.png?raw=true',
    techStack: ['Kotlin', 'Compose', 'PostgreSQL', 'Rest-API', 'Firebase'],
    githubUrl: '#',
    liveUrl: 'https://www.figma.com/proto/JAONznq8Iqkwjy8cNmcAp2/Dashboard-SIPD?page-id=0%3A1&node-id=10-9&p=f&viewport=399%2C412%2C0.29&t=WFJXvL2QRuv615HE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A9'
  },
  {
    id: '3',
    title: 'Scraping Data',
    description: 'Automated data extraction pipeline converting web content into structured CSV files.',
    image: 'https://picsum.photos/600/400?random=3',
    techStack: ['Python', 'Requests', 'BeautifulSoup', 'Pandas', 'Selenium'],
    githubUrl: 'https://github.com/MAFAS23/ScrapingCPNS',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Coming Soon',
    description: 'Coming Soon',
    image: 'https://picsum.photos/600/400?random=4',
    techStack: [],
    githubUrl: '#',
    liveUrl: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group border-2 border-dark bg-white hover:shadow-[8px_8px_0px_0px_rgba(5,5,5,1)] transition-all duration-300">
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden border-b-2 border-dark relative">
                <div className="absolute inset-0 bg-maroon opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-3xl uppercase leading-none">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-xl hover:text-maroon transition-colors" title="Private Project">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-xl hover:text-maroon transition-colors" title="Live Demo">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-sans text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-xs border border-gray-300 rounded px-2 py-1 bg-gray-50 text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/mafas23" className="inline-block border-b-2 border-dark pb-1 font-mono text-sm uppercase tracking-widest hover:text-maroon hover:border-maroon transition-colors">
            View GitHub Archive <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;