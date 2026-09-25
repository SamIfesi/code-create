'use client';

import Link from 'next/link';
import {useState} from 'react'
import Logo from '@icons/Logo';
import { Hambuger } from '@icons/NavBtn';
import { PRIMARY_LINKS } from '@libs/utils';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-w/90 backdrop-blur-md shadow-sm border-b border-border">
        <div className="mx-auto max-w-7xl w-full px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo className="h-6 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {PRIMARY_LINKS?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className="text-xs font-medium font-plusJakartaSans text-primary-t transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:text-secondary-t text-primary-t transition-colors md:hidden"
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Hambuger />
          </button>
          <button className="hidden md:block rounded-md bg-accent px-5 py-2.5 text-xs font-semibold font-outfit text-primary-w shadow-sm hover:bg-accent/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
            Pantner with Us
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={()=>setMobileOpen(false)}/>
    </>
  );
}
