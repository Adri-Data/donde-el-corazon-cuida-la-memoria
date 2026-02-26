
import React from 'react';
import { AppSection } from '../types';
import { WELLBEING_DATA } from '../constants';

interface WellbeingProps {
    onNavigate: (section: AppSection) => void;
}

const Wellbeing: React.FC<WellbeingProps> = ({ onNavigate }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-16 animate-fade-in">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Cuidar al Cuidador</span>
                <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mt-6 mb-8 leading-tight italic">
                    Tu Salud <span className="text-primary not-italic">& Bienestar</span>
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
                <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
                    Cuidar de alguien requiere que tú también estés bien. Aquí encontrarás herramientas para tu salud, la de la persona cuidada y consejos para el entorno familiar.
                </p>
            </div>

            <div className="space-y-24">
                {/* Rutina Diaria Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-purple-50">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 space-y-8">
                            <h3 className="text-3xl font-serif text-gray-800 italic">Rutina Diaria Recomendada</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mantener una estructura diaria reduce la ansiedad en el paciente y el agotamiento en el cuidador.
                            </p>

                            <div className="space-y-6">
                                <h4 className="font-bold text-gray-800">Para el Cuidador</h4>
                                <ul className="space-y-3">
                                    {WELLBEING_DATA.rutina.caregiver.map((tip, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-600">
                                            <i className="fas fa-check-circle text-primary/40 mt-1"></i>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="bg-warm/30 rounded-[2rem] p-2 md:p-4">
                                <div className="grid grid-cols-1 gap-2">
                                    {WELLBEING_DATA.rutina.patientRoutine.map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-2xl flex items-center gap-6 shadow-sm border border-gray-100/50">
                                            <span className="text-primary font-bold font-mono w-16 flex-shrink-0">{item.time}</span>
                                            <div className="h-8 w-[2px] bg-primary/20 rounded-full"></div>
                                            <span className="text-gray-800 font-medium">{item.task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Info Cards Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                        <div className="bg-purple-100 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <i className="fas fa-user-doctor text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Salud del Cuidador</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            El síndrome del cuidador quemado es real. Reconoce los límites y busca tiempo de respiro obligatorio.
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600 mb-8">
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Ejercicio 30 min/día</li>
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Ocio mín 2 h/semana</li>
                        </ul>
                        <button
                            onClick={() => { onNavigate('guia-respiro'); window.location.hash = 'guia-respiro'; }}
                            className="bg-primary/5 text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all"
                        >
                            Guía de Respiro
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                        <div className="bg-green-100 text-green-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <i className="fas fa-heart-pulse text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Salud del Paciente</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            Nutrición, movimiento y estimulación. Dieta mediterránea y luz natural son claves demostradas.
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600 mb-8">
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Dieta MIND/Med</li>
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Hidratación 1.5-2L</li>
                        </ul>
                        <button
                            onClick={() => { onNavigate('pautas-nutricion'); window.location.hash = 'pautas-nutricion'; }}
                            className="bg-green-50 text-green-700 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-100 transition-all"
                        >
                            Pautas Nutrición
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                        <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <i className="fas fa-house-user text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Entorno Familiar</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            La comunicación asertiva y la validación emocional reducen el conflicto significativamente.
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600 mb-8">
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Frases cortas</li>
                            <li className="flex gap-2 items-center"><i className="fas fa-check text-green-500"></i> Validar emociones</li>
                        </ul>
                        <button
                            onClick={() => { onNavigate('consejos-comunicacion'); window.location.hash = 'consejos-comunicacion'; }}
                            className="bg-orange-50 text-orange-700 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-orange-100 transition-all"
                        >
                            Consejos Comunicación
                        </button>
                    </div>
                </div>

                {/* Prevention Link Card */}
                <div className="bg-gray-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mb-32"></div>
                    <div className="max-w-xl relative z-10">
                        <h3 className="text-3xl font-serif italic mb-4">¿Quieres saber más sobre prevención?</h3>
                        <p className="text-gray-400 text-lg">Consulta nuestra guía basada en los últimos estudios científicos de 2024-2026 sobre hábitos saludables.</p>
                    </div>
                    <button
                        onClick={() => { onNavigate('prevencion'); window.location.hash = 'prevencion'; }}
                        className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all whitespace-nowrap relative z-10"
                    >
                        Ver Guía de Prevención <i className="fas fa-flask ml-2"></i>
                    </button>
                </div>

                {/* New Section: Emotional Support & Stress */}
                <section className="bg-white rounded-[4rem] p-8 md:p-16 shadow-sm border border-purple-50">
                    <h3 className="text-3xl font-serif text-gray-800 mb-12 italic text-center">Apoyo Emocional y Gestión del Estrés</h3>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2">
                                <i className="fas fa-users"></i> Recursos de acompañamiento
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3"><i className="fas fa-check text-green-500"></i> <strong>Alzheimer Catalunya:</strong> Grupos de apoyo guiados por expertos.</li>
                                <li className="flex gap-3"><i className="fas fa-check text-green-500"></i> <strong>AFAs locales:</strong> Ayuda profesional en toda Cataluña.</li>
                                <li className="flex gap-3"><i className="fas fa-check text-green-500"></i> <strong>Cruz Roja:</strong> Orientación emocional 24h.</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 space-y-6">
                            <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Técnicas de Alivio</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Relajación Jacobson</p>
                                    <p className="text-xs text-gray-600">Tensa grupos musculares 5s y suelta 15s. Repite con manos y hombros.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Mindfulness 5 min</p>
                                    <p className="text-xs text-gray-600">Lleva la atención a los sonidos y a tu respiración sin juzgar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Section: Medication & Behavior */}
                <section className="bg-white rounded-[4rem] p-8 md:p-16 shadow-sm border border-purple-50">
                    <h3 className="text-3xl font-serif text-gray-800 mb-12 italic text-center">Gestión Diaria: Medicación y Comportamiento</h3>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                                <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                    <i className="fas fa-pills"></i> Medicamentos
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 italic">
                                    "Usa pastilleros semanales por horarios. Anota siempre efectos secundarios."
                                </p>
                                <div className="bg-white p-4 rounded-xl text-[10px] font-mono text-blue-600 border border-blue-100">
                                    Tabla sugerida: Nombre | Dosis | Hora | Motivo
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest">Guía de Comportamientos</h4>
                            <div className="space-y-4 text-sm">
                                <div className="border-l-4 border-orange-200 pl-4">
                                    <p className="font-bold text-gray-800">Agitación</p>
                                    <p className="text-gray-600 text-xs text-justify">Mantén un ambiente tranquilo. Simplifica tareas complejas en pasos muy simples.</p>
                                </div>
                                <div className="border-l-4 border-orange-200 pl-4">
                                    <p className="font-bold text-gray-800">Ansiedad</p>
                                    <p className="text-gray-600 text-xs text-justify">Valida sus emociones ("Entiendo que te sientas así"). Distrae con actividades agradables.</p>
                                </div>
                                <div className="border-l-4 border-orange-200 pl-4">
                                    <p className="font-bold text-gray-800">Insomnio</p>
                                    <p className="text-gray-600 text-xs text-justify">Rutinas predecibles al dormir. Luz tenue y música relajante al anochecer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Wellbeing;
