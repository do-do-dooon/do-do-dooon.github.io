
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Hero Image */}
        <div 
          className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl relative group overflow-hidden"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6_uqXPT33OVPvI7g0xqvPqZjjpJeUWFeI3hqU7QQ-nOtZgiq8m4ZHNGrig1qe0J7Drttsiexkx5eeoebNgLZmcKZJzmpZkqitL9MSklqWpQkmQNH5u-Eg_VDz6tLz-O7yGm_DOfrCDV743NCHNq-aonZcvrOed3TPymCe0OqHlcuMqbbZ61pd4ompIUYUlo15ZF8Lq1U9_CCjBcqIzaWfU1oA_2vpnO3WH1K2QPkGxH0dFk5NQ_7lOLvpglyssVxjFJR88_vJJOA")' }}
        >
          <div className="absolute inset-0 bg-dark-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        {/* Hero Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-dark-blue dark:text-white">
              Composer for <br/>
              <span className="text-primary italic">Film & Performance</span>
            </h1>
            <h2 className="text-lg lg:text-xl font-normal leading-relaxed opacity-70 max-w-lg mx-auto md:mx-0">
              Crafting evocative sonic landscapes for visual narratives and experimental stage performances. Based in Berlin, working globally.
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a 
              href="#works"
              className="flex min-w-[200px] items-center justify-center rounded-full h-14 px-10 bg-primary text-white text-base font-bold tracking-tight hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              View Selected Works
            </a>
            <a href="#cv" className="nav-link font-bold text-sm uppercase tracking-widest">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
