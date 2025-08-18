'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Globe, Clock, Shield, FileCheck, Users, Plane } from 'lucide-react';
import Image from 'next/image';


const HeroSection = () => {
    const handleScroll = () => {
    const section = document.getElementById("our-service");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
  <section className="bg-blue-50 py-20 overflow-hidden">
  <div className="container mx-auto px-6 py-20 lg:py-24">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">
      
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Trusted by 50,000+ customers
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-blue-700">
          Fast & Reliable Visa Services
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
          Get your visa processed quickly and easily with our trusted service. 
          Experience hassle-free immigration with expert guidance.
        </p>

        {/* Feature Points */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
          <div className="flex items-center text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            99% Success Rate
          </div>
          <div className="flex items-center text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-blue-500 mr-2" />
            24/7 Support
          </div>
          <div className="flex items-center text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
            <Globe className="w-4 h-4 text-purple-500 mr-2" />
            150+ Countries
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={handleScroll}
            className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <a
            href="/my-application"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
          >
            My Application
          </a>
        </div>
      </div>

      {/* Visual Content */}
      <div className="lg:w-1/2 relative">
        {/* Main Visual Container */}
        <div className="relative">
          {/* Background Image Placeholder */}
          <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Plane className="w-24 h-24 text-blue-600 mx-auto mb-4 opacity-20" />
               <Image src={"/visa-application.jpg"} alt="Visa Services" width={500} height={300} className="object-cover rounded-lg " />
              </div>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Approval Rate</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">50K+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>


  </div>
</section>


  );
};

export default HeroSection;