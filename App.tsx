
import React, { useState, useEffect } from 'react';
import { AppSection } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Resources from './components/Resources.tsx';
import OfficialAids from './components/OfficialAids.tsx';
import Exercises from './components/Exercises.tsx';
import Assistant from './components/CommunityChat.tsx';
import Forum from './components/Forum.tsx';
import Emergencies from './components/Emergencies.tsx';
import FAQ from './components/FAQ.tsx';
import Quotes from './components/Quotes.tsx';
import Events from './components/Events.tsx';
import Footer from './components/Footer.tsx';
import Wellbeing from './components/Wellbeing.tsx';
import Research from './components/Research.tsx';
import FirstSteps from './components/FirstSteps.tsx';
import HomeAdaptation from './components/HomeAdaptation.tsx';
import Prevention from './components/Prevention.tsx';
import RespiteGuide from './components/RespiteGuide.tsx';
import NutritionGuide from './components/NutritionGuide.tsx';
import CommunicationGuide from './components/CommunicationGuide.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>('inicio');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppSection;
      const validSections: AppSection[] = [
        'inicio', 'recursos', 'ayudas', 'ejercicios',
        'investigacion', 'asistente', 'emergencias', 'primeros-pasos',
        'hogar', 'prevencion', 'guia-respiro', 'pautas-nutricion',
        'consejos-comunicacion', 'frases', 'eventos', 'foro', 'preguntas', 'bienestar'
      ];
      if (validSections.includes(hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio': return <Home onNavigate={setActiveSection} />;
      case 'recursos': return <Resources />;
      case 'ayudas': return <OfficialAids />;
      case 'ejercicios': return <Exercises />;
      case 'asistente': return <Assistant />;
      case 'foro': return <Forum />;
      case 'bienestar': return <Wellbeing onNavigate={setActiveSection} />;
      case 'investigacion': return <Research />;
      case 'emergencias': return <Emergencies />;
      case 'preguntas': return <FAQ />;
      case 'frases': return <Quotes />;
      case 'eventos': return <Events />;
      case 'primeros-pasos': return <FirstSteps />;
      case 'hogar': return <HomeAdaptation />;
      case 'prevencion': return <Prevention />;
      case 'guia-respiro': return <RespiteGuide />;
      case 'pautas-nutricion': return <NutritionGuide />;
      case 'consejos-comunicacion': return <CommunicationGuide />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm selection:bg-primary/20">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Persistent Support Floating Button - Now Purple */}
      <div className="fixed top-24 right-6 z-40 hidden md:block">
        <a
          href="https://ko-fi.com/alzheimercm"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group border border-white/20"
        >
          <i className="fas fa-hand-holding-heart group-hover:scale-110 transition-transform"></i>
          <span>Cómo ayudar a la página</span>
        </a>
      </div>

      {/* Global Back Button */}
      {activeSection !== 'inicio' && (
        <div className="fixed top-24 left-6 z-40 hidden md:block">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                setActiveSection('inicio');
                window.location.hash = 'inicio';
              }
            }}
            className="bg-white/90 backdrop-blur-md text-gray-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-white transition-all flex items-center gap-3 border border-purple-100"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Volver</span>
          </button>
        </div>
      )}

      <main className="flex-grow pt-20">
        <div key={activeSection} className="animate-fade-in">
          {renderSection()}
        </div>
      </main>

      <Footer onNavigate={setActiveSection} />

      {/* Mobile Quick Actions Dock */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] border border-white/40 flex justify-around p-4 z-50">
        {[
          { icon: 'fa-house', id: 'inicio' },
          { icon: 'fa-comments', id: 'foro' },
          { icon: 'fa-heart-pulse', id: 'bienestar' },
          { icon: 'fa-robot', id: 'asistente' },
          { icon: 'fa-shield-heart', id: 'emergencias' }
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => {
              setActiveSection(btn.id as any);
              window.location.hash = btn.id;
            }}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeSection === btn.id ? 'bg-primary text-white shadow-lg scale-110' : 'text-gray-400 hover:text-primary'
              }`}
          >
            <i className={`fas ${btn.icon} text-lg`}></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
