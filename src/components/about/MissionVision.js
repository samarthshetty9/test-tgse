import React from 'react';

const MissionVision = () => {
    return (
        <div className="space-y-10">
            {/* Mission Block */}
            <div className="animate-on-scroll pl-6 border-l-4 border-[#F3D03E]">
                <h3 className="text-2xl font-serif font-bold text-[#5D1528] mb-3 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#F3D03E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    To provide a safe and stimulating environment where students are challenged to reach their full potential
                    academically, socially, and emotionally, preparing them to be responsible global citizens.
                </p>
            </div>

            {/* Vision Block */}
            <div className="animate-on-scroll pl-6 border-l-4 border-[#F3D03E]">
                <h3 className="text-2xl font-serif font-bold text-[#5D1528] mb-3 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#F3D03E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    To be a premier institution recognized for academic excellence, innovation in teaching, and
                    a commitment to fostering a community of lifelong learners and compassionate leaders.
                </p>
            </div>

            {/* Values Grid */}
            <div className="pt-4 grid grid-cols-2 gap-4">
                {['Integrity', 'Respect', 'Innovation', 'Community'].map((val, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#5D1528] font-bold bg-[#FDFBF7] p-3 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#F3D03E]"></div>
                        {val}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionVision;
