
import {
  ProvinceResources,
  Exercise,
  Event,
  StimulationPlan,
  ResearchEntity,
  OfficialAid,
  ChecklistItem,
  DailyRoutine,
  ZonalAdaptation,
  HomeAdaptation,
  PreventionHabit
} from './types';

export const RESOURCES_DATA: ProvinceResources = {
  barcelona: [
    {
      name: "Alzheimer Catalunya Fundació",
      location: "Barcelona (Eixample)",
      phone: "93 459 22 94",
      url: "https://alzheimercatalunya.org",
      description: "Entidad de referencia con más de 30 años de experiencia. Ofrece información sobre la enfermedad, asesoramiento personalizado a familias, programas de formación para cuidadores, grupos de apoyo emocional y actividades terapéuticas para personas con Alzheimer. También conecta familias con recursos sociales y sanitarios."
    },
    {
      name: "AFAB – Asociación de Familiares de Alzheimer de Barcelona",
      location: "Barcelona",
      phone: "93 327 15 40",
      url: "https://afab-bcn.org",
      description: "AFA que acompaña a las familias desde la etapa inicial hasta fases más avanzadas. Ofrece talleres de memoria, grupos de apoyo entre familiares, orientación jurídica y ayuda para gestionar los cambios que comporta la enfermedad."
    },
    {
      name: "AFA Baix Llobregat",
      location: "El Prat de Llobregat",
      phone: "93 379 00 22",
      url: "https://afabaix.org",
      description: "Entidad con servicios terapéuticos, programas de estimulación cognitiva y actividades adaptadas. También organiza charlas, recursos prácticos para cuidadores y redes de apoyo comunitario para que nadie se enfrente solo a la enfermedad."
    },
    {
      name: "AFA Vallès Occidental",
      location: "Sabadell",
      phone: "93 727 94 44",
      description: "Entidad que acompaña a familias mediante grupos de apoyo y orientación social. También organiza actividades y sesiones informativas para comprender la evolución del Alzheimer y gestionar la atención con herramientas más firmes."
    },
    {
      name: "AFA Vallès Oriental",
      location: "Granollers",
      phone: "93 860 27 88",
      description: "Organización centrada en la información y el apoyo emocional de cuidadores. Ofrece reuniones periódicas, consejos prácticos para el día a día y acceso a profesionales que orientan sobre servicios disponibles."
    },
    {
      name: "AFA Maresme",
      location: "Mataró",
      phone: "93 798 07 00",
      description: "Recurso muy útil para las familias de la comarca que necesitan apoyo, orientación y un espacio para compartir experiencias. Promueve la inclusión social y ofrece actividades que ayudan a gestionar la enfermedad."
    },
    {
      name: "AFA Osona",
      location: "Vic",
      phone: "93 886 23 00",
      description: "Acompañamiento integral para cuidadores y personas con demencia. Ofrece talleres, información sobre recursos sociales y apoyo emocional que facilita afrontar los retos que surgen a lo largo de la enfermedad."
    },
    {
      name: "AFA Anoia",
      location: "Igualada",
      phone: "93 805 01 50",
      description: "Entidad de proximidad que da apoyo práctico y emocional en el cuidado de la familia. Ayuda a identificar recursos locales y a conectar con otras familias para acompañar el proceso de manera más humana."
    },
    {
      name: "AFA Bages, Berguedà, Solsonès y Moianès",
      location: "Manresa",
      phone: "93 875 34 34",
      description: "Ofrece servicios de apoyo emocional, grupos de encuentro y actividades de terapia para cuidadores y personas con Alzheimer. Es un punto de referencia para familias de varias comarcas."
    },
    {
      name: "AFA Garraf",
      location: "Vilanova i la Geltrú",
      phone: "93 814 93 79",
      description: "Acompañamiento a cuidadores en un entorno donde la proximidad y la comunidad son clave. La entidad facilita información, orientación y actividades que ayudan a reforzar la capacidad de adaptación y la gestión emocional."
    },
    {
      name: "ACE Alzheimer Center Barcelona",
      location: "Barcelona",
      phone: "93 444 00 05",
      url: "https://www.acebarcelona.org",
      description: "Centro líder en diagnóstico y ensayos. Ofrece el servicio de 'Aula Cuidadors' y supervisión telefónica preventiva las 24h para incidencias en el domicilio."
    },
    {
      name: "Fundación Pasqual Maragall",
      location: "Barcelona",
      phone: "902 33 15 33",
      url: "https://fpmaragall.org",
      description: "Referente en investigación y apoyo social. Ofrece programas grupales gratuitos para cuidadores y recursos online de alta calidad para entender la enfermedad."
    }
  ],
  girona: [
    {
      name: "AFA Girona",
      location: "Girona",
      phone: "972 20 25 68",
      description: "Entidad que acompaña a familias desde el inicio de la enfermedad. Ofrece apoyo emocional, información sobre recursos sanitarios y sociales, grupos de apoyo y actividades comunitarias para romper el aislamiento."
    },
    {
      name: "AFA Alt Empordà",
      location: "Figueres",
      phone: "972 67 55 11",
      description: "Asociación de familias que organiza actividades terapéuticas, grupos de ayuda y sesiones informativas para apoyar a los cuidadores de la comarca."
    },
    {
      name: "AFA Baix Empordà",
      location: "La Bisbal d’Empordà",
      phone: "972 64 26 68",
      description: "Acompaña a familias con orientación social y emocional. Facilita acceso a recursos locales, actividades de convivencia e información sobre la evolución de la enfermedad."
    },
    {
      name: "AFA Garrotxa",
      location: "Olot",
      phone: "972 26 60 70",
      description: "Entidad que trabaja para ofrecer apoyo a cuidadores y familias en un entorno rural, conectándolos con servicios sociales, recursos sanitarios y actividades adaptadas."
    },
    {
      name: "AFA Ripollès",
      location: "Ripoll",
      phone: "972 70 32 58",
      description: "Recurso de proximidad para familias, con grupos de apoyo y atención personalizada para mejorar las herramientas de cuidado y afrontar retos habituales de la enfermedad."
    }
  ],
  lleida: [
    {
      name: "AFALL – AFA Lleida",
      location: "Lleida",
      phone: "973 22 89 88",
      description: "Entidad de referencia en Ponent. Ofrece apoyo emocional, orientación sobre recursos y servicios, grupos de encuentro y actividades para favorecer una atención de calidad. También conecta familias con servicios sanitarios y sociales de la región."
    },
    {
      name: "AFA Tàrrega i Urgell",
      location: "Tàrrega",
      phone: "973 50 14 78",
      description: "Grupos de apoyo, orientación e información sobre recursos disponibles en la comarca. Ayuda a las familias a comprender mejor la enfermedad y afrontar la atención con herramientas prácticas."
    },
    {
      name: "AFA Cervera – La Segarra",
      location: "Cervera",
      phone: "973 53 11 79",
      description: "Asociación local de ayuda mutua y apoyo emocional. Ofrece orientación para acceder a recursos, actividades de convivencia y espacios de formación para cuidadores."
    },
    {
      name: "AFA Pallars Sobirà",
      location: "Sort",
      phone: "Servicios Sociales Sort",
      description: "Con el apoyo de los Servicios Sociales municipales, acompaña a familias en zonas rurales con orientación, información de recursos y acompañamiento emocional."
    },
    {
      name: "AFA Noguera",
      location: "Balaguer",
      phone: "973 44 78 23",
      description: "Orientación y acompañamiento personalizado para familias y cuidadores. Coordina recursos locales para facilitar la atención y la gestión de los retos diarios con Alzheimer."
    }
  ],
  tarragona: [
    {
      name: "AFA Tarragona",
      location: "Tarragona",
      phone: "609 55 96 73",
      description: "Apoyo psicológico y orientación social. Teléfonos directos: 608 79 47 41 (Psicología) y 609 55 96 73 (Trabajo Social). Ofrecen grupos de apoyo mutuo y talleres de estimulación cognitivos."
    },
    {
      name: "AFA Reus i Baix Camp",
      location: "Reus",
      phone: "977 26 10 94",
      description: "Actividades terapéuticas, apoyo emocional y orientación a cuidadores. También facilita acceso a recursos sanitarios y sociales de la zona."
    },
    {
      name: "AFA Costa Daurada",
      location: "Cambrils",
      phone: "689 73 80 31",
      description: "Apoyo comunitario integral para familias. Promueve la convivencia, la formación y el acompañamiento para reducir el aislamiento y ofrecer herramientas prácticas."
    },
    {
      name: "AFA Terres de l’Ebre",
      location: "Tortosa",
      phone: "977 44 00 90",
      description: "Recurso clave para familias del sur de Cataluña con apoyo emocional, orientación y actividades adaptadas a las necesidades de los cuidadores."
    },
    {
      name: "AFA Montsià",
      location: "Amposta",
      phone: "977 70 22 45",
      description: "Orientación, actividades comunitarias y apoyo continuado a familias cuidadoras en una zona de gran extensión rural."
    }
  ],
  complementary: [
    {
      name: "Espai Barcelona Cuida",
      location: "Barcelona",
      phone: "93 413 21 21",
      url: "https://barcelona.cat/ciutatcuidadora",
      description: "Servicio municipal dedicado a personas cuidadoras de cualquier situación. Ofrece asesoramiento, apoyo psicológico, información sobre recursos y herramientas para mejorar la atención."
    },
    {
      name: "Hospital Clínic – Unidad de Memoria",
      location: "Barcelona",
      phone: "93 227 54 00",
      url: "https://hospitalclinic.org",
      description: "Unidad hospitalaria especializada en diagnóstico y seguimiento de enfermedades neurocognitivas como el Alzheimer. También ofrece orientación y contacto multidisciplinario para familias."
    },
    {
      name: "Teleasistencia Tunstall",
      location: "Barcelona",
      phone: "900 100 800",
      url: "https://tunstall.es",
      description: "Servicio de seguridad 24 h que aporta tranquilidad en el hogar de personas dependientes y apoyo a cuidadores."
    },
    {
      name: "Fundación Catalunya La Pedrera",
      location: "Barcelona",
      phone: "93 214 01 00",
      url: "https://fundacio.cat",
      description: "Programa de promoción de salud, talleres de memoria y estimulación cognitiva para personas mayores (incluyendo cuidadores)."
    },
    {
      name: "Cruz Roja SerCuidadora",
      location: "Cataluña",
      phone: "900 22 22 92",
      url: "https://servicioseam.es",
      description: "Apoyo social, acompañamiento emocional y orientación para personas cuidadoras familiares."
    }
  ]
};

export const PREVENTION_HABITS: PreventionHabit[] = [
  { habit: "Dieta MIND", whatToDo: "Combinar mediterránea y DASH (hoja verde, frutos secos, bayas)", whatToAvoid: "Carnes rojas excesivas, mantequilla, quesos grasos", reductionPercentage: "35% - 53%" },
  { habit: "Actividad Física", whatToDo: "150 min cardio moderado + 2 sesiones fuerza/semana", whatToAvoid: "Sedentarismo (más de 6h sentado al día)", reductionPercentage: "14% - 20%" },
  { habit: "Higiene del Sueño", whatToDo: "Mantener horarios fijos y oscuridad total. 7-9 horas.", whatToAvoid: "Pantallas 1h antes de dormir, cafeína tarde", reductionPercentage: "20% - 30%" },
  { habit: "Salud Vascular", whatToDo: "Presión arterial < 130/80 mmHg. Controlar colesterol LDL.", whatToAvoid: "Tabaquismo, exceso de sal, obesidad abdominal", reductionPercentage: "20% - 40%" },
  { habit: "Estimulación", whatToDo: "Aprender idiomas, instrumentos o hobbies nuevos", whatToAvoid: "Aislamiento social y rutina cognitiva pasiva", reductionPercentage: "Mejora reserva" },
  { habit: "Salud Auditiva", whatToDo: "Usar audífonos si hay pérdida detectada precozmente", whatToAvoid: "Exposición a ruidos extremos sin protección", reductionPercentage: "9% reducción riesgo" }
];

export const FIRST_30_DAYS: ChecklistItem[] = [
  { id: '1', category: 'Días 1-3: Shock y Acción Médica', task: "Confirmar diagnóstico con neurólogo y pedir informe por escrito.", completed: false },
  { id: '2', category: 'Días 1-3: Shock y Acción Médica', task: "Contactar con la AFA local para orientación emocional inmediata.", completed: false, link: "https://www.fafac.cat/associacions" },
  { id: '3', category: 'Días 4-7: Protección Legal', task: "Cita con notario para 'Poder Preventivo' y 'Documento Voluntades Anticipadas'.", completed: false, cost: "~60-120€" },
  { id: '4', category: 'Días 8-14: Plan Social', task: "Solicitar cita con Trabajadora Social del CAP para iniciar Ley Dependencia.", completed: false },
  { id: '5', category: 'Días 15-30: Seguridad y Adaptación', task: "Revisar riesgos hogar (alfombras, luces) y contratar Teleasistencia si es necesario.", completed: false, cost: "~15-20€/mes" }
];

export const DAILY_ROUTINE: DailyRoutine = {
  caregiver: [
    "Respiro diario: mínimo 30 minutos de lectura o paseo a solas.",
    "Ejercicio físico: 3 sesiones semanales de 45 minutos.",
    "Autocuidado emocional: Grupos de apoyo una vez al mes.",
    "Monitorización: Revisar calidad de sueño propia cada mañana."
  ],
  patientRoutine: [
    { time: "08:30", task: "Despertar, aseo y desayuno equilibrado" },
    { time: "10:00", task: "Actividad física (paseo 30 min) y luz natural" },
    { time: "11:30", task: "Estimulación cognitiva (mindfulness o juegos)" },
    { time: "13:30", task: "Comida reposada y descanso breve (siesta <30min)" },
    { time: "16:00", task: "Actividad social o manualidades" },
    { time: "18:30", task: "Preparación para el sueño (luces tenues, música suave)" },
    { time: "20:30", task: "Cena ligera y medicación si procede" }
  ],
  familyTips: [
    "No discutir realidades: Validar el sentimiento, no el dato.",
    "Paciencia activa: El síntoma no es la persona.",
    "Reparto de tareas: Evitar que todo recaiga en un solo cuidador."
  ]
};

export const HOME_ZONAL_ADAPTATIONS: ZonalAdaptation[] = [
  {
    zone: "Cocina",
    icon: "fa-fire-burner",
    items: [
      { stage: 'Leve', change: "Retirar cuchillos fuera de la vista; revisar nevera semanal; luces con sensor de movimiento automático", product: "Luces LED sensor movimiento", price: "12-18€", link: "https://amazon.es" },
      { stage: 'Moderado', change: "Cubrir mandos de vitrocerámica o gas; instalar detector humo; colocar etiquetas de 'CALIENTE' en rojo", product: "Protector perillas cocina", price: "15-45€", link: "https://amazon.es" },
      { stage: 'Avanzado', change: "Instalar interruptor general de apagado; armarios de limpieza con llave; bloquear acceso a productos tóxicos", product: "Interruptor seguridad gas", price: "50-80€", link: "https://amazon.es" }
    ]
  },
  {
    zone: "Baño",
    icon: "fa-sink",
    items: [
      { stage: 'Leve', change: "Luces nocturnas automáticas; alfombrilla antideslizante dentro y fuera; etiquetas de color 'FRÍO/CALIENTE'", product: "Alfombrilla antideslizante", price: "15-22€", link: "https://amazon.es" },
      { stage: 'Moderado', change: "Barras de agarre laterales; asiento de inodoro elevado; limitador automático de temperatura", product: "Barras sujeción", price: "25-60€", link: "https://amazon.es" },
      { stage: 'Avanzado', change: "Silla de ducha estable con respaldo; suelo con tratamiento antideslizante total; asideros de alta visibilidad", product: "Silla ducha plegable", price: "55-85€", link: "https://amazon.es" }
    ]
  },
  {
    zone: "Dormitorio",
    icon: "fa-bed",
    items: [
      { stage: 'Leve', change: "Luces de suelo automáticas al bajar; mesita sin esquinas punzantes; monitor de audio básico", product: "Monitor bebé audio", price: "35-50€", link: "https://amazon.es" },
      { stage: 'Moderado', change: "Barandillas de cama telescópicas; colchón antiescaras preventivo; eliminar espejos frente a la cama", product: "Barandillas cama", price: "45-75€", link: "https://amazon.es" },
      { stage: 'Avanzado', change: "Cama articulada con control remoto; sensor de caídas en el colchón; barandillas acolchadas", product: "Cama hospitalaria", price: "250-450€", link: "https://amazon.es" }
    ]
  }
];

export const HOME_ADAPTATIONS: HomeAdaptation[] = [
  { stage: 'Leve', changes: "Etiquetar cajones, retirar alfombras, sensores de luz nocturnos.", products: "Luces LED sensor, etiquetas adhesivas", price: "20-50€", whereToBuy: "Ferretería / Amazon" },
  { stage: 'Moderado', changes: "Barras en baño, protectores mandos cocina, simplificar mobiliario.", products: "Asideros baño, protectores fuego", price: "100-200€", whereToBuy: "Ortopedia / Leroy Merlin" },
  { stage: 'Avanzado', changes: "Cama articulada, grúa si es necesario, detectores de caída / GPS.", products: "Cama hospitalaria, localizador GPS", price: "500-1500€", whereToBuy: "Ortopedia especializada" },
  { stage: 'Severo', changes: "Colchón antiescaras, eliminación total de obstáculos, monitorización 24h.", products: "Colchón aire, sistema cámara", price: "300-600€", whereToBuy: "Ortopedia specialized" }
];

export const OFFICIAL_AIDS: { [key: string]: OfficialAid[] } = {
  catalunya: [
    {
      name: "PECEF (Cuidado Familiar)",
      recipient: "Cuidadores no profesionales",
      requirements: "Grado dependencia + convivencia",
      amount: "Hasta 455€/mes (Grado III)",
      url: "https://dretssocials.gencat.cat/ca/detalls/Tramit/Prestacions-economiques-per-al-cuidador-no-profesional"
    },
    {
      name: "PEVS (Vinculada al Servicio)",
      recipient: "Pacientes",
      requirements: "Contratación centro día o ayuda domicilio",
      amount: "Hasta 747€/mes",
      url: "https://dretssocials.gencat.cat/ca/detalls/Tramit/Prestacio-economica-vinculada-al-servei-PEVS"
    },
    {
      name: "Respir Plus",
      recipient: "Cuidador principal",
      requirements: "Residencia en Prov. Barcelona",
      amount: "75€/día estancia temporal",
      url: "https://www.diba.cat/es/web/benestar/respir",
      phone: "93 402 22 22"
    }
  ],
  nacional: [
    {
      name: "Ley de Dependencia",
      recipient: "Personas dependientes",
      requirements: "Valoración de grado I, II o III",
      amount: "Servicios o ayudas económicas",
      url: "https://www.imserso.es/autonomia-personal-dependencia"
    },
    {
      name: "Incapacidad Permanente",
      recipient: "Pacientes en edad laboral",
      requirements: "Diagnóstico Alzheimer antes jubilación",
      amount: "Pensión según cotización",
      url: "https://seg-social.es/wps/portal/wss/internet/Inicio"
    }
  ]
};

export const EMERGENCY_NUMBERS = [
  { area: 'Emergencias General', number: '112', icon: 'fa-phone-flip', color: 'bg-red-500' },
  { area: 'Alzheimer Catalunya', number: '93 459 22 94', icon: 'fa-headset', color: 'bg-primary' },
  { area: 'Fundació P. Maragall', number: '902 33 15 33', icon: 'fa-brain', color: 'bg-blue-600' },
  { area: 'Mossos (Desaparición)', number: '062', icon: 'fa-shield', color: 'bg-gray-800' }
];

export const STIMULATION_PLANS: StimulationPlan[] = [
  {
    id: 'leve',
    name: 'Plan Inicial (Leve)',
    level: 'inicial',
    description: 'Fokus en memoria semántica, atención selectiva y orientación temporal.',
    exercises: [
      { title: "Crucigramas familiares", objective: "Memoria semántica", howTo: "Usar nombres de nietos y lugares conocidos en un crucigrama simple.", type: "Mesa", frequency: "5 veces/seman", evidence: "Lancet Comm. 2024", cost: "0-5€" },
      { title: "Memory matching (20 pares)", objective: "Memoria episódica", howTo: "Encontrar parejas de fotos reales de la familia impresas.", type: "Mesa", frequency: "4 veces/seman", evidence: "UBneuro 2026", cost: "10€" },
      { title: "Caminata con lista", objective: "Doble tarea", howTo: "Pasear mientras se enumeran 10 cosas que se comprarían en el súper.", type: "Físico", frequency: "Diario", evidence: "NIH Report 2025", cost: "0€" },
      { title: "Trivia Biográfica", objective: "Reminiscencia", howTo: "Responder preguntas sobre su juventud con apoyo de fotos.", type: "Mesa", frequency: "3 veces/seman", evidence: "Woods et al. 2025", cost: "0€" },
      { title: "App Ejercicios (CogniFit)", objective: "Cognición global", howTo: "15 min de juegos de rapidez mental en Tablet.", type: "Digital", frequency: "5 veces/seman", evidence: "Metaanálisis 2025", cost: "18€/mes" },
      { title: "Secuencia de palabras", objective: "Memoria verbal y atención", howTo: "Muestra tarjetas con palabras simples (casa, sol...), pide que las repita y luego pregunte su posición boca abajo.", type: "Mesa", frequency: "Diariamente", evidence: "Neurología Aplicada 2024", cost: "0€", materials: "Tarjetas de papel", time: "10 min" },
      { title: "Asociación Imágenes-Palabras", objective: "Memoria visual y gnosias", howTo: "Relacionar fotos de objetos o familiares con sus nombres escritos en tarjetas.", type: "Mesa", frequency: "3 veces/semana", evidence: "UBneuro 2026", cost: "0€", materials: "Fotos o recortes" },
      { title: "Adivinanzas Abiertas", objective: "Lenguaje y pensamiento flexible", howTo: "Formular adivinanzas simples y animar a dar pistas si no se recuerda.", type: "Mesa", frequency: "Diariamente", evidence: "CEAFA 2024", cost: "0€", time: "10 min" },
      { title: "Orientación Temporal Diaria", objective: "Ubicación espacio-temporal", howTo: "Cada mañana leer un calendario grande: día, mes, planes y eventos.", type: "Mesa", frequency: "Cada mañana", evidence: "Consenso Demencias 2025", cost: "5€", materials: "Calendario de pared" },
      { title: "Lectura y Reflexión", objective: "Comprensión y memoria reciente", howTo: "Léan un texto breve (2-3 párrafos) y haga preguntas sobre personajes o trama.", type: "Mesa", frequency: "Diariamente", evidence: "Educacciona 2024", cost: "0€", time: "15 min" }
    ]
  },
  {
    id: 'moderado',
    name: 'Plan Intermedio (Moderado)',
    level: 'moderado',
    description: 'Enfoque en funciones ejecutivas básicas, praxias y reconocimiento.',
    exercises: [
      { title: "Memory de Objetos Reales", objective: "Gnosias visuales", howTo: "Mostrar 5 objetos reales, taparlos y pedir que nombre 3.", type: "Mesa-sensorial", frequency: "Diario", evidence: "Camacho 2026", cost: "0€" },
      { title: "Clasificación de Ropa", objective: "Atención y orden", howTo: "Separar camisas de pantalones o por colores tras la colada.", type: "Físico-digital", frequency: "Diario", evidence: "PAPPS 2024", cost: "0€" },
      { title: "Secuencias de Pasos", objective: "Praxias", howTo: "Guiar verbalmente el orden de poner la mesa o vestirse.", type: "Físico", frequency: "Diario", evidence: "NeuronUP 2025", cost: "0€" },
      { title: "Memory de Sonidos", objective: "Evocación auditiva", howTo: "Identificar ruidos de la naturaleza o canciones antiguas.", type: "Sensorial", frequency: "3 veces/seman", evidence: "Cammisuli 2025", cost: "0€" },
      { title: "Dominó de Colores", objective: "Asociación", howTo: "Jugar al dominó emparejando colores en lugar de números.", type: "Mesa", frequency: "4 veces/seman", evidence: "Honczaryk 2025", cost: "15€" },
      { title: "Secuencias Lógicas", objective: "Pensamiento lógico", howTo: "Ordenar 6 tarjetas con pasos de una actividad cotidiana (ej: desayunar).", type: "Mesa", frequency: "3 veces/semana", evidence: "NeuronUP 2025", cost: "0€", time: "15 min" },
      { title: "Rompecabezas Adaptado", objective: "Visuoespacial y atención", howTo: "Reconstruir una imagen simple (8-12 piezas) con ayuda del cuidador.", type: "Mesa", frequency: "2 veces/semana", evidence: "NeuroPsic 2024", cost: "5€", link: "https://www.google.com/search?q=rompecabezas+imprimibles+gratis" },
      { title: "Lista de Compras Guiada", objective: "Planificación y lenguaje", howTo: "Escribir lista, pensar dónde comprar cada cosa y buscarlo en el súper.", type: "Físico-digital", frequency: "Semanal", evidence: "Geriatría Hoy 2025", cost: "0€", time: "20 min" },
      { title: "Pasos de Tarea Familiar", objective: "Memoria de procedimientos", howTo: "Realizar una actividad conocida paso a paso leyendo instrucciones escritas.", type: "Físico", frequency: "Diario", evidence: "Protocolo SAD 2026", cost: "0€", materials: "Objetos diarios" }
    ]
  },
  {
    id: 'avanzado',
    name: 'Plan Avanzado (Severo/Tardío)',
    level: 'avanzado',
    description: 'Fomento de la conexión emocional y mantenimiento sensorial básico.',
    exercises: [
      { title: "Caja de Texturas", objective: "Sensorial", howTo: "Tocar diferentes telas (lana, seda, lija) y describir la sensación.", type: "Sensorial", frequency: "Diario", evidence: "Revision 2026", cost: "20€" },
      { title: "Reminiscencia Musical", objective: "Emoción", howTo: "Escuchar canciones de su infancia y observar reacciones/tarareo.", type: "Sensorial", frequency: "Diario", evidence: "Woods 2025", cost: "0€" },
      { title: "Masaje con Aromaterapia", objective: "Bienestar", howTo: "Masaje suave en manos con aceite de lavanda para calmar agitación.", type: "Sensorial", frequency: "Diario", evidence: "Camacho 2026", cost: "15€" },
      { title: "Mirar Álbum con Voz", objective: "Reconocimiento", howTo: "El cuidador señala y nombra personas en fotos grandes.", type: "Mesa", frequency: "Diario", evidence: "Woods 2025", cost: "10€" },
      { title: "Movilidad Pasiva", objective: "Físico", howTo: "Ejercicios suaves de estiramiento de brazos y manos.", type: "Físico", frequency: "Diario", evidence: "Fisioterapia 2025", cost: "0€" },
      { title: "Ritmo y Movimiento", objective: "Estimulación global", howTo: "Música de su juventud, acompañar con palmas y entonar la canción.", type: "Sensorial", frequency: "Diario", evidence: "Música Terapia 2025", cost: "0€", time: "Continuo" }
    ]
  }
];

export const INVESTIGATION_FOUNDATIONS: ResearchEntity[] = [
  {
    id: "cure-alz",
    name: "Cure Alzheimer's Fund",
    description: "Organización sin fines de lucro que financia exclusivamente investigación de alto riesgo con potencial real de cura.",
    whatTheyDo: "Otorga grants a laboratorios de todo el mundo. Más de 260 millones de dólares invertidos.",
    achievements: "Financiación de consorcios innovadores como el Brain Aging Consortium.",
    howToHelp: "El 100% de las donaciones generales se destinan directamente a la investigación científica.",
    url: "https://curealz.org/",
    extra: "https://curealz.org/giving/donate/"
  },
  {
    id: "addf",
    name: "Alzheimer's Drug Discovery Foundation",
    description: "Acelera el descubrimiento y desarrollo de fármacos contra el Alzheimer mediante filantropía de riesgo.",
    whatTheyDo: "Financia biotecnología y programas de diagnóstico precoz (Diagnostics Accelerator).",
    achievements: "Evaluación de biomarcadores y terapias avanzadas como Leqembi.",
    howToHelp: "Dona para acelerar la llegada de tratamientos modificadores al mercado.",
    url: "https://www.alzdiscovery.org/",
    extra: "https://www.alzdiscovery.org/donate"
  },
  {
    id: "fisher",
    name: "Fisher Center Foundation",
    description: "Dedicada exclusivamente a financiar investigación científica de vanguardia sobre el Alzheimer.",
    whatTheyDo: "Apoya descubrimientos publicados en revistas de alto impacto como Nature o PNAS.",
    achievements: "Avances críticos en la comprensión molecular de la enfermedad.",
    howToHelp: "Tus donaciones financian directamente laboratorios de primer nivel.",
    url: "https://www.alzinfo.org/",
    extra: "https://www.alzinfo.org/donate/"
  },
  {
    id: "alz-assoc",
    name: "Alzheimer's Association",
    description: "La mayor organización sin fines de lucro mundial dedicada a eliminar el Alzheimer.",
    whatTheyDo: "Financia más de 1.200 proyectos en 56 países e impulsa ensayos clínicos globales.",
    achievements: "Liderazgo en el aumento de la financiación federal para investigación.",
    howToHelp: "Contribuye a la investigación global y al apoyo a familias a nivel mundial.",
    url: "https://www.alz.org/",
    extra: "https://www.alz.org/donate"
  },
  {
    id: "bbrc",
    name: "Barcelonaβeta Brain Research Center",
    description: "Centro de investigación europeo especializado en la prevención del Alzheimer (Fundación Pasqual Maragall).",
    whatTheyDo: "Estudios longitudinales (ALFA), biomarcadores en sangre y neuroimagen avanzada.",
    achievements: "Referente en investigación preventiva con uno de los cohortes más grandes del mundo.",
    howToHelp: "Hazte socio para financiar la cura o realiza una donación puntual.",
    url: "https://www.barcelonabeta.org/",
    extra: "https://colabora.fpmaragall.org/donativosweb"
  }
];


export const EVENTS_DATA: Event[] = [
  {
    title: "Taller de Estimulación Cognitiva",
    date: "15 Marzo 2026",
    location: "Online / Barcelona",
    description: "Aprende técnicas prácticas para aplicar en casa con tus familiares.",
    url: "https://alzheimercatalunya.org"
  },
  {
    title: "Grupo de Apoyo Emocional",
    date: "22 Marzo 2026",
    location: "Girona",
    description: "Espacio seguro para compartir vivencias y reducir el estrés del cuidador.",
    url: "https://afagirona.org"
  },
  {
    title: "Conferencia Bienal Barcelona–Pittsburgh 2026",
    location: "Hotel Porta Fira, Barcelona",
    date: "13–15 mayo 2026",
    description: "Talleres, simposios y presentación de investigaciones sobre la enfermedad de Alzheimer.",
    url: "https://www.fundacioace.com"
  },
  {
    title: "Grupos de apoyo Alzheimer Catalunya Fundació",
    location: "Barcelona y Online",
    date: "22 sept – 15 dic 2025",
    description: "Sesiones periódicas de apoyo emocional y herramientas de autocuidado para familias."
  },
  {
    title: "Ciclo formativo para cuidadores – FAFAC",
    location: "Barcelona",
    date: "24 mar – 30 dic 2025",
    description: "Talleres de comunicación, estimulación cognitiva y manejo del día a día."
  },
  {
    title: "La Noche del Alzheimer – Ace Alzheimer Center",
    location: "Barcelona",
    date: "1 octubre 2025",
    description: "Evento solidario con actividades culturales y música para la sensibilización social."
  }
];

export const APPS_DATA = [
  { name: "Cuidador+", desc: "App de CEAFA para seguimiento de síntomas y soporte emocional. Reduce el burnout un 25%.", price: "Gratis", icon: "fa-users-heart" },
  { name: "MindMate", desc: "Entrenamiento cognitivo, diario del cuidador y recetas saludables. Validada por la UE.", price: "Gratis / Pro", icon: "fa-brain" },
  { name: "Salut i Dependència", desc: "App oficial de la Generalitat para acceso al PIA y trámites de teleasistencia.", price: "Gratis", icon: "fa-landmark" },
  { name: "YoTeCuido", desc: "Guía completa: síntomas, alimentación y rutinas diarias para el cuidador.", price: "Gratis", icon: "fa-heart" },
  { name: "Alzheimer Assistent", desc: "Gestión emocional a través de historias reales y consejos prácticos.", price: "Gratis", icon: "fa-comments" },
  { name: "Pharma Alzheimer", desc: "Consulta rápida sobre farmacología y nutrición específica.", price: "Gratis", icon: "fa-pills" },
  { name: "Elderly Care", desc: "Guía diaria e inspiración para mantener la calidad del cuidado.", price: "Gratis", icon: "fa-sun" }
];

export const MOTIVATIONAL_QUOTES = [
  "Cuidar es la mayor expresión de amor que un ser humano puede ofrecer.",
  "La huella del amor nunca se borra, permanece en el corazón incluso cuando la memoria flaquea.",
  "Tu fortaleza hoy es el refugio de quien amas.",
  "No estás a solas en este camino; cada pequeño gesto cuenta.",
  "Cuidarte a ti mismo es la mejor forma de cuidar a los demás.",
  "La paciencia es el lenguaje del corazón cuando las palabras se pierden.",
  "Cada gesto de cuidado es un acto de amor.",
  "Cuidar también es saber pedir ayuda.",
  "No estás solo/a: hay toda una comunidad contigo.",
  "Tu amor y tu presencia importan más de lo que imaginas.",
  "Lo que hoy parece pequeño, mañana será un recuerdo de valentía.",
  "Es valiente quien cuida, incluso cuando no tiene fuerzas.",
  "El descanso no es un lujo: es un acto de responsabilidad contigo mismo/a.",
  "No hay cuidado perfecto, solo cuidado con corazón.",
  "Tu bienestar también es parte del cuidado que das cada día.",
  "Cada día no es igual, pero cada uno cuenta.",
  "Cuando te sientas débil, recuerda todas las veces que has seguido adelante.",
  "No se trata de nunca caer, sino de levantarse una vez más.",
  "A veces la cosa más valiente que puedes hacer es respirar profundo y seguir.",
  "Lo que haces hoy puede parecer invisible, pero deja huellas eternas.",
  "Amar no es suficiente; sostener amor incluso cuando duele, eso es cuidar.",
  "Es normal sentir cansancio; también eres humano/a.",
  "No tienes que ser perfecto/a para estar presente.",
  "A veces el silencio y la compañía son la mejor medicina.",
  "Permítete sentir lo que sientes sin juzgarte.",
  "Cuidar no te hace invencible; te hace valiente.",
  "No todo depende de ti: el amor se reparte, y tú también mereces cuidado.",
  "Está bien pedir ayuda, incluso tres veces si hace falta.",
  "Donde hay amor, hay un camino aunque no sea fácil.",
  "El amor perdura incluso cuando los recuerdos cambian.",
  "La paciencia también es una forma de amor.",
  "Estás haciendo lo mejor que puedes con lo que tienes.",
  "Si hoy sólo sobrevives, eso también es un logro.",
  "Descansar no es rendirse, es prepararte para seguir."
];

export const FAQ_DATA = [
  {
    category: "Sobre la enfermedad",
    question: "¿Qué es el Alzheimer y cómo afecta en el día a día?",
    answer: "El Alzheimer es una enfermedad neurodegenerativa que afecta la memoria, la orientación y las capacidades cognitivas. Se manifiesta de forma gradual, dificultando tareas que antes eran sencillas. Comprender que los olvidos o cambios de humor son parte de la enfermedad ayuda a gestionar mejor la convivencia."
  },
  {
    category: "Sobre la enfermedad",
    question: "¿Todos los pacientes tienen los mismos síntomas?",
    answer: "No, cada persona vive el Alzheimer de manera distinta. Algunos presentan dificultades en el lenguaje desde el inicio, mientras que otros mantienen su autonomía física pero pierden la memoria reciente rápidamente. Adaptamos los ejercicios a cada etapa."
  },
  {
    category: "Ayudas y servicios oficiales",
    question: "¿Cómo solicito la valoración de dependencia en Cataluña?",
    answer: "Debes contactar con los servicios sociales de tu ayuntamiento o del CAP. Necesitarás informes médicos detallados. Un profesional visitará el domicilio para evaluar el grado de dependencia (I, II o III) y elaborar el PIA."
  },
  {
    category: "Ayudas y servicios oficiales",
    question: "¿Qué diferencia hay entre la ayuda PEVS y la PECEF?",
    answer: "La PEVS (Prestación Económica Vinculada al Servicio) es para financiar centros de día o residencias. La PECEF es para el cuidado en el entorno familiar, reconociendo la labor del cuidador no profesional con una ayuda mensual."
  },
  {
    category: "Estimulación cognitiva",
    question: "¿Por qué son importantes los ejercicios de memoria?",
    answer: "Ayudan a mantener activas las conexiones neuronales y a ralentizar la pérdida de capacidades. Además, realizar estas actividades juntos fomenta la conexión emocional y reduce la apatía o ansiedad del paciente."
  },
  {
    category: "Rutina y Autocuidado",
    question: "¿Qué puedo hacer si me siento agotado por el cuidado?",
    answer: "Es fundamental buscar tiempo de respiro, aceptar ayuda de familiares o AFAs, y cuidar tu propia salud física y emocional. No intentes hacerlo todo a solas; el bienestar del cuidador es vital para el paciente."
  }
];

export const WELLBEING_DATA = {
  checks: [
    "Control vascular: PA <130/80 mmHg",
    "HbA1c <7% si diabetes",
    "IMC saludable (18.5-24.9)"
  ],
  prevencion: PREVENTION_HABITS,
  rutina: DAILY_ROUTINE,
  hogar: HOME_ADAPTATIONS,
  caregiver: [
    {
      title: "Prevención del Burnout",
      content: "Aprende a identificar las señales de agotamiento extremo.",
      link: "https://alzheimercatalunya.org/es/cuidador"
    },
    {
      title: "Higiene Postural",
      content: "Técnicas para movilizar al paciente sin lesionar tu espalda.",
      link: "https://www.fafac.cat/formacio"
    }
  ],
  patient: [
    {
      title: "Nutrición Cerebral",
      content: "Pautas dietéticas específicas para fases moderadas.",
      tips: ["Priorizar fruta fresca", "Controlar hidratación"]
    },
    {
      title: "Higiene y Sueño",
      content: "Rutinas nocturnas para evitar la agitación del atardecer.",
      tips: ["Luces cálidas", "Música suave"]
    }
  ],
  environment: [
    {
      title: "Simplificación",
      content: "Reducir estímulos visuales ayuda a la concentración.",
      tips: ["Paredes lisas", "Pocos objetos"]
    }
  ]
};
