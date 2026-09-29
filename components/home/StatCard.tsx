'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@hooks/useInView';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function StatCard({
  value,
  suffix = '',
  label,
  delay = 0,
  className = '',
}: StatCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const duration = 1100;

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [inView, value, delay]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`rounded-2xl bg-secondary/40 p-8 flex flex-col justify-between min-h-50 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      <span className="font-outfit font-extrabold text-4xl sm:text-5xl text-primary-t tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="font-plusJakartaSans text-primary-t/60">{label}</span>
    </div>
  );
}
