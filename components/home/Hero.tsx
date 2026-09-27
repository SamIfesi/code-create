import Image from 'next/image';
import Link from 'next/link';
import { HERO_IMAGES } from '@libs/utils';
import { ArrowLeft } from '@icons/icons';

export default function Hero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl w-full px-6 pt-10 pb-16 flex flex-col items-center text-center">
        <h1 className="font-outfit text-xl sm:text-5xl lg:text-4xl leading-tight text-primary-t max-w-4xl">
          We Equip Young Africans to Build Careers and Thrive in the Digital
          Economy.
        </h1>

        <p className="mt-6 max-w-2xl font-plusJakartaSans text-base text-primary-t/70">
          Code and Create Technologies is community-driven digital skills
          programme helping young people from underserved communities gain the
          technical skills, confidence, mentorship and opportunities they need
          to build sustainable futures.
        </p>

        <Link
          href="#learn-more"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-2.5 text-sm font-semibold font-outfit text-primary-w shadow-sm hover:bg-accent/90 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Learn More <ArrowLeft />
        </Link>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {HERO_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-border/20"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
