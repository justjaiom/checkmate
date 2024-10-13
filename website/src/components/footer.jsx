import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-[40px]"> {/* Increased padding from px-[20px] to px-[40px] */}
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
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="GitHub">
                <img src={`${process.env.PUBLIC_URL}/github.webp`} alt="GitHub" className="h-6 w-6" /> {/* Icon size reduced to 24px */}
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="LinkedIn">
                <img src={`${process.env.PUBLIC_URL}/LinkedIn.webp`} alt="LinkedIn" className="h-6 w-6" /> {/* Icon size reduced to 24px */}
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="Instagram">
                <img src={`${process.env.PUBLIC_URL}/instagram.webp`} alt="Instagram" className="h-6 w-6" /> {/* Icon size reduced to 24px */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
