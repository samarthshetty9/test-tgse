'use client'; // 👈 THIS IS THE FIX. It must be the very first line.

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex justify-between items-center">
        
        {/* --- LEFT SIDE: Logo & Text --- */}
        <div className="flex items-center gap-4">
          <Image 
            src={logo} 
            alt="TGSE Logo" 
            className="h-14 w-auto" 
          />
          
          <div className="flex flex-col">
            <span className="text-[#5D1528] font-serif font-bold text-xl leading-tight">
              The Global School
            </span>
            <span className="text-[#5D1528] font-serif text-sm tracking-wide">
              of Excellence
            </span>
          </div>
        </div>

        {/* --- RIGHT SIDE: Links & Button --- */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
             <a href="#" className="hover:text-[#5D1528] transition-colors">Home</a>
             <a href="#" className="hover:text-[#5D1528] transition-colors">About Us</a>
             <a href="#" className="hover:text-[#5D1528] transition-colors">Academics</a>
             <a href="#" className="hover:text-[#5D1528] transition-colors">Admissions</a>
             <a href="#" className="hover:text-[#5D1528] transition-colors">Contact</a>
          </div>

          <button className="bg-[#5D1528] text-white px-6 py-2 rounded hover:bg-[#4a1120] transition shadow-md whitespace-nowrap">
            Apply Now
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;