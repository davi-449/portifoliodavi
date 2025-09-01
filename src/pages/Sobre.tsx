import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LovableIcon, SupabaseIcon, BuilderIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "@/components/icons/logos";

const Sobre = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* Seção 1: Hero Pessoal */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-none">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <img
              src="/placeholder.svg"
              alt="Foto profissional"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
            Desenvolvedor No-Code
          </h1>
          <h2 className="text-xl md:text-2xl font-heading opacity-80 text-foreground">
            Especialista em Lovable, Supabase & Builder.io
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-open leading-relaxed">
            Minha missão é entender as dificuldades e os problemas reais de pequenos negócios e traduzi-los em soluções digitais eficientes. Eu não apenas construo aplicações, eu crio ferramentas que resolvem dores, otimizam processos e impulsionam o crescimento.
          </p>
        </div>
      </section>

      {/* Seção 2: Arsenal de Soluções */}
      <section className="space-y-10 overflow-x-hidden">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-semibold text-foreground">
          Meu Arsenal de Alta Alavancagem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
          <div className="relative group pt-10" style={{ perspective: "800px" }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform-gpu [transform:rotateX(14deg)_translateZ(10px)] group-hover:[transform:rotateX(0deg)_translateZ(0)] transition-transform duration-500">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center shadow-2xl ring-1 ring-white/20 overflow-hidden">
                <img src="https://lovable.dev/favicon.ico" alt="Logo Lovable.dev" className="h-8 w-8 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]" />
              </div>
            </div>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-foreground">Lovable.dev</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 font-open">
                Para criar interfaces e aplicações completas a partir de linguagem natural, garantindo velocidade máxima do protótipo à produção.
              </CardContent>
            </Card>
          </div>

          <div className="relative group pt-10" style={{ perspective: "800px" }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform-gpu [transform:rotateX(14deg)_translateZ(10px)] group-hover:[transform:rotateX(0deg)_translateZ(0)] transition-transform duration-500">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center shadow-2xl ring-1 ring-white/20 overflow-hidden">
                <img src="https://github.com/supabase.png" alt="Logo Supabase" className="h-8 w-8 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]" />
              </div>
            </div>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-foreground">Supabase</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 font-open">
                Para estruturar bancos de dados robustos, autenticação e backends escaláveis sem a dor de cabeça da infraestrutura tradicional.
              </CardContent>
            </Card>
          </div>

          <div className="relative group pt-10" style={{ perspective: "800px" }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform-gpu [transform:rotateX(14deg)_translateZ(10px)] group-hover:[transform:rotateX(0deg)_translateZ(0)] transition-transform duration-500">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center shadow-2xl ring-1 ring-white/20 overflow-hidden">
                <img src="https://github.com/BuilderIO.png" alt="Logo Builder.io" className="h-8 w-8 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]" />
              </div>
            </div>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-foreground">Builder.io</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 font-open">
                Para criar páginas e conteúdos visualmente, dando autonomia para o cliente final e desacoplando o conteúdo do código.
              </CardContent>
            </Card>
          </div>

        </div>

        {(() => {
          const defaultCards = [
            {
              icon: <Database className="size-4 text-emerald-300" />,
              title: "Supabase",
              description:
                "Bancos de dados, autenticação e backends escaláveis sem dor de infraestrutura.",
              date: "Hoje",
              iconClassName: "bg-emerald-900",
              titleClassName: "text-emerald-400",
              className:
                "[grid-area:stack] -translate-x-8 translate-y-0 hover:-translate-y-6 z-10",
            },
            {
              icon: <Wand2 className="size-4 text-pink-300" />,
              title: "Lovable.dev",
              description:
                "Interfaces e apps completos a partir de linguagem natural, do protótipo à produção.",
              date: "Esta semana",
              iconClassName: "bg-pink-900",
              titleClassName: "text-pink-400",
              className:
                "[grid-area:stack] translate-x-2 translate-y-8 hover:-translate-y-2 z-20",
            },
            {
              icon: <Blocks className="size-4 text-violet-300" />,
              title: "Builder.io",
              description:
                "Páginas e conteúdos visuais com autonomia para o cliente, desacoplando conteúdo do código.",
              date: "Sempre",
              iconClassName: "bg-violet-900",
              titleClassName: "text-violet-400",
              className:
                "[grid-area:stack] translate-x-12 translate-y-16 hover:translate-y-10 z-30",
            },
          ];

          return (
            <div className="flex min-h-[420px] w-full items-center justify-center py-10 overflow-x-hidden">
              <div className="w-full max-w-4xl mx-auto">
                <DisplayCards cards={defaultCards} />
              </div>
            </div>
          );
        })()}
      </section>

      {/* Seção 3: CTA */}
      <section className="relative">
        <div className="mx-auto max-w-5xl text-center space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Pronto para resolver um problema?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-open">
            Vamos conversar sobre como minhas ferramentas podem ajudar o seu negócio a alcançar o próximo nível.
          </p>
          <Button asChild size="lg" className="mx-auto">
            <Link to="/contato">Entrar em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
