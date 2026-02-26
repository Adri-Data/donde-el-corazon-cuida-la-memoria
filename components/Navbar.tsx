
import React, { useState, useEffect } from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

interface NavItem {
  id: AppSection;
  label: string;
  icon: string;
  description?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navGroups: NavGroup[] = [
    {
      title: 'Guía Inicial',
      items: [
        { id: 'primeros-pasos', label: 'Primeros Pasos', icon: 'fa-shoe-prints', description: 'Qué hacer tras el diagnóstico' },
        { id: 'preguntas', label: 'Preguntas Frecuentes', icon: 'fa-circle-question', description: 'Dudas comunes resueltas' },
        { id: 'emergencias', label: 'Emergencias SOS', icon: 'fa-shield-heart', description: 'Contactos y guía de crisis' },
      ]
    },
    {
      title: 'Apoyo y Recursos',
      items: [
        { id: 'recursos', label: 'Centros y Recursos', icon: 'fa-location-dot', description: 'Mapa de AFAs y especialistas' },
        { id: 'ayudas', label: 'Ayudas Oficiales', icon: 'fa-hand-holding-heart', description: 'Ley de dependencia y subsidios' },
        { id: 'eventos', label: 'Eventos y Charlas', icon: 'fa-calendar-days', description: 'Actividades de la comunidad' },
        { id: 'foro', label: 'Foro de Cuidadores', icon: 'fa-comments', description: 'Compartir vivencias y apoyo' },
      ]
    },
    {
      title: 'Cuidado y Bienestar',
      items: [
        { id: 'bienestar', label: 'Bienestar Integral', icon: 'fa-heart-pulse', description: 'Salud física y emocional' },
        { id: 'ejercicios', label: 'Plan de Ejercicios', icon: 'fa-brain', description: 'Estimulación por etapas' },
        { id: 'hogar', label: 'Adaptación del Hogar', icon: 'fa-house-user', description: 'Seguridad estancia por estancia' },
        { id: 'prevencion', label: 'Hábitos Preventivos', icon: 'fa-vial-virus', description: 'Estilo de vida saludable' },
        { id: 'frases', label: 'Frases Motivadoras', icon: 'fa-quote-left', description: 'Refugio para el alma' },
      ]
    },
    {
      title: 'Comunidad e Innovación',
      items: [
        { id: 'asistente', label: 'Asistente IA', icon: 'fa-robot', description: 'Consulta tus dudas 24/7' },
        { id: 'investigacion', label: 'Investigación', icon: 'fa-microscope', description: 'Avances y entidades clave' },
      ]
    }
  ];

  const handleNavigation = (id: AppSection) => {
    onNavigate(id);
    window.location.hash = id;
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-purple-50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation('inicio')}
          className="flex items-center gap-3 group"
        >
          <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
            <i className="fas fa-heart text-lg"></i>
          </div>
          <span className="font-serif text-xl font-bold text-gray-800 tracking-tight">
            Memoria <span className="text-primary italic">& Corazón</span>
          </span>
        </button>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`relative z-[60] flex items-center gap-3 px-4 py-2 rounded-2xl transition-all ${isMenuOpen
            ? 'bg-primary text-white shadow-xl shadow-primary/20'
            : 'bg-purple-50 text-primary hover:bg-primary/10'
            }`}
        >
          <span className="font-bold text-sm hidden sm:inline">
            {isMenuOpen ? 'Cerrar' : 'Explorar'}
          </span>
          <div className="relative w-5 h-5 flex flex-col justify-center items-center">
            <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>

      {/* Full-screen Grouped Menu */}
      <div
        className={`fixed inset-0 min-h-screen w-full bg-warm/95 backdrop-blur-2xl z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="h-full flex flex-col relative">
          {/* Close button inside menu for better UX */}
          <div className="absolute top-6 right-6 z-[110]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white px-6 py-2 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="font-bold text-sm">Cerrar</span>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Home item highlighted */}
                <div className="md:col-span-2 lg:col-span-4 border-b border-purple-100 pb-8 mb-4 flex justify-center">
                  <button
                    onClick={() => handleNavigation('inicio')}
                    className={`flex items-center gap-4 p-5 rounded-3xl transition-all w-full max-w-md ${activeSection === 'inicio'
                      ? 'bg-primary text-white shadow-2xl'
                      : 'bg-white hover:shadow-xl border border-purple-50'
                      }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${activeSection === 'inicio' ? 'bg-white/20' : 'bg-primary/10 text-primary'
                      }`}>
                      <i className="fas fa-house"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Página Principal</h3>
                      <p className={`text-sm ${activeSection === 'inicio' ? 'text-white/80' : 'text-gray-500'}`}>
                        Volver al inicio de la plataforma
                      </p>
                    </div>
                  </button>
                </div>

                {navGroups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-4">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-2 py-1 bg-primary/5 rounded-lg inline-block mb-2">
                      {group.title}
                    </h2>
                    <div className="grid grid-cols-1 gap-2">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavigation(item.id)}
                          className={`w-full group text-left p-4 rounded-2xl transition-all flex items-start gap-4 border ${activeSection === item.id
                            ? 'bg-primary text-white shadow-xl shadow-primary/20 border-primary scale-[1.02]'
                            : 'bg-white/50 hover:bg-white border-transparent hover:border-purple-100 hover:shadow-lg'
                            }`}
                        >
                          <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSection === item.id
                            ? 'bg-white/20'
                            : 'bg-purple-50 text-primary group-hover:bg-primary group-hover:text-white'
                            }`}>
                            <i className={`fas ${item.icon}`}></i>
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="font-bold truncate">{item.label}</div>
                            {item.description && (
                              <div className={`text-xs mt-0.5 line-clamp-2 leading-relaxed ${activeSection === item.id ? 'text-white/70' : 'text-gray-500'
                                }`}>
                                {item.description}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom attribution/footer in menu */}
          <div className="border-t border-purple-100 p-8 text-center bg-white/80 backdrop-blur-md shrink-0">
            <p className="text-gray-400 text-sm font-medium">
              Donde el Corazón Cuida la Memoria <i className="fas fa-heart text-primary mx-1"></i> 2026
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
