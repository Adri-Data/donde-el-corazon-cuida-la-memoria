
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { RESOURCES_DATA, STIMULATION_PLANS, EMERGENCY_NUMBERS, WELLBEING_DATA } from '../constants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente de apoyo. Estoy aquí para acompañarte 24/7. Puedo informarte sobre centros cercanos, darte pautas de bienestar o simplemente escucharte si necesitas desahogo. ¿Qué te preocupa hoy?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const webContext = `
        INFORMACIÓN DE LA WEB:
        Recursos en Cataluña: ${JSON.stringify(RESOURCES_DATA)}
        Planes de Estimulación: ${JSON.stringify(STIMULATION_PLANS)}
        Teléfonos de Emergencia: ${JSON.stringify(EMERGENCY_NUMBERS)}
        Datos de Bienestar: ${JSON.stringify(WELLBEING_DATA)}
      `;

      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

      const result = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        systemInstruction: `Eres un asistente experto en apoyo a cuidadores de personas con Alzheimer en Cataluña. 
        Tu tono debe ser extremadamente empático, práctico y validador.
        
        CONTEXTO DE LA WEB (Usa esta info para responder):
        ${webContext}
        
        Menciona provincias específicas si el usuario pregunta por recursos.
        Sugiere siempre usar las secciones específicas de la web (Recursos, Bienestar, Foro).
        No des diagnósticos médicos, insta a consultar con médicos o AFAs.`,
        contents: [
          { role: 'user', parts: [{ text: inputText }] }
        ]
      });

      const text = result.choices[0].message.content;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: text || 'Estoy aquí para acompañarte.',
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, ha habido un problema técnico, pero recuerda que no estás solo. Puedes consultar la sección de Recursos o Emergencias directamente.',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col h-[75vh]">
      <div className="mb-6 text-center px-4 animate-fade-in">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-2 leading-tight italic">
          Asistente de <span className="text-primary not-italic">Apoyo</span>
        </h2>
        <p className="text-gray-500 text-lg font-light">Consultas rápidas las 24 horas del día.</p>
      </div>

      <div className="flex-grow bg-white rounded-[3rem] shadow-2xl border border-purple-50 flex flex-col overflow-hidden relative group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[90%] lg:max-w-[80%] ${msg.sender === 'user'
                ? 'bg-primary text-white rounded-[1.5rem] rounded-tr-none shadow-md'
                : 'bg-purple-50 text-gray-700 rounded-[1.5rem] rounded-tl-none border border-purple-100 shadow-sm'
                } p-4 md:p-6 transform scale-100 hover:scale-[1.01] transition-transform`}
              >
                <div className="text-base leading-relaxed whitespace-pre-wrap font-medium">
                  {msg.text}
                </div>
                <div className={`text-[10px] mt-4 flex items-center gap-2 font-bold uppercase tracking-widest ${msg.sender === 'user' ? 'text-white/60' : 'text-gray-400'}`}>
                  <i className={`fas ${msg.sender === 'user' ? 'fa-user' : 'fa-robot'} opacity-50`}></i>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-purple-100/50 px-6 py-4 rounded-[1.5rem] rounded-tl-none flex gap-2 items-center border border-purple-100">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 md:p-8 bg-gray-50 border-t border-purple-50">
          <form onSubmit={handleSendMessage} className="flex gap-4 max-w-3xl mx-auto items-center">
            <div className="flex-grow relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu consulta aquí..."
                className="w-full bg-white px-6 py-4 rounded-[1.5rem] border-none focus:ring-4 focus:ring-primary/10 shadow-inner text-base text-gray-800"
              />
            </div>
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="bg-primary text-white w-14 h-14 rounded-[1.5rem] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all disabled:opacity-50 group/btn shrink-0"
            >
              <i className="fas fa-paper-plane text-xl group-hover/btn:rotate-12 transition-transform"></i>
            </button>
          </form>
          <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-4 opacity-40">
            Un espacio de ayuda asistida por inteligencia artificial
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
