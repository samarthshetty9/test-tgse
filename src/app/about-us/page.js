import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutUs from '@/components/about/AboutUs';
import PageHero from '@/components/shared/PageHero';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <PageHero
                    title="About"
                    highlight="Us"
                    subtitle="Since 1995, The Global School of Excellence has been dedicated to cultivating an environment where academic rigor meets character development. Discover our history, our values, and the people who make our community special."
                />
                <AboutUs />
            </main>
            <Footer />
        </>
    );
}
