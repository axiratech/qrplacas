import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso personalizar o QRCode?",
    answer:
      "Sim! Enviamos o PNG com o QR Code gerado e você pode fazer a arte da placa do jeito que quiser. Você tem total liberdade para adaptar ao visual do seu negócio.",
  },
  {
    question: "Como recebo o arquivo?",
    answer:
      "Por e-mail, você receberá o PDF com a arte pronta para imprimir em A4 e o PNG com o arquivo do QR Code gerado para personalização.",
  },
  {
    question: "Posso atualizar depois?",
    answer:
      "Sim! No plano Top, cada atualização custa R$ 30,00. No plano Pro, você tem 3 meses de atualizações gratuitas incluídas, depois R$ 30,00 por atualização.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim, o plano Pro pode ser parcelado. O plano Top é apenas pagamento único de R$ 99,00.",
  },
  {
    question: "Quanto tempo leva para receber meu QRCode?",
    answer:
      "Após enviar suas informações e confirmar o pagamento, você receberá seus arquivos em até 48 horas úteis por e-mail.",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer:
      "Não! Tudo é muito simples. Você envia suas informações, recebe os arquivos prontos e é só imprimir ou encomendar a impressão profissional.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 md:py-32">
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
                className="rounded-lg border border-border bg-card px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
