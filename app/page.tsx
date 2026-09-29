import Navbar from '@nav/Navbar';
import Hero from '@components/home/Hero';
import WhoWeAre from '@components/home/WhoWeAre';
import Stats from '@components/home/Stats';
import WhatWeDo from '@/components/home/WhatWeDo';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Stats />
      </main>
    </>
  );
}
