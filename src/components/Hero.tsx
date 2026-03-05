import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 overflow-hidden">
      {/* Background large 'E' watermark inspired by PDF */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60vw] font-black text-white/[0.02] select-none pointer-events-none italic tracking-tighter">
        E
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-evogar-blue/30" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Alianza Estratégica</span>
          <div className="h-px w-12 bg-auralia-coral/30" />
        </div>
        
        <h1 className="text-5xl md:text-[7rem] font-black tracking-tighter mb-6 leading-[0.9] uppercase italic">
          SISTEMA DE <span className="text-white">POSICIONAMIENTO</span> <br />
          Y CRECIMIENTO <span className="text-white">DIGITAL</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tight mb-8 text-evogar-blue">
          Propuesta Estratégica por Fases
        </h2>
        
        <div className="h-px w-32 bg-gradient-to-r from-evogar-blue to-auralia-coral mx-auto mb-8" />
        
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] mb-4 uppercase text-white/50">
          Agente de Seguros – <span className="text-white font-bold">San Luis Potosí</span>
        </p>

        <p className="text-xs md:text-sm font-bold tracking-[0.1em] text-white/30 mb-12 max-w-xl mx-auto">
          Transformando tu presencia digital en un sistema de captación constante.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button 
            onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
            className="evogar-button-primary min-w-[240px]"
          >
            Explorar Fases
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/20 animate-bounce" />
      </motion.div>
    </section>
  );
}
