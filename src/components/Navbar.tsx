import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter italic leading-none">
                EVO<span className="text-white/40">GAR</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Studio</span>
            </div>
            
            <span className="text-white/20 font-light text-xl">×</span>
            
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter italic leading-none text-auralia-coral">
                AURALIA
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Automatiza, Crece y Lidera</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase italic tracking-widest text-white/50">
          <a href="#roadmap" className="hover:text-auralia-coral transition-colors">Hoja de Ruta</a>
          <a href="#planes" className="hover:text-auralia-coral transition-colors">Planes</a>
          <a href="#implementacion" className="hover:text-auralia-coral transition-colors">Implementación</a>
          <a href="#alcances" className="hover:text-auralia-coral transition-colors">Alcances</a>
        </div>
      </div>
      {/* Co-branding line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-evogar-blue via-auralia-coral to-auralia-coral-soft" />
    </nav>
  );
}
