import React, { useState } from 'react'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log(isMenuOpen)

  return (
    <nav className='bg-white p-8'> 
      <div className="flex items-center justify-between">

        <div className="text-black text-2xl font-bold">Checkmate</div> 

        <div className="md:hidden">
          <button className='text-black' onClick={toggleMenu}>
            <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
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
              href="https://github.com/justjaiom/checkmate" // Link to your GitHub repository
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded' // Gradient background and 20px padding
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
Source Code
            </a>
          </li>
          <li>
            <a 
              href="https://chrome.google.com/webstore" // Link to Google Chrome Extensions Store
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded' // Gradient background and 20px padding
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Get Origin
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <ul className='flex-col md:hidden'>
          <li className='py-2'>
            <a 
              href="https://github.com/justjaiom/checkmate" // Link to your GitHub repository
              className='text-black px-6 py-4 rounded' // Gradient background and 20px padding
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Source Code
            </a>
          </li>
          <li className='py-2'>
            <a 
              href="https://chrome.google.com/webstore" // Link to Google Chrome Extensions Store
              className='text-black px-6 py-4 rounded' // Gradient background and 20px padding
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Get Origin
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;