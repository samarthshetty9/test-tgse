import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Academics from '@/components/academics/Academics';
import PageHero from '@/components/shared/PageHero';

export default function AcademicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <PageHero
                    title="Our"
                    highlight="Curriculum"
                    subtitle="We offer a robust academic program integrated with co-curricular activities to ensure holistic development. From early years to high school, our students are challenged to think critically and creatively."
                />
                <Academics />
            </main>
            <Footer />
        </div>
    );
}
