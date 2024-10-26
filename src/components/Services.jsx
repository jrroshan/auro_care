import React from 'react';
import { FaUserFriends, FaGraduationCap, FaHome, FaHeart } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "ABA Therapy",
      description: "Evidence-based Applied Behavior Analysis therapy tailored to each child's unique needs.",
      icon: <FaUserFriends className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80"
    },
    {
      title: "Early Intervention",
      description: "Early intervention programs to support development during crucial early years.",
      icon: <FaGraduationCap className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1602052793312-c6c2b8bca2c5?auto=format&fit=crop&q=80"
    },
    {
      title: "Home Support",
      description: "In-home therapy and support services for families in their natural environment.",
      icon: <FaHome className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80"
    },
    {
      title: "Family Guidance",
      description: "Comprehensive support and guidance for families navigating autism care.",
      icon: <FaHeart className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive autism support services tailored to your child's needs
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={service.image} alt={service.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="ml-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}