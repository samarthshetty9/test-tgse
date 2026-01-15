'use client';

import React from 'react';
import CurriculumTabs from './CurriculumTabs';
import CoCurricular from './CoCurricular';
import Affiliations from './Affiliations';

const Academics = () => {
    return (
        <section id="academics" className="relative bg-white overflow-hidden pb-24">
            <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
                <CurriculumTabs />
                <CoCurricular />
                <Affiliations />
            </div>
        </section>
    );
};

export default Academics;
