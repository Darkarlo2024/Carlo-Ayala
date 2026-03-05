import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHASES } from '../proposalData';
import { cn } from '../lib/utils';
import { CheckCircle2, Target, ChevronDown, ChevronUp, Activity, Package, XCircle } from 'lucide-react';

export function Roadmap() {
  const [activePhase, setActivePhase] = useState(PHASES[0]);
  const [showDetails, setShowDetails] = useState(false);

  // Reset details view when phase changes
  const handlePhaseChange = (phase: typeof PHASES[0]) => {
    setActivePhase(phase);
    setShowDetails(false);
  };

  return (
    <section id="roadmap" className="section-container geometric-pattern">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
          HOJA DE <span className="text-evogar-blue">RUTA</span>
        </h2>
        <p className="text-white/40 max-w-xl mx-auto font-medium tracking-wide mb-8">
          UN PROCESO ESTRUCTURADO EN 5 FASES DISEÑADO PARA GARANTIZAR RESULTADOS PREDECIBLES.
        </p>
        <div className="max-w-2xl mx-auto p-4 border-y border-white/5 bg-white/[0.01]">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic text-auralia-coral">
            Cada fase incluye entregables específicos que se ejecutan durante ese mes para construir el sistema completo de crecimiento digital.
          </p>
        </div>
      </div>

      {/* Phase Selector */}
      <div className="relative mb-24">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2 z-0" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-evogar-blue/20 via-auralia-coral/20 to-auralia-coral-soft/20 -translate-y-1/2 z-0" />
        <div className="relative z-10 flex justify-between max-w-5xl mx-auto">
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseChange(phase)}
              className="group flex flex-col items-center gap-6"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
                activePhase.id === phase.id 
                  ? "bg-evogar-blue border-evogar-blue shadow-[0_0_30px_rgba(0,102,255,0.6)] rotate-3" 
                  : "bg-evogar-black border-white/10 group-hover:border-white/30"
              )}>
                <span className={cn(
                  "font-black text-xl italic",
                  activePhase.id === phase.id ? "text-white" : "text-white/40"
                )}>
                  0{phase.id}
                </span>
              </div>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-black italic transition-colors",
                activePhase.id === phase.id ? "text-evogar-blue" : "text-white/20"
              )}>
                FASE {phase.id}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Phase Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-evogar-blue font-black tracking-[0.4em] uppercase text-xs italic">ESTRATEGIA</span>
                <div className="w-8 h-px bg-auralia-coral/30" />
                <span className="text-auralia-coral font-black tracking-[0.4em] uppercase text-xs italic">FASE 0{activePhase.id}</span>
              </div>
              <h3 className="text-7xl font-black mb-6 tracking-tighter uppercase italic leading-none">{activePhase.title}</h3>
              <p className="text-2xl text-white/60 font-light leading-relaxed">{activePhase.subtitle}</p>
            </div>

            <div className="evogar-card p-8 border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-4 mb-6 text-auralia-coral">
                <Target className="w-6 h-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">RESULTADO ESPERADO</span>
              </div>
              <p className="text-2xl font-black italic uppercase">{activePhase.result}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="evogar-card p-10 border-evogar-blue/20 bg-evogar-blue/[0.03] relative overflow-hidden">
              {/* Watermark 'E' */}
              <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/[0.02] italic select-none pointer-events-none">E</div>
              
              <div className="space-y-12 relative z-10">
                <div>
                  <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] italic mb-8 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-evogar-blue" />
                    ¿QUÉ INCLUYE?
                  </h4>
                  <ul className="space-y-5">
                    {activePhase.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/70 text-base font-medium">
                        <div className="w-2 h-2 bg-evogar-blue rounded-sm rotate-45" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Details Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className={cn(
                  "w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 group",
                  showDetails 
                    ? "bg-auralia-coral text-white border-auralia-coral" 
                    : "bg-white/[0.02] border-white/10 text-white/60 hover:border-auralia-coral/50 hover:text-white"
                )}
              >
                <span className="text-xs font-black uppercase tracking-[0.4em] italic">Ver detalle de implementación</span>
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 group-hover:text-auralia-coral" />}
              </button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 evogar-card p-8 border-auralia-coral/20 bg-auralia-coral/[0.02] space-y-10">
                      <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] italic text-auralia-coral mb-2">MES {activePhase.id} – {activePhase.title}</h5>
                        <p className="text-sm text-white/60 font-medium leading-relaxed italic">
                          {activePhase.objective}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-8">
                        {/* Section 1: Lo que haremos */}
                        <div className="space-y-4">
                          <h6 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic text-white/40">
                            <Activity className="w-4 h-4 text-evogar-blue" />
                            1️⃣ Lo que haremos
                          </h6>
                          <ul className="space-y-3">
                            {activePhase.whatWeDo.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                                <span className="text-evogar-blue mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Section 2: Lo que entregamos */}
                        <div className="space-y-4">
                          <h6 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic text-white/40">
                            <Package className="w-4 h-4 text-auralia-coral" />
                            2️⃣ Lo que entregamos
                          </h6>
                          <ul className="space-y-3">
                            {activePhase.whatWeDeliver.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-auralia-coral mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Section 3: Lo que no incluye */}
                        <div className="space-y-4">
                          <h6 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic text-white/40">
                            <XCircle className="w-4 h-4 text-white/20" />
                            3️⃣ Lo que no incluye
                          </h6>
                          <ul className="space-y-3">
                            {activePhase.whatNotIncluded.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-white/40 font-medium italic">
                                <span className="text-white/20 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
