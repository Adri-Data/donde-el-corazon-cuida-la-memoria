
import React from 'react';

const OfficialAids: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-24 text-center animate-fade-in">
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Apoyo Institucional</span>
        <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mt-6 mb-8 leading-tight italic">
          Ayudas & <span className="text-primary not-italic">Apoyos Oficiales</span>
        </h2>
        <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
        <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Guía detallada sobre las prestaciones, recursos y programas oficiales disponibles en Cataluña para personas con Alzheimer y sus cuidadores.
        </p>
      </div>

      <div className="space-y-24">
        {/* Reconocimiento de Dependencia */}
        <section className="bg-white rounded-[4rem] p-10 md:p-16 shadow-sm border border-purple-50 relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-[10rem] opacity-50 group-hover:bg-blue-100/50 transition-colors"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12 flex items-center gap-6 italic">
              <span className="bg-blue-400 w-3 h-12 rounded-full inline-block not-italic shadow-lg shadow-blue-200"></span>
              Reconocimiento de dependencia
            </h3>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-blue-50">
                  <h4 className="font-bold text-blue-800/80 mb-4 flex items-center gap-3">
                    <i className="fas fa-question-circle text-blue-400"></i>
                    ¿Qué es?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                    Procedimiento oficial donde profesionales evalúan la capacidad de la persona para realizar actividades básicas y determinan un grado de dependencia. El resultado permite acceder al Programa Individual de Atención (PIA).
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-blue-50">
                  <h4 className="font-bold text-blue-800/80 mb-4 flex items-center gap-3">
                    <i className="fas fa-user-check text-blue-400"></i>
                    ¿Quién puede solicitarlo?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                    Cualquier persona con Alzheimer o condición que limite su autonomía. Puede iniciarse a través de servicios sociales municipales o el Departament de Drets Socials.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-10 rounded-[3rem] border border-blue-100/50 text-center flex flex-col justify-center items-center shadow-inner group-hover:scale-105 transition-transform">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-8">
                  <i className="fas fa-file-contract text-5xl text-blue-300"></i>
                </div>
                <p className="text-sm text-blue-800/60 font-bold uppercase tracking-widest leading-relaxed">Primer paso indispensable para acceder a servicios públicos en Cataluña.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prestaciones Económicas */}
        <section className="space-y-12">
          <h3 className="text-3xl md:text-4xl font-serif text-gray-800 flex items-center gap-6 px-4 italic">
            <span className="bg-green-400 w-3 h-12 rounded-full inline-block not-italic shadow-lg shadow-green-200"></span>
            Prestaciones & Cuidados
          </h3>
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white p-12 rounded-[4rem] border border-purple-50 shadow-sm flex flex-col h-full hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[4rem] opacity-30 group-hover:scale-150 transition-transform"></div>
              <h4 className="font-serif text-3xl text-gray-800 mb-6 group-hover:text-green-600 transition-colors italic">Prestación Vinculada (PEVS)</h4>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed text-justify flex-grow font-light">
                Ayuda económica para financiar servicios de atención profesionales (domicilio, centro de día o residencias) de acuerdo al PIA.
              </p>
              <div className="space-y-4 border-t border-gray-100 pt-8 mt-auto">
                <div className="flex justify-between items-center p-3 hover:bg-green-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 1</span>
                  <span className="text-green-600 font-bold text-lg">150 € - 313 €</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-green-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 2</span>
                  <span className="text-green-600 font-bold text-lg">180 € - 445 €</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-green-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 3</span>
                  <span className="text-green-600 font-bold text-lg">200 € - 747 €</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[4rem] border border-purple-50 shadow-sm flex flex-col h-full hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[4rem] opacity-30 group-hover:scale-150 transition-transform"></div>
              <h4 className="font-serif text-3xl text-gray-800 mb-6 group-hover:text-primary transition-colors italic">Cuidados Familiares (PECEF)</h4>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed text-justify flex-grow font-light">
                Específica para cuidadores familiares que atienden a la persona dependiente en su domicilio habitual. Reconoce la labor del cuidador y proporciona un complemento económico.
              </p>
              <div className="space-y-4 border-t border-gray-100 pt-8 mt-auto">
                <div className="flex justify-between items-center p-3 hover:bg-purple-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 1</span>
                  <span className="text-primary font-bold text-lg">100 € - 180 €</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-purple-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 2</span>
                  <span className="text-primary font-bold text-lg">150 € - 315 €</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-purple-50/50 rounded-xl transition-colors">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grado 3</span>
                  <span className="text-primary font-bold text-lg">Hasta 455 €</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Directos */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
          {[
            {
              title: "SAD Domiciliario",
              desc: "Ayuda profesional para higiene, alimentación y movilidad. Alivia la carga diaria del cuidador.",
              icon: "fa-house-user",
              color: "text-blue-400"
            },
            {
              title: "Centros de Día",
              desc: "Espacios de estimulación cognitiva y socialización. Favorecen la autonomía y el respiro familiar.",
              icon: "fa-users-gear",
              color: "text-purple-400"
            },
            {
              title: "Teleasistencia",
              desc: "Atención permanente 24h mediante un botón de alarma personal para seguridad inmediata.",
              icon: "fa-phone-volume",
              color: "text-green-400"
            }
          ].map((serv, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-purple-50 shadow-sm h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 group">
              <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-lg transition-all ${serv.color}`}>
                <i className={`fas ${serv.icon} text-2xl`}></i>
              </div>
              <h4 className="font-serif text-2xl text-gray-800 mb-4 italic">{serv.title}</h4>
              <p className="text-gray-500 leading-relaxed text-justify font-light flex-grow">{serv.desc}</p>
              {serv.title === "Teleasistencia" && (
                <div className="mt-6 pt-6 border-t border-gray-50 space-y-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex justify-between"><span>Girona:</span> <span className="text-primary font-mono">972 419 010</span></div>
                  <div className="flex justify-between"><span>Lleida:</span> <span className="text-primary font-mono">973 70 00 00</span></div>
                  <div className="flex justify-between"><span>Tarragona:</span> <span className="text-primary font-mono">977 29 60 00</span></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Targeta Cuidadora */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-purple-800 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-grow space-y-8">
              <div className="space-y-4">
                <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] inline-block">Exclusivo Barcelona Ciudad</span>
                <h3 className="text-5xl md:text-6xl font-serif italic">Targeta Cuidadora</h3>
              </div>
              <p className="text-purple-50 text-xl leading-relaxed max-w-2xl text-justify font-light">
                Recurso municipal diseñado para reconocer y apoyar a quienes cuidan de personas dependientes o enfermas en Barcelona con servicios gratuitos exclusivos.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 py-4">
                {[
                  { icon: 'fa-headset', text: 'Apoyo emocional 24h' },
                  { icon: 'fa-whatsapp', text: 'Chat por WhatsApp' },
                  { icon: 'fa-info-circle', text: 'Asesoramiento recursos' },
                  { icon: 'fa-certificate', text: 'Actividades y formación' }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-4 text-purple-50/90 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <i className={`fas ${tag.icon} text-purple-200`}></i>
                    </div>
                    {tag.text}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a
                  href="https://barcelona.cat/ciutatcuidadora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all text-lg text-center shadow-lg"
                >
                  Web municipal Barcelona
                </a>
                <a
                  href="tel:934132121"
                  className="bg-primary-foreground/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all text-lg text-center flex items-center justify-center gap-3"
                >
                  <i className="fas fa-phone"></i> 93 413 21 21
                </a>
              </div>
            </div>
            <div className="w-full lg:w-72 shrink-0 hidden lg:block">
              <div className="aspect-[3/4] bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-inner flex flex-col items-center justify-center p-8 text-center rotate-3 scale-110">
                <i className="fas fa-id-card text-6xl text-purple-200 mb-6 drop-shadow-lg"></i>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Identificación oficial</p>
                <div className="w-12 h-1 bg-white/20 my-4 rounded-full"></div>
                <p className="text-xs font-light leading-relaxed">Acceso preferente a servicios municipales de salud.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Otras Ayudas y Deducciones */}
        <section className="space-y-12 pb-20">
          <h3 className="text-3xl md:text-4xl font-serif text-gray-800 flex items-center gap-6 px-4 italic">
            <span className="bg-yellow-400 w-3 h-12 rounded-full inline-block not-italic shadow-lg shadow-yellow-200"></span>
            Otras Ayudas & Fiscalidad
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[3rem] border border-purple-50 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                  <i className="fas fa-umbrella-beach text-xl"></i>
                </div>
                <h4 className="font-serif text-2xl text-gray-800 italic">Imserso: Ocio y Termalismo</h4>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed text-justify font-light mb-8">
                Programas de vacaciones y termalismo social específicos para personas mayores y pensionistas. Incluyen transporte, pensión completa y actividades adaptadas.
              </p>
              <a href="https://www.imserso.es" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline flex items-center gap-2">
                Consultar convocatorias <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-purple-50 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <i className="fas fa-percent text-xl"></i>
                </div>
                <h4 className="font-serif text-2xl text-gray-800 italic">Fiscalidad e IBI</h4>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed text-justify font-light mb-8">
                Deducciones en IRPF (estatal y autonómica) y exenciones de hasta el 100% en el IBI para viviendas de personas con Grado III de dependencia (según municipio).
              </p>
              <a href="https://sedeelectronica.agenciatributaria.gob.es" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline flex items-center gap-2">
                Agencia Tributaria <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Seguridad Social y Europa */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="bg-blue-900 rounded-[3rem] p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[5rem]"></div>
            <h3 className="text-3xl font-serif mb-6 italic text-blue-200">Convenio Especial SS</h3>
            <p className="text-blue-50/80 text-lg mb-8 leading-relaxed font-light text-justify">
              Los cuidadores no profesionales pueden suscribir un convenio con la Seguridad Social (gratuito) para que el Estado cotice por ellos, asegurando su futura jubilación o incapacidad.
            </p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 mb-8">
              <p className="text-sm font-bold uppercase tracking-widest mb-2 text-blue-200">Beneficio</p>
              <p className="text-sm">El Estado asume ~294 €/mes de cotización (base 2026).</p>
            </div>
            <a href="https://seg-social.es" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Información TGSS
            </a>
          </div>

          <div className="bg-gray-100 rounded-[3rem] p-12 border border-gray-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[5rem]"></div>
            <h3 className="text-3xl font-serif mb-6 italic text-gray-800">Marco Europeo (UE)</h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-light text-justify">
              La UE financia proyectos transnacionales (Horizon Europe) para mejorar el soporte a cuidadores y demencia, además de establecer la Estrategia Europea de Cuidados 2022-2027.
            </p>
            <div className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <i className="fas fa-euro-sign text-primary text-xl"></i>
              <span>Foco en tecnología y respiro</span>
            </div>
          </div>
        </section>

        {/* Marco Legal y Futuro */}
        <section className="bg-white rounded-[4rem] p-12 md:p-20 border border-purple-50 shadow-inner">
          <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-16 text-center italic">Protección Legal y Futuro</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-primary">
                <i className="fas fa-gavel"></i>
              </div>
              <h4 className="font-bold text-xl text-gray-800">Poder Preventivo</h4>
              <p className="text-gray-500 leading-relaxed font-light text-justify text-sm">
                Permite designar a una persona para que actúe en tu nombre si pierdes la capacidad de decidir, evitando trámites judiciales complejos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <i className="fas fa-file-signature"></i>
              </div>
              <h4 className="font-bold text-xl text-gray-800">Voluntades Anticipadas</h4>
              <p className="text-gray-500 leading-relaxed font-light text-justify text-sm">
                Documento legal para dejar constancia de los tratamientos médicos futuros (reanimación, paliativos). Incluye el **Registro de voluntades anticipadas** de la Generalitat.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h4 className="font-bold text-xl text-gray-800">Tutela y Curatela</h4>
              <p className="text-gray-500 leading-relaxed font-light text-justify text-sm">
                Procedimiento judicial ante el Juzgado de Primera Instancia cuando la persona pierde capacidad de decisión. Requiere informes médicos y certificados.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4 className="font-bold text-xl text-gray-800">Excedencia Laboral</h4>
              <p className="text-gray-500 leading-relaxed font-light text-justify text-sm">
                El Estatuto de los Trabajadores permite excedencias de hasta 2 años para el cuidado de familiares, con reserva de puesto durante el primer año.
              </p>
            </div>
          </div>
        </section>

        {/* Consejos Finales */}
        <section className="bg-gray-900 text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <h4 className="font-serif text-4xl mb-16 text-center italic text-primary-foreground">Consejos prácticos para la solicitud</h4>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Inicia el trámite pronto",
                desc: "Contacta con servicios sociales lo antes posible. Los tiempos administrativos pueden ser largos (6-12 meses).",
                icon: "fa-calendar-check"
              },
              {
                title: "Informes médicos",
                desc: "Reúne informes actualizados y diagnósticos claros. Una buena documentación acelera la valoración técnica.",
                icon: "fa-file-medical"
              },
              {
                title: "Orientación social",
                desc: "Consulta al trabajador social sobre todos los recursos específicos de tu barrio o municipio.",
                icon: "fa-comments-dollar"
              }
            ].map((tip, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <i className={`fas ${tip.icon} text-primary/70`}></i>
                </div>
                <h5 className="font-bold text-xl text-gray-100">{tip.title}</h5>
                <p className="text-gray-400 text-lg leading-relaxed text-justify font-light">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OfficialAids;
