'use client'

import Logo from './Logo'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'
import Link from 'next/link'
import type { Navbar as NavbarType } from '@/sanity/types'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { urlFor } from '@/sanity/lib/image'

interface Props {
  data: NavbarType
}

export default function Navbar({ data }: Props) {

  const [isOpen, setIsOpen ] = useState(false)

  const { logo, links, button:ctaButton } = data;
  const logoUrl = urlFor(logo);

  return (
    <header className='bg-transparent md:absolute top-0 left-0 right-0 w-full flex py-6 fixed z-10'>
      <NavigationMenu className='items-center justify-evenly grow w-full max-w-none'>
        {/* Logo */}
        <NavigationMenuLink asChild className=''>
          <Logo logoUrl={logoUrl} />
        </NavigationMenuLink>

        {/* Links */}
        <NavigationMenuList className='gap-6 hidden md:flex'>
          {links?.map( link => (
            <Link key={link.label} href={link.url} className='p-2 uppercase'>{link.label}</Link>
          ))}
        </NavigationMenuList>

        <Button asChild className='bg-white text-black flex-none capitalize px-8 py-6 hidden md:flex' variant='customPrimary'>
          <a href={ctaButton?.url}>{ctaButton?.label}</a>
        </Button>

        {/* Movile menu */}
        <div className='block md:hidden'>
          <Sheet open={isOpen} onOpenChange={()=> setIsOpen(!isOpen)}>
            <SheetTrigger className='text-white' onClick={()=> setIsOpen(!isOpen)}><Menu size={40}/></SheetTrigger>
            <SheetContent className='pt-10'>
              <SheetHeader>
                <SheetTitle className='text-black! text-2xl text-center'>Menu</SheetTitle>
              </SheetHeader>
              <NavigationMenuList className='flex flex-col gap-4'>
                {links?.map( link => (
                  <Link key={link.label} href={link.url} onClick={()=> setIsOpen(!isOpen)} className='p-2 uppercase text-black!'>{link.label}</Link>
                ))}
                
              </NavigationMenuList>
              <SheetFooter>
                <Button asChild className='bg-black text-white! flex-none capitalize px-8 py-6' variant='customPrimary'>
                  <a href={ctaButton?.url}>{ctaButton?.label}</a>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>

    </header>
  )
}
