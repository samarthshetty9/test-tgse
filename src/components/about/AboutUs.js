import React from 'react';
import MissionVision from './MissionVision';
import PrincipalMessage from './PrincipalMessage';

const AboutUs = () => {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3D03E]/5 rounded-bl-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5D1528]/5 rounded-tr-full -z-0"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 pt-16">

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Image (Kept inline as it's layout specific) */}
                    <div className="relative group">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
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
                    <MissionVision />
                </div>

                <PrincipalMessage />

            </div>
        </section>
    );
};

export default AboutUs;
