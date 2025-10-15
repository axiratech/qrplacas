import { Star, Scissors, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    business: "Salão de Beleza",
    icon: Scissors,
    text: "Desde que coloquei a QR Placa, meus clientes sempre sabem quando estou disponível. Profissionalismo que faz diferença!",
    color: "primary",
  },
  {
    name: "Dr. Carlos Santos",
    business: "Clínica Odontológica",
    icon: Sparkles,
    text: "Meus pacientes adoraram a facilidade de acessar horários e agendar pelo WhatsApp. Modernidade e praticidade em um só lugar.",
    color: "secondary",
  },
  {
    name: "Tatiana Costa",
    business: "Estúdio de Tatuagem",
    icon: Heart,
    text: "A QR Placa transmite exatamente a imagem profissional que eu queria. Meu Instagram cresceu 40% desde que comecei a usar!",
    color: "accent-dark",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-bold">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de profissionais que transformaram seus negócios
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-fade-in hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                {/* Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${testimonial.color}/10`}>
                  <testimonial.icon className={`h-6 w-6 text-${testimonial.color}`} />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
