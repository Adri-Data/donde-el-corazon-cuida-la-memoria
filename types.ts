
export interface Resource {
  name: string;
  location: string;
  phone: string;
  email?: string;
  url?: string;
  description: string;
  extra?: string;
  coords?: [number, number];
  services?: string[];
}

export interface ProvinceResources {
  barcelona: Resource[];
  girona: Resource[];
  lleida: Resource[];
  tarragona: Resource[];
  complementary: Resource[];
}

export interface Exercise {
  title: string;
  objective: string;
  howTo: string;
  variation?: string;
  time?: string;
  materials?: string;
  link?: string;
  type: 'Mesa' | 'Físico' | 'Sensorial' | 'Digital' | 'Físico-digital' | 'Físico-verbal' | 'Mesa-sensorial';
  frequency: string;
  evidence: string;
  cost: string;
}

export interface StimulationPlan {
  id: string;
  name: string;
  level: 'inicial' | 'moderado' | 'avanzado' | 'severo';
  description: string;
  exercises: Exercise[];
}

export interface Event {
  title: string;
  location: string;
  date: string;
  description: string;
  url?: string;
}

export interface ResearchEntity {
  id: string;
  name: string;
  description: string;
  whatTheyDo: string;
  achievements: string;
  howToHelp: string;
  url: string;
  phone?: string;
  extra?: string;
  email?: string;
  address?: string;
  logo?: string;
}

export interface OfficialAid {
  name: string;
  recipient: string;
  requirements: string;
  amount: string;
  url: string;
  phone?: string;
  deadline?: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  category: string;
  details?: string;
  cost?: string;
  link?: string;
}

export interface DailyRoutineTask {
  time: string;
  task: string;
  note?: string;
}

export interface DailyRoutine {
  caregiver: string[];
  patientRoutine: DailyRoutineTask[];
  familyTips: string[];
}

export interface ZonalAdaptation {
  zone: string;
  icon: string;
  items: {
    stage: 'Leve' | 'Moderado' | 'Avanzado' | 'Severo';
    change: string;
    product: string;
    price: string;
    link: string;
  }[];
}

export interface HomeAdaptation {
  stage: 'Leve' | 'Moderado' | 'Avanzado' | 'Severo';
  changes: string;
  products: string;
  price: string;
  whereToBuy: string;
}

export interface PreventionHabit {
  habit: string;
  whatToDo: string;
  whatToAvoid: string;
  reductionPercentage: string;
}

export type AppSection =
  | 'inicio'
  | 'recursos'
  | 'ayudas'
  | 'ejercicios'
  | 'frases'
  | 'eventos'
  | 'foro'
  | 'preguntas'
  | 'bienestar'
  | 'investigacion'
  | 'asistente'
  | 'emergencias'
  | 'primeros-pasos'
  | 'hogar'
  | 'prevencion'
  | 'guia-respiro'
  | 'pautas-nutricion'
  | 'consejos-comunicacion';
