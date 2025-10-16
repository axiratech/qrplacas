import { Instagram, Facebook, Shield } from "lucide-react";
import logo from "@/assets/logo-qr-placas.png";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-gradient-to-b from-muted/30 to-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 md:gap-12 mb-12">
          {/* Logo e Slogan */}
          <div className="space-y-4 md:col-span-1">
            <img src={logo} alt="QR Placas" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seu negócio, digital e funcional. Modernize seu atendimento com QR Codes inteligentes.
            </p>
            </div>
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
              Dúvidas? Entre em contato conosco para mais informações sobre nossos serviços. axiratech@gmail.com
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
