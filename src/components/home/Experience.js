import React from 'react';
// If you have real images, import them here.
// import classroomImg from '../assets/classroom.jpg'; 

const Experience = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">

    {/* --- LEFT SIDE: TEXT CONTENT --- */}
    <div className="order-2 md:order-1">
      <h3 className="animate-on-scroll text-4xl font-serif font-bold text-[#5D1528] mb-6">
        A Complete Educational <br />
        <span className="text-[#F3D03E]">Experience</span>
      </h3>

      <p className="animate-on-scroll text-gray-600 mb-10 text-lg leading-relaxed" style={{ animationDelay: '0.1s' }}>
        At TGSE, we believe in providing a comprehensive education that prepares students for the challenges of tomorrow, blending academic rigor with character development.
      </p>

      {/* Interactive List */}
      <ul className="space-y-4">
        {[
          'Small class sizes for personalized attention',
          'Advanced science and computer labs',
          'Extensive sports and extracurricular programs',
          'Regular parent-teacher communication',
          'Safe and supportive learning environment'
        ].map((text, i) => (
          <li
            key={i}
            className="animate-on-scroll flex items-center gap-4 text-gray-700 font-medium group cursor-pointer"
            style={{ animationDelay: `${0.2 + (i * 0.05)}s` }}
          >
            {/* Animated Checkbox Circle */}
            <div className="w-8 h-8 rounded-full border border-[#F3D03E]/50 bg-[#F3D03E]/10 flex items-center justify-center group-hover:bg-[#F3D03E] group-hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5D1528] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            {/* Text shifts right on hover */}
            <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-[#5D1528]">
              {text}
            </span>
          </li>
        ))}
      </ul>

      <button className="btn-shine mt-12 bg-[#5D1528] text-white px-10 py-4 rounded font-bold flex items-center gap-2 hover:bg-[#4a1120] transition-colors shadow-lg hover:-translate-y-1 transform duration-300">
        Explore Our Programs
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
    </div>

    {/* --- RIGHT SIDE: LAYERED VISUALS --- */}
    <div className="relative order-1 md:order-2">

      {/* 1. The Gold Square Accent (Back Layer) */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F3D03E]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-8 right-8 w-full h-full border-2 border-[#F3D03E] rounded-3xl z-0 transform translate-x-4 translate-y-4"></div>

      {/* 2. Main Image Container */}
      {/* Replaced emoji box with a styled 'Image Placeholder' that looks like a photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 z-10 bg-gray-200 aspect-[4/5] md:aspect-square">

        {/* Placeholder for Main Image (Classroom/Student) */}
        {/* <Image src={studentImg} fill className="object-cover" /> */}
        <img
          src="/gallery/complete.jpeg"
          alt="Student Learning"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5D1528]/80 to-transparent opacity-60"></div>

        {/* 3. Floating "Badge" on top of image */}
        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-[#F3D03E]">
          <p className="text-[#5D1528] font-bold text-2xl font-serif">25+</p>
          <p className="text-gray-600 text-xs uppercase tracking-wider font-bold">Extracurriculars</p>
        </div>
      </div>

      {/* 4. Decorative Element (Floating Icon Top Right) */}
      <div className="absolute -top-6 -right-6 bg-[#5D1528] text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl rotate-12 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
      </div>

    </div>
  </section>
);

export default Experience;