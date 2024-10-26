import React from 'react';

export default function Features() {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            The Auro Care Difference
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our approach combines expertise, compassion, and evidence-based practices
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80" 
                alt="Expert Team"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">Our team of certified professionals brings years of experience in autism care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80" 
                alt="Personalized Care"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600">Every child receives a customized treatment plan tailored to their specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80" 
                alt="Family Support"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Family Support</h3>
              <p className="text-gray-600">We provide comprehensive support and resources for the entire family.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}