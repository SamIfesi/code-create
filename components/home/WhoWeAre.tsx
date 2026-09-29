import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { WHO_WE_ARE_IMAGES } from '@libs/utils';

export default function WhoWeAre() {
  return (
    <section className="bg-primary-w">
      <div className="mx-auto max-w-7xl w-full px-6 py-20">
        <Reveal>
          <span className="text-accent uppercase tracking-wider text-xs font-semibold font-plusJakartaSans">
            Who we are
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-4 max-w-4xl font-outfit text-2xl sm:text-3xl leading-tight text-primary-t">
            Because talent is everywhere, Opportunity should be too. We are
            creating accessible pathways for young people to learn, build and
            launch careers in the digital economy.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-2 gap-4">
          <Reveal
            delay={260}
            className="sm:col-span-4 sm:row-start-1 h-64 sm:h-70"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-border/20">
              <Image
                src={WHO_WE_ARE_IMAGES[0].src}
                alt={WHO_WE_ARE_IMAGES[0].alt}
                fill
                sizes="(min-width: 640px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            delay={340}
            className="sm:col-span-1 sm:row-start-1 h-64 sm:h-70"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-border/20">
              <Image
                src={WHO_WE_ARE_IMAGES[1].src}
                alt={WHO_WE_ARE_IMAGES[1].alt}
                fill
                sizes="(min-width: 640px) 18vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            delay={420}
            className="sm:col-span-1 sm:row-start-2 h-64 sm:h-70"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-border/20">
              <Image
                src={WHO_WE_ARE_IMAGES[2].src}
                alt={WHO_WE_ARE_IMAGES[2].alt}
                fill
                sizes="(min-width: 640px) 18vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            delay={500}
            className="sm:col-span-4 sm:row-start-2 h-64 sm:h-70"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-border/20">
              <Image
                src={WHO_WE_ARE_IMAGES[3].src}
                alt={WHO_WE_ARE_IMAGES[3].alt}
                fill
                sizes="(min-width: 640px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
