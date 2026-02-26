
import React from 'react';
import { AppSection } from '../types';

interface FooterProps {
  onNavigate: (section: AppSection) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigate = (section: AppSection) => {
    onNavigate(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <button
              onClick={() => navigate('inicio')}
              className="flex items-center gap-3 group"
            >
              <div className="bg-primary w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                <i className="fas fa-heart text-xl"></i>
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight">
                Memoria <span className="text-primary italic">& Corazón</span>
              </span>
            </button>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Un refugio digital creado con sensibilidad para acompañar, orientar y cuidar a quienes cuidan de personas con Alzheimer.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@memoriacorazon.es" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all group">
                <i className="fas fa-envelope text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all group">
                <i className="fab fa-instagram text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all group">
                <i className="fab fa-whatsapp text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => navigate('inicio')} className="hover:text-primary transition-colors">Inicio</button></li>
              <li><button onClick={() => navigate('primeros-pasos')} className="hover:text-primary transition-colors">Primeros Pasos</button></li>
              <li><button onClick={() => navigate('foro')} className="hover:text-primary transition-colors">Foro de Comunidad</button></li>
              <li><button onClick={() => navigate('recursos')} className="hover:text-primary transition-colors">Directorio de Recursos</button></li>
              <li><button onClick={() => navigate('bienestar')} className="hover:text-primary transition-colors">Pautas de Bienestar</button></li>
              <li><button onClick={() => navigate('hogar')} className="hover:text-primary transition-colors">Adaptar el Hogar</button></li>
              <li><button onClick={() => navigate('prevencion')} className="hover:text-primary transition-colors">Prevención</button></li>
              <li><button onClick={() => navigate('ejercicios')} className="hover:text-primary transition-colors">Estimulación Cognitiva</button></li>
              <li><button onClick={() => navigate('investigacion')} className="hover:text-primary transition-colors">Investigación</button></li>
              <li><button onClick={() => navigate('asistente')} className="hover:text-primary transition-colors">Asistente IA</button></li>
              <li><button onClick={() => navigate('emergencias')} className="hover:text-primary transition-colors">Ayuda SOS</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Recursos Oficiales</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="https://www.fafac.cat" target="_blank" className="hover:text-primary transition-colors">FAFAC Catalunya</a></li>
              <li><a href="https://www.ceafa.es" target="_blank" className="hover:text-primary transition-colors">CEAFA España</a></li>
              <li><a href="https://barcelona.cat/ciutatcuidadora" target="_blank" className="hover:text-primary transition-colors">Barcelona Cuida</a></li>
              <li><a href="https://061.catsalut.gencat.cat/" target="_blank" className="hover:text-primary transition-colors">061 Salut Responde</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-500 font-medium">
          <p>© 2026 Memoria & Corazón. Cuidando a quienes cuidan.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
