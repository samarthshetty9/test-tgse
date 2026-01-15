import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Academics from '@/components/academics/Academics';
import PageHero from '@/components/shared/PageHero';

export default function AcademicsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <PageHero
                    title="Academic"
                    highlight="Excellence"
                    subtitle="Our rigorous yet holistic curriculum empowers students to explore their interests, challenge themselves, and prepare for success in an ever-changing global landscape. From Montessori roots to competitive board exams, we support every step."
                />
                <Academics />
            </main>
            <Footer />
        </>
    );
}
