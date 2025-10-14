import { QrCode } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Logo e Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <QrCode className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">QR Placas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu negócio, digital e funcional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection("planos")}
                  className="hover:text-primary transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 font-semibold">Suporte</h4>
            <p className="text-sm text-muted-foreground">
              Dúvidas? Entre em contato conosco para mais informações sobre nossos serviços.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} QR Placas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
