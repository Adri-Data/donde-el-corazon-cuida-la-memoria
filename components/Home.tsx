
import React from 'react';
import { AppSection } from '../types.ts';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
          Donde el Corazón <br />
          <span className="text-primary italic">Cuida la Memoria</span>
        </h1>
        <div className="w-24 h-1 bg-primary/40 mx-auto mb-10 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
        <div className="order-2 md:order-1 space-y-8">
          <p className="text-xl text-gray-700 leading-relaxed font-medium text-justify">
            Cuidar de una persona con Alzheimer es un acto de amor silencioso, constante y, muchas veces, invisible. Es acompañar cuando los recuerdos se desdibujan, sostener cuando las palabras ya no llegan y seguir estando incluso cuando parece que el otro se va un poco más cada día.
          </p>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm text-justify">
            <p>
              Los cuidadores informales (familiares, parejas, hijos, hijas, amigos…) entregan tiempo, energía y corazón sin horarios ni reconocimiento, aprendiendo a vivir entre la paciencia, el cansancio y un amor que se transforma.
            </p>
            <p>
              Esta web nace para ti, que cuidas. Para ofrecerte un lugar seguro donde informarte, respirar y sentir que no estás solo ni sola en este camino. Un espacio creado con sensibilidad y respeto para apoyar, orientar y acompañar a los cuidadores informales.
            </p>
          </div>
          <div className="p-10 bg-primary/5 rounded-[2.5rem] border-l-8 border-primary/30 italic text-gray-700 text-lg shadow-inner">
            "Cuidar es mucho más que atender: es amar sin condiciones, es aprender a despedirse poco a poco, es resistir y seguir adelante."
          </div>
        </div>
        <div className="order-1 md:order-2 sticky top-24 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] text-center border border-purple-50 shadow-xl relative z-10 mb-2">
            <p className="text-gray-800 font-serif text-2xl italic tracking-tight leading-relaxed">
              "El amor deja una huella que nunca se borra"
            </p>
          </div>
          <div className="relative group">
            <img
              src="https://www.el-carabobeno.com/wp-content/uploads/2017/08/cuidador-1068x712.jpg"
              alt="Cuidado con amor"
              className="rounded-[3rem] shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700 w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-purple-50 hidden lg:block animate-float">
              <i className="fas fa-heart text-4xl text-primary"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Grouped Navigation - Modern Aesthetic */}
      <div className="space-y-24 mb-32">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4 italic">Guía de Navegación</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Todo lo que necesitas para acompañar y ser acompañado en este camino.</p>
        </div>

        {[
          {
            title: 'Guía y Primeros Pasos',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            items: [
              { id: 'primeros-pasos', label: 'Primeros Pasos', icon: 'fa-shoe-prints', description: 'Tu hoja de ruta para los primeros 30 días tras el diagnóstico.' },
              { id: 'preguntas', label: 'Dudas Frecuentes', icon: 'fa-circle-question', description: 'Respuestas expertas a las preguntas más comunes.' },
              { id: 'emergencias', label: 'Centro de Emergencias', icon: 'fa-shield-heart', description: 'Guía de crisis y contactos urgentes 24 horas.' },
            ]
          },
          {
            title: 'Recursos y Apoyo Externo',
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            items: [
              { id: 'recursos', label: 'Buscador de Centros', icon: 'fa-location-dot', description: 'Mapa interactivo de asociaciones y servicios en Cataluña.' },
              { id: 'ayudas', label: 'Gestión de Ayudas', icon: 'fa-hand-holding-heart', description: 'Guía sobre la Ley de Dependencia y prestaciones económicas.' },
              { id: 'eventos', label: 'Agenda Comunitaria', icon: 'fa-calendar-days', description: 'Charlas, talleres y eventos para familias cuidadoras.' },
              { id: 'foro', label: 'Comunidad de Apoyo', icon: 'fa-comments', description: 'Un espacio seguro para compartir vivencias y consejos.' },
            ]
          },
          {
            title: 'Cuidado y Salud Diaria',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            items: [
              { id: 'bienestar', label: 'Bienestar del Cuidador', icon: 'fa-heart-pulse', description: 'Pautas para evitar el agotamiento y cuidar tu salud mental.' },
              { id: 'ejercicios', label: 'Estimulación Cognitiva', icon: 'fa-brain', description: 'Ejercicios prácticos organizados por niveles de afectación.' },
              { id: 'hogar', label: 'Entorno Seguro', icon: 'fa-house-user', description: 'Cómo adaptar cada estancia del hogar paso a paso.' },
              { id: 'prevencion', label: 'Prevención y Hábitos', icon: 'fa-vial-virus', description: 'Evidencia científica sobre neuroprotección y alimentación.' },
            ]
          },
          {
            title: 'Innovación y Acompañamiento',
            color: 'text-gray-600',
            bg: 'bg-gray-50',
            items: [
              { id: 'asistente', label: 'Asistente IA 24/7', icon: 'fa-robot', description: 'Nuestro asistente inteligente para resolver dudas inmediatas.' },
              { id: 'investigacion', label: 'Portal de Investigación', icon: 'fa-microscope', description: 'Últimos avances médicos y entidades de investigación.' },
              { id: 'frases', label: 'Frases Motivadoras', icon: 'fa-feather', description: 'Pensamientos y frases para iluminar los días difíciles.' },
            ]
          }
        ].map((group, gIdx) => (
          <div key={gIdx} className="space-y-10 animate-fade-in" style={{ animationDelay: `${gIdx * 0.1}s` }}>
            <div className="flex items-center gap-4">
              <div className={`h-10 w-1 ${group.color.replace('text', 'bg')} rounded-full`}></div>
              <h3 className={`text-xl font-bold uppercase tracking-widest ${group.color}`}>
                {group.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id as any); window.location.hash = item.id; }}
                  className="group relative bg-white p-8 rounded-[2.5rem] border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left flex flex-col h-full overflow-hidden"
                >
                  {/* Subtle Background Pattern or Circle */}
                  <div className={`absolute -right-4 -top-4 w-24 h-24 ${group.bg} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className={`${group.bg} w-16 h-16 rounded-2xl flex items-center justify-center ${group.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <i className={`fas ${item.icon} text-2xl`}></i>
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {item.label}
                  </h4>

                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explorar sección</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
