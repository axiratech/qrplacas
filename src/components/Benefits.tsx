import { Zap, Users, Calendar, Award, TrendingUp, MessageCircle, Star } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Modernize seu ponto de atendimento",
    description: "Deixe para trás placas improvisadas e adote uma solução profissional",
    stat: "100%",
    statLabel: "Digital",
  },
  {
    icon: MessageCircle,
    title: "Conecte-se com seus clientes",
    description: "Facilite o acesso às suas informações e redes sociais",
    stat: "+80%",
    statLabel: "Mais contatos via WhatsApp",
  },
  {
    icon: Calendar,
    title: "Facilite o contato e os agendamentos",
    description: "WhatsApp, telefone e links direto na mão do cliente",
    stat: "3x",
    statLabel: "Aumento em agendamentos",
  },
  {
    icon: Star,
    title: "Transmita profissionalismo e inovação",
    description: "Mostre que seu negócio está na vanguarda digital",
    stat: "98%",
    statLabel: "Satisfação dos clientes",
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

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/30 bg-card p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-primary/10 to-transparent blur-2xl group-hover:from-primary/20 transition-all" />
                
                <div className="relative flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-xl leading-tight">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    
                    {/* Stats */}
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {benefit.stat}
                        </span>
                        <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
