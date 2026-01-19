'use client';

import React, { useState } from 'react';
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette, Music, Trophy, MousePointer, Monitor, Brain, Briefcase } from 'lucide-react';

const CurriculumTabs = () => {
    const [activeTab, setActiveTab] = useState('primary');

    // Lucide icon Trophy renders as Troph due to typo in component import map? 
    // Just using Trophy correctly in jsx.
    function Troph({ className }) { return <Trophy className={className} /> }

    const curriculumData = {
        primary: {
            title: "Primary Grades (1-5)",
            description: "Integrated curriculum",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
            subjects: [
                { name: "Sainik School Coaching", icon: <Troph className="w-6 h-6" /> },
                { name: "Navodaya Coaching", icon: <BookOpen className="w-6 h-6" /> },
                { name: "Foundational Course", icon: <Brain className="w-6 h-6" /> },
                { name: "English Language", icon: <Languages className="w-6 h-6" /> },
                { name: "Mathematics", icon: <Calculator className="w-6 h-6" /> },
                { name: "Science", icon: <FlaskConical className="w-6 h-6" /> },
                { name: "Social Studies", icon: <Globe className="w-6 h-6" /> },
                { name: "Co-Curricular", icon: <Palette className="w-6 h-6" /> },
            ]
        },
        highschool: {
            title: "Highschool (6-8)",
            description: "Integrated curriculum",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
            subjects: [
                { name: "NEET Foundation", icon: <FlaskConical className="w-6 h-6" /> },
                { name: "JEE Foundation", icon: <Calculator className="w-6 h-6" /> },
                { name: "Mathematics", icon: <Calculator className="w-6 h-6" /> },
                { name: "Science", icon: <FlaskConical className="w-6 h-6" /> },
                { name: "Social Science", icon: <Globe className="w-6 h-6" /> },
                { name: "English", icon: <BookOpen className="w-6 h-6" /> },
                { name: "Computer Science", icon: <Monitor className="w-6 h-6" /> },
                { name: "Life Skills", icon: <Brain className="w-6 h-6" /> }
            ]
        }
    };

    return (
        <>
            {/* 1. TAB NAVIGATION */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['primary', 'highschool'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 rounded-full font-serif font-bold text-lg transition-all duration-300 shadow-sm border-2 
                        ${activeTab === tab
                                ? 'bg-[#5D1528] text-white border-[#5D1528] scale-105 shadow-xl'
                                : 'bg-white text-gray-500 border-gray-100 hover:border-[#F3D03E] hover:text-[#5D1528]'
                            }`}
                    >
                        {curriculumData[tab].title}
                    </button>
                ))}
            </div>

            {/* 2. MAIN CONTENT AREA */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 animate-fade-in-up">

                {/* LEFT: Text & Grid */}
                <div>
                    <h2 className="text-3xl font-serif font-bold text-[#5D1528] mb-4">
                        Curriculum Overview
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                        {curriculumData[activeTab].description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {curriculumData[activeTab].subjects.map((sub, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#FDFBF7] border border-[#5D1528]/5 hover:border-[#F3D03E] transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-[#5D1528]/5 text-[#5D1528] flex items-center justify-center group-hover:bg-[#5D1528] group-hover:text-white transition-colors">
                                    {sub.icon}
                                </div>
                                <span className="font-bold text-gray-700 text-sm group-hover:text-[#5D1528] transition-colors">
                                    {sub.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Image */}
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                    <img
                        key={activeTab} // Force re-render on tab change for animation
                        src={curriculumData[activeTab].image}
                        alt={curriculumData[activeTab].title}
                        className="w-full h-full object-cover animate-fade-in"
                    />
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-[#5D1528] font-bold shadow-lg border-l-4 border-[#F3D03E]">
                        {activeTab === 'highschool' ? 'NEET & JEE Foundation' : 'Integrated Curriculum'}
                    </div>
                </div>

            </div>
        </>
    );
};

export default CurriculumTabs;
