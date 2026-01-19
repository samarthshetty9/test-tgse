import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Gallery from '../../components/gallery/Gallery';
import PageHero from '@/components/shared/PageHero';

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <PageHero
                    title="Photo"
                    highlight="Gallery"
                    subtitle="Explore moments from our school events, activities, and campus life."
                />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}
