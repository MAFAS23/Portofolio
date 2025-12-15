import React from 'react';
import { SuccessStoryItem } from '../types';

const stories: SuccessStoryItem[] = [
  { id: '1', category: 'Strategy', title: 'Revenue Optimization', result: '+215% YoY' },
  { id: '2', category: 'Technology', title: 'Tech Scale-Up', result: 'Series B Secured' },
  { id: '3', category: 'Operations', title: 'Global Supply Chain', result: '40% Cost Reduction' },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest mb-12 text-gray-500">Selected Case Studies</h2>

        <div className="space-y-0">
          {stories.map((story) => (
            <div key={story.id} className="group relative border-t border-dark py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-maroon hover:text-cream transition-colors px-4 -mx-4">
              <div className="mb-2 md:mb-0">
                <span className="font-mono text-xs uppercase opacity-70 border border-current rounded px-2 py-1">{story.category}</span>
              </div>
              <div className="flex-1 md:text-center md:px-8">
                <h3 className="font-display text-4xl md:text-7xl uppercase">{story.title}</h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="font-display text-xl">{story.result}</p>
              </div>

              <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-right text-3xl"></i>
              </div>
            </div>
          ))}
          <div className="border-t border-dark"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;