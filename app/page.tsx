import Navbar from '@nav/Navbar';
import Hero from '@/components/home/Hero';
import WhoWeAre from '@/components/home/WhoWeAre';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <WhoWeAre />
      </main>
    </>
  );
}
