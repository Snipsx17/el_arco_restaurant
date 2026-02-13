import { Fraunces, Khula } from 'next/font/google';
import "../globals.css";
import { NAVBAR_QUERY } from '@/sanity/queries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/helpers/imageUrlBuilder';
import type { Navbar as NavbarType } from '@/sanity/types'
import Navbar from '@/components/Navbar';

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
        <body
            className={`${fraunces.variable} ${khula.variable} antialiased`}
        >
            <Navbar data={navbarData} />
            <main>
                {children}
                <div className="h-[700px] text-white">{}</div>
            </main>
        </body>
    );
}
