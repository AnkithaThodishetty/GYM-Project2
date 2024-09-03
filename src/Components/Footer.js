import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#210808] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">GYM</h2>
          <p className="text-gray-400 mb-4">Lorem ipsum dolor sit feugiat varius nue aliquet.</p>
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Healthy Living</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2023 isr All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
