import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Roadmap } from './components/Roadmap';
import { Pricing } from './components/Pricing';
import { ImplementationModel } from './components/ImplementationModel';
import { Scope } from './components/Scope';
import { NextSteps } from './components/NextSteps';
import { motion } from 'motion/react';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-evogar-black text-white selection:bg-evogar-blue/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Roadmap />
          <ImplementationModel />
          <Pricing />
          <Scope />
          <NextSteps />
        </motion.div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            Powered by <span className="text-white/40">EVOGAR Studio</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
