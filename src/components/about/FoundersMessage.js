import React from 'react';

const FoundersMessage = () => {
    return (
        <div className="mt-24 bg-[#FDFBF7] p-10 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#5D1528]"></div>
            <svg className="absolute top-8 right-8 w-24 h-24 text-[#5D1528]/5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697V21H14.017ZM16.017 21H21.017C21.5693 21 22.017 20.5523 22.017 20V4C22.017 3.44772 21.5693 3 21.017 3H3.01697C2.46468 3 2.01697 3.44772 2.01697 4V20C2.01697 20.5523 2.46468 21 3.01697 21H8.01697V15H13.017V21H16.017Z" /></svg>

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-48 md:w-64 rounded-xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                    <img src="/Picture1.jpg" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-serif font-bold text-[#5D1528] mb-2">Founders message</h4>
                    <p className="italic text-gray-600 mb-4">
                        "At TGSE – The Global School Of Excellence, we believe that quality education should be accessible, affordable, and future-focused. With modern infrastructure, dedicated educators, and a truly student-centered environment, we nurture children to grow academically, emotionally, and socially—without the need to look beyond their own city for great schooling. TGSE stands as a symbol of our commitment to holistic development, proving that excellence is not just a standard but a promise. Today, TGSE is more than a school; it is a beacon of hope and guidance for students across Vijayapura and surrounding regions, lighting the way toward a brighter and more confident future."
                    </p>
                    <div className="font-bold text-[#F3D03E]">— Shri Basavaraj Koulagi</div>
                    <div className="text-sm text-gray-500">Founder chairman, Excellent group of institutions</div>
                </div>
            </div>
        </div>
    );
};

export default FoundersMessage;
