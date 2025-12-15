import React, { useState } from 'react';
import { FaqItem } from '../../types';

const faqData: FaqItem[] = [
  { id: '1', question: "Do you work with startups?", answer: "Yes, specifically post-seed stage startups looking to structure for Series A/B funding. I do not typically work with pre-revenue concepts." },
  { id: '2', question: "What is your consultation fee?", answer: "My retainer starts at $5k/month with a minimum 3-month commitment. Project-based pricing is available for audits." },
  { id: '3', question: "Are you available for travel?", answer: "Yes, I am based in NYC but travel globally for intensive on-site restructuring weeks." },
  { id: '4', question: "How quickly can we start?", answer: "I typically have a 2-week lead time. Book a preliminary call to secure a slot in my pipeline." },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-16 text-center">Everything you <br /> need to know</h2>

        <div className="flex flex-col">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-dark">
              <button
                onClick={() => toggle(item.id)}
                className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="font-display text-2xl md:text-4xl uppercase group-hover:pl-4 transition-all duration-300">{item.question}</span>
                <span className="text-2xl font-mono ml-4">
                  {openId === item.id ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-sans text-lg text-gray-700 md:w-3/4 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;