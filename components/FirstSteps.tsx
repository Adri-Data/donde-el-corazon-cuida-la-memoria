
import React, { useState } from 'react';
import { FIRST_30_DAYS } from '../constants';

const FirstSteps: React.FC = () => {
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);

    const toggleTask = (id: string) => {
        setCompletedTasks(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        );
    };

    const categories = Array.from(new Set(FIRST_30_DAYS.map(t => t.category)));

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Guía de Inicio</span>
                <h2 className="mt-4 text-4xl font-serif text-gray-900 italic">Primeros 30 Días</h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Sabemos que el diagnóstico es abrumador. Esta lista te ayudará a priorizar lo más importante paso a paso.
                </p>
            </div>

            <div className="space-y-12">
                {categories.map(category => (
                    <div key={category} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-serif text-primary mb-6 flex items-center">
                            <i className="fas fa-clock mr-3 text-sm opacity-50"></i>
                            {category}
                        </h3>
                        <div className="space-y-4">
                            {FIRST_30_DAYS.filter(t => t.category === category).map(task => (
                                <div
                                    key={task.id}
                                    onClick={() => toggleTask(task.id)}
                                    className={`flex items-start p-4 rounded-2xl border-2 transition-all cursor-pointer ${completedTasks.includes(task.id)
                                        ? 'bg-green-50 border-green-200 opacity-60'
                                        : 'bg-warm/30 border-transparent hover:border-primary/20 hover:bg-white active:scale-[0.98]'
                                        }`}
                                >
                                    <div className={`mt-1 h-6 w-6 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-colors ${completedTasks.includes(task.id) ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                                        }`}>
                                        {completedTasks.includes(task.id) && <i className="fas fa-check text-xs"></i>}
                                    </div>
                                    <div className="ml-4 flex-grow">
                                        <p className={`font-medium ${completedTasks.includes(task.id) ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                                            {task.task}
                                        </p>
                                        {(task.cost || task.link || task.id === '5') && (
                                            <div className="mt-3 flex flex-col gap-4">
                                                <div className="flex gap-4 text-sm flex-wrap items-center">
                                                    {task.cost && (
                                                        <span className="text-primary font-medium bg-primary/5 px-2 py-1 rounded-lg">
                                                            <i className="fas fa-tag mr-1 text-xs"></i> {task.cost}
                                                        </span>
                                                    )}
                                                    {task.link && (
                                                        <a
                                                            href={task.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 font-bold hover:underline flex items-center bg-blue-50 px-2 py-1 rounded-lg"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <i className="fas fa-external-link-alt mr-1 text-xs"></i> Ver detalles
                                                        </a>
                                                    )}
                                                </div>

                                                {task.id === '5' && (
                                                    <div className="mt-2 p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl">
                                                        <p className="text-sm text-gray-700 mb-4 font-medium">
                                                            Asegurar el entorno es vital para evitar accidentes. Hemos preparado una guía detallada estancia por estancia:
                                                        </p>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                window.location.hash = 'hogar';
                                                            }}
                                                            className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all group"
                                                        >
                                                            <i className="fas fa-house-chimney-medical text-lg group-hover:rotate-12 transition-transform"></i>
                                                            <span>Pulsa aquí para ver qué cambios hacer en el hogar</span>
                                                            <i className="fas fa-arrow-right text-xs opacity-50"></i>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-primary text-white p-8 rounded-[2.5rem] shadow-xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <i className="fas fa-quote-left text-4xl opacity-20 mb-4 block"></i>
                <h4 className="text-2xl font-serif mb-4">Lo estás haciendo bien.</h4>
                <p className="text-white/80 max-w-xl mx-auto italic">
                    No intentes hacerlo todo hoy. Lo más importante ahora es el acompañamiento y vuestro bienestar emocional.
                </p>
            </div>
        </div>
    );
};

export default FirstSteps;
