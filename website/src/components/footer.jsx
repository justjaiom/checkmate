// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the Instagram icon

const Footer = () => {
  return (
    <footer className="bg-white shadow-none"> {/* White background and no shadow */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section: links */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-pop">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary hover:text-pop">
                  Back to home
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary hover:text-pop">
                  Contact +1(682) 261-6731
                </a>
              </li>
            </ul>
          </div>

          {/* Center section: Instagram icon */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-pop">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-primary hover:text-pop"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practices
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" /> {/* Instagram icon */}
              </a>
            </div>
          </div>

          {/* Right section: copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary">
              Placeholder Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
