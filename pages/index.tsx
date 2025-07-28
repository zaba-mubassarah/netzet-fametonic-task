import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      
      <div className="text-dark font-body">
        <Header />
        <main>
          <Hero />
        </main>        
      </div>
    </>
  );
}