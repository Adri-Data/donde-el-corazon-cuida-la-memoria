
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const categories = Array.from(new Set(FAQ_DATA.map(item => item.category || 'General')));

  const faqData = categories.map(cat => ({
    title: cat,
    items: FAQ_DATA.filter(item => (item.category || 'General') === cat)
  }));

  const navigateToSection = (section: string) => {
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-20 text-center">
        <h2 className="font-serif text-5xl text-gray-800 mb-6 tracking-tight">Preguntas <span className="text-primary italic">Frecuentes</span></h2>
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Resolvemos tus dudas sobre cuidados, ayudas legales y bienestar. Información actualizada para 2025.
        </p>
      </div>

      <div className="space-y-16">
        {faqData.map((category, catIdx) => (
          <div key={catIdx} className="space-y-8">
            <h3 className="text-[10px] font-bold text-primary/60 border-b border-purple-50 pb-4 mb-10 uppercase tracking-[0.3em]">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.items.map((item, itemIdx) => {
                const id = `${catIdx}-${itemIdx}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id} className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-primary/20 shadow-2xl scale-[1.02]' : 'border-purple-50/50 shadow-sm hover:border-primary/10'}`}>
                    <button
                      onClick={() => toggle(id)}
                      className="w-full text-left p-10 flex justify-between items-center group"
                    >
                      <span className={`font-serif text-xl md:text-2xl leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-gray-700'}`}>
                        {item.question}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180 shadow-lg' : 'bg-purple-50 text-primary group-hover:bg-primary/10'}`}>
                        <i className="fas fa-chevron-down text-[10px]"></i>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-10 pt-0 animate-fade-in relative">
                        <div className="border-t border-purple-50/30 pt-10 text-lg text-gray-500 leading-relaxed font-light text-justify">
                          {item.answer}
                        </div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-[4rem] -z-0"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gradient-to-br from-purple-50 to-white p-16 rounded-[3rem] text-center border border-purple-100 shadow-inner">
        <h4 className="font-serif text-3xl text-gray-800 mb-4">¿No encuentras lo que buscas?</h4>
        <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">Nuestro asistente de IA está entrenado con toda la información de la web para darte respuestas al momento.</p>
        <button
          onClick={() => navigateToSection('asistente')}
          className="bg-primary text-white px-12 py-5 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all"
        >
          Consultar al Asistente
        </button>
      </div>
    </div>
  );
};

export default FAQ;
