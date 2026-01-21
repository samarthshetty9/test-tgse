import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutUs from '@/components/about/AboutUs';
import PageHero from '@/components/shared/PageHero';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <PageHero
                    title="About"
                    highlight="Us"
                    subtitle="Founded in 1996, Excellent Group of Institutions began with a clear vision to make quality education accessible while nurturing discipline and academic excellence. Guided by this purpose, the institution has steadily grown over the years, adapting to modern learning needs and continuing to thrive as a trusted name in Karnataka's educational landscape."
                />
                <AboutUs />
            </main>
            <Footer />
        </div>
    );
}
