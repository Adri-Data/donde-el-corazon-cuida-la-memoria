
import React from 'react';

const CommunicationGuide: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="text-center mb-16 animate-fade-in">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Apoyo Familiar</span>
                <h2 className="font-serif text-5xl text-gray-800 mt-6 mb-8 italic">
                    Consejos de <span className="text-orange-600 not-italic">Comunicación</span>
                </h2>
                <div className="w-24 h-1 bg-orange-200 mx-auto mb-10 rounded-full"></div>
                <p className="text-gray-500 text-xl leading-relaxed">
                    La forma en que nos comunicamos puede reducir drásticamente la agitación y mejorar la conexión emocional.
                </p>
            </div>

            <div className="space-y-16">
                <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-orange-50">
                    <h3 className="text-2xl font-serif text-gray-800 mb-8 italic">Pautas de Oro</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest pl-4 border-l-4 border-orange-400">Verbal</h4>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3"><i className="fas fa-comment-dots text-orange-400"></i> Usa frases muy cortas y sencillas.</li>
                                <li className="flex gap-3"><i className="fas fa-circle-question text-orange-400"></i> Haz preguntas de "Sí" o "No".</li>
                                <li className="flex gap-3"><i className="fas fa-volume-low text-orange-400"></i> Mantén un tono de voz suave y pausado.</li>
                                <li className="flex gap-3"><i className="fas fa-hourglass text-orange-400"></i> Espera el tiempo necesario para la respuesta.</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest pl-4 border-l-4 border-orange-400">No Verbal</h4>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3"><i className="fas fa-eye text-orange-400"></i> Mantén siempre contacto visual directo.</li>
                                <li className="flex gap-3"><i className="fas fa-hand-holding-heart text-orange-400"></i> El contacto físico suave tranquiliza.</li>
                                <li className="flex gap-3"><i className="fas fa-user-check text-orange-400"></i> Ponte a su altura física para hablar.</li>
                                <li className="flex gap-3"><i className="fas fa-face-smile text-orange-400"></i> Tu expresión facial educa su emoción.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900 text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border border-white/5">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <h3 className="text-3xl font-serif mb-12 italic text-center text-violet-200">La Validación Emocional</h3>
                    <div className="max-w-2xl mx-auto space-y-8">
                        <p className="text-indigo-50/80 leading-relaxed text-lg text-justify font-light italic">
                            "No discutas realidades desdibujadas. Entra en su mundo emocional. Si dice que tiene miedo por algo irreal, no digas 'eso no es verdad', di 'entiendo que tengas miedo, estoy aquí contigo'."
                        </p>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-violet-300">Evita siempre:</p>
                            <ul className="grid sm:grid-cols-2 gap-4 text-xs">
                                <li className="flex gap-2 items-center text-indigo-100/70"><i className="fas fa-ban text-red-400/50"></i> Corregir datos irrelevantes</li>
                                <li className="flex gap-2 items-center text-indigo-100/70"><i className="fas fa-ban text-red-400/50"></i> Tratar como a un niño</li>
                                <li className="flex gap-2 items-center text-indigo-100/70"><i className="fas fa-ban text-red-400/50"></i> Hablar de él/ella delante suyo</li>
                                <li className="flex gap-2 items-center text-indigo-100/70"><i className="fas fa-ban text-red-400/50"></i> Gritar o mostrar impaciencia</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CommunicationGuide;
