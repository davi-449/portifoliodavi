import { Link } from 'react-router-dom'
import { LavaLamp } from '@/components/ui/fluid-blob'

const Home = () => {
  return (
    <section className="relative container mx-auto px-6 pt-28 pb-20 min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <LavaLamp />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white mix-blend-difference mb-6">
          David Silveira
        </h1>
        <p className="text-xl md:text-2xl text-white mix-blend-difference leading-relaxed mb-10 font-open">
          Desenvolvedor Full-Stack & Especialista em Soluções Web
        </p>
        <div className="flex justify-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-base font-medium shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Ver meus projetos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
