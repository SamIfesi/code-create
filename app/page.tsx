import Navbar from '@nav/Navbar';
import Hero from '@components/home/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
      </main>
    </>
  );
}