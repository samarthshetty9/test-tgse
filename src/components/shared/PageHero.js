import React from 'react';

const PageHero = ({ title, highlight, subtitle, children }) => {
    return (
        <div className="bg-gradient-hero relative py-20 md:py-32 flex items-center justify-center overflow-hidden">

            {/* Background Glows (Same as Hero) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#F3D03E] rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F3D03E] rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            ></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
                    {title} <span className="text-[#F3D03E]">{highlight}</span>
                </h1>
                {subtitle && (
                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div className="flex justify-center gap-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageHero;
