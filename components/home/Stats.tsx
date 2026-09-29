import Reveal from '@components/motion/Reveal';
import StatCard from '@components/home/StatCard';
import { ArrowLeft } from '@icons/icons';

export default function Stats() {
  return (
    <section className="bg-primary-w">
      <div className="mx-auto max-w-7xl w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
        <div>
          <Reveal>
            <span className="text-accent uppercase tracking-wider text-xs font-semibold font-plusJakartaSans">
              Our stats
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-outfit text-4xl sm:text-5xl leading-tight text-primary-t">
              Our Journey So Far
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="#learn-more"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold font-outfit text-primary-w shadow-sm hover:bg-accent/90 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Learn More{' '}
              <ArrowLeft className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-start">
          <div className="grid grid-cols-1 gap-2.5">
            <StatCard
              value={400}
              suffix="+"
              label="Beneficiaries"
              delay={260}
            />
            <StatCard
              value={25}
              suffix="+"
              label="Career and Masterclass Sessions"
              delay={340}
            />
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:pt-16">
            <StatCard value={5} label="Learning tracks" delay={420} />
            <StatCard value={18} label="Capstone Groups" delay={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
