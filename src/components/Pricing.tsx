import React from 'react';
import { PLANS, IMPLEMENTATION_MODEL } from '../proposalData';
import { cn } from '../lib/utils';
import { Check, X, Zap, Circle, Shield, Diamond, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'circle': return Circle;
      case 'blue': return Shield;
      case 'diamond': return Diamond;
      default: return Zap;
    }
  };

  return (
    <section id="planes" className="section-container bg-white/[0.01]">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
          INVERSIÓN <span className="text-evogar-blue">DEL PLAN</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto font-medium tracking-wide">
          “Selecciona el nivel de impulso que tu negocio necesita para dominar el mercado digital.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PLANS.map((plan, index) => {
          const Icon = getIcon(plan.iconType);
          // Calculate a representative monthly investment based on the plan's months
          const monthlyInvestments = IMPLEMENTATION_MODEL.slice(0, plan.months).map(m => parseInt(m.investment.replace(/[^0-9]/g, '')));
          const avgInvestment = Math.round(monthlyInvestments.reduce((a, b) => a + b, 0) / monthlyInvestments.length);
          const formattedInvestment = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(avgInvestment);

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "evogar-card p-10 flex flex-col relative overflow-hidden group",
                plan.name === 'PLAN IMPULSO' ? "border-auralia-coral/30 shadow-[0_0_60px_rgba(230,143,134,0.1)] scale-105 z-10 bg-auralia-coral/[0.02]" : "border-white/10"
              )}
            >
              {/* Header */}
              <div className="mb-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center border",
                    plan.name === 'PLAN IMPULSO' ? "bg-auralia-coral/10 border-auralia-coral/20" : "bg-evogar-blue/10 border-evogar-blue/20"
                  )}>
                    <Icon className={cn("w-6 h-6", plan.name === 'PLAN IMPULSO' ? "text-auralia-coral" : "text-evogar-blue")} />
                  </div>
                </div>
                <h3 className={cn(
                  "text-3xl font-black italic uppercase tracking-tight mb-4 transition-colors",
                  plan.name === 'PLAN IMPULSO' ? "group-hover:text-auralia-coral" : "group-hover:text-evogar-blue"
                )}>{plan.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium mb-8">{plan.objective}</p>
                
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] italic text-white/30">Duración del sistema:</span>
                    <span className={cn(
                      "text-xl font-black italic uppercase",
                      plan.name === 'PLAN IMPULSO' ? "text-auralia-coral" : "text-white"
                    )}>{plan.duration}</span>
                  </div>
                </div>
              </div>

              {/* Features List (Simplified) */}
              <div className="mb-10 flex-1">
                <div className="space-y-3">
                  {plan.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className={cn("w-4 h-4", plan.name === 'PLAN IMPULSO' ? "text-auralia-coral" : "text-evogar-blue")} />
                      <span className="text-xs text-white/60 font-medium italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={plan.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] italic text-xs transition-all duration-500 flex items-center justify-center gap-3",
                  plan.name === 'PLAN IMPULSO' 
                    ? "bg-gradient-to-r from-evogar-blue to-auralia-coral text-white shadow-[0_10px_30px_rgba(0,102,255,0.3)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.5)] hover:-translate-y-1" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}
              >
                INICIAR SISTEMA
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
