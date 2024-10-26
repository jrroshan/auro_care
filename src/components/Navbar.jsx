import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-indigo-600">
            <span className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&q=80" 
                alt="Auro Care"
                className="h-8 w-8 rounded-full mr-2"
              />
              Auro Care
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-indigo-600 px-3 py-2 rounded-md">Home</Link>
              <Link to="/services" className="hover:text-indigo-600 px-3 py-2 rounded-md">Services</Link>
              <Link to="/programs" className="hover:text-indigo-600 px-3 py-2 rounded-md">Programs</Link>
              <Link to="/resources" className="hover:text-indigo-600 px-3 py-2 rounded-md">Resources</Link>
              <Link to="/contact" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md">Contact Us</Link>
            </div>
          </div>

          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-indigo-600 px-3 py-2 rounded-md">Home</Link>
            <Link to="/services" className="block hover:text-indigo-600 px-3 py-2 rounded-md">Services</Link>
            <Link to="/programs" className="block hover:text-indigo-600 px-3 py-2 rounded-md">Programs</Link>
            <Link to="/resources" className="block hover:text-indigo-600 px-3 py-2 rounded-md">Resources</Link>
            <Link to="/contact" className="block bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}