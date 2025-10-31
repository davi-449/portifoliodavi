import { Mail } from "lucide-react";
import { FloatingPaths } from '@/components/ui/background-paths';
import { toast } from '@/hooks/use-toast';

const Contato = () => {
  const handleWhatsAppClick = () => {
    toast({ title: 'Abrindo WhatsApp', description: 'Será aberta uma nova aba para iniciar a conversa.' });
  };

  const handleEmailClick = () => {
    toast({ title: 'Abrindo cliente de email', description: 'Seu cliente de email padrão será aberto.' });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="max-w-2xl w-full mx-auto text-center rounded-[12px] border border-white/6 bg-white/5 backdrop-blur-md p-12 md:p-16 shadow-2xl relative overflow-hidden">
        {/* inner glow */}
        <div className="absolute inset-0 pointer-events-none rounded-[12px]" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), inset 0 -6px 30px rgba(0,0,0,0.45)' }} />

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-3">
          Vamos Iniciar seu Projeto
        </h2>

        <p className="text-base md:text-lg font-open text-foreground/80 mb-6">
          O caminho mais rápido para lançar o seu site. Fale conosco e vamos começar.
        </p>

        <p className="text-sm text-foreground/60 mb-6">Resposta em até 24 horas</p>

        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511996242812?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold shadow-md transform transition-all w-full md:w-auto"
            style={{ background: 'linear-gradient(90deg,#2EE38A 0%,#12C76B 100%)', color: '#020617' }}
            aria-label="Iniciar conversa no WhatsApp"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/10 group-hover:scale-105 transition-transform">
              {/* WhatsApp SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.89 11.89 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 2.04.56 3.93 1.53 5.57L.5 23.5l6.14-1.61A11.8 11.8 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-3.01-1.18-5.76-3.98-7.52z" stroke="none" fill="#000"/>
                <path d="M17.3 14.2c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.67.15s-.77.96-.95 1.16c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.3.45-.45.15-.15.2-.25.3-.42.1-.16.05-.31-.02-.46-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.31-.27.24-1.05 1.03-1.05 2.52 0 1.48 1.07 2.91 1.22 3.11.15.2 2.1 3.19 5.1 4.47 3 1.28 3 0.85 3.54 0.8.54-.05 1.77-.72 2.02-1.41.25-.69.25-1.26.18-1.41-.07-.15-.27-.24-.57-.39z" stroke="none" fill="#fff" />
              </svg>
            </span>
            <span>Iniciar Conversa no WhatsApp</span>
          </a>

          <a
            href="mailto:silveira.odavid@gmail.com"
            onClick={handleEmailClick}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold border border-primary text-primary bg-transparent hover:bg-primary/5 transition w-full md:w-auto"
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
