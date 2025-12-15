import React from 'react';

const Credentials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <h2 className="font-display text-5xl uppercase shrink-0">Trusted Credentials</h2>
            <div className="h-px bg-dark w-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] border border-gray-200 p-4 flex items-center justify-center hover:border-dark transition-colors">
                    <img src={`https://picsum.photos/200/100?random=${i}`} className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" alt="Credential Logo" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;