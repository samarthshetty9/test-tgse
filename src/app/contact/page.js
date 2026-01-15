import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/contact/Contact';
import PageHero from '@/components/shared/PageHero';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <PageHero
                    title="Contact"
                    highlight="Us"
                    subtitle="We believe in open communication and building strong relationships with our families. Whether you're a prospective parent, a current member of our community, or just curious, we'd love to hear from you."
                />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
