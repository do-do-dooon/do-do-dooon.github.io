
import React from 'react';
import { PORTFOLIO_WORKS } from '../constants';
import WorkCard from './WorkCard';

const Portfolio: React.FC = () => {
  return (
    <section id="works" className="max-w-[1200px] mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="border-b border-dark-blue/10 dark:border-white/10 pb-8 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-3 block">Portfolio</span>
          <h2 className="text-5xl font-black tracking-tighter">Selected Works</h2>
        </div>
        
        <div className="hidden sm:flex gap-8 mb-1">
          {['Film', 'Theatre', 'Albums', 'Installation'].map(cat => (
            <button key={cat} className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIO_WORKS.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      {/* View All */}
      <div className="mt-20 flex justify-center">
        <button className="nav-link text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3 group">
          View All Works 
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
