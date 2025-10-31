export interface Model {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  price: string;
}

export const models: Model[] = [
  {
    title: 'Modelo: Site para Corretoras de Seguros',
    description:
      'Um site completo para corretoras, com calculadora de seguros, gestão de apólices e integração com WhatsApp. Pronto para alugar e começar a capturar leads hoje mesmo.',
    imageUrl: '/images/sgc-gestorpulse.png',
    projectUrl: 'https://sgc.gestorpulse.com.br',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe'],
    price: 'A partir de R$ 299/mês',
  },
  {
    title: 'Modelo: Site para Planos de Saúde Corporativos',
    description:
      'Sistema completo para departamentos de RH gerenciarem planos de saúde corporativos, com dashboards analíticos e controle total de funcionários. Otimizado para conversão.',
    imageUrl: '/images/rh-gestorpulse.png',
    projectUrl: 'https://rh.gestorpulse.com.br',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Chart.js'],
    price: 'A partir de R$ 349/mês',
  },
  {
    title: 'Modelo: Site para Fisioterapia Pediátrica',
    description:
      'Aplicação web de nicho para fisioterapeutas pediátricos, com ferramentas de medição de assimetrias cranianas e geração de relatórios técnicos. Pronto para profissionalizar seu atendimento.',
    imageUrl: '/images/medikran.png',
    projectUrl: 'https://medikran.com.br',
    technologies: ['Vue.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PDFLib'],
    price: 'A partir de R$ 199/mês',
  },
];
