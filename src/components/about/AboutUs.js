import React from 'react';
import MissionVision from './MissionVision';
import FoundersMessage from './FoundersMessage';

const AboutUs = () => {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3D03E]/5 rounded-bl-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5D1528]/5 rounded-tr-full -z-0"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 pt-16">

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: Image (Kept inline as it's layout specific) */}
                    <div className="relative group sticky top-24">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src="/gallery/IMG_3599.jpg"
                                alt="School Building"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-[#5D1528]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Decorative Offset Border */}
                        <div className="absolute top-6 -right-6 w-full h-full border-2 border-[#5D1528] rounded-2xl -z-0"></div>

                        {/* Floating Stats Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-[#FDFBF7] p-8 rounded-xl shadow-xl border-l-8 border-[#F3D03E] z-20 hidden md:block">
                            <p className="text-5xl font-serif font-bold text-[#5D1528] mb-1">30+</p>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years of Excellence</p>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-[#5D1528] mb-6">About Us</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Excellent Group of Institutions, established in 1996, is one of Karnataka’s most trusted education networks, having educated and empowered over one lakh students across its schools, PU colleges, NEET academy, and Sainik/Navodaya coaching centers. With a strong presence in Dharwad, Hubli–Dharwad Highway, Bijapur, and Bagalkote, we serve more than current students through value-based schooling, competitive exam training, and modern, technology-enabled learning environments. Rooted in discipline, academic excellence, and a mission to deliver accessible quality education, the institution continues to grow with a vision to transform student futures and strengthen the educational landscape of Karnataka.
                            </p>
                        </div>
                        <MissionVision />
                    </div>
                </div>

                <FoundersMessage />

            </div>
        </section>
    );
};

export default AboutUs;
