'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (path) => pathname === path;

  const getLinkClasses = (path) => {
    const baseClasses = "transition-colors duration-300";
    if (isActive(path)) {
      return `${baseClasses} text-[#5D1528] font-bold`;
    }
    return `${baseClasses} text-gray-700 font-medium hover:text-[#5D1528]`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
        : 'bg-white py-4 shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex justify-between items-center">

        {/* --- LEFT SIDE: Logo & Text --- */}
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src={logo}
            alt="TGSE Logo"
            className="h-10 w-auto md:h-14 group-hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col">
            <span className="text-[#5D1528] font-serif font-bold text-lg md:text-xl leading-tight">
              The Global School
            </span>
            <span className="text-[#5D1528] font-serif text-xs md:text-sm tracking-wide">
              of Excellence
            </span>
          </div>
        </Link>

        {/* --- RIGHT SIDE: Desktop Menu --- */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link href="/" className={getLinkClasses('/')}>Home</Link>
            <Link href="/about-us" className={getLinkClasses('/about-us')}>About Us</Link>
            <Link href="/academics" className={getLinkClasses('/academics')}>Academics</Link>
            <Link href="/admissions" className={getLinkClasses('/admissions')}>Admissions</Link>
            <Link href="/contact" className={getLinkClasses('/contact')}>Contact</Link>
          </div>

          <Link href="/admissions" className="bg-[#5D1528] text-white px-6 py-2 rounded hover:bg-[#4a1120] transition shadow-md whitespace-nowrap">
            Apply Now
          </Link>
        </div>

        {/* --- MOBILE: Hamburger Button --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#5D1528]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-8 flex flex-col gap-4 animate-fade-in-down h-screen z-50">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`py-3 border-b border-gray-50 text-lg ${isActive('/') ? 'text-[#5D1528] font-bold' : 'text-gray-700 font-medium'}`}>Home</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className={`py-3 border-b border-gray-50 text-lg ${isActive('/about-us') ? 'text-[#5D1528] font-bold' : 'text-gray-700 font-medium'}`}>About Us</Link>
          <Link href="/academics" onClick={() => setIsMenuOpen(false)} className={`py-3 border-b border-gray-50 text-lg ${isActive('/academics') ? 'text-[#5D1528] font-bold' : 'text-gray-700 font-medium'}`}>Academics</Link>
          <Link href="/admissions" onClick={() => setIsMenuOpen(false)} className={`py-3 border-b border-gray-50 text-lg ${isActive('/admissions') ? 'text-[#5D1528] font-bold' : 'text-gray-700 font-medium'}`}>Admissions</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`py-3 border-b border-gray-50 text-lg ${isActive('/contact') ? 'text-[#5D1528] font-bold' : 'text-gray-700 font-medium'}`}>Contact</Link>

          <Link href="/admissions" onClick={() => setIsMenuOpen(false)} className="bg-[#5D1528] text-white text-center py-3 rounded-xl mt-4 text-lg font-bold shadow-lg">
            Apply Now
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;