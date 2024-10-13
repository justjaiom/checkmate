
function Navbar() {
  return (
    <nav className='bg-white p-4 px-8'> {/* Navbar background is white */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
        <img src={`${process.env.PUBLIC_URL}/Checkmate_logo.png`} alt="My PNG"  className="max-w-48"/>

          </div> {/* Logo text is black */}

        {/* Navigation Links */}
        <ul className='hidden md:flex space-x-4'>
          <li>
            <a 
              href="#" 
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded' // Gradient background for Source Code button
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Source Code
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded' // Gradient background for Get Origin button
              style={{ fontWeight: 'normal', fontSize: '0.875rem' }}
            >
              Get Origin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
