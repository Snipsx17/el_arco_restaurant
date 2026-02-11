import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "El Arco Restaurante",
  description: "Restaurante acogedor con una cocina llena de sabores frescos, con magnifica terraza con vistas a la plaza del Casco Antiguo de Calpe. Una combinación encantadora para pasar las tardes de verano en un ambiente tranquilo y agradable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        {children}
    </html>
  );
}
