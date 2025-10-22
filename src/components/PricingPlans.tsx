import { useState } from "react";
import { Check, Sparkles, Crown, ZoomIn, Info, Clock, Shield, Lock, Ticket, Package, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import paginaQrTop from "@/assets/pagina-qr-top.png";
import minisiteQrPro from "@/assets/minisite-qr-pro.png";
import placaPdfTop from "@/assets/placa-pdf-qr-top.png";
import placaPdfPro from "@/assets/placa-pdf-qr-pro.png";

// Constantes da promoção
const PROMO_END_DATE = new Date('2025-12-31T23:59:59');
const PROMO_CODE = '25off';
const PROMO_DISCOUNT = 0.25; // 25%

// Verifica se a promoção está ativa
const isPromoActive = () => new Date() <= PROMO_END_DATE;

// Calcula preços promocionais para o plano PRO
const PRO_ORIGINAL_PRICE = 390;
const PRO_PROMO_PRICE = PRO_ORIGINAL_PRICE * (1 - PROMO_DISCOUNT); // R$ 292,50
const PRO_ORIGINAL_INSTALLMENT = 39;
const PRO_PROMO_INSTALLMENT = PRO_PROMO_PRICE / 10; // R$ 29,25

const plans = [
  {
    name: "QR Placa Top",
    price: "R$ 99",
    period: "pagamento único",
    description: "Ideal para quem quer praticidade e presença digital instantânea",
    icon: Sparkles,
    color: "secondary",
    features: [
      "Página simples com logo, horários, WhatsApp e redes sociais",
      "QRCode personalizado",
      "Arquivo PDF (A4) pronto para imprimir. Arte simples",
      "Arquivo PNG do QRCode para personalização",
      "Atualizações futuras: R$ 20,00 por solicitação",
    ],
    images: [
      { src: paginaQrTop, caption: "Exemplo de Página Simples" },
      { src: placaPdfTop, caption: "Exemplo de arquivo em PDF simples, pronto para ser impresso" },
    ],
    buttonText: "Quero o plano Top",
  },
  {
    name: "QR Placa Pro",
    price: "R$ 390",
    period: "parcelável",
    description: "Perfeita para quem quer uma presença digital completa",
    icon: Crown,
    color: "primary",
    popular: true,
    features: [
      "Mini site funcional com serviços, horários e botões de agendamento",
      "Arte profissional em PDF com QRCode (A4) pronta para impressão",
      "Arquivo PNG do QRCode para personalização",
      "BRINDE: 3 meses de atualizações gratuitas",
      "Após isso, R$ 20,00 por atualização",
    ],
    images: [
      { src: minisiteQrPro, caption: "Exemplo de minisite do plano Pro" },
      { src: placaPdfPro, caption: "Exemplo de arquivo em PDF pronto para ser impresso" },
    ],
    buttonText: "Quero o plano Pro",
  },
];

export const PricingPlans = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const promoActive = isPromoActive();

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const link = document.createElement('a');
    link.href = `https://wa.me/5511921763292?text=${encodedMessage}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="planos" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-10 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-bold">
            Escolha o plano{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              perfeito
            </span>{" "}
            para seu negócio
          </h2>
          <p className="text-lg text-muted-foreground">
            Dois planos completos para atender suas necessidades
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`animate-fade-in relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? "border-primary shadow-2xl ring-4 ring-primary/30 scale-105 lg:scale-110" 
                  : "shadow-lg hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary px-6 py-2 text-sm font-bold text-primary-foreground rounded-bl-lg shadow-lg animate-pulse">
                    🔥 MAIS ESCOLHIDO
                  </div>
                  {promoActive && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-destructive to-orange-500 px-4 py-2 text-sm font-bold text-white rounded-br-lg shadow-lg animate-pulse">
                      🎉 25% OFF ATÉ 31/12
                    </div>
                  )}
                  <div className="absolute -top-1 -right-1 h-32 w-32 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl -z-10" />
                  <div className="absolute -bottom-1 -left-1 h-32 w-32 bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl -z-10" />
                </>
              )}
              
              <CardHeader className="space-y-4 pb-8">
                <div className="flex items-center gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${
                    plan.popular ? "from-primary to-secondary" : "from-secondary/20 to-secondary/10"
                  }`}>
                    <plan.icon className={`h-7 w-7 ${plan.popular ? "text-white" : "text-secondary"}`} />
                  </div>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                </div>
                
                <div className="space-y-2">
                  {plan.popular && promoActive ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-muted-foreground line-through opacity-60">
                          {plan.price}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                          R$ {PRO_PROMO_PRICE.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-muted-foreground text-lg">/ {plan.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">ou apenas</span>
                        <span className="text-xl font-bold text-green-600">R$ {PRO_PROMO_INSTALLMENT.toFixed(2).replace('.', ',')}/mês</span>
                        <span className="text-sm text-muted-foreground">em 10x</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="line-through">R$ {PRO_ORIGINAL_INSTALLMENT}/mês</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-lg">/ {plan.period}</span>
                      </div>
                      {plan.popular && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">ou apenas</span>
                          <span className="text-xl font-bold text-primary">R$ 39/mês</span>
                          <span className="text-sm text-muted-foreground">em 10x</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                <CardDescription className="text-base leading-relaxed">{plan.description}</CardDescription>
                
                {plan.popular && promoActive && (
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-orange-600 shrink-0" />
                      <span className="text-sm font-bold text-orange-600">
                        💰 Use o cupom <span className="bg-orange-600 text-white px-2 py-0.5 rounded font-mono">{PROMO_CODE}</span> na compra
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>Válido até 31/12/2025</span>
                    </div>
                  </div>
                )}
                
                {plan.popular && !promoActive && (
                  <div className="bg-success/10 border border-success/30 rounded-lg p-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-success shrink-0" />
                    <span className="text-sm font-semibold text-success">
                      Economize R$ 90 em atualizações!
                    </span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      <Check className="h-5 w-5 shrink-0 text-success mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">📸 Exemplos do que você recebe:</p>
                  
                  {/* Card informativo digital */}
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <Package className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                          📦 O que você recebe (100% Digital):
                        </p>
                        <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                          <li>✅ QR Code personalizado (arquivo PNG)</li>
                          <li>✅ Página simples (Top) ou Minisite funcional (Pro)</li>
                          <li>✅ Arte em PDF (A4) pronta para impressão</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pt-2 border-t border-blue-200 dark:border-blue-800">
                      <Printer className="h-5 w-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-orange-800 dark:text-orange-200 font-medium">
                        ⚠️ Não realizamos a impressão física. Você recebe os arquivos prontos para imprimir onde preferir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {plan.images.map((img, i) => (
                      <div key={i} className="space-y-2">
                        <div 
                          className={`relative overflow-hidden rounded-lg group cursor-pointer border-2 transition-all ${
                            plan.popular ? "border-primary/30 hover:border-primary" : "border-secondary/30 hover:border-secondary"
                          }`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img.src}
                            alt={img.caption}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                            Preview
                          </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground leading-tight">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-start gap-2 pt-2">
                    <Info className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                    <p className="text-xs italic text-muted-foreground/80">
                      ⚠️ IMPORTANTE: Os dados mostrados são apenas ilustrativos. Nosso serviço é 100% digital - criamos o QR Code, a página/minisite e o arquivo PDF da arte pronta para impressão. Não realizamos a impressão física das placas.
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-4 pb-8">
                <Button
                  size="lg"
                  onClick={() => openWhatsApp(
                    plan.name === "QR Placa Top" 
                      ? "Olá. Me interessei pelo QR Placa TOP. Quero mais informações"
                      : promoActive
                        ? `Olá! Me interessei pelo QR Placa PRO com 25% OFF. Quero usar o cupom ${PROMO_CODE} para ter o desconto!`
                        : "Olá. Me interessei pelo QR Placa PRO. Quero mais informações"
                  )}
                  className={`w-full text-lg py-6 relative overflow-hidden group ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl"
                      : "bg-secondary hover:bg-secondary/90 shadow-lg"
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Button>
                
                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Satisfação Garantida</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock className="h-4 w-4 text-success" />
                    <span>Pagamento Seguro</span>
                  </div>
                  {plan.popular && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-primary font-semibold">Oferta por tempo limitado</span>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Image Zoom Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain max-h-[90vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-center font-medium">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
