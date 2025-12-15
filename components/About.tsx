import React from 'react';

const About: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto bg-maroon rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-cream relative overflow-hidden">
        {/* Decorative Scribble */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8B5CF6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.2C59.6,42.9,48.3,51.4,36.4,58.3C24.5,65.2,12,70.5,-1.3,72.7C-14.6,74.9,-27.1,74,-39.2,67.6C-51.3,61.2,-63,49.3,-71.3,35.6C-79.6,21.9,-84.5,6.4,-82.4,-8.1C-80.3,-22.6,-71.2,-36.1,-60.2,-45.8C-49.2,-55.5,-36.3,-61.4,-23.4,-69.5C-10.5,-77.6,2.4,-87.9,15.7,-88.2C29,-88.5,42.7,-78.8,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 shrink-0">
             <div className="aspect-square rounded-full overflow-hidden border-4 border-cream/20">
                <img src="https://picsum.photos/400/400?grayscale" alt="About Me" className="w-full h-full object-cover" />
             </div>
          </div>
          
          <div className="flex-1">
             <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">
               Who am I and how can I be of help?
             </h2>
             <div className="space-y-6 font-sans text-lg md:text-xl font-light text-cream/80">
               <p>
                 I am a strategic partner for businesses ready to scale. With over 15 years in corporate restructuring and financial optimization, I don't just advise—I implement.
               </p>
               <p>
                 My approach is brutally honest and data-driven. We strip away the vanity metrics and focus on what actually moves the needle: Profitability, Efficiency, and Risk Mitigation.
               </p>
               <div className="pt-8">
                  <span className="font-mono text-sm border border-cream/30 rounded-full px-4 py-2 hover:bg-cream hover:text-maroon transition-colors cursor-default">
                    BASED IN NYC
                  </span>
                  <span className="font-mono text-sm border border-cream/30 rounded-full px-4 py-2 ml-4 hover:bg-cream hover:text-maroon transition-colors cursor-default">
                    GLOBAL REACH
                  </span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;