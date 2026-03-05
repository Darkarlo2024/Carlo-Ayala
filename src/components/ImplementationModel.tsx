import React, { useState } from 'react';
import { IMPLEMENTATION_MODEL } from '../proposalData';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Target, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

export function ImplementationModel() {
  return (
    <section id="implementacion" className="section-container bg-white/[0.01]">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
          IMPLEMENTACIÓN <span className="text-evogar-blue">DEL SISTEMA</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto font-medium tracking-wide">
          "El sistema se implementa progresivamente para asegurar resultados sostenibles y construir un crecimiento digital sólido."
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {IMPLEMENTATION_MODEL.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="evogar-card p-6 border-white/5 bg-white/[0.02] flex items-center justify-between group hover:border-evogar-blue/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-evogar-blue/10 border border-evogar-blue/20 flex items-center justify-center">
                  <span className="text-evogar-blue font-black italic">0{item.month}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black italic uppercase tracking-tight group-hover:text-evogar-blue transition-colors">
                    Mes {item.month} — {item.title}
                  </h3>
                  <p className="text-xs text-white/40 font-medium italic mt-1">{item.objective}</p>
                </div>
              </div>
              <div className="hidden md:block">
                <CheckCircle2 className="w-6 h-6 text-evogar-blue/20 group-hover:text-evogar-blue transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
