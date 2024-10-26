import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-indigo-50 py-24">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-10"
          alt="Background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-900 sm:text-5xl md:text-6xl">
            Empowering Children with Autism
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            At Auro Care, we provide specialized support and therapy for children with autism, helping them reach their full potential.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Start Your Journey
            </a>
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}