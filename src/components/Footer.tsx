import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060F1A] text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="font-bold tracking-widest text-base text-white uppercase"
            >
              YGB<span className="text-[#B8964A]">•</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-xs text-white/70 font-light tracking-wide">
              {PROFILE_INFO.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 uppercase tracking-wider">
            <a href="#alignment" className="hover:text-white transition-colors">
              Relevance
            </a>
            <a href="#proof" className="hover:text-white transition-colors">
              Selected Proof
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Selected Work
            </a>
            <a href="#regional" className="hover:text-white transition-colors">
              Regional
            </a>
            <a href="#documents" className="hover:text-white transition-colors">
              Documents
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white/80 hover:text-white transition-all"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 text-[#B8964A]" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Yousef G. Baarah. All rights reserved.
          </div>
          <div>
            Strategic Communications · Brand Leadership · Reputation Management · MENA &amp; GCC
          </div>
        </div>
      </div>
    </footer>
  );
};
