import { Fraunces, Khula } from 'next/font/google';
import "../globals.css";

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

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body
            className={`${fraunces.variable} ${khula.variable} antialiased`}
        >
            <main>
                {children}
                <div className="h-[700px]"></div>
            </main>
        </body>
    );
}
