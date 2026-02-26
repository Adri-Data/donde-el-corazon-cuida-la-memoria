
import React from 'react';
import { EVENTS_DATA } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-24 animate-fade-in">
        <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
          Próximos <span className="text-primary italic">Eventos</span>
        </h2>
        <div className="w-24 h-1 bg-primary/30 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Mantente informado sobre charlas, talleres formativos y grupos de apoyo en toda la región para 2025 y 2026.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        {EVENTS_DATA.map((event, idx) => (
          <div
            key={idx}
            className="group relative bg-white p-12 rounded-[4rem] border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 flex flex-col md:flex-row gap-12 items-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[10rem] -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

            <div className="shrink-0 flex flex-col items-center justify-center w-36 h-36 bg-purple-50 rounded-[2.5rem] border-2 border-white shadow-inner group-hover:scale-110 transition-transform">
              <span className="text-primary font-serif text-4xl font-bold leading-none">{event.date.split('–')[0].split(' ')[0]}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">{event.date.split('–')[0].split(' ')[1] || 'Evento'}</span>
            </div>

            <div className="relative z-10 flex-grow text-center md:text-left">
              <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest mb-4 justify-center md:justify-start">
                <i className="fas fa-location-dot"></i> {event.location}
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8">{event.description}</p>

              <button
                onClick={() => event.url && window.open(event.url, '_blank')}
                className={`text-sm font-bold flex items-center gap-3 transition-all ${event.url ? 'text-primary hover:gap-5' : 'text-gray-300 cursor-not-allowed'}`}
              >
                {event.url ? 'Más información e inscripciones' : 'Próximamente más detalles'}
                {event.url && <i className="fas fa-arrow-right text-xs"></i>}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h3 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">¿Deseas organizar un encuentro en tu ciudad?</h3>
          <p className="text-gray-400 text-xl leading-relaxed mb-16 font-light">
            Apoyamos la creación de redes locales. Si tienes interés en iniciar un grupo de apoyo o una charla informativa, contacta con nosotros y te orientaremos en todo el proceso.
          </p>
          <a
            href="mailto:info@memoriacorazon.es"
            className="inline-flex items-center gap-6 bg-white text-gray-900 px-12 py-6 rounded-[2.5rem] font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-all active:scale-95"
          >
            Contactar ahora <i className="fas fa-paper-plane text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
