import React, { useMemo } from 'react';
import { MOTIVATIONAL_QUOTES } from '../constants';

const Quotes: React.FC = () => {
  // Select a quote based on the current day
  const dailyQuote = useMemo(() => {
    const today = new Date();
    const day = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    return MOTIVATIONAL_QUOTES[day % MOTIVATIONAL_QUOTES.length];
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-warm/30 py-20">
      {/* Animated Particles/Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/10 rounded-full blur-xl animate-float-slow"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Refugio para el Alma • {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mb-2 leading-tight italic">
            Frase del <span className="text-primary not-italic">Día</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative group animate-fade-in-up">
          {/* Main Card */}
          <div className="bg-white/70 backdrop-blur-2xl p-12 md:p-24 rounded-[4rem] border border-white shadow-2xl relative z-10 text-center transform group-hover:scale-[1.01] transition-all duration-700">
            <i className="fas fa-quote-left text-6xl text-primary/10 mb-12 block mx-auto"></i>

            <p className="text-3xl md:text-5xl font-serif text-gray-800 leading-[1.4] italic mb-12">
              "{dailyQuote}"
            </p>

            <div className="w-32 h-1 bg-primary/20 mx-auto rounded-full group-hover:w-48 transition-all duration-1000"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
        </div>

        {/* Community Call to Action */}
        <div className="mt-24 text-center animate-fade-in delay-500">
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            A veces, compartir el peso lo hace más ligero. ¿Cómo te sientes hoy? Nuestra comunidad te espera con los brazos abiertos.
          </p>

          <button
            onClick={() => {
              window.location.hash = 'foro';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-primary text-white px-12 py-6 rounded-[2.5rem] font-bold text-xl shadow-xl hover:shadow-primary/30 hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto"
          >
            <span>Compartir en la Comunidad</span>
            <i className="fas fa-comments text-primary-foreground/50 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
