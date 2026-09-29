'use client';

import type { ReactNode } from 'react';
import { useInView } from '@hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(once);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms',
        ['--reveal-y' as string]: `${y}px`,
      }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-(--reveal-y)'
      } ${className}`}
    >
      {children}
    </div>
  );
}
