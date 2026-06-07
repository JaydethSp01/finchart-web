export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/cliente", label: "Clientes" }, { href: "/factura", label: "Facturas" }, { href: "/impuesto", label: "Impuestos" }, { href: "/pago", label: "Pagos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "FinChart", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="FinChart">{children}</ProtectedShell>
      </body>
    </html>
  );
}
