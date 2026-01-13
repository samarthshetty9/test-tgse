import React from 'react';

const Footer = () => (
  // Background: Deep Maroon. Added a subtle Top Border in Gold/20 for definition.
  <footer className="bg-[#5D1528] text-white pt-20 pb-10 px-8 border-t border-[#F3D03E]/20">
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

      {/* Column 1: Brand Identity */}
      <div className="space-y-6">
        <div className="text-2xl font-serif font-bold text-white tracking-wide">
           TGSE<span className="text-[#F3D03E]">.</span>
        </div>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          Nurturing young minds with excellence since 2010. Creating the leaders of tomorrow.
        </p>
      </div>

      {/* Column 2: Quick Links (Interactive) */}
      <div>
        <h4 className="font-serif font-bold text-lg mb-6 text-[#F3D03E]">Explore</h4>
        <ul className="space-y-4 text-sm text-white/70">
          {['About Us', 'Academics', 'Admissions', 'Student Life'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                {/* Tiny Gold Dot appears on hover */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3D03E] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Contact Info (With SVGs) */}
      <div>
        <h4 className="font-serif font-bold text-lg mb-6 text-[#F3D03E]">Contact</h4>
        <div className="space-y-4 text-sm text-white/70">
          <div className="flex items-start gap-3">
            {/* Map Pin Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F3D03E] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <p>123 Education Ave,<br/>Knowledge City, 560001</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Phone Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F3D03E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Column 4: Hours & Socials */}
      <div>
        <h4 className="font-serif font-bold text-lg mb-6 text-[#F3D03E]">Visit Us</h4>
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          Mon - Fri: 8:00 AM - 4:00 PM<br/>
          Saturday: 9:00 AM - 1:00 PM
        </p>
        
        {/* Social Icons (Hover to Gold) */}
        <div className="flex gap-4">
           {/* Facebook */}
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F3D03E] hover:text-[#5D1528] transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
           </a>
           {/* Instagram */}
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F3D03E] hover:text-[#5D1528] transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} /></svg>
           </a>
        </div>
      </div>

    </div>

    {/* Bottom Bar: Copyright & Legal */}
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-white/40 tracking-wider">
        © 2026 THE GLOBAL SCHOOL OF EXCELLENCE.
      </p>
      <div className="flex gap-6 text-xs text-white/40 font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
      </div>
    </div>
  </footer>
);

export default Footer;