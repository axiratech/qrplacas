import { Check, X } from "lucide-react";

const features = [
  { name: "QRCode personalizado", top: true, pro: true },
  { name: "Página simples com infos básicas", top: true, pro: false },
  { name: "Mini site funcional completo", top: false, pro: true },
  { name: "Arte pronta para impressão", top: true, pro: true },
  { name: "Arquivo QRCode em PNG para personalização", top: true, pro: true },
  { name: "Atualizações incluídas", top: false, pro: true, note: "3 meses" },
  { name: "Pagamento parcelado", top: false, pro: true },
];

export const Comparison = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-bold">Comparativo rápido</h2>
          <p className="text-lg text-muted-foreground">
            Veja lado a lado o que cada plano oferece
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left font-semibold">Recurso</th>
                <th className="py-4 px-4 text-center font-semibold bg-secondary/5 rounded-t-lg">
                  QR Placa Top
                </th>
                <th className="py-4 px-4 text-center font-semibold bg-primary/5 rounded-t-lg">
                  QR Placa Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-4 px-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center bg-secondary/5">
                    {feature.top ? (
                      <Check className="h-5 w-5 text-success mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      {feature.pro ? (
                        <Check className="h-5 w-5 text-success" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground" />
                      )}
                      {feature.note && feature.pro && (
                        <span className="text-xs text-muted-foreground">
                          ({feature.note})
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
