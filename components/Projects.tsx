import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Dashboard SIKeuda App',
    description: 'A comprehensive analytics dashboard for online retailers with real-time data visualization.',
    image: 'https://picsum.photos/600/400?random=1',
    techStack: ['React', 'D3.js', 'Firebase'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Dashboard SIPD Aset App',
    description: 'Mobile-first booking platform with integrated maps and payment processing.',
    image: 'https://picsum.photos/600/400?random=2',
    techStack: ['Next.js', 'Stripe', 'Mapbox'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Scraping Data',
    description: 'Real-time cryptocurrency tracking application using WebSockets.',
    image: 'https://picsum.photos/600/400?random=3',
    techStack: ['Vue', 'Node.js', 'Socket.io'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Healthcare CRM',
    description: 'Patient management system compliant with medical data regulations.',
    image: 'https://picsum.photos/600/400?random=4',
    techStack: ['TypeScript', 'PostgreSQL', 'Docker'],
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
                      <a href={project.githubUrl} className="text-xl hover:text-maroon transition-colors" title="GitHub Code">
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