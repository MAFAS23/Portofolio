import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 md:px-8 border-b border-dark/10 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-maroon mb-4 tracking-widest uppercase">Based in Indonesia</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-bold uppercase tracking-tighter text-dark mb-6">
              Hi, I'm <br />
              <span className="text-maroon">Athif.</span>
            </h1>
            <h2 className="font-display text-3xl md:text-5xl text-dark/80 mb-8 uppercase">
              Mobile Developer &amp; Data Enthusiast
            </h2>
            <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-600 mb-10">
              Building scalable mobile architectures for <span className="font-bold text-dark">Android & Cross-platform</span>, balanced with a distinct focus on <span className="font-bold text-dark">data extraction & scraping methodologies</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="bg-dark text-cream font-display text-xl px-8 py-4 uppercase tracking-wider hover:bg-maroon transition-colors"
              >
                View Projects
              </button>
              <button className="border-2 border-dark text-dark font-display text-xl px-8 py-4 uppercase tracking-wider hover:bg-dark hover:text-cream transition-colors">
                Resume <i className="fa-solid fa-download ml-2 text-sm"></i>
              </button>
            </div>
          </div>

          {/* Decorative / Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
            {/* IMAGE WRAPPER (anchor absolute) */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 border-2 border-dark bg-maroon">

              {/* BADGE */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10">
                <div className="bg-cream border border-dark px-4 py-2 rotate-6 shadow-[4px_4px_0px_0px_rgba(5,5,5,1)]">
                  <span className="font-mono text-xs font-bold">
                    OPEN TO WORK
                  </span>
                </div>
              </div>

              {/* IMAGE */}
              <img
                // src="/image/photo_profile.png"
                src="https://raw.githubusercontent.com/MAFAS23/Portofolio/refs/heads/main/public/image/photo_profile.png"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 opacity-80"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;