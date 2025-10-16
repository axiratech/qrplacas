import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import placaAntiga from "@/assets/placa-volto-ja-antiga.png";
import qrPlaca from "@/assets/qr-placa.png";
import logo from "@/assets/logo-qr-placas.png";

export const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="QR Placas" className="h-16 w-auto" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <Star className="h-4 w-4 fill-primary" />
              Solução Digital para Seu Negócio
            </div>
            
            <h1 className="font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Seu Negócio Sempre Presente,
              </span>{" "}
              Mesmo Quando Você Não Está
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Substitua placas antigas por <span className="font-semibold text-foreground">QR Codes modernos</span>. Seus clientes acessam tudo com um toque: horários, contato, redes sociais e muito mais. Seu negócio ativo 24/7.
            </p>

            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-lg border border-success/20">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Mais de 500 negócios digitalizados</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToPlans}
                className="group gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl hover:shadow-2xl transition-all text-lg px-8 relative overflow-hidden"
              >
                <span className="relative z-10">Ver Planos e Preços</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="gap-2 border-2 hover:bg-muted text-lg px-8"
              >
                Como Funciona
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 de satisfação</span>
            </div>
          </div>

          {/* Images Comparison */}
          <div className="animate-scale-in relative">
            {/* Animated arrow between images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div className="bg-background rounded-full p-3 shadow-xl border-2 border-primary/30 animate-pulse">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] border-2 border-destructive/20">
                  <img
                    src={placaAntiga}
                    alt="Placa antiga de volto já"
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive border border-destructive/20">
                    ❌ Antes
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary/30 aspect-[3/4] group">
                  <img
                    src={qrPlaca}
                    alt="QR Placa moderna"
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    NOVO
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success border border-success/20">
                    ✨ Depois
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
