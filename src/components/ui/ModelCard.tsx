
import { Model } from '@/data/models';

interface ModelCardProps {
  model: Model;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl glass-card hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={model.imageUrl} 
          alt={model.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold font-['Poppins'] text-foreground mb-3 group-hover:text-primary transition-colors">
          {model.title}
        </h3>
        
        <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
          {model.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {model.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Price */}
        <div className="mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-primary font-semibold text-base">{model.price}</p>
        </div>
        
        {/* Link */}
        <a 
          href={model.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors group/link"
        >
          Ver demonstração
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

export default ModelCard;
