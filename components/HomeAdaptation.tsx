
import React from 'react';
import { HOME_ZONAL_ADAPTATIONS } from '../constants';

const HomeAdaptation: React.FC = () => {
    const handleDownloadPDF = () => {
        // Simple way to "generate" a PDF using browser's print function
        window.print();
    };

    const getGoogleSearchUrl = (product: string) => {
        return `https://www.google.com/search?q=${encodeURIComponent(product + " para personas dependientes")}`;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <style>
                {`
                @media print {
                    nav, footer, .no-print { display: none !important; }
                    body { background: white !important; padding: 0 !important; margin: 0 !important; }
                    .bg-white { box-shadow: none !important; border: 1px solid #eee !important; }
                    .max-w-6xl { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
                    .grid { gap: 8px !important; display: grid !important; grid-template-columns: repeat(2, 1fr) !important; }
                    h4 { font-size: 20px !important; margin-bottom: 5px !important; margin-top: 0 !important; }
                    p.text-lg { font-size: 14px !important; margin-bottom: 10px !important; }
                    .p-10, .p-20 { padding: 10px !important; }
                    .mt-24 { margin-top: 0 !important; }
                    .mb-10, .mb-16 { margin-bottom: 10px !important; }
                    .rounded-[4rem] { border-radius: 15px !important; border-width: 1px !important; }
                    .text-sm { font-size: 11px !important; line-height: 1.2 !important; }
                    .text-[8px] { font-size: 7px !important; }
                }
                `}
            </style>
            <div className="text-center mb-16 animate-fade-in no-print">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Un hogar seguro</span>
                <h2 className="mt-4 text-5xl md:text-6xl font-serif text-gray-900 italic">Adaptación <span className="text-primary not-italic">del Hogar</span></h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Organización por estancias para garantizar la seguridad y autonomía en cada rincón de la casa.
                </p>
            </div>

            <div className="space-y-16 mb-24 no-print">
                {HOME_ZONAL_ADAPTATIONS.map((zone, zIdx) => (
                    <div key={zIdx} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-purple-50">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-3xl">
                                <i className={`fas ${zone.icon}`}></i>
                            </div>
                            <h3 className="text-3xl font-serif text-gray-800">{zone.zone}</h3>
                            <div className="h-[2px] flex-grow bg-primary/5 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {zone.items.map((item, iIdx) => (
                                <div key={iIdx} className="bg-warm/20 p-8 rounded-[2rem] border border-transparent hover:border-primary/20 transition-all flex flex-col group">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.stage === 'Leve' ? 'bg-green-100 text-green-700' :
                                            item.stage === 'Moderado' ? 'bg-blue-100 text-blue-700' :
                                                'bg-orange-100 text-orange-700'
                                            }`}>
                                            Etapa {item.stage === 'Moderado' ? 'Moderada' : item.stage}
                                        </span>
                                    </div>
                                    <div className="text-gray-700 font-medium mb-6 leading-relaxed flex-grow">
                                        <ul className="space-y-3">
                                            {item.change.split(';').map((point, pIdx) => (
                                                <li key={pIdx} className="flex gap-3">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                                    <span className="text-sm">{point.trim().charAt(0).toUpperCase() + point.trim().slice(1)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-3 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <i className="fas fa-box text-primary/30"></i>
                                            <span className="font-bold text-gray-700">{item.product}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-400">
                                            <i className="fas fa-tag text-primary/30"></i>
                                            <span>{item.price}</span>
                                        </div>
                                        <a
                                            href={getGoogleSearchUrl(item.product)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-4 hover:gap-3 transition-all"
                                        >
                                            Ver varias opciones <i className="fas fa-search"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 bg-gray-50 p-10 md:p-20 rounded-[4rem] border-4 border-primary/20 shadow-2xl relative overflow-hidden print:bg-white print:border-2 print:p-8 print:m-0 print:rounded-3xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 no-print"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-10 text-center md:text-left print:mb-4 print:gap-4">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center text-3xl shadow-lg shadow-primary/30 no-print">
                            <i className="fas fa-shield-check text-primary"></i>
                        </div>
                        {/* Print only logo */}
                        <div className="hidden print:flex w-12 h-12 bg-primary/10 rounded-xl items-center justify-center text-primary text-xl mb-2">
                            <i className="fas fa-heart"></i>
                        </div>
                        <div>
                            <h4 className="text-4xl font-serif text-gray-900 mb-2">Checklist de Seguridad Mensual</h4>
                            <p className="text-gray-500 text-lg">Revisa estos puntos críticos cada mes para mantener el entorno bajo control.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { text: "Retirar cuchillos, objetos punzantes y cerillas", cat: "Suelos y Seguridad" },
                            { text: "Luces de noche automáticas con sensor de movimiento", cat: "Iluminación" },
                            { text: "Medicamentos y productos de limpieza bajo llave", cat: "Seguridad" },
                            { text: "Adhesivos de contraste (franjas o vinilos) en cristales a la altura de los ojos", cat: "Visibilidad" },
                            { text: "Agua caliente limitada a <49°C", cat: "Baño" },
                            { text: "Nevera revisada semanalmente (caducados)", cat: "Alimentación" },
                            { text: "Bordes de escalones marcados con contraste", cat: "Escaleras" },
                            { text: "Espejos limitados para evitar confusión", cat: "Entorno" },
                            { text: "Detector de humo y gas revisado trimestralmente", cat: "Prevención" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border-2 border-primary/5 flex items-start gap-4 hover:border-primary/20 transition-all shadow-sm print:p-2 print:border">
                                <div className="mt-1 w-6 h-6 rounded-lg bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 print:w-4 print:h-4">
                                    <i className="fas fa-check text-[10px] print:text-[8px]"></i>
                                </div>
                                <div>
                                    <span className="text-[8px] font-bold text-primary/40 uppercase tracking-[0.2em] block mb-1 print:mb-0">{item.cat}</span>
                                    <span className="text-gray-700 font-medium leading-snug text-sm print:text-[10px]">{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center no-print">
                        <button
                            onClick={handleDownloadPDF}
                            className="bg-primary text-white px-12 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-3 mx-auto"
                        >
                            <i className="fas fa-print"></i> Descargar Checklist PDF
                        </button>
                        <p className="text-gray-400 text-xs mt-4 italic">Se abrirá el cuadro de diálogo de impresión; selecciona "Guardar como PDF".</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdaptation;
