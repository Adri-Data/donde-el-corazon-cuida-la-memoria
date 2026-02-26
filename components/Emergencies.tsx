
import React from 'react';
import { EMERGENCY_NUMBERS } from '../constants';

const Emergencies: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl text-gray-800 mb-4">¿Necesitas ayuda ahora?</h2>
                <p className="text-gray-500 text-lg">Teléfonos oficiales de emergencia y servicios de soporte en Cataluña y España.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {EMERGENCY_NUMBERS.map((item, idx) => (
                    <a
                        key={idx}
                        href={`tel:${item.number.replace(/\s/g, '')}`}
                        className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-sm border border-purple-50 hover:shadow-xl transition-all group overflow-hidden relative"
                    >
                        <div className={`w-20 h-20 shrink-0 ${item.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg transform group-hover:scale-110 transition-transform`}>
                            <i className={`fas ${item.icon}`}></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{item.area}</h3>
                            <p className="text-3xl font-serif text-primary tracking-tighter">{item.number}</p>
                            <p className="text-xs text-gray-400 mt-2 flex items-center gap-2">
                                <i className="fas fa-hand-holding-heart"></i> Pulsa para llamar directamente
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/5 transition-colors"></div>
                    </a>
                ))}
            </div>

            <div className="bg-red-50 p-12 rounded-[2.5rem] border border-red-100 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                <div className="bg-white p-6 rounded-full shadow-lg border-8 border-red-200 animate-pulse">
                    <i className="fas fa-kit-medical text-5xl text-red-500"></i>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">Consejos Rápidos para Urgencias</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex gap-4 items-start">
                            <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none mt-1 shrink-0">1</span>
                            <span>Mantener la calma: la persona con Alzheimer percibe tu estrés y puede agitarse más.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none mt-1 shrink-0">2</span>
                            <span>Hablar en un tono de voz suave, lento y con frases cortas.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none mt-1 shrink-0">3</span>
                            <span>Si es una emergencia médica, ten a mano la medicación habitual y el DNI de la persona cuidada.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none mt-1 shrink-0">
                                <i className="fas fa-brain text-[8px]"></i>
                            </span>
                            <span><strong>Agitación extrema:</strong> Reduce estímulos (ruido, luces), no discutas ni intentes razonar, distrae con un objeto conocido o música suave.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none mt-1 shrink-0">
                                <i className="fas fa-door-open text-[8px]"></i>
                            </span>
                            <span><strong>Errancia (Pérdida):</strong> Avisa a los Mossos inmediatamente (062) indicando que es una persona con Alzheimer. Ten siempre fotos recientes.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Emergencies;
