'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@icons/Logo';
import { CloseMark } from '@icons/NavBtn';
import { PRIMARY_LINKS } from '@/libs/utils';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [prevOpen, setPrevOpen] = useState(open);
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setMounted(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    if (!open || !mounted) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [open, mounted]);

  useEffect(() => {
    if (open || !mounted) return;
    const timeout = setTimeout(() => setMounted(false), 350);
    return () => clearTimeout(timeout);
  }, [open, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const scrollY = window.scrollY;
    const body = document.body;

    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousWidth = body.style.width;
    const previousOverflow = body.style.overflow;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keyup', handleKey);

    return () => {
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.width = previousWidth;
      body.style.overflow = previousOverflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keyup', handleKey);
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      id="mobileNav"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={`fixed inset-0 z-50 flex h-dvh flex-col bg-primary-w overscroll-contain w-full transition-all duration-350 ease-in-out motion-reduce:transition-none motion-reduce:translate-x-0 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`flex items-center justify-between px-6 h-16 border-b border-border transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
        style={{ transitionDelay: visible ? '100ms' : '0ms' }}
      >
        <Logo className="h-10 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary-t transition-transform duration-200 hover:rotate-90"
          aria-label="Close menu"
        >
          <CloseMark />
        </button>
      </div>

      <nav
        className="flex flex-1 flex-col items-start justify-space-between px-6 py-12 h-50"
        aria-label="Primary"
      >
        {PRIMARY_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{ transitionDelay: visible ? `${140 + i * 60}ms` : '0ms' }}
            className={`font-main text-3xl text-primary-t transition-all duration-300 ease-out hover:text-accent py-2 motion-reduce:transition-none ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div
        className={`p-6 text-sm text-muted-t transition-all duration-300 border-t border-border ease-in-out motion-reduce:transition-none ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
        style={{ transitionDelay: visible ? '320ms' : '0ms' }}
      >
        <a href="mailto:hello@edmel.studio" className="hover:text-text-primary">
          hello@edmel.studio
        </a>
      </div>
    </div>
  );
}
