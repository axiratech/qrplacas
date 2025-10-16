import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, Clock, CreditCard, Palette, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    icon: Shield,
    question: "E se eu não gostar do resultado?",
    answer:
      "Garantia de 7 dias! Se não ficar satisfeito com o resultado, devolvemos 100% do seu dinheiro, sem perguntas. Sua satisfação é nossa prioridade.",
    priority: true,
  },
  {
    icon: CreditCard,
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! O plano Pro pode ser parcelado em até 10x sem juros. O plano Top é pagamento único de R$ 99,00.",
    priority: true,
  },
  {
    icon: Clock,
    question: "Quanto tempo leva para receber meu QRCode?",
    answer:
      "Após enviar suas informações e confirmar o pagamento, no plano Top você receberá seus arquivos em até 48 horas úteis por e-mail. No Plano PRO em até 5 dias úteis, pois confeccionar o minisite demanda maior tempo",
  },
  {
    icon: Palette,
    question: "Posso fazer minha própria arte com o QRCode?",
    answer:
      "Sim! Enviamos o PNG com o QR Code gerado e você pode fazer a arte da placa do jeito que quiser. Você tem total liberdade para adaptar ao visual do seu negócio.",
  },
  {
    icon: HelpCircle,
    question: "Como recebo o arquivo?",
    answer:
      "Por e-mail, você receberá o PDF com a arte pronta para imprimir em A4 e o PNG com o arquivo do QR Code gerado para personalização.",
  },
  {
    icon: HelpCircle,
    question: "Posso atualizar depois?",
    answer:
      "Sim! No plano Top, cada atualização custa R$ 20,00. No plano Pro, você tem 3 meses de atualizações gratuitas incluídas, depois R$ 20,00 por atualização.",
  },
  {
    icon: HelpCircle,
    question: "Preciso de conhecimento técnico para usar?",
    answer:
      "Não! Tudo é muito simples. Você envia suas informações, recebe os arquivos prontos e é só imprimir ou encomendar a impressão profissional.",
  },
];

export const FAQ = () => {
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
    <section id="faq" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-bold">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre QR Placas
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`rounded-lg border-2 bg-card px-6 shadow-sm hover:shadow-lg transition-all ${
                  faq.priority 
                    ? "border-primary/30 bg-primary/5" 
                    : "border-border hover:border-primary/20"
                }`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      faq.priority ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <faq.icon className={`h-5 w-5 ${faq.priority ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className="font-bold text-base">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 pl-14 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Não encontrou sua dúvida?</h3>
            <p className="text-muted-foreground mb-4">
              Fale conosco no WhatsApp e tire todas as suas dúvidas
            </p>
            <Button 
              onClick={() => openWhatsApp("Olá, me interessei pelas QR Placas mas tenho dúvidas...")}
              className="bg-success hover:bg-success/90 text-white gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
