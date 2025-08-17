"use client";
import React from 'react';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* 404 Display */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Oops! The page you’re looking for seems to have taken a vacation. 
            Let’s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-300 font-medium">Need Help?</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="/visa-services" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
            >
              Browse Services
            </a>
            <a 
              href="/contact" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="/my-application" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
            >
              Track Application
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;