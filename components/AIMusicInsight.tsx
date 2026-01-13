
import React, { useState } from 'react';
import { getMusicalMood } from '../services/geminiService';

const AIMusicInsight: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSuggest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      const mood = await getMusicalMood(input);
      setResult(mood);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary/5 py-24 border-y border-primary/10">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-4">auto_awesome</span>
        <h2 className="text-3xl font-black mb-6 tracking-tight">AI Composition Insight</h2>
        <p className="text-lg opacity-70 mb-10">
          Describe a scene or a feeling, and Julian's AI Assistant will suggest a musical approach based on his compositional style.
        </p>

        <form onSubmit={handleSuggest} className="flex flex-col sm:flex-row gap-4 mb-12">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. A rainy night in a futuristic neon city..."
            className="flex-1 rounded-full px-8 h-14 bg-white dark:bg-white/5 border border-primary/20 focus:ring-2 focus:ring-primary/40 outline-none transition-all"
          />
          <button 
            type="submit"
            disabled={loading}
            className="rounded-full h-14 px-10 bg-dark-blue text-white font-bold hover:bg-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? 'Thinking...' : 'Get Suggestion'}
          </button>
        </form>

        {result && (
          <div className="bg-white dark:bg-white/5 p-10 rounded-3xl border border-primary/20 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Mood</h4>
                <p className="text-xl font-bold tracking-tight">{result.mood}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Instrumentation</h4>
                <p className="text-xl font-bold tracking-tight">{result.instrumentation}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Artistic Advice</h4>
              <p className="text-lg italic opacity-80 leading-relaxed">"{result.advice}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIMusicInsight;
