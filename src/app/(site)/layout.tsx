
import "../globals.css";
import { NAVBAR_QUERY } from '@/sanity/queries';
import { client } from '@/sanity/lib/client';
import type { Navbar as NavbarType } from '@/sanity/types'
import Navbar from '@/components/Navbar';
import AOSInit from '@/components/AOSInit';
import { Toaster } from "@/components/ui/sonner";

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
                <Navbar data={navbarData} />
                <main>
                    {children}
                <Toaster />
                </main>
        </>
    );
}
