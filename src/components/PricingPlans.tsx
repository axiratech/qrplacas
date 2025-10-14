import { useState } from "react";
import { Check, Sparkles, Crown, ZoomIn, Info } from "lucide-react";
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

  return (
    <section id="planos" className="py-20 md:py-32 bg-muted/30">
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
              className={`animate-fade-in relative overflow-hidden ${
                plan.popular ? "border-primary shadow-xl ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary px-6 py-1.5 text-sm font-semibold text-primary-foreground rounded-bl-lg">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="space-y-4 pb-8">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${plan.color}/10`}>
                    <plan.icon className={`h-6 w-6 text-${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>
                
                <CardDescription className="text-base">{plan.description}</CardDescription>
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
                  <div className="grid grid-cols-2 gap-3">
                    {plan.images.map((img, i) => (
                      <div key={i} className="space-y-2">
                        <div 
                          className="relative overflow-hidden rounded-lg border border-border group cursor-pointer"
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
                        </div>
                        <p className="text-xs text-center text-muted-foreground">
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

              <CardFooter>
                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark"
                      : "bg-secondary hover:bg-secondary-light"
                  }`}
                >
                  {plan.buttonText}
                </Button>
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
