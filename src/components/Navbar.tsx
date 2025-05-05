import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-opacity-50 backdrop-blur-md bg-[#3b1515] text-white font-serif p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          ☕ Coffee
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#" className="hover:text-amber-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Testimonials</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Menu</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Contact</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">About</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Gallery</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu (AnimatePresence for enter/exit animations) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center space-y-4 text-lg mt-4"
          >
            <li><a href="#" className="hover:text-amber-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-300 transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-amber-300 transition">Menu</a></li>
            <li><a href="#" className="hover:text-amber-300 transition">Contact</a></li>
            <li><a href="#" className="hover:text-amber-300 transition">About</a></li>
            <li><a href="#" className="hover:text-amber-300 transition">Gallery</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
