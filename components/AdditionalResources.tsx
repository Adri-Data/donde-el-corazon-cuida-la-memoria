
import React from 'react';
import { APPS_DATA } from '../constants';

const AdditionalResources: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-justify">
      <div className="text-center mb-24 animate-fade-in">
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Herramientas Extra</span>
        <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mt-6 mb-8 leading-tight italic">
          Software & <span className="text-primary not-italic">Formación</span>
        </h2>
        <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed text-center">
          Tecnología y formación legal para facilitar el día a día del cuidador y mejorar la calidad de vida de la persona cuidada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {APPS_DATA.map((app, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all">
              <i className={`fas ${app.icon}`}></i>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-800">{app.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{app.desc}</p>
            <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Coste aprox.</span>
              <span className="text-primary font-bold text-sm tracking-tight">{app.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-3xl">
          <h3 className="font-serif text-4xl text-gray-800 mb-10 italic">Formación Legal y Ética</h3>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-4">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Poder Notarial Preventivo
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Es el paso legal más importante. Permite que la persona con Alzheimer nombre a alguien de confianza para gestionar sus bienes y salud si en el futuro no puede hacerlo, evitando procesos judiciales complejos de incapacitación.
              </p>
            </div>

            <div className="pt-12 border-t border-gray-50">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-4">
                <span className="w-2 h-8 bg-blue-400 rounded-full"></span>
                Testamento Vital (DVA)
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                El Documento de Voluntades Anticipadas asegura que los deseos médicos de la persona sean respetados en las fases avanzadas. Es un acto de respeto a su dignidad y autonomía.
              </p>
            </div>

            <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-warm/50 p-8 rounded-3xl flex-grow">
                <p className="text-sm font-bold text-gray-700 mb-2">¿Dónde informarse?</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Cualquier notaría de Cataluña puede asesorarte sobre el poder preventivo. El Testamento Vital se puede tramitar en tu CAP de referencia o ante notario.
                </p>
              </div>
              <a
                href="https://salut.gencat.cat"
                target="_blank"
                className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-colors whitespace-nowrap shadow-xl"
              >
                Web Salut Gencat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalResources;
