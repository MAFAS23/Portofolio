import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-4 md:px-8 pt-12 pb-12 bg-cream">
      {/* Dark Block - Contact */}
      <div className="max-w-7xl mx-auto bg-maroon rounded-[2rem] p-12 md:p-24 text-cream mb-12 text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase leading-none mb-8">
          Interested in <br/> collaborating?
        </h2>
        
        <div className="flex flex-col gap-6 items-center">
             <a 
                href="mailto:hello@jonathan.dev" 
                className="font-display text-2xl md:text-4xl uppercase border-b-2 border-cream/30 hover:border-cream hover:text-white transition-all pb-2"
             >
                hello@jonathan.dev
             </a>
             
             <div className="flex gap-6 mt-4">
                <a href="#" className="flex items-center gap-2 font-mono text-sm uppercase hover:text-white transition-colors">
                    <i className="fa-brands fa-linkedin text-xl"></i> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 font-mono text-sm uppercase hover:text-white transition-colors">
                    <i className="fa-brands fa-whatsapp text-xl"></i> WhatsApp
                </a>
             </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark/10 font-mono text-xs text-gray-500 uppercase">
        <p>&copy; 2024 Jonathan. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Design inspired by Neo-Brutalism</p>
      </div>
    </footer>
  );
};

export default Footer;