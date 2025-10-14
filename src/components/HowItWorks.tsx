import { Send, Sparkles, Printer } from "lucide-react";

const steps = [
  {
    icon: Send,
    title: "Envie suas informações",
    description: "Logo, horários, redes sociais e informações do seu negócio",
  },
  {
    icon: Sparkles,
    title: "Receba seu QRCode",
    description: "Personalizado com a identidade do seu negócio",
  },
  {
    icon: Printer,
    title: "Imprima e use",
    description: "Arquivo pronto em PDF para impressão imediata",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-bold">
            Simples, rápido e{" "}
            <span className="bg-gradient-to-r from-secondary to-accent-dark bg-clip-text text-transparent">
              digital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Em apenas 3 passos, seu negócio terá uma presença digital moderna
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-in group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                
                <h3 className="mb-3 font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-secondary/50 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
