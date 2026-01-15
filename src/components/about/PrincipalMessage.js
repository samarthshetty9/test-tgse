import React from 'react';

const PrincipalMessage = () => {
    return (
        <div className="mt-24 bg-[#FDFBF7] p-10 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#5D1528]"></div>
            <svg className="absolute top-8 right-8 w-24 h-24 text-[#5D1528]/5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697V21H14.017ZM16.017 21H21.017C21.5693 21 22.017 20.5523 22.017 20V4C22.017 3.44772 21.5693 3 21.017 3H3.01697C2.46468 3 2.01697 3.44772 2.01697 4V20C2.01697 20.5523 2.46468 21 3.01697 21H8.01697V15H13.017V21H16.017Z" /></svg>

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-serif font-bold text-[#5D1528] mb-2">Message from the Principal</h4>
                    <p className="italic text-gray-600 mb-4">
                        "Education is not just about filling a bucket, but lighting a fire. At TGSE, we strive to ignite that fire in every student."
                    </p>
                    <div className="font-bold text-[#F3D03E]">— Dr. Eleanore Sterling, Principal</div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessage;
