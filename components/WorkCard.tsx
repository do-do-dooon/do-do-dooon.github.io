
import React from 'react';
import { WorkItem } from '../types';

interface WorkCardProps {
  work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg bg-dark-blue cursor-pointer shadow-md">
      {/* Play Button for Video Items */}
      {work.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className={`w-16 h-16 rounded-full ${work.accentColor ? 'bg-primary' : 'bg-white/20'} backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <span className="material-symbols-outlined text-white text-4xl leading-none pl-1">play_arrow</span>
          </div>
        </div>
      )}

      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110 ${work.isVideo ? 'opacity-60' : 'opacity-90'}`}
        style={{ backgroundImage: `url(${work.imageUrl})` }}
      />

      {/* Hover/Persistent Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${work.isVideo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-60">
          {work.category}
        </p>
        <h3 className="text-white text-xl font-bold tracking-tight">
          {work.title}
        </h3>
      </div>
    </div>
  );
};

export default WorkCard;
