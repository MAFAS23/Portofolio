import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 relative overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-16">Ready to scale?</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <button className="group relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-dark text-cream flex items-center justify-center transition-transform hover:scale-105 duration-300">
                    <span className="font-display text-2xl uppercase tracking-wider relative z-10 group-hover:hidden">Book Call</span>
                    <span className="font-display text-2xl uppercase tracking-wider relative z-10 hidden group-hover:block">Let's Go</span>
                    <div className="absolute inset-0 border border-dark rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </button>

                <button className="group w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dark text-dark flex items-center justify-center hover:bg-maroon hover:text-cream hover:border-maroon transition-all duration-300">
                     <span className="font-display text-2xl uppercase tracking-wider">Email Me</span>
                </button>
            </div>
        </div>
    </section>
  );
};

export default CTA;