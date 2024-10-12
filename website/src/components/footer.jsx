// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-primary py-8"> {/* Dark grey background and primary text color */}
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

          {/* Center section: social media icons */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-pop">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-primary hover:text-pop">
                <i className="fab fa-facebook-f"></i> {/* Replace with icons */}
              </a>
              <a href="https://twitter.com" className="text-primary hover:text-pop">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-primary hover:text-pop">
                <i className="fab fa-instagram"></i>
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
