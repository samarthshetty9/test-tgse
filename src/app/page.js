import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Features from '@/components/home/Features';
import Experience from '@/components/home/Experience';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Stats />
        <Experience />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}