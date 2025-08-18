'use client'
import React, { useState } from 'react';
import { Menu, Plane, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/my-application", label: "My Application" },
  ];

  return (
<nav className="bg-white shadow-lg fixed w-full top-0 z-50 ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex-shrink-0 flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
            <Image src="/global.png" alt="Logo" width={24} height={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            VisaDesk
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200 ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="bg-blue-50 inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div
      className={`md:hidden transition-all pb-10 bg-white duration-300 ease-in-out ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 mb-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 hover:bg-white block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
</nav>


  );
};

export default Navbar;