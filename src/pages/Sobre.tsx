import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section className="space-y-10">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-semibold text-foreground">
          Meu Arsenal de Alta Alavancagem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-foreground">Lovable.dev</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-open">
              Para criar interfaces e aplicações completas a partir de linguagem natural, garantindo velocidade máxima do protótipo à produção.
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-foreground">Supabase</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-open">
              Para estruturar bancos de dados robustos, autenticação e backends escaláveis sem a dor de cabeça da infraestrutura tradicional.
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-foreground">Builder.io</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-open">
              Para criar páginas e conteúdos visualmente, dando autonomia para o cliente final e desacoplando o conteúdo do código.
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-foreground">Google Gemini</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-open">
              Para integrar inteligência artificial avançada nas aplicações, automatizando tarefas e gerando insights.
            </CardContent>
          </Card>
        </div>
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
