import { Fraunces, Khula, Roboto } from 'next/font/google';
import "../globals.css";
import { NAVBAR_QUERY } from '@/sanity/queries';
import { client } from '@/sanity/lib/client';
import type { Navbar as NavbarType } from '@/sanity/types'
import Navbar from '@/components/Navbar';
import AOSInit from '@/components/AOSInit';

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

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navbarData = await client.fetch<NavbarType>(
        NAVBAR_QUERY,
        {},
        { next: { revalidate: 60 } }
    )

    return (
        <>
            <AOSInit />
            <body
                className={`${fraunces.variable} ${khula.variable} ${roboto.variable} antialiased`}
            >
                <Navbar data={navbarData} />
                <main>
                    {children}
                </main>
            </body>
        </>
    );
}
