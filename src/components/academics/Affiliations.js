import React from 'react';

const Affiliations = () => {
    return (
        <div className="mt-24 text-center">
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-6">Affiliated With</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <h4 className="text-2xl font-serif font-bold text-[#5D1528]">Karnataka State Educational Board</h4>
                <h4 className="text-2xl font-serif font-bold text-[#5D1528]">JEE/ NEET</h4>
                <h4 className="text-2xl font-serif font-bold text-[#5D1528]">AISSEE</h4>
            </div>
        </div>
    );
};

export default Affiliations;
