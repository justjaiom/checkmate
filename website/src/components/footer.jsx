import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-[20px]">
        <div className="flex flex-wrap justify-between items-center">
          {/* Copyright */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 Checkmate. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-gray-300 text-2xl" aria-label="Facebook">&#xf082;</a>
              <a href="#" className="hover:text-gray-300 text-2xl" aria-label="Twitter">&#xf081;</a>
              <a href="#" className="hover:text-gray-300 text-2xl" aria-label="Instagram">&#xf16d;</a>
              <a href="#" className="hover:text-gray-300 text-2xl" aria-label="GitHub">&#xf09b;</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;