
import React, { useState } from 'react';
import { STIMULATION_PLANS } from '../constants';

const Exercises: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const selectedPlan = STIMULATION_PLANS.find(p => p.id === selectedPlanId);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16 animate-fade-in">
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Estimulación Activa</span>
        <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mt-6 mb-4 leading-tight italic">
          Planes de <span className="text-primary not-italic">Estimulación</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Ejercicios diseñados por expertos para cada etapa de la enfermedad, basados en evidencia clínica reciente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {STIMULATION_PLANS.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlanId(plan.id)}
            className={`p-10 rounded-[2.5rem] border-4 transition-all text-left relative overflow-hidden group h-full flex flex-col ${selectedPlanId === plan.id
              ? 'bg-primary text-white border-primary shadow-2xl scale-[1.02]'
              : 'bg-white border-purple-50 hover:border-primary/20 shadow-sm'
              }`}
          >
            <div className={`mb-6 inline-block w-fit px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${selectedPlanId === plan.id ? 'bg-white/20 text-white' : 'bg-purple-50 text-primary'
              }`}>
              Nivel {plan.level}
            </div>
            <h3 className={`text-2xl font-serif mb-4 flex-shrink-0 ${selectedPlanId === plan.id ? 'text-white' : 'text-gray-800'}`}>
              {plan.name}
            </h3>
            <p className={`text-sm leading-relaxed mb-8 flex-grow ${selectedPlanId === plan.id ? 'text-white/80' : 'text-gray-500'}`}>
              {plan.description}
            </p>
            <div className={`text-xs font-bold flex items-center gap-2 mt-auto ${selectedPlanId === plan.id ? 'text-white' : 'text-primary'}`}>
              Ver {plan.exercises.length} actividades <i className="fas fa-arrow-right"></i>
            </div>
          </button>
        ))}
      </div>

      {selectedPlan && (
        <div className="animate-fade-in space-y-12">
          <div className="flex items-center gap-6 mb-12">
            <h4 className="font-serif text-4xl text-gray-800 italic">{selectedPlan.name}</h4>
            <div className="h-[2px] flex-grow bg-primary/10 rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {selectedPlan.exercises.map((ex, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-purple-50 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <i className={`fas ${ex.type.includes('Físico') ? 'fa-person-running' :
                          ex.type.includes('Sensorial') ? 'fa-hands' :
                            'fa-pencil'
                          }`}></i>
                      </div>
                      <div>
                        <h5 className="text-2xl font-bold text-gray-800">{ex.title}</h5>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{ex.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                        <i className="fas fa-clock text-xs opacity-50"></i> {ex.frequency}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                        <i className="fas fa-euro-sign text-xs opacity-50"></i> {ex.cost}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Objetivo Terapéutico</p>
                        <p className="text-gray-600 leading-relaxed">{ex.objective}</p>
                      </div>

                      <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Evidencia Científica</p>
                        <p className="text-sm text-primary/70 italic font-medium">"{ex.evidence}"</p>
                      </div>
                    </div>

                    <div className="bg-warm/30 p-8 md:p-10 rounded-[2.5rem] border border-transparent group-hover:border-primary/20 transition-all">
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <i className="fas fa-play-circle text-primary"></i> Guía paso a paso
                      </p>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {ex.howTo}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-brain text-9xl"></i>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gray-900 rounded-[4rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h4 className="text-2xl font-serif italic mb-4">¿Prefieres estimulación digital?</h4>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Existen aplicaciones como MindMate o NeuronUP con ejercicios interactivos validados.</p>
            <button
              onClick={() => window.location.hash = 'adicional'}
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
            >
              Ver Apps Recomendadas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
