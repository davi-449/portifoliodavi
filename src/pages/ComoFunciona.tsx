import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LovableIcon, SupabaseIcon, BuilderIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "@/components/icons/logos";
import { Zap, Rocket, Shield } from "lucide-react";

const ComoFunciona = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* Seção 1: Hero */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
          Sites Profissionais por Assinatura
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-open max-w-3xl mx-auto leading-relaxed">
          Tenha um site de alta performance sem se preocupar com desenvolvimento, hospedagem ou manutenção. Pague apenas uma mensalidade fixa e foque no que realmente importa: <strong>fazer seu negócio crescer</strong>.
        </p>
      </section>

      {/* Seção 2: Como Funciona */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4 p-6 rounded-xl glass-card">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold font-heading text-foreground">1. Escolha seu Modelo</h3>
          <p className="text-foreground/70">
            Navegue pelo nosso catálogo e escolha o modelo que melhor se encaixa no seu negócio. Todos são otimizados para conversão.
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-xl glass-card">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold font-heading text-foreground">2. Personalize</h3>
          <p className="text-foreground/70">
            Personalizamos o site com suas cores, logo, textos e imagens. Em poucos dias, seu site está no ar.
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-xl glass-card">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold font-heading text-foreground">3. Relaxe</h3>
          <p className="text-foreground/70">
            Nós cuidamos de tudo: hospedagem, segurança, atualizações e suporte. Você só paga a mensalidade.
          </p>
        </div>
      </section>

      {/* Seção 3: Tecnologias */}
      <section className="space-y-8 py-16">
        <div className="text-center">
          <GradientHeading variant="secondary" size="lg">
            Tecnologias de Ponta
          </GradientHeading>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            Usamos as mesmas ferramentas que grandes empresas de tecnologia. Seu site será rápido, seguro e escalável.
          </p>
        </div>

        {(() => {
          const allLogos = [
            { name: "Lovable.dev", id: 1, img: LovableIcon },
            { name: "Supabase", id: 2, img: SupabaseIcon },
            { name: "Builder.io", id: 3, img: BuilderIcon },
            { name: "React", id: 4, img: ReactIcon },
            { name: "TailwindCSS", id: 5, img: TailwindIcon },
            { name: "TypeScript", id: 6, img: TypeScriptIcon },
          ];

          return (
            <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center">
              <LogoCarousel columnCount={3} logos={allLogos} />
            </div>
          );
        })()}
      </section>

      {/* Seção 4: CTA */}
      <section className="relative">
        <div className="mx-auto max-w-5xl text-center space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Pronto para decolar?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-open">
            Escolha seu modelo e comece a capturar leads hoje mesmo. Sem burocracia, sem surpresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link to="/modelos">Ver Modelos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
