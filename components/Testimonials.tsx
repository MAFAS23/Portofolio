import React from 'react';
import { TestimonialItem } from '../../types';

const testimonials: TestimonialItem[] = [
  { id: '1', text: "He completely restructured our operational workflow. We saw a 30% increase in margin within 3 months.", author: "Sarah Jenkins", company: "CEO, TechFlow" },
  { id: '2', text: "Brutally effective. No fluff, just results. Exactly what we needed during our merger.", author: "Michael Ross", company: "Director, Ross Holdings" },
  { id: '3', text: "The risk assessment strategy saved us from a multi-million dollar compliance oversight.", author: "Elena V.", company: "Founder, V-Corp" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-display text-6xl md:text-8xl uppercase text-dark leading-none">
            What do clients <br /> say?
          </h2>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-cream transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="w-12 h-12 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-cream transition-colors"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto no-scrollbar pb-8">
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-[300px] md:min-w-[400px] bg-white border border-dark p-8 shadow-[8px_8px_0px_0px_rgba(5,5,5,1)]">
              <div className="mb-8 text-maroon text-2xl">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="font-display text-2xl uppercase leading-tight mb-8 min-h-[120px]">
                "{item.text}"
              </p>
              <div className="border-t border-dark/20 pt-4">
                <p className="font-bold">{item.author}</p>
                <p className="font-mono text-xs text-gray-500 uppercase">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;