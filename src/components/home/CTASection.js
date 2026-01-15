import Link from 'next/link';

const CTASection = () => {
  return (
    // Reusing your existing .bg-gradient-hero class for the background
    // Using Tailwind for spacing (py-20), alignment (text-center), and color (text-white)
    <section className="bg-gradient-hero py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready to Join the TGSE Family?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
          Take the first step towards excellence. Apply now for admissions and
          give your child the gift of quality education.
        </p>

        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Primary Button: White background with Maroon text */}
          {/* text-[#721D32] is the hex for rgb(114, 29, 50) */}
          <Link href="/admissions" className="bg-white text-[#721D32] font-semibold py-3 px-8 rounded shadow-sm hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300">
            Start Application
          </Link>

          {/* Secondary Button: Transparent with White Border */}
          <Link href="/contact" className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded hover:bg-white/10 transition-all duration-300">
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;