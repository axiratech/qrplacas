import { useState } from "react";
import { Check, Sparkles, Crown, ZoomIn, Info, Clock, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import paginaQrTop from "@/assets/pagina-qr-top.png";
import minisiteQrPro from "@/assets/minisite-qr-pro.png";
import placaPdfTop from "@/assets/placa-pdf-qr-top.png";
import placaPdfPro from "@/assets/placa-pdf-qr-pro.png";

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
      "Arquivo PDF (A4) pronto para imprimir",
      "Arquivo PNG do QRCode para personalização",
      "Atualizações futuras: R$ 30,00 por solicitação",
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
      "Arte otimizada com QRCode (A4) pronta para impressão",
      "Arquivo PNG do QRCode",
      "BRINDE: 3 meses de atualizações gratuitas",
      "Após isso, R$ 30,00 por atualização",
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

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/551192173292?text=${encodedMessage}`, '_blank');
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
                </div>
                
                <CardDescription className="text-base leading-relaxed">{plan.description}</CardDescription>
                
                {plan.popular && (
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
                      Os dados mostrados nas imagens são fictícios e apenas para fins ilustrativos.
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
