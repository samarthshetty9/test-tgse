import React from 'react';

const KeyDates = () => {
    return (
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3D03E]/10 rounded-bl-full"></div>

            <h3 className="text-2xl font-serif font-bold text-[#5D1528] mb-6">Key Dates for 2026-27</h3>

            <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="font-bold text-gray-700">Application Open</span>
                    <span className="text-[#5D1528] font-bold bg-[#5D1528]/5 px-3 py-1 rounded">Open Now</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="font-bold text-gray-700">Open House</span>
                    <span className="text-[#5D1528] font-bold bg-[#5D1528]/5 px-3 py-1 rounded">Announced Soon</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="font-bold text-gray-700">Entrance Test</span>
                    <span className="text-[#5D1528] font-bold bg-[#5D1528]/5 px-3 py-1 rounded">Check Website</span>
                </div>
            </div>

            <div className="mt-10 p-6 bg-[#5D1528] rounded-xl text-white text-center">
                <p className="font-bold mb-2">Have questions?</p>
                <p className="text-sm opacity-80 mb-4">Our admissions team is here to help.</p>
                <a href="tel:+919886228821" className="inline-block bg-white text-[#5D1528] font-bold py-2 px-6 rounded-full hover:bg-[#F3D03E] hover:text-[#5D1528] transition-colors">
                    Call +91 98862 28821
                </a>
            </div>
        </div>
    );
};

export default KeyDates;
