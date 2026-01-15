import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Admissions from '@/components/admissions/Admissions';
import PageHero from '@/components/shared/PageHero';

export default function AdmissionsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <PageHero
                    title="Join Our"
                    highlight="Family"
                    subtitle="We welcome students from diverse backgrounds who are curious, passionate, and ready to make a difference. Our admissions process is designed to identify students who will thrive in our dynamic learning environment."
                >
                    <button className="bg-[#F3D03E] text-[#5D1528] font-bold py-3 px-8 rounded shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        Start your Application
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </PageHero>
                <Admissions />
            </main>
            <Footer />
        </>
    );
}
