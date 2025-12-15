import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: '1', number: '01', title: 'Strategy & Audit', description: 'Deep dive analysis into your operational bottlenecks and revenue leaks.' },
  { id: '2', number: '02', title: 'Tax & Legal', description: 'Comprehensive compliance checks and structure optimization.' },
  { id: '3', number: '03', title: 'Marketing', description: 'High-conversion funnels and brand positioning for scale.' },
  { id: '4', number: '04', title: 'Financial Plans', description: 'Long-term forecasting and cash-flow management systems.' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest mb-12 text-gray-500">How I Solve Your Challenges</h2>
        
        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.id} className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-dark transition-colors hover:bg-white">
              <div className="w-24 mb-4 md:mb-0">
                <span className="font-mono text-xl text-gray-400 group-hover:text-maroon transition-colors">{service.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-4xl md:text-6xl uppercase font-bold group-hover:translate-x-4 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-1/3 mt-4 md:mt-0 pl-0 md:pl-8">
                <p className="font-sans text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-dark"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;