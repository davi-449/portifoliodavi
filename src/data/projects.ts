
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: 'Sistema de E-commerce Fictício',
    description: 'Plataforma completa de vendas online com carrinho, checkout e painel de admin.',
    imageUrl: '/placeholder.svg',
    projectUrl: '#',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe']
  },
  {
    title: 'Dashboard de Análise de Dados',
    description: 'Interface interativa para visualização de métricas de negócio em tempo real.',
    imageUrl: '/placeholder.svg',
    projectUrl: '#',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicação colaborativa para gerenciamento de projetos e produtividade em equipe.',
    imageUrl: '/placeholder.svg',
    projectUrl: '#',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io']
  }
];
