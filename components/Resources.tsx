
import React, { useState } from 'react';
import { RESOURCES_DATA } from '../constants';
import { Resource } from '../types';

const Resources: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<'barcelona' | 'girona' | 'lleida' | 'tarragona' | null>(null);

  const provinces = [
    { id: 'barcelona', name: 'Barcelona', icon: 'fa-city', color: 'bg-indigo-600' },
    { id: 'girona', name: 'Girona', icon: 'fa-mountain-sun', color: 'bg-emerald-600' },
    { id: 'lleida', name: 'Lleida', icon: 'fa-wheat-awn', color: 'bg-amber-600' },
    { id: 'tarragona', name: 'Tarragona', icon: 'fa-umbrella-beach', color: 'bg-sky-600' }
  ];

  const resources = selectedProvince ? RESOURCES_DATA[selectedProvince] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-24 animate-fade-in">
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Apoyo Local</span>
        <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mt-6 mb-8 leading-tight italic">
          Recursos <span className="text-primary not-italic">Cerca de Ti</span>
        </h2>
        <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
        <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Localiza las asociaciones de familiares de Alzheimer (AFAs) y centros de día de tu región. Estar acompañado marca la diferencia.
        </p>
      </div>

      {/* Province Selection */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {provinces.map((prov) => (
          <button
            key={prov.id}
            onClick={() => setSelectedProvince(prov.id as any)}
            className={`p-10 rounded-[3.5rem] transition-all duration-500 flex flex-col items-center group relative overflow-hidden ${selectedProvince === prov.id
              ? `${prov.color} text-white shadow-2xl scale-105 z-10`
              : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2'
              }`}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all ${selectedProvince === prov.id ? 'bg-white/20' : 'bg-gray-50 text-gray-700'
              }`}>
              <i className={`fas ${prov.icon}`}></i>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">{prov.name}</span>
            {selectedProvince === prov.id && (
              <i className="fas fa-check-circle absolute top-6 right-6 text-white/50 animate-pulse"></i>
            )}
          </button>
        ))}
      </div>

      {/* Resources List */}
      <div className="space-y-12 mb-24 min-h-[500px]">
        {!selectedProvince ? (
          <div className="flex flex-col items-center justify-center py-40 bg-warm/20 rounded-[4rem] border-2 border-dashed border-primary/20 italic text-gray-400 text-xl">
            <i className="fas fa-map-location-dot text-6xl mb-8 opacity-20"></i>
            Selecciona una provincia para ver el directorio detallado
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {resources.map((res: Resource, idx: number) => (
              <div key={idx} className="bg-white p-10 md:p-14 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors"></div>

                <div className="mb-8">
                  <h3 className="font-serif text-3xl text-gray-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {res.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm italic">
                    "{res.description}"
                  </p>
                </div>

                <div className="space-y-6 mb-10 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warm rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:rotate-12">
                      <i className="fas fa-location-dot text-xs"></i>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1">Ubicación</p>
                      <p className="text-gray-700 font-medium text-sm">{res.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warm rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:rotate-12">
                      <i className="fas fa-phone text-xs"></i>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1">Contacto</p>
                      <a href={`tel:${res.phone}`} className="text-gray-700 font-bold hover:text-primary transition-colors text-lg">{res.phone}</a>
                    </div>
                  </div>

                  {res.services && res.services.length > 0 && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-warm rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:rotate-12">
                        <i className="fas fa-hand-holding-heart text-xs"></i>
                      </div>
                      <div className="w-full">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1 mb-3">Servicios destacados</p>
                        <div className="flex flex-wrap gap-2">
                          {res.services.map((s, i) => (
                            <span key={i} className="bg-purple-50 text-primary px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter border border-purple-100">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-10 border-t border-gray-50">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(res.name + " " + res.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-100 text-gray-700 p-5 rounded-2xl font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 text-xs"
                  >
                    <i className="fab fa-google"></i> Google Maps
                  </a>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-white p-5 rounded-2xl font-bold text-center hover:shadow-xl transition-all flex items-center justify-center gap-3 text-xs"
                  >
                    <i className="fas fa-globe"></i> Visitar Web
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Complementary Resources List */}
      <div className="mb-24">
        <h3 className="font-serif text-3xl text-gray-800 mb-12 italic text-center">Recursos Complementarios</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES_DATA.complementary.map((res, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-[3rem] border border-gray-200/50 flex flex-col items-center text-center group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-info"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{res.name}</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{res.description}</p>
              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all"
              >
                Saber más <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Online Training Section */}
      <div className="mb-24 bg-primary/5 rounded-[4rem] p-12 md:p-20 border border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl text-gray-800 mb-8 italic">Formación online gratuita para cuidadores</h3>
          <p className="text-gray-600 mb-12 leading-relaxed text-lg">
            La formación es fundamental para entender la evolución de la enfermedad y aprender técnicas de cuidado que eviten lesiones y mejoren la calidad de vida.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <a href="https://aulamentor.es" target="_blank" rel="noreferrer" className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <p className="font-bold text-gray-800 text-sm mb-2">Aula Mentor</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Salud y Dependencia</p>
            </a>
            <a href="https://imserso.es" target="_blank" rel="noreferrer" className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-building-columns"></i>
              </div>
              <p className="font-bold text-gray-800 text-sm mb-2">IMSERSO</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Cursos Oficiales</p>
            </a>
            <a href="https://alzheimercatalunya.org/formacions" target="_blank" rel="noreferrer" className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-laptop-code"></i>
              </div>
              <p className="font-bold text-gray-800 text-sm mb-2">Alz. Catalunya</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Formación Online</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl md:text-5xl mb-8 italic">¿Necesitas ayuda con los trámites?</h3>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
            Consulta la sección de Ayudas Oficiales para entender cómo solicitar la Ley de Dependencia o prestaciones económicas.
          </p>
          <button
            onClick={() => {
              window.location.hash = 'ayudas';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white text-gray-900 px-12 py-6 rounded-[2.5rem] font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Ver Guía de Ayudas <i className="fas fa-hand-holding-heart ml-3 text-primary"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
