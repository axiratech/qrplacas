import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-bold">
            Dê o primeiro passo para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              digitalizar seu negócio
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Junte-se a centenas de negócios que já modernizaram seu atendimento com QR Placas
          </p>

          <Button
            size="lg"
            onClick={scrollToPlans}
            className="group gap-2 bg-primary hover:bg-primary-dark shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
          >
            Escolher meu plano agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
