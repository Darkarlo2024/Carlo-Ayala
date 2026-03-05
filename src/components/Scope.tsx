import React from 'react';
import { SCOPE } from '../proposalData';
import { CheckCircle, XCircle, Clock, RotateCcw, FileText } from 'lucide-react';

export function Scope() {
  return (
    <section id="alcances" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-16">
          <div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-8">
              ALCANCES Y <span className="text-evogar-blue">LÍMITES</span>
            </h2>
            <p className="text-white/40 leading-relaxed font-medium text-lg">
              TRANSPARENCIA TOTAL DESDE EL PRIMER DÍA. DEFINIMOS CLARAMENTE QUÉ ESPERAR DE NUESTRO SERVICIO PARA ASEGURAR UNA RELACIÓN PROFESIONAL EXITOSA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] italic text-emerald-500">
                <CheckCircle className="w-5 h-5" />
                QUÉ SÍ INCLUYE
              </h4>
              <ul className="space-y-5">
                {SCOPE.included.map((item, i) => (
                  <li key={i} className="text-sm text-white/70 flex items-start gap-4 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] italic text-red-500/70">
                <XCircle className="w-5 h-5" />
                QUÉ NO INCLUYE
              </h4>
              <ul className="space-y-5">
                {SCOPE.notIncluded.map((item, i) => (
                  <li key={i} className="text-sm text-white/30 flex items-start gap-4 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="evogar-card p-12 border-white/10 flex flex-col justify-center bg-white/[0.01] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-auralia-coral/5 blur-3xl rounded-full" />
          
          <h3 className="text-2xl font-black italic uppercase tracking-tight mb-12 relative z-10">CONDICIONES DEL SERVICIO</h3>
          <div className="space-y-10 relative z-10">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-evogar-blue/10 rounded-2xl border border-evogar-blue/20 group-hover:bg-evogar-blue group-hover:text-white transition-all duration-500">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] italic text-white/40 mb-2">TIEMPO DE RESPUESTA</p>
                <p className="text-xl font-black italic uppercase tracking-tight">{SCOPE.terms.responseTime}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-auralia-coral/10 rounded-2xl border border-auralia-coral/20 group-hover:bg-auralia-coral group-hover:text-white transition-all duration-500">
                <RotateCcw className="w-7 h-7 text-auralia-coral group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] italic text-white/40 mb-2">REVISIONES PERMITIDAS</p>
                <p className="text-xl font-black italic uppercase tracking-tight">{SCOPE.terms.revisions}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-evogar-blue/10 rounded-2xl border border-evogar-blue/20 group-hover:bg-evogar-blue group-hover:text-white transition-all duration-500">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] italic text-white/40 mb-2">COMPROMISO SUGERIDO</p>
                <p className="text-xl font-black italic uppercase tracking-tight">{SCOPE.terms.contract}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
