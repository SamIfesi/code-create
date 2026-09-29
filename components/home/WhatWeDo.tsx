'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Reveal from '@components/motion/Reveal';
import { ChevronLeft, ChevronRight } from '@icons/icons';

type Slide = {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

// Replace these with your real content when ready.
const SLIDES: Slide[] = [
  {
    category: 'Tech Talent Development',
    title: 'Tech Trainings',
    description:
      'From learning the fundamentals to building real projects, we make technology accessible, practical, and career-focused.',
    image: '/images/what-we-do/slide-1.png',
    alt: 'Learner listening during a tech training session',
    href: '/programs',
  },
  {
    category: 'Lorem Ipsum Category',
    title: 'Dummy Slide Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/what-we-do/slide-2.jpg',
    alt: 'Placeholder image for slide two',
    href: '/programs',
  },
  {
    category: 'Another Dummy Category',
    title: 'Dummy Slide Three',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/what-we-do/slide-1.png',
    alt: 'Placeholder image for slide three',
    href: '/programs',
  },
];

const SWIPE_THRESHOLD = 50;

export default function WhatWeDo() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const go = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section className="bg-primary-w" onKeyDown={handleKeyDown}>
      <div className="mx-auto max-w-7xl w-full px-6 py-20 flex flex-col items-center">
        <Reveal className="text-center">
          <span className="text-accent uppercase tracking-wider text-xs font-semibold font-plusJakartaSans">
            What we do
          </span>
        </Reveal>

        <Reveal delay={100} className="text-center">
          <h2 className="mt-4 max-w-3xl font-outfit text-3xl sm:text-4xl lg:text-5xl leading-tight text-primary-t">
            More Than Training, from Pathway to Opportunity.
          </h2>
        </Reveal>

        <Reveal delay={220} className="mt-12 w-full">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="What we do"
            className="overflow-hidden touch-pan-y"
            onPointerDown={(e) => (startX.current = e.clientX)}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => (startX.current = null)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${SLIDES.length}`}
                  inert={i !== index}
                  className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-4"
                >
                  <div className="rounded-2xl bg-cream p-8 lg:p-12 flex flex-col justify-between gap-10 min-h-50">
                    <div>
                      <span className="text-brown uppercase tracking-wide text-xs font-semibold font-plusJakartaSans">
                        {slide.category}
                      </span>
                      <h3 className="mt-4 font-outfit font-semibold text-3xl text-primary-t">
                        {slide.title}
                      </h3>
                      <p className="mt-4 font-plusJakartaSans text-primary-t/70 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <Link
                      href={slide.href}
                      className="self-start inline-flex items-center gap-2 rounded-full border border-primary-t/20 px-5 py-2.5 text-sm font-medium font-outfit text-primary-t transition-colors hover:bg-primary-t hover:text-primary-w focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Learn More
                      <ChevronRight />
                    </Link>
                  </div>

                  <div className="relative h-72 sm:h-96 lg:h-130 w-full overflow-hidden rounded-2xl bg-border/20">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(min-width: 1024px) 70vw, 100vw"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={320} className="mt-10">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-w transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === index ? 'w-8 bg-accent' : 'w-2 bg-border/50 hover:bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-w transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}