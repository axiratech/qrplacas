import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export const FinalCTA = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const link = document.createElement('a');
    link.href = `https://wa.me/551192173292?text=${encodedMessage}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-bold leading-tight">
            Não fique para trás.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Digitalize seu negócio hoje.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Junte-se a <span className="font-bold text-primary">500+ negócios</span> que já modernizaram seu atendimento com QR Placas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={() => openWhatsApp("Olá. Me interessei pelo QR Placa TOP. Quero mais informações")}
              className="group gap-2 bg-gradient-to-r from-secondary to-primary hover:opacity-90 shadow-2xl hover:shadow-primary/50 transition-all text-lg px-10 py-7 relative overflow-hidden"
            >
              <span className="relative z-10"> Plano Top (R$ 99)</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
            </Button>
            <Button 
              size="lg" 
              onClick={() => openWhatsApp("Olá. Me interessei pelo QR Placa PRO. Quero mais informações")}
              variant="outline" 
              className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-10 py-7"
            >
              Ir Pro com Desconto (R$ 390)
            </Button>
          </div>
        </div>
      </div>
    </section>;
};