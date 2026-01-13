
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white py-24 transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="max-w-md">
          <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase">Julian Thorne</h3>
          <p className="opacity-50 text-base leading-relaxed mb-8">
            Independent composer specializing in modern classical, electronic soundscapes, and cinematic scores. Based in Berlin, creating sonic identities for global projects.
          </p>
          <div className="flex gap-6">
            <a className="opacity-50 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="opacity-50 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="opacity-50 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">podcasts</span></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24">
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 opacity-30">Quick Links</h4>
            <ul className="flex flex-col gap-5">
              <li><a className="text-sm nav-link" href="#">Home</a></li>
              <li><a className="text-sm nav-link" href="#">Bio</a></li>
              <li><a className="text-sm nav-link" href="#">Catalog</a></li>
              <li><a className="text-sm nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 opacity-30">Legal</h4>
            <ul className="flex flex-col gap-5">
              <li><a className="text-sm nav-link" href="#">Privacy</a></li>
              <li><a className="text-sm nav-link" href="#">Terms</a></li>
              <li><a className="text-sm nav-link" href="#">Credits</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase">© 2024 Julian Thorne. All Rights Reserved.</p>
        <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase">Berlin • London • Los Angeles</p>
      </div>
    </footer>
  );
};

export default Footer;
