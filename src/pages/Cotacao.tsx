import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

type Service = "website" | "branding" | "googleAds" | "metaAds" | "posts" | "reels";

interface SelectedServices {
  website: boolean;
  branding: boolean;
  googleAds: boolean;
  metaAds: boolean;
  posts: boolean;
  reels: boolean;
}

const Cotacao = () => {
  const { texts, prices, currencySymbol } = useLocale();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({
    website: false,
    branding: false,
    googleAds: false,
    metaAds: false,
    posts: false,
    reels: false,
  });

  const [googleAdsMonths, setGoogleAdsMonths] = useState(3);
  const [metaAdsMonths, setMetaAdsMonths] = useState(3);
  const [postsPerMonth, setPostsPerMonth] = useState(1);

  const hasSelectedServices = Object.values(selectedServices).some(Boolean);

  const toggleService = (service: Service) => {
    setSelectedServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const calculateGoogleAdsCost = (months: number) => {
    if (months <= 3) {
      return months * prices.googleAdsBase;
    }
    return 3 * prices.googleAdsBase + (months - 3) * prices.googleAdsPro;
  };

  const calculateMetaAdsCost = (months: number) => {
    if (months <= 3) {
      return months * prices.metaAdsBase;
    }
    return 3 * prices.metaAdsBase + (months - 3) * prices.metaAdsPro;
  };

  const calculateMonthlyTotal = () => {
    let total = 0;
    if (selectedServices.website) total += prices.site;
    if (selectedServices.googleAds) total += calculateGoogleAdsCost(googleAdsMonths) / googleAdsMonths;
    if (selectedServices.metaAds) total += calculateMetaAdsCost(metaAdsMonths) / metaAdsMonths;
    if (selectedServices.posts) total += postsPerMonth * prices.post;
    return total;
  };

  const calculateOneTimeTotal = () => {
    let total = 0;
    if (selectedServices.branding) total += prices.branding;
    return total;
  };

  const formatPrice = (value: number) => {
    return `${currencySymbol} ${value.toFixed(2).replace('.', ',')}`;
  };

  const replaceTemplate = (template: string, replacements: Record<string, string>) => {
    return template.replace(/\{(\w+)\}/g, (_, key) => replacements[key] || '');
  };

  const generateWhatsAppMessage = () => {
    let message = texts.whatsappMessage;

    const monthlyItems: string[] = [];
    if (selectedServices.website) {
      monthlyItems.push(`- ${texts.websiteService}: ${formatPrice(prices.site)}`);
    }
    if (selectedServices.googleAds) {
      const avgCost = calculateGoogleAdsCost(googleAdsMonths) / googleAdsMonths;
      monthlyItems.push(`- ${replaceTemplate(texts.googleAdsService, { months: googleAdsMonths.toString() })}: ${formatPrice(avgCost)}`);
    }
    if (selectedServices.metaAds) {
      const avgCost = calculateMetaAdsCost(metaAdsMonths) / metaAdsMonths;
      monthlyItems.push(`- ${replaceTemplate(texts.metaAdsService, { months: metaAdsMonths.toString() })}: ${formatPrice(avgCost)}`);
    }
    if (selectedServices.posts) {
      const postsCost = postsPerMonth * prices.post;
      monthlyItems.push(`- ${replaceTemplate(texts.postsService, { quantity: postsPerMonth.toString() })}: ${formatPrice(postsCost)}`);
    }

    if (monthlyItems.length > 0) {
      message += texts.whatsappMonthly + monthlyItems.join('\n');
    }

    const oneTimeItems: string[] = [];
    if (selectedServices.branding) {
      oneTimeItems.push(`- ${texts.brandingService}: ${formatPrice(prices.branding)}`);
    }

    if (oneTimeItems.length > 0) {
      message += texts.whatsappOneTime + oneTimeItems.join('\n');
    }

    if (selectedServices.reels) {
      message += texts.whatsappConsult + `- ${texts.reelsService}`;
    }

    if (monthlyItems.length > 0) {
      message += texts.whatsappTotal + formatPrice(calculateMonthlyTotal());
    }

    return encodeURIComponent(message);
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511996242812?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {texts.pageTitle}
          </h1>
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === currentStep
                    ? "w-12 bg-primary"
                    : step < currentStep
                    ? "w-8 bg-primary/60"
                    : "w-8 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{texts.step1Title}</h2>
                <p className="text-muted-foreground">{texts.step1Subtitle}</p>
              </div>

              <div className="space-y-4">
                {[
                  { id: "website" as Service, label: texts.serviceWebsite },
                  { id: "branding" as Service, label: texts.serviceBranding },
                  { id: "googleAds" as Service, label: texts.serviceGoogleAds },
                  { id: "metaAds" as Service, label: texts.serviceMetaAds },
                  { id: "posts" as Service, label: texts.servicePosts },
                  { id: "reels" as Service, label: texts.serviceReels },
                ].map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedServices[service.id]
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Checkbox
                        checked={selectedServices[service.id]}
                        onCheckedChange={() => toggleService(service.id)}
                      />
                      <span className="flex-1 font-medium">{service.label}</span>
                      {selectedServices[service.id] && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                    </label>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!hasSelectedServices}
                className="w-full"
                size="lg"
              >
                {texts.buttonNext}
              </Button>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{texts.step2Title}</h2>
                <p className="text-muted-foreground">{texts.step2Subtitle}</p>
              </div>

              <div className="space-y-6">
                {selectedServices.website && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-2">{texts.serviceWebsite}</h3>
                    <p className="text-sm text-muted-foreground">
                      {replaceTemplate(texts.websiteInfo, { price: formatPrice(prices.site) })}
                    </p>
                  </motion.div>
                )}

                {selectedServices.branding && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-2">{texts.serviceBranding}</h3>
                    <p className="text-sm text-muted-foreground">
                      {replaceTemplate(texts.brandingInfo, { price: formatPrice(prices.branding) })}
                    </p>
                  </motion.div>
                )}

                {selectedServices.googleAds && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-3">{texts.serviceGoogleAds}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {texts.adsMonthsLabel}
                        </label>
                        <Slider
                          value={[googleAdsMonths]}
                          onValueChange={([value]) => setGoogleAdsMonths(value)}
                          min={3}
                          max={12}
                          step={1}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>3 {texts.adsMonthsMin}</span>
                          <span className="font-semibold text-foreground">
                            {googleAdsMonths} {googleAdsMonths === 1 ? "mês" : "meses"}
                          </span>
                          <span>12 max</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {replaceTemplate(texts.googleAdsPricing, {
                          priceBase: formatPrice(prices.googleAdsBase),
                          pricePro: formatPrice(prices.googleAdsPro),
                        })}
                      </p>
                      <p className="text-sm font-semibold">
                        {texts.monthlyTotal}: {formatPrice(calculateGoogleAdsCost(googleAdsMonths) / googleAdsMonths)}
                      </p>
                    </div>
                  </motion.div>
                )}

                {selectedServices.metaAds && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-3">{texts.serviceMetaAds}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {texts.adsMonthsLabel}
                        </label>
                        <Slider
                          value={[metaAdsMonths]}
                          onValueChange={([value]) => setMetaAdsMonths(value)}
                          min={3}
                          max={12}
                          step={1}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>3 {texts.adsMonthsMin}</span>
                          <span className="font-semibold text-foreground">
                            {metaAdsMonths} {metaAdsMonths === 1 ? "mês" : "meses"}
                          </span>
                          <span>12 max</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {replaceTemplate(texts.metaAdsPricing, {
                          priceBase: formatPrice(prices.metaAdsBase),
                          pricePro: formatPrice(prices.metaAdsPro),
                        })}
                      </p>
                      <p className="text-sm font-semibold">
                        {texts.monthlyTotal}: {formatPrice(calculateMetaAdsCost(metaAdsMonths) / metaAdsMonths)}
                      </p>
                    </div>
                  </motion.div>
                )}

                {selectedServices.posts && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-3">{texts.servicePosts}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {texts.postsLabel}
                        </label>
                        <Slider
                          value={[postsPerMonth]}
                          onValueChange={([value]) => setPostsPerMonth(value)}
                          min={1}
                          max={30}
                          step={1}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>1 min</span>
                          <span className="font-semibold text-foreground">
                            {postsPerMonth} {postsPerMonth === 1 ? "post" : "posts"}
                          </span>
                          <span>30 max</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {replaceTemplate(texts.postsPricing, { price: formatPrice(prices.post) })}
                      </p>
                      <p className="text-sm font-semibold">
                        {texts.monthlyTotal}: {formatPrice(postsPerMonth * prices.post)}
                      </p>
                    </div>
                  </motion.div>
                )}

                {selectedServices.reels && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-lg border bg-card"
                  >
                    <h3 className="font-semibold mb-2">{texts.serviceReels}</h3>
                    <p className="text-sm text-muted-foreground">{texts.reelsInfo}</p>
                  </motion.div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  {texts.buttonBack}
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="flex-1" size="lg">
                  {texts.buttonNext}
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{texts.step3Title}</h2>
                <p className="text-muted-foreground">{texts.step3Subtitle}</p>
              </div>

              <div className="space-y-6">
                {/* Pagamentos Mensais */}
                {(selectedServices.website ||
                  selectedServices.googleAds ||
                  selectedServices.metaAds ||
                  selectedServices.posts) && (
                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {texts.monthlyPayments}
                    </h3>
                    <div className="space-y-3">
                      {selectedServices.website && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{texts.websiteService}</span>
                          <span className="font-semibold">{formatPrice(prices.site)}</span>
                        </div>
                      )}
                      {selectedServices.googleAds && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            {replaceTemplate(texts.googleAdsService, { months: googleAdsMonths.toString() })}
                          </span>
                          <span className="font-semibold">
                            {formatPrice(calculateGoogleAdsCost(googleAdsMonths) / googleAdsMonths)}
                          </span>
                        </div>
                      )}
                      {selectedServices.metaAds && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            {replaceTemplate(texts.metaAdsService, { months: metaAdsMonths.toString() })}
                          </span>
                          <span className="font-semibold">
                            {formatPrice(calculateMetaAdsCost(metaAdsMonths) / metaAdsMonths)}
                          </span>
                        </div>
                      )}
                      {selectedServices.posts && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            {replaceTemplate(texts.postsService, { quantity: postsPerMonth.toString() })}
                          </span>
                          <span className="font-semibold">
                            {formatPrice(postsPerMonth * prices.post)}
                          </span>
                        </div>
                      )}
                      <div className="pt-3 border-t flex justify-between items-center">
                        <span className="font-semibold">{texts.monthlyTotal}</span>
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(calculateMonthlyTotal())}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pagamentos Únicos */}
                {selectedServices.branding && (
                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {texts.oneTimePayments}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{texts.brandingService}</span>
                      <span className="font-semibold">{formatPrice(prices.branding)}</span>
                    </div>
                  </div>
                )}

                {/* Serviços a Consultar */}
                {selectedServices.reels && (
                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {texts.consultServices}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{texts.reelsService}</span>
                      <span className="font-semibold text-muted-foreground">
                        A consultar
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep(2)}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  {texts.buttonBack}
                </Button>
                <Button onClick={handleSendWhatsApp} className="flex-1" size="lg">
                  {texts.buttonSendWhatsApp}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cotacao;
