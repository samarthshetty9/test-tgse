import React from 'react';
import Timeline from './Timeline';
import KeyDates from './KeyDates';

const Admissions = () => {
    return (
        <section id="admissions" className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Timeline />
                    <KeyDates />
                </div>
            </div>
        </section>
    );
};

export default Admissions;
