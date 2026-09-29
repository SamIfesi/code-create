'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';

type Testimonial = {
  name: string;
  program: string;
  quote: string;
  image: string;
};

// Slide 1 uses your design's copy; 2 and 3 are dummy. Replace when ready.
const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Chinweike Davide Chnedu',
    program: 'Code and Create Bootcamp',
    quote:
      'The Code & Create Bootcamp was an incredibly impactful experience. Over three months, I gained practical web development skills, built real projects, and grew more confident as a developer. The supportive mentorship and structured learning made the journey both effective and enjoyable. I’m truly grateful for the knowledge and guidance that now empower me to excel in real-world projects.',
    image: '/images/testimonials/person-1.png',
  },
  {
    name: 'Dummy Name Two',
    program: 'Code and Create Bootcamp',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/testimonials/person-1.png',
  },
  {
    name: 'Dummy Name Three',
    program: 'Code and Create Bootcamp',
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/images/testimonials/person-1.png',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-primary-w">
      <div className="mx-auto max-w-7xl w-full px-6 py-20 flex flex-col items-center">
        <Reveal className="text-center">
          <span className="text-accent uppercase tracking-wider text-xs font-semibold font-plusJakartaSans">
            Testimonials
          </span>
        </Reveal>

        <Reveal delay={100} className="text-center">
          <h2 className="mt-4 max-w-3xl font-outfit text-3xl sm:text-4xl lg:text-5xl leading-tight text-primary-t">
            Hear from some of our beneficiaries
          </h2>
        </Reveal>

        <Reveal delay={220} className="mt-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 border-y border-primary-t/10 lg:h-120">
            <div className="grid py-8 lg:pl-14 lg:py-10">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={t.name}
                  aria-hidden={i !== active}
                  className={`col-start-1 row-start-1 flex flex-col justify-between gap-8 transition-opacity duration-500 motion-reduce:transition-none ${
                    i === active
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <blockquote className="max-w-md font-plusJakartaSans text-primary-t/70 leading-relaxed">
                    {t.quote}
                  </blockquote>

                  <figcaption className="flex items-center gap-4">
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-border/20">
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover object-top"
                      />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-plusJakartaSans text-primary-t/60">
                        {t.program}
                      </span>
                      <span className="font-outfit font-semibold text-lg text-primary-t">
                        {t.name}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Photos: hover / focus / tap expands one panel */}
            <div
              className="flex gap-3 h-95 sm:h-110 lg:h-full"
              role="tablist"
              aria-label="Testimonials"
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={t.name}
                  onPointerEnter={(e) =>
                    e.pointerType === 'mouse' && setActive(i)
                  }
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative min-w-0 overflow-hidden bg-border/20 transition-[flex] duration-500 ease-in-out motion-reduce:transition-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    i === active ? 'flex-[2.4_1_0%]' : 'flex-[1_1_0%]'
                  }`}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 40vw"
                    className="object-cover object-top"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
