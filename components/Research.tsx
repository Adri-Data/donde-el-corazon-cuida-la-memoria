
import React from 'react';
import { INVESTIGATION_FOUNDATIONS } from '../constants';

const Research: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-24 animate-fade-in">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Ciencia y Esperanza</span>
                <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mt-6 mb-8 leading-tight italic">
                    Investigación & <span className="text-primary not-italic">Fundaciones</span>
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
                <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
                    Las entidades que lideran la lucha contra el Alzheimer en España. Su trabajo en diagnóstico precoz y biomarcadores está cambiando el futuro.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-32">
                {INVESTIGATION_FOUNDATIONS.map((found, idx) => (
                    <div key={idx} className="bg-white rounded-[4rem] p-10 md:p-14 border border-purple-50 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[8rem] group-hover:bg-primary/10 transition-colors"></div>

                        <div className="flex-grow space-y-10">
                            <div className="space-y-4">
                                <h3 className="font-serif text-4xl text-gray-800 leading-tight group-hover:text-primary transition-colors">{found.name}</h3>
                                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                                    {idx === 0 ? 'Referente Nacional' : 'Investigación & Cuidados'}
                                </p>
                            </div>

                            <div className="p-8 bg-purple-50 shadow-inner rounded-[2.5rem] italic text-gray-600 text-lg leading-relaxed text-justify relative group-hover:shadow-soft">
                                "{found.description}"
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-800 text-sm flex items-center gap-3">
                                        <i className="fas fa-microscope text-primary/40"></i>
                                        Su actividad
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed text-justify">{found.whatTheyDo}</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-800 text-sm flex items-center gap-3">
                                        <i className="fas fa-trophy text-primary/40"></i>
                                        Principales logros
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed text-justify">{found.achievements}</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-[3rem] border border-dashed border-gray-200 group-hover:border-primary/50 transition-all">
                                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-3">
                                    <i className="fas fa-hand-holding-heart text-primary/40"></i>
                                    Tu colaboración
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">{found.howToHelp}</p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={found.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary text-white px-8 py-5 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all flex-grow text-center"
                                    >
                                        Web Oficial <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                                    </a>
                                    {found.extra && (
                                        <a
                                            href={found.extra}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-primary border-2 border-primary px-8 py-5 rounded-2xl font-bold hover:bg-primary/5 transition-all flex-grow text-center"
                                        >
                                            Donar <i className="fas fa-heart ml-2 text-xs"></i>
                                        </a>
                                    )}
                                    {found.phone && (
                                        <a
                                            href={`tel:${found.phone.replace(/\s/g, '')}`}
                                            className="bg-white text-gray-800 border border-gray-200 px-8 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-3 shrink-0"
                                        >
                                            <i className="fas fa-phone text-primary/60"></i> {found.phone}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-gray-900 rounded-[5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="max-w-3xl mx-auto relative z-10 space-y-12">
                    <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight italic text-primary-foreground">Voluntariado y Apoyo</h3>
                    <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
                        La ciencia necesita de todos. Desde la participación en ensayos clínicos hasta el apoyo a las familias, hay muchas formas de involucrarse.
                    </p>
                    <a
                        href="mailto:voluntarios@memoriacorazon.es"
                        className="inline-flex items-center gap-6 bg-white text-gray-900 px-12 py-6 rounded-[2.5rem] font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-all text-center"
                    >
                        Contactar para colaborar <i className="fas fa-users-rays text-primary"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Research;
