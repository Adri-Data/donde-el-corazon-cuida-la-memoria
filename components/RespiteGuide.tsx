
import React from 'react';

const RespiteGuide: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="text-center mb-16 animate-fade-in">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Bienestar del Cuidador</span>
                <h2 className="font-serif text-5xl text-gray-800 mt-6 mb-8 italic">
                    Guía de <span className="text-primary not-italic">Respiro</span>
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
                <p className="text-gray-500 text-xl leading-relaxed">
                    Cuidar al cuidador no es un lujo, es una necesidad vital para mantener la calidad de la atención.
                </p>
            </div>

            <div className="space-y-16">
                <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-purple-50">
                    <h3 className="text-2xl font-serif text-gray-800 mb-8 italic">¿Por qué es fundamental el respiro?</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        El agotamiento físico y emocional (síndrome del burnout) puede afectar tu salud y la relación con tu familiar. El respiro permite:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: 'fa-battery-full', text: 'Recargar energía física' },
                            { icon: 'fa-brain', text: 'Reducir el estrés mental' },
                            { icon: 'fa-users', text: 'Mantener relaciones sociales' },
                            { icon: 'fa-heart', text: 'Prevenir la depresión' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 bg-purple-50 p-4 rounded-2xl">
                                <i className={`fas ${item.icon} text-primary`}></i>
                                <span className="font-medium text-gray-700">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="grid lg:grid-cols-2 gap-10">
                    <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm">
                        <h3 className="text-2xl font-serif text-gray-800 mb-6 italic">Opciones de Respiro</h3>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-200 pl-6">
                                <h4 className="font-bold text-gray-800">Respiro Familiar</h4>
                                <p className="text-sm text-gray-600">Acuerdos con otros familiares para cubrir horas específicas a la semana.</p>
                            </div>
                            <div className="border-l-4 border-blue-200 pl-6">
                                <h4 className="font-bold text-gray-800">Centros de Día</h4>
                                <p className="text-sm text-gray-600">Estancias durante el día donde el paciente recibe estimulación profesional.</p>
                            </div>
                            <div className="border-l-4 border-blue-200 pl-6">
                                <h4 className="font-bold text-gray-800">Residencias Temporales</h4>
                                <p className="text-sm text-gray-600">Ingresos breves (1-2 semanas) para vacaciones o descanso del cuidador.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-serif mb-6 italic text-primary-foreground">Ayuda Directa: Respir Plus</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Programa de la Diputación de Barcelona que financia estancias temporales en residencias para que el cuidador pueda descansar.
                        </p>
                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                                <span>Ayuda económica:</span>
                                <span className="text-primary font-mono text-lg">75€ / día</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full"></div>
                        </div>
                        <a href="https://www.diba.cat/es/web/benestar/respir" target="_blank" className="block text-center bg-white text-gray-900 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
                            Más información DIBA
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RespiteGuide;
