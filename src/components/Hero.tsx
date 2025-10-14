import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import placaAntiga from "@/assets/placa-volto-ja-antiga.png";
import qrPlaca from "@/assets/qr-placa.png";

export const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Solução Digital para Seu Negócio
            </div>
            
            <h1 className="font-bold leading-tight">
              Transforme sua antiga placa de{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                "Volto Já"
              </span>{" "}
              em uma experiência digital
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Com a <span className="font-semibold text-foreground">QR Placa</span>, seus clientes acessam todas as informações do seu negócio com apenas um toque.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={scrollToPlans}
                className="group gap-2 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all"
              >
                Escolher meu plano
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Images Comparison */}
          <div className="animate-scale-in relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                  <img
                    src={placaAntiga}
                    alt="Placa antiga de volto já"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                    Antes
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl shadow-xl ring-2 ring-primary/20 aspect-[3/4]">
                  <img
                    src={qrPlaca}
                    alt="QR Placa moderna"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                    Depois
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
