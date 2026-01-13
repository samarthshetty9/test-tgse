import Navbar from '../components/Navbar';
import  Hero  from '../components/Hero';
import  Stats  from '../components/Stats';
import  Features  from '../components/Features';
import  Footer  from '../components/Footer';
import  Experience  from '@/components/Experience';
import  Testimonials  from '../components/Testimonials';
import CTASection from '@/components/CTASection';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        
        <Features />
        <Stats />
        <Experience/>
        <Testimonials/>
        <CTASection/>
        {/* Add more section components here */}
      </main>
      <Footer />
    </div>
  );
}