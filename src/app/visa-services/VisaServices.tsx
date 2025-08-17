"use client";
import { useState } from "react";
import { getVisaServices } from "../lib/getVisaServices";
import { ArrowRight, Clock, Search } from "lucide-react";

interface VisaService {
  id: number;
  name: string;
  description: string;
  processingTime: string;
}

export default function VisaServices() {
  const [services, setServices] = useState<VisaService[]>([]);
  const [search, setSearch] = useState("");


    getVisaServices().then((data) => setServices(data));


  console.log(services);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
  <div className="container mx-auto max-w-7xl">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Our <span className="text-blue-600 dark:text-blue-400">Visa Services</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Choose from our comprehensive range of visa services designed to meet your travel needs
      </p>

      {/* Search Bar */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search visa services..."
          className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredServices.map((service) => (
        <div
          key={service.id}
          className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500"
        >
          {/* Card Content */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                {service.description}
              </p>
            </div>

            {/* Processing Time */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-medium">{service.processingTime}</span>
              </div>

              <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-200">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* No Results */}
    {filteredServices.length === 0 && (
      <div className="text-center py-16">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <Search className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
          No services found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search term</p>
      </div>
    )}

    {/* Bottom CTA */}
    <div className="text-center mt-20">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-10 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Need Help Choosing?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Our visa experts are here to guide you through the process and help you select the right visa type for your needs.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
