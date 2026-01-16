import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-hero relative min-h-[650px] flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-0">

      {/* 1. BACKGROUND GLOWS (Design) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F3D03E] rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F3D03E] rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

      {/* 2. PATTERN OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

        {/* --- NEW IDEA 5: ADMISSIONS PILL --- */}
        <div className="animate-on-scroll mb-4 md:mb-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3D03E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F3D03E]"></span>
          </span>
          <span className="text-white text-xs md:text-sm font-medium tracking-wide">
            Admissions Open for 2025-26
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-on-scroll text-4xl md:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg"
          style={{ animationDelay: '0.2s' }}
        >
          Excellence in Education, <br />
          <span className="text-[#F3D03E]">Excellence in Life</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-on-scroll text-white text-base md:text-xl opacity-95 max-w-2xl mb-8 md:mb-10 leading-relaxed font-light"
          style={{ animationDelay: '0.4s' }}
        >
          Nurturing curious minds and building tomorrow's leaders through
          innovative learning experiences from Grade 1 to Grade 10.
        </p>

        {/* Buttons */}
        <div
          className="animate-on-scroll flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/admissions" className="btn-shine bg-white text-[#5D1528] font-bold py-3 md:py-3.5 px-8 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1">
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link href="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-3 md:py-3.5 px-8 rounded hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 text-center">
            Book a Visit
          </Link>
        </div>
        <div className="animate-on-scroll mt-12 md:mt-16 animate-bounce opacity-70 cursor-pointer text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;