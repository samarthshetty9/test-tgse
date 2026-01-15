import React from 'react';

const CoCurricular = () => {
    return (
        <>
            <div className="text-center mb-16 pt-16 border-t border-gray-100">
                <h2 className="text-4xl font-serif font-bold text-[#5D1528] mb-6">
                    Beyond the <span className="text-[#F3D03E]">Classroom</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We believe that true education extends beyond textbooks.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { name: "Sports", icon: "⚽", items: ["Football", "Basketball", "Swimming", "Cricket"] },
                    { name: "Visual Arts", icon: "🎨", items: ["Painting", "Sculpture", "Digital Art"] },
                    { name: "Performing Arts", icon: "🎭", items: ["Dance", "Theater", "Music"] },
                    { name: "Technology", icon: "🤖", items: ["Robotics Club", "Coding", "AI Workshop"] }
                ].map((act, i) => (
                    <div key={i} className="bg-[#FDFBF7] p-8 rounded-xl border border-gray-100 hover:border-[#F3D03E] hover:shadow-lg transition-all duration-300 text-center group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                            {act.icon}
                        </div>
                        <h4 className="text-xl font-bold text-[#5D1528] mb-4 font-serif">{act.name}</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            {act.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CoCurricular;
