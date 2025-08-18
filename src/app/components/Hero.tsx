'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Globe, Clock, Shield } from 'lucide-react';
import Link from 'next/link';


const HeroSection = () => {
    const handleScroll = () => {
    const section = document.getElementById("our-service");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
     <section className="bg-blue-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
  <div className="container mx-auto px-6 py-20 lg:py-24">
    <div className="flex items-center justify-center min-h-[60vh]">
      
      {/* Text Content */}
      <div className="text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-gray-800 text-blue-800 dark:text-gray-200 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Trusted by 50,000+ customers
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-blue-700 dark:text-white">
          Fast & Reliable Visa Services
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Get your visa processed quickly and easily with our trusted service. 
          Experience hassle-free immigration with expert guidance.
        </p>

        {/* Feature Points */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            99% Success Rate
          </div>
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-blue-500 mr-2" />
            24/7 Support
          </div>
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
            <Globe className="w-4 h-4 text-purple-500 mr-2" />
            150+ Countries
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
             onClick={handleScroll}
            className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <Link
            href="/my-application"
            className="border-2 border-blue-600 dark:border-gray-300 text-blue-600 dark:text-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200 flex items-center justify-center"
          >
            My Application
          </Link>
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default HeroSection;