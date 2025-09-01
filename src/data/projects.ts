export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: 'SGC - Gestor para Corretoras',
    description:
      'Plataforma SaaS completa para corretores de seguros, focada na automação de renovações, gestão de apólices e controle de clientes para maximizar a eficiência e receita.',
    imageUrl: '/images/sgc-gestorpulse.png',
    projectUrl: 'https://sgc.gestorpulse.com.br',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe'],
  },
  {
    title: 'GPS - Gestão de Planos de Saúde',
    description:
      'Sistema B2B para departamentos de RH, projetado para centralizar e otimizar a gestão de planos de saúde corporativos, com dashboards analíticos e controle total de funcionários.',
    imageUrl: '/images/rh-gestorpulse.png',
    projectUrl: 'https://rh.gestorpulse.com.br',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Chart.js'],
  },
  {
    title: 'Medikran - Fisioterapia Pediátrica',
    description:
      'Aplicação web de nicho para fisioterapeutas pediátricos, permitindo a medição precisa de assimetrias cranianas e a geração de relatórios técnicos com validação científica.',
    imageUrl: '/images/medikran.png',
    projectUrl: 'https://medikran.com.br',
    technologies: ['Vue.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PDFLib'],
  },
];
