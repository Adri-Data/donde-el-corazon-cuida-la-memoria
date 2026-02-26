
import React from 'react';
import { PREVENTION_HABITS } from '../constants';

const Prevention: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Ciencia y Salud</span>
                <h2 className="mt-4 text-4xl font-serif text-gray-900 italic">Prevención y Hábitos</h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Basado en la Lancet Commission 2024. Hábitos diarios que pueden mitigar el riesgo y ralentizar el avance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PREVENTION_HABITS.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-primary/20 transition-colors">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform"></div>

                        <h3 className="text-2xl font-serif italic text-primary mb-6">{item.habit}</h3>

                        <div className="space-y-4 mb-8">
                            <div>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-1">Qué hacer</span>
                                <p className="text-gray-700 leading-relaxed">{item.whatToDo}</p>
                            </div>

                            <div className="pt-4 border-t border-gray-50">
                                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">Qué evitar</span>
                                <p className="text-gray-500 leading-relaxed">{item.whatToAvoid}</p>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-4 rounded-2xl">
                            <span className="text-sm font-medium text-primary">
                                Reducción de riesgo: <span className="font-bold">{item.reductionPercentage}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                <h3 className="text-2xl font-serif mb-8 text-gray-900">Chequeos Médicos Recomendados</h3>
                <div className="space-y-6 max-w-2xl">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                            <i className="fas fa-stethoscope"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Anual (con riesgo)</h4>
                            <p className="text-gray-600">Tensión, perfil lipídico completo, glucemia/HbA1c, IMC.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                            <i className="fas fa-ear-listen"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Cada 1-2 años (&gt;50 años)</h4>
                            <p className="text-gray-600">Audiometría + revisión oftalmológica completa.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                            <i className="fas fa-brain"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">&gt;60 años</h4>
                            <p className="text-gray-600">Screening cognitivo (MoCA) y biomarcadores si hay sospecha.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prevention;
