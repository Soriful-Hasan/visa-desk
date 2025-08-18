import React from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  Globe,
  Users,
  Award,
 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
   <footer className="bg-blue-50 border-t border-blue-200">
  <div className="container mx-auto px-6">
    
    {/* Main Footer Content */}
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="lg:col-span-1">
         <div className="pb-4 flex-shrink-0 flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
            <Image src="/global.png" alt="Logo" width={24} height={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            VisaDesk
          </span>
        </Link>
      </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your trusted partner for fast and reliable visa services. We make immigration simple with expert guidance and 24/7 support.
          </p>

          {/* Trust Indicators */}
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-700">
              <Award className="w-4 h-4 text-blue-500 mr-2" />
              Licensed & Certified
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Users className="w-4 h-4 text-green-500 mr-2" />
              50,000+ Happy Customers
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Globe className="w-4 h-4 text-purple-500 mr-2" />
              150+ Countries Supported
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-blue-700 mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              'Tourist Visa',
              'Business Visa', 
              'Student Visa',
              'Work Visa',
              'Transit Visa',
              'Medical Visa'
            ].map((link) => (
              <li key={link}>
                <a 
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold text-blue-700 mb-6">
            Support
          </h4>
          <ul className="space-y-3">
            {[
              'Track Application',
              'Help Center',
              'Document Guide',
              'FAQ',
              'Contact Support',
              'Refund Policy'
            ].map((link) => (
              <li key={link}>
                <a 
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-blue-700 mb-6">
            Contact Us
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="text-gray-700 font-medium">+88 01700-000000</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-700 font-medium">info@visadesk.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Office</p>
                <p className="text-gray-700 font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Available</p>
                <p className="text-gray-700 font-medium">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}
