import { MessageSquare, Mail } from "lucide-react";
import { FloatingPaths } from '@/components/ui/background-paths';

const Contato = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="max-w-2xl w-full mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Entre em Contato</h2>
        <p className="text-base md:text-lg font-open text-foreground/80 mb-8">
          O caminho mais rápido para transformar sua ideia em realidade. Me envie uma mensagem e vamos começar a construir algo incrível.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511996242812?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold shadow hover:brightness-95 transition"
            style={{ backgroundColor: '#39E991', color: '#000' }}
            aria-label="Iniciar conversa no WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
            Iniciar Conversa no WhatsApp
          </a>

          <a
            href="mailto:silveira.odavid@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold border border-primary text-primary bg-transparent hover:bg-primary/5 transition"
            aria-label="Enviar um email"
          >
            <Mail className="w-5 h-5" />
            Prefiro Enviar um Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
