import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, Calendar, Play, FileSignature, ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { PLANS } from '../proposalData';

export function NextSteps() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-container border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-8">
          PRÓXIMOS <span className="text-evogar-blue">PASOS</span>
        </h2>
        <p className="text-white/40 font-medium text-lg">UN PROCESO DE INICIO ÁGIL PARA QUE NO PIERDAS NI UN SEGUNDO MÁS EN TU CRECIMIENTO.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: FileSignature, label: 'FIRMA DE ACUERDO', desc: 'ACEPTACIÓN FORMAL DEL PLAN SELECCIONADO.' },
          { icon: CreditCard, label: 'PAGO INICIAL', desc: 'ACTIVACIÓN DEL PROYECTO Y RESERVA DE AGENDA.' },
          { icon: Play, label: 'INICIO DE FASE 1', desc: 'EJECUCIÓN INMEDIATA DE LA ESTRATEGIA.' },
          { icon: Calendar, label: 'CALENDARIO DE IMPLEMENTACIÓN', desc: 'DEFINICIÓN DE HITOS Y FECHAS CLAVE.' },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "evogar-card p-8 text-center group bg-white/[0.01]",
              i % 2 === 0 ? "hover:border-evogar-blue/40" : "hover:border-auralia-coral/40"
            )}
          >
            <div className={cn(
              "w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-8 transition-all duration-500",
              i % 2 === 0 
                ? "bg-evogar-blue/10 border-evogar-blue/20 group-hover:bg-evogar-blue group-hover:text-white" 
                : "bg-auralia-coral/10 border-auralia-coral/20 group-hover:bg-auralia-coral group-hover:text-white"
            )}>
              <step.icon className={cn("w-8 h-8", i % 2 !== 0 && "text-auralia-coral group-hover:text-white")} />
            </div>
            <h4 className="font-black italic uppercase tracking-tight mb-4 text-lg">{step.label}</h4>
            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-widest">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center relative max-w-md mx-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full evogar-button-primary px-16 py-6 text-base shadow-[0_20px_50px_rgba(0,102,255,0.3)] bg-gradient-to-r from-evogar-blue to-auralia-coral border-none flex items-center justify-center gap-4 transition-all duration-500",
            isOpen && "rounded-b-none"
          )}
        >
          ACEPTAR PROPUESTA E INICIAR AHORA
          <ChevronDown className={cn("w-5 h-5 transition-transform duration-500", isOpen && "rotate-180")} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-evogar-black border-x border-b border-white/10 rounded-b-3xl overflow-hidden z-50 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="p-4 space-y-2">
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-4 italic px-4">Selecciona tu plan para iniciar:</p>
                {PLANS.map((plan) => (
                  <a
                    key={plan.name}
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                  >
                    <div className="text-left">
                      <h5 className="font-black italic uppercase tracking-tight text-sm group-hover:text-evogar-blue transition-colors">{plan.name}</h5>
                      <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">{plan.duration}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-evogar-blue group-hover:text-white transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
