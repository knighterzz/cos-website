"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 bg-gold text-elegantBlack shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`container mx-auto flex justify-between items-center max-w-7xl transition-all duration-300 ${
          isScrolled ? "px-4" : "px-6"
        }`}
      >
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src='/images/COS FLAT.png'
            alt='Logo'
            width={isScrolled ? 60 : 80}
            height={isScrolled ? 60 : 80}
            className={`transition-all duration-300 ${
              isScrolled ? "ml-3" : "ml-7"
            }`}
          />
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex justify-end space-x-6'>
          <Link
            href='/'
            className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:text-white ${
              isScrolled ? "text-base" : "text-lg"
            }`}
          >
            Home
          </Link>
          <Link
            href='/faq'
            className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:text-white ${
              isScrolled ? "text-base" : "text-lg"
            }`}
          >
            FAQ
          </Link>
          <Link
            href='/contacts'
            className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:text-white ${
              isScrolled ? "text-base" : "text-lg"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-gold text-elegantBlack flex flex-col items-center py-4 space-y-4 md:hidden'>
            <Link
              href='/'
              onClick={toggleMenu}
              className='text-lg font-semibold hover:text-darkSand'
            >
              Home
            </Link>
            <Link
              href='/faq'
              onClick={toggleMenu}
              className='text-lg font-semibold hover:text-darkSand'
            >
              FAQ
            </Link>
            <Link
              href='/contacts'
              onClick={toggleMenu}
              className='text-lg font-semibold hover:text-darkSand'
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
