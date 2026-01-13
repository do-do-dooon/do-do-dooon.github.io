
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AIMusicInsight from './components/AIMusicInsight';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <AIMusicInsight />
        {/* Additional sections like Bio/About could go here */}
        <section id="about" className="max-w-[1200px] mx-auto px-6 py-24 border-t border-dark-blue/10 dark:border-white/10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/3">
                <h2 className="text-4xl font-black tracking-tighter">About</h2>
             </div>
             <div className="lg:w-2/3 space-y-6 text-lg opacity-80 leading-relaxed">
                <p>
                  Julian Thorne is an award-winning composer and sound artist whose work explores the intersection of traditional instrumentation and avant-garde electronic manipulation.
                </p>
                <p>
                  With a background in classical composition from the Berlin University of the Arts, Thorne has transitioned into a highly sought-after collaborator for filmmakers, choreographers, and creative directors looking for a unique sonic thumbprint.
                </p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
