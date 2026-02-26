
import React from 'react';
import { RESOURCES_DATA } from '../constants';

const ResourcesMap: React.FC = () => {
    const allResources = [
        ...RESOURCES_DATA.barcelona,
        ...RESOURCES_DATA.girona,
        ...RESOURCES_DATA.lleida,
        ...RESOURCES_DATA.tarragona,
        ...RESOURCES_DATA.complementary
    ];

    const getProvinceColor = (prov: string) => {
        switch (prov.toLowerCase()) {
            case 'barcelona': return 'primary';
            case 'girona': return 'blue-500';
            case 'lleida': return 'green-500';
            case 'tarragona': return 'orange-500';
            default: return 'gray-400';
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl text-gray-800 mb-4">Mapa de Recursos</h2>
                <p className="text-gray-500 text-lg">Localiza las asociaciones y centros más cercanos a tu ubicación en Cataluña.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Interactive List / Simulated Map Points */}
                <div className="lg:col-span-1 space-y-4 max-h-[70vh] overflow-y-auto px-2">
                    {allResources.map((r, i) => (
                        <button
                            key={i}
                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + r.location)}`, '_blank')}
                            className="w-full bg-white p-6 rounded-3xl shadow-sm border border-purple-50 hover:shadow-lg hover:border-primary/20 transition-all text-left group"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{r.location}</span>
                                <i className="fas fa-external-link-alt text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </div>
                            <h3 className="font-semibold text-gray-700 mb-1 group-hover:text-primary transition-colors">{r.name}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{r.description}</p>
                        </button>
                    ))}
                </div>

                {/* Right: Simulated Map View */}
                <div className="lg:col-span-2 bg-purple-50/50 rounded-[3rem] border-4 border-white shadow-inner flex items-center justify-center min-h-[500px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                    <div className="relative text-center p-12 space-y-8">
                        {/* Visual Points in a rough Catalonian shape */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-32">
                            <div className="animate-bounce">
                                <div className="bg-red-500 w-8 h-8 rounded-full shadow-2xl flex items-center justify-center text-white ring-8 ring-red-100 border-2 border-white">
                                    <i className="fas fa-location-pin text-xs"></i>
                                </div>
                                <span className="absolute mt-2 -translate-x-1/2 left-4 text-[10px] font-bold text-gray-500">Lleida</span>
                            </div>
                            <div className="animate-bounce [animation-delay:0.5s]">
                                <div className="bg-blue-500 w-8 h-8 rounded-full shadow-2xl flex items-center justify-center text-white ring-8 ring-blue-100 border-2 border-white">
                                    <i className="fas fa-location-pin text-xs"></i>
                                </div>
                                <span className="absolute mt-2 -translate-x-1/2 left-4 text-[10px] font-bold text-gray-500">Girona</span>
                            </div>
                            <div className="animate-bounce [animation-delay:0.7s]">
                                <div className="bg-orange-500 w-8 h-8 rounded-full shadow-2xl flex items-center justify-center text-white ring-8 ring-orange-100 border-2 border-white">
                                    <i className="fas fa-location-pin text-xs"></i>
                                </div>
                                <span className="absolute mt-2 -translate-x-1/2 left-4 text-[10px] font-bold text-gray-500">Tarragona</span>
                            </div>
                            <div className="animate-bounce [animation-delay:0.3s]">
                                <div className="bg-primary w-10 h-10 rounded-full shadow-2xl flex items-center justify-center text-white ring-8 ring-purple-100 border-2 border-white relative">
                                    <i className="fas fa-location-pin"></i>
                                </div>
                                <span className="absolute mt-2 -translate-x-1/2 left-5 text-[10px] font-bold text-primary">Barcelona</span>
                            </div>
                        </div>

                        <div className="mt-20">
                            <p className="text-gray-400 font-serif italic max-w-sm mx-auto">
                                Haz clic en una asociación de la lista para ver su ubicación exacta en Google Maps.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-12 right-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/40 max-w-xs transition-transform hover:-translate-y-2">
                        <h4 className="font-bold text-gray-800 text-xs mb-2">Resumen Cataluña</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px]">
                                <span className="text-gray-500">Puntos de atención</span>
                                <span className="text-primary font-bold">{allResources.length}</span>
                            </div>
                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesMap;
