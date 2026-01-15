import React from 'react';

// SVG Icons (Same as before)
const features = [
  { 
    title: 'Academic Excellence', 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 0 6-3 6-7 0 4 3 7 6 7v-5"/></svg>), 
    desc: 'Rigorous curriculum designed to nurture critical thinking.' 
  },
  { 
    title: 'Holistic Development', 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), 
    desc: 'Balanced focus on academics, sports, arts, and character.' 
  },
  { 
    title: 'Experienced Faculty', 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>), 
    desc: 'Dedicated teachers with proven track records in education.' 
  },
  { 
    title: 'Modern Facilities', 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 1-4 4v14a3 3 0 0 1 3-3h7z"/></svg>), 
    desc: 'State-of-the-art infrastructure supporting 21st-century learning.' 
  }
];

const Features = () => (
  <section className="relative bg-[#FDFBF7] py-24 px-8 text-center overflow-hidden">
    
    {/* POLISH 1: Background Dot Pattern (Subtle Texture) */}
    <div 
      className="absolute inset-0 opacity-[0.4]" 
      style={{
        backgroundImage: 'radial-gradient(#5D1528 0.5px, transparent 0.5px)',
        backgroundSize: '24px 24px'
      }}
    ></div>

    <div className="relative z-10">
      
      {/* Header */}
      <h3 className="animate-on-scroll text-3xl md:text-4xl font-serif font-bold text-[#5D1528] mb-2">
        Why Choose TGSE?
      </h3>
      
      {/* POLISH 2: Decorative Divider */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-[1px] w-12 bg-[#F3D03E]"></div>
        <div className="w-2 h-2 rotate-45 bg-[#F3D03E]"></div>
        <div className="h-[1px] w-12 bg-[#F3D03E]"></div>
      </div>

      <p className="animate-on-scroll text-gray-600 max-w-2xl mx-auto mb-16" style={{ animationDelay: '0.1s' }}>
        We provide a nurturing environment where every student can thrive.
      </p>

      {/* Grid: Added 'sm:grid-cols-2' for tablets */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, i) => (
          <div 
            key={i} 
            style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}
            className="animate-on-scroll group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-[#F3D03E]"
          >
            <div className="w-16 h-16 bg-[#5D1528]/5 text-[#5D1528] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5D1528] group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            
            <h4 className="font-bold text-[#5D1528] mb-3 text-lg font-serif">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {item.desc}
            </p>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#F3D03E] font-bold text-sm flex items-center justify-center gap-1">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;