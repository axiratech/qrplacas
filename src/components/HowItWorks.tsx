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
    <section id="como-funciona" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
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

        <div className="grid gap-8 md:grid-cols-3 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-in group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-muted/50 transition-all hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-lg font-bold text-primary border-2 border-primary/30">
                  {index + 1}
                </div>
                
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Time badges */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-dark text-xs font-semibold">
                    {index === 0 && "3 min"}
                    {index === 1 && "Modernidade"}
                    {index === 2 && "Pronto!"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
