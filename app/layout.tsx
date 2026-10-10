import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miga & Mesa | Café, cocina y buenas pausas",
  description: "Una landing de demostración para cafeterías y restaurantes: descubre el menú y prepara tu reserva por WhatsApp.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
