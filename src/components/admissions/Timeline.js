import React from 'react';

const Timeline = () => {
    const list = [
        { step: "01", title: "Inquiry", desc: "Submit an online inquiry form or visit our campus for a tour." },
        { step: "02", title: "Application", desc: "Complete the application form and submit required documents." },
        { step: "03", title: "Assessment", desc: "Student interaction/assessment to understand grade readiness." },
        { step: "04", title: "Enrollment", desc: "Pay the admission fee to secure your seat." }
    ];

    return (
        <div className="space-y-12">
            {list.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-[#5D1528] text-[#5D1528] font-bold text-lg flex items-center justify-center group-hover:bg-[#5D1528] group-hover:text-white transition-colors duration-300">
                            {item.step}
                        </div>
                        {i !== 3 && <div className="w-0.5 h-full bg-gray-200 mt-4 group-hover:bg-[#5D1528]/30 transition-colors"></div>}
                    </div>
                    <div className="pb-8">
                        <h4 className="text-xl font-bold text-[#5D1528] mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
