import { Fraunces, Khula, Roboto } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fraunces'
})

const khula = Khula({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--font-khula'
})

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--font-roboto'
})


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
      <body
        className={`${fraunces.variable} ${khula.variable} ${roboto.variable} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
