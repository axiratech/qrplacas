import { Zap, Users, Calendar, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Modernize seu ponto de atendimento",
    description: "Deixe para trás placas improvisadas e adote uma solução profissional",
  },
  {
    icon: Users,
    title: "Conecte-se com seus clientes",
    description: "Facilite o acesso às suas informações e redes sociais",
  },
  {
    icon: Calendar,
    title: "Facilite o contato e os agendamentos",
    description: "WhatsApp, telefone e links direto na mão do cliente",
  },
  {
    icon: Award,
    title: "Transmita profissionalismo e inovação",
    description: "Mostre que seu negócio está na vanguarda digital",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-bold">
            Por que escolher{" "}
            <span className="bg-gradient-to-r from-primary to-accent-dark bg-clip-text text-transparent">
              QR Placas
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforme a experiência dos seus clientes com tecnologia simples e eficaz
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
