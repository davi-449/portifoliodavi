
import { models } from '@/data/models';
import ModelCard from '@/components/ui/ModelCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Modelos = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-['Poppins'] text-foreground mb-6">
            Modelos Prontos para Ativar
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Escolha o modelo ideal para o seu negócio. Todos são otimizados para performance e captura de leads.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <ModelCard key={index} model={model} />
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="relative">
          <div className="mx-auto max-w-4xl text-center space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 shadow-2xl glass-card hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              Não encontrou um modelo para seu nicho?
            </h2>
            
            <p className="text-base md:text-lg text-foreground/80 font-open max-w-2xl mx-auto">
              Nós criamos soluções sob medida para negócios que precisam de algo único. Entre em contato e vamos conversar sobre o seu projeto.
            </p>
            
            <Button asChild size="lg" className="group">
              <Link to="/como-funciona" className="inline-flex items-center gap-2">
                Solicitar Solução Sob Medida
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelos;
