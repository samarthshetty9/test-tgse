import React from 'react';

const testimonials = [
  { 
    name: 'Sarah Johnson', 
    role: 'Parent of Grade 5 Student', 
    initials: 'SJ',
    quote: "TGSE has transformed my child's approach to learning. The teachers are incredibly supportive and the environment fosters genuine curiosity." 
  },
  { 
    name: 'Michael Chen', 
    role: 'Grade 10 Student', 
    initials: 'MC',
    quote: "The holistic education approach here has helped me discover my passion for science while also excelling in sports and arts." 
  },
  { 
    name: 'Priya Patel', 
    role: 'Parent of Grade 3 Student', 
    initials: 'PP',
    quote: "We looked at many schools, but TGSE stood out for its values. Seeing my daughter excited to go to school every morning is the best proof." 
  }
];

const Testimonials = () => (
  // Background: Cream (#FDFBF7) with a subtle pattern overlay
  <section className="relative bg-[#FDFBF7] py-24 px-8 overflow-hidden">
    
    {/* Background Pattern: Faint Maroon Dots */}
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: 'radial-gradient(#5D1528 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    ></div>

    <div className="relative z-10 text-center mb-16">
      <h3 className="animate-on-scroll text-4xl font-serif font-bold text-[#5D1528] mb-3">
        What Our Community Says
      </h3>
      <p className="animate-on-scroll text-gray-600 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
        Hear from parents and students who are proud to be part of the TGSE family.
      </p>
    </div>

    {/* Grid: Changed to 3 columns for better balance */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div 
          key={i} 
          className="animate-on-scroll bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}
        >
          {/* UPGRADE 1: Giant Quote Watermark (Absolute Position) */}
          <div className="absolute top-4 right-8 text-9xl font-serif text-[#F3D03E]/10 select-none group-hover:text-[#F3D03E]/20 transition-colors">
            "
          </div>

          {/* Gold Stars */}
          <div className="flex text-[#F3D03E] mb-6 text-xl gap-1 relative z-10">
            {'★★★★★'}
          </div>

          {/* Quote Text */}
          <p className="italic text-gray-700 mb-8 text-lg leading-relaxed relative z-10">
            "{t.quote}"
          </p>

          {/* UPGRADE 2: User Profile Section */}
          <div className="flex items-center gap-4 relative z-10">
            
            {/* Avatar Placeholder: Circle with Initials */}
            <div className="w-12 h-12 rounded-full bg-[#5D1528] flex items-center justify-center text-white font-bold text-sm shadow-md">
              {t.initials}
            </div>

            <div>
              <h5 className="font-bold text-[#5D1528] text-lg leading-tight">
                {t.name}
              </h5>
              <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wide">
                {t.role}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;