import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

type ServiceType = "site" | "branding" | "googleAds" | "metaAds" | "posts" | "reels";

interface QuoteState {
  selectedServices: ServiceType[];
  adsMonths: number;
  postsPerMonth: number;
}

const Cotacao = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quote, setQuote] = useState<QuoteState>({
    selectedServices: [],
    adsMonths: 3,
    postsPerMonth: 1,
  });

  const services = [
    { id: "site" as ServiceType, label: "Aluguel de Site (Landing Page)", icon: "🌐" },
    { id: "branding" as ServiceType, label: "Branding (Identidade Visual)", icon: "🎨" },
    { id: "googleAds" as ServiceType, label: "Marketing Digital (Google Ads)", icon: "🎯" },
    { id: "metaAds" as ServiceType, label: "Marketing Digital (Meta Ads)", icon: "📱" },
    { id: "posts" as ServiceType, label: "Social Media (Posts Avulsos)", icon: "📸" },
    { id: "reels" as ServiceType, label: "Social Media (Edição de Reels)", icon: "🎬" },
  ];

  const toggleService = (serviceId: ServiceType) => {
    setQuote(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(s => s !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const calculateMonthlyTotal = () => {
    let total = 0;

    if (quote.selectedServices.includes("site")) total += 150;

    if (quote.selectedServices.includes("googleAds")) {
      const first3 = Math.min(quote.adsMonths, 3) * 300;
      const remaining = Math.max(0, quote.adsMonths - 3) * 500;
      total += (first3 + remaining) / quote.adsMonths;
    }

    if (quote.selectedServices.includes("metaAds")) {
      const first3 = Math.min(quote.adsMonths, 3) * 400;
      const remaining = Math.max(0, quote.adsMonths - 3) * 600;
      total += (first3 + remaining) / quote.adsMonths;
    }

    if (quote.selectedServices.includes("posts")) {
      total += quote.postsPerMonth * 50;
    }

    return total;
  };

  const calculateOneTimeTotal = () => {
    return quote.selectedServices.includes("branding") ? 300 : 0;
  };

  const handleSendWhatsApp = () => {
    const numeroWA = "5511996242812";

    let mensagem = "*Olá, Impulso Web!*%0A%0A";
    mensagem += "Gostaria de uma cotação para os seguintes serviços:%0A%0A";

    const monthlyTotal = calculateMonthlyTotal();
    const oneTimeTotal = calculateOneTimeTotal();

    if (monthlyTotal > 0) {
      mensagem += "*--- PAGAMENTOS MENSAIS ---*%0A";

      if (quote.selectedServices.includes("site")) {
        mensagem += `• Aluguel de Site: R$ 150,00/mês%0A`;
      }

      if (quote.selectedServices.includes("googleAds")) {
        const googleValue = ((Math.min(quote.adsMonths, 3) * 300 + Math.max(0, quote.adsMonths - 3) * 500) / quote.adsMonths).toFixed(2);
        mensagem += `• Google Ads (${quote.adsMonths} meses): R$ ${googleValue}/mês%0A`;
      }

      if (quote.selectedServices.includes("metaAds")) {
        const metaValue = ((Math.min(quote.adsMonths, 3) * 400 + Math.max(0, quote.adsMonths - 3) * 600) / quote.adsMonths).toFixed(2);
        mensagem += `• Meta Ads (${quote.adsMonths} meses): R$ ${metaValue}/mês%0A`;
      }

      if (quote.selectedServices.includes("posts")) {
        mensagem += `• Posts (${quote.postsPerMonth} unidades/mês): R$ ${(quote.postsPerMonth * 50).toFixed(2)}/mês%0A`;
      }

      mensagem += `%0A*Total Mensal (Estimado): R$ ${monthlyTotal.toFixed(2)}*%0A`;
    }

    if (oneTimeTotal > 0) {
      mensagem += "%0A*--- PAGAMENTOS ÚNICOS ---*%0A";
      mensagem += `• Branding Completo: R$ ${oneTimeTotal.toFixed(2)}%0A`;
    }

    if (quote.selectedServices.includes("reels")) {
      mensagem += "%0A*--- SERVIÇOS A CONSULTAR ---*%0A";
      mensagem += "• Edição de Reels%0A";
    }

    const link = `https://wa.me/${numeroWA}?text=${mensagem}`;
    window.open(link, '_blank');
  };

  const canProceed = () => {
    if (currentStep === 1) return quote.selectedServices.length > 0;
    return true;
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const AnimatedCounter = ({ value }: { value: number }) => {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest * 100) / 100);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 0.4,
        ease: "easeOut"
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }, [value, motionValue, rounded]);

    return <>{displayValue.toFixed(2)}</>;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Quais serviços você precisa?
              </h2>
              <p className="text-foreground/70 text-lg">
                Selecione todos os serviços que deseja contratar
              </p>
            </div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4 max-w-2xl mx-auto mt-8"
            >
              {services.map(service => (
                <motion.label
                  key={service.id}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.div
                    initial={false}
                    animate={quote.selectedServices.includes(service.id) ? { scale: [0.8, 1] } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Checkbox
                      checked={quote.selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                      className="h-5 w-5"
                    />
                  </motion.div>
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.label}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8 max-w-2xl mx-auto"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Configure seus Serviços
              </h2>
              <p className="text-foreground/70 text-lg">
                Ajuste os detalhes conforme suas necessidades
              </p>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {quote.selectedServices.includes("site") && (
                  <motion.div
                    key="site-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm space-y-2 overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      🌐 Aluguel de Site
                    </h3>
                    <p className="text-foreground/80">
                      Nosso plano de aluguel de site é de <strong>R$ 150/mês</strong>.
                    </p>
                    <p className="text-sm text-foreground/60">
                      (Contrato mínimo de 12 meses)
                    </p>
                  </motion.div>
                )}

                {quote.selectedServices.includes("branding") && (
                  <motion.div
                    key="branding-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm space-y-2 overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      🎨 Branding
                    </h3>
                    <p className="text-foreground/80">
                      Nosso pacote de Branding completo (Logo, Identidade Visual, etc.) é um pagamento único de <strong>R$ 300</strong>.
                    </p>
                  </motion.div>
                )}

                {(quote.selectedServices.includes("googleAds") || quote.selectedServices.includes("metaAds")) && (
                  <motion.div
                    key="ads-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm space-y-4 overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      📊 Marketing Digital
                    </h3>
                    <div className="space-y-4">
                      <label className="space-y-2">
                        <p className="text-foreground/80">
                          Por quantos meses você planeja manter o serviço?
                        </p>
                        <div className="flex items-center gap-4">
                          <Slider
                            value={[quote.adsMonths]}
                            onValueChange={([value]) => setQuote(prev => ({ ...prev, adsMonths: value }))}
                            min={3}
                            max={12}
                            step={1}
                            className="flex-1"
                          />
                          <motion.span
                            key={quote.adsMonths}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="text-2xl font-bold text-primary min-w-[60px] text-center"
                          >
                            {quote.adsMonths}
                          </motion.span>
                        </div>
                      </label>

                      {quote.selectedServices.includes("googleAds") && (
                        <div className="text-sm text-foreground/70 pl-2 border-l-2 border-primary/50">
                          <strong>Google Ads:</strong> R$ 300/mês (3 primeiros meses), R$ 500/mês (após 3º mês)
                        </div>
                      )}
                      {quote.selectedServices.includes("metaAds") && (
                        <div className="text-sm text-foreground/70 pl-2 border-l-2 border-primary/50">
                          <strong>Meta Ads:</strong> R$ 400/mês (3 primeiros meses), R$ 600/mês (após 3º mês)
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {quote.selectedServices.includes("posts") && (
                  <motion.div
                    key="posts-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm space-y-4 overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      📸 Posts
                    </h3>
                    <div className="space-y-2">
                      <label className="space-y-2">
                        <p className="text-foreground/80">
                          Quantos posts (Carrossel/Imagem) você precisa por mês?
                        </p>
                        <div className="flex items-center gap-4">
                          <Slider
                            value={[quote.postsPerMonth]}
                            onValueChange={([value]) => setQuote(prev => ({ ...prev, postsPerMonth: value }))}
                            min={1}
                            max={30}
                            step={1}
                            className="flex-1"
                          />
                          <motion.span
                            key={quote.postsPerMonth}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="text-2xl font-bold text-primary min-w-[60px] text-center"
                          >
                            {quote.postsPerMonth}
                          </motion.span>
                        </div>
                      </label>
                      <div className="text-sm text-foreground/70 pl-2 border-l-2 border-primary/50">
                        Valor: R$ {(quote.postsPerMonth * 50).toFixed(2)}/mês
                      </div>
                    </div>
                  </motion.div>
                )}

                {quote.selectedServices.includes("reels") && (
                  <motion.div
                    key="reels-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm space-y-2 overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      🎬 Edição de Reels
                    </h3>
                    <p className="text-foreground/80">
                      A edição de Reels é um serviço complexo. O valor será enviado <strong>sob consulta</strong> após análise do material.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );

      case 3:
        const monthlyTotal = calculateMonthlyTotal();
        const oneTimeTotal = calculateOneTimeTotal();

        return (
          <motion.div
            key="step-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Revise sua Cotação
              </h2>
              <p className="text-foreground/70 text-lg">
                Confira o resumo dos serviços selecionados
              </p>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {monthlyTotal > 0 && (
                  <motion.div
                    key="monthly-summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-xl border border-primary/30 bg-primary/5 backdrop-blur-sm space-y-4"
                  >
                    <h3 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-3">
                      💰 Pagamentos Mensais
                    </h3>
                    <div className="space-y-3">
                      {quote.selectedServices.includes("site") && (
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/80">Aluguel de Site</span>
                          <span className="font-semibold text-foreground">R$ 150,00</span>
                        </div>
                      )}
                      {quote.selectedServices.includes("googleAds") && (
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/80">Google Ads ({quote.adsMonths} meses)</span>
                          <span className="font-semibold text-foreground">
                            R$ {((Math.min(quote.adsMonths, 3) * 300 + Math.max(0, quote.adsMonths - 3) * 500) / quote.adsMonths).toFixed(2)}
                          </span>
                        </div>
                      )}
                      {quote.selectedServices.includes("metaAds") && (
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/80">Meta Ads ({quote.adsMonths} meses)</span>
                          <span className="font-semibold text-foreground">
                            R$ {((Math.min(quote.adsMonths, 3) * 400 + Math.max(0, quote.adsMonths - 3) * 600) / quote.adsMonths).toFixed(2)}
                          </span>
                        </div>
                      )}
                      {quote.selectedServices.includes("posts") && (
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/80">Posts ({quote.postsPerMonth} unidades)</span>
                          <span className="font-semibold text-foreground">R$ {(quote.postsPerMonth * 50).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                      <span className="text-xl font-bold text-foreground">Total Mensal (Estimado)</span>
                      <span className="text-2xl font-bold text-primary">
                        R$ <AnimatedCounter value={monthlyTotal} />
                      </span>
                    </div>
                  </motion.div>
                )}

                {oneTimeTotal > 0 && (
                  <motion.div
                    key="onetime-summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-4"
                  >
                    <h3 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-3">
                      🎨 Pagamentos Únicos
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/80">Branding Completo</span>
                      <span className="text-xl font-bold text-foreground">R$ {oneTimeTotal.toFixed(2)}</span>
                    </div>
                  </motion.div>
                )}

                {quote.selectedServices.includes("reels") && (
                  <motion.div
                    key="consult-summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="p-8 rounded-xl border border-warning/30 bg-warning/5 backdrop-blur-sm space-y-4"
                  >
                    <h3 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-3">
                      📋 Serviços a Consultar
                    </h3>
                    <div className="text-foreground/80">
                      • Edição de Reels
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-center pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 gap-3"
                  onClick={handleSendWhatsApp}
                >
                  <Send className="h-5 w-5" />
                  Receber Cotação no WhatsApp
                </Button>
              </motion.div>
              <p className="text-sm text-foreground/60 mt-4">
                Clique para enviar sua cotação e receber um atendimento personalizado
              </p>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3].map(step => (
              <motion.div
                key={step}
                initial={false}
                animate={{
                  width: step === currentStep ? 48 : 32,
                  backgroundColor: step === currentStep
                    ? 'hsl(var(--primary))'
                    : step < currentStep
                    ? 'hsl(var(--primary) / 0.5)'
                    : 'hsl(var(--foreground) / 0.1)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-2 rounded-full"
              />
            ))}
          </div>
          <p className="text-center text-sm text-foreground/60">
            Passo {currentStep} de 3
          </p>
        </motion.div>

        <div className="mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-between gap-4 max-w-2xl mx-auto"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-5 w-5" />
            Anterior
          </Button>

          {currentStep < 3 ? (
            <Button
              size="lg"
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceed()}
              className="gap-2"
            >
              Próximo
              <ChevronRight className="h-5 w-5" />
            </Button>
          ) : (
            <div className="flex-1" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Cotacao;
