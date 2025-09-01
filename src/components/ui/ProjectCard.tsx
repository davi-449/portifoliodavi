
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl glass-card hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold font-['Poppins'] text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Link */}
        <a 
          href={project.projectUrl}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors group/link"
        >
          Ver projeto
          <svg 
            className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
