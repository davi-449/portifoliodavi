// Preços em BRL
export const BRL_PRICES = {
  site: 150,
  branding: 300,
  googleAdsBase: 300,
  googleAdsPro: 500,
  metaAdsBase: 400,
  metaAdsPro: 600,
  post: 50,
};

// Preços em USD
export const USD_PRICES = {
  site: 75,
  branding: 150,
  googleAdsBase: 150,
  googleAdsPro: 250,
  metaAdsBase: 200,
  metaAdsPro: 300,
  post: 25,
};

// Textos em Português
export const PT_TEXTS = {
  // Navegação e Cabeçalho
  pageTitle: "Simulador de Cotação",
  
  // Passo 1
  step1Title: "Quais serviços você precisa?",
  step1Subtitle: "Selecione todos os serviços desejados",
  serviceWebsite: "Aluguel de Site (Landing Page)",
  serviceBranding: "Branding (Identidade Visual)",
  serviceGoogleAds: "Marketing Digital (Google Ads)",
  serviceMetaAds: "Marketing Digital (Meta Ads)",
  servicePosts: "Social Media (Posts Avulsos)",
  serviceReels: "Social Media (Edição de Reels)",
  buttonNext: "Próximo",
  buttonBack: "Voltar",
  
  // Passo 2
  step2Title: "Configure seus Serviços",
  step2Subtitle: "Ajuste os detalhes de cada serviço selecionado",
  websiteInfo: "Nosso plano de aluguel de site é de {price}/mês. (Contrato mínimo de 12 meses).",
  brandingInfo: "Nosso pacote de Branding completo (Logo, Identidade Visual, etc.) é um pagamento único de {price}.",
  adsMonthsLabel: "Por quantos meses você planeja manter o serviço?",
  adsMonthsMin: "mínimo",
  googleAdsPricing: "Google Ads: {priceBase}/mês (3 primeiros meses), {pricePro}/mês (após 3º mês).",
  metaAdsPricing: "Meta Ads: {priceBase}/mês (3 primeiros meses), {pricePro}/mês (após 3º mês).",
  postsLabel: "Quantos posts (Carrossel/Imagem) você precisa por mês?",
  postsPricing: "{price} por post",
  reelsInfo: "A edição de Reels é um serviço complexo. O valor será enviado sob consulta após análise do material.",
  
  // Passo 3
  step3Title: "Revise sua Cotação",
  step3Subtitle: "Confira o resumo dos serviços selecionados",
  monthlyPayments: "Pagamentos Mensais",
  oneTimePayments: "Pagamentos Únicos",
  consultServices: "Serviços a Consultar",
  websiteService: "Aluguel de Site",
  brandingService: "Branding Completo",
  googleAdsService: "Google Ads ({months} meses)",
  metaAdsService: "Meta Ads ({months} meses)",
  postsService: "Posts ({quantity} unidades)",
  reelsService: "Edição de Reels",
  monthlyTotal: "Total Mensal (Estimado)",
  buttonSendWhatsApp: "Receber Cotação no WhatsApp",
  
  // WhatsApp
  whatsappMessage: "Olá Impulso Web! Gostaria de uma cotação para os seguintes serviços:\n\n",
  whatsappMonthly: "PAGAMENTOS MENSAIS:\n",
  whatsappOneTime: "\nPAGAMENTOS ÚNICOS:\n",
  whatsappConsult: "\nSERVIÇOS A CONSULTAR:\n",
  whatsappTotal: "\nTOTAL MENSAL (ESTIMADO): ",
};

// Textos em Inglês
export const EN_TEXTS = {
  // Navigation and Header
  pageTitle: "Quote Simulator",
  
  // Step 1
  step1Title: "Which services do you need?",
  step1Subtitle: "Select all desired services",
  serviceWebsite: "Website Rental (Landing Page)",
  serviceBranding: "Branding (Visual Identity)",
  serviceGoogleAds: "Digital Marketing (Google Ads)",
  serviceMetaAds: "Digital Marketing (Meta Ads)",
  servicePosts: "Social Media (Individual Posts)",
  serviceReels: "Social Media (Reels Editing)",
  buttonNext: "Next",
  buttonBack: "Back",
  
  // Step 2
  step2Title: "Configure Your Services",
  step2Subtitle: "Adjust the details of each selected service",
  websiteInfo: "Our website rental plan is {price}/month. (12-month minimum contract).",
  brandingInfo: "Our complete Branding package (Logo, Visual Identity, etc.) is a one-time payment of {price}.",
  adsMonthsLabel: "How many months do you plan to maintain the service?",
  adsMonthsMin: "minimum",
  googleAdsPricing: "Google Ads: {priceBase}/month (first 3 months), {pricePro}/month (after 3rd month).",
  metaAdsPricing: "Meta Ads: {priceBase}/month (first 3 months), {pricePro}/month (after 3rd month).",
  postsLabel: "How many posts (Carousel/Image) do you need per month?",
  postsPricing: "{price} per post",
  reelsInfo: "Reels editing is a complex service. The price will be sent upon consultation after material analysis.",
  
  // Step 3
  step3Title: "Review Your Quote",
  step3Subtitle: "Check the summary of selected services",
  monthlyPayments: "Monthly Payments",
  oneTimePayments: "One-Time Payments",
  consultServices: "Services to Consult",
  websiteService: "Website Rental",
  brandingService: "Complete Branding",
  googleAdsService: "Google Ads ({months} months)",
  metaAdsService: "Meta Ads ({months} months)",
  postsService: "Posts ({quantity} units)",
  reelsService: "Reels Editing",
  monthlyTotal: "Monthly Total (Estimated)",
  buttonSendWhatsApp: "Get Quote on WhatsApp",
  
  // WhatsApp
  whatsappMessage: "Hello Impulso Web! I would like a quote for the following services:\n\n",
  whatsappMonthly: "MONTHLY PAYMENTS:\n",
  whatsappOneTime: "\nONE-TIME PAYMENTS:\n",
  whatsappConsult: "\nSERVICES TO CONSULT:\n",
  whatsappTotal: "\nMONTHLY TOTAL (ESTIMATED): ",
};

export type Locale = 'pt-BR' | 'en-US';

export interface LocaleConfig {
  locale: Locale;
  currencySymbol: string;
  currencyCode: string;
  prices: typeof BRL_PRICES;
  texts: typeof PT_TEXTS;
}

export const PT_CONFIG: LocaleConfig = {
  locale: 'pt-BR',
  currencySymbol: 'R$',
  currencyCode: 'BRL',
  prices: BRL_PRICES,
  texts: PT_TEXTS,
};

export const EN_CONFIG: LocaleConfig = {
  locale: 'en-US',
  currencySymbol: '$',
  currencyCode: 'USD',
  prices: USD_PRICES,
  texts: EN_TEXTS,
};
