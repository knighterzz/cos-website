// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className='flex items-center justify-between max-w-6xl mx-auto p-4'>
        {/* Left Links - hidden on mobile */}
        <div className='hidden sm:flex space-x-4'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About Us</Link>
        </div>

        {/* Center Logo */}
        <div className='flex-shrink-0'>
          <Image
            src='/images/COSFLAT.png'
            alt='Logo'
            width={80}
            height={32}
            className='w-20 sm:w-24'
          />
        </div>

        {/* Right Links - hidden on mobile */}
        <div className='hidden sm:flex space-x-4'>
          <Link href='/events'>Events</Link>
          <Link href='/partnership'>Partnership</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='sm:hidden flex items-center'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 focus:outline-none'
            aria-label='Toggle Menu'
          >
            {/* Hamburger Icon */}
            <div className='space-y-1'>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='sm:hidden bg-black bg-opacity-90'>
          <nav className='flex flex-col items-center space-y-4 py-4'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href='/about' onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href='/events' onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link href='/partnership' onClick={() => setIsMenuOpen(false)}>
              Partnership
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
