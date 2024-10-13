import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white pt-2 pb-2 px-[20px] m-4'>
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <img
          src="/checkmate_proper.png"
          alt="Checkmate Logo"
          className="w-16 h-16"
        />

        <div className="md:hidden">
          <button className='text-black' onClick={toggleMenu}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <ul className='hidden md:flex space-x-4'>
          <li>
            <a 
              href="https://github.com/justjaiom/checkmate"
              className='bg-blue-600 text-white px-6 py-4 rounded'
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Source Code
            </a>
          </li>
          <li>
            <a 
              href="https://chrome.google.com/webstore"
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded'
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Get Origin
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden fixed inset-0 bg-white z-50 flex items-center justify-center'>
          <ul className='text-center'>
            <li className='py-4'>
              <a 
                href="https://github.com/justjaiom/checkmate"
                className='text-black px-6 py-4 rounded inline-block'
                style={{ fontWeight: 'normal', fontSize: '1rem' }}
              >
                Source Code
              </a>
            </li>
            <li className='py-4'>
              <a 
                href="https://chrome.google.com/webstore"
                className='text-black px-6 py-4 rounded inline-block'
                style={{ fontWeight: 'normal', fontSize: '1rem' }}
              >
                Get Origin
              </a>
            </li>
          </ul>
          <button 
            onClick={toggleMenu} 
            className='absolute top-4 right-4 text-black'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;