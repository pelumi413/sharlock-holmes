import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about-us' },
    { name: 'Campaigns', href: '/#campaigns' },
    { name: 'News', href: '/news' },
    { name: 'Safety Talks', href: '/safety-talks' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md transition-colors duration-500 bg-black/90 border-b border-neutral-800/80 h-20">
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-12 lg:px-24 relative flex justify-between items-center">
        
        {/* Absolute Brand Seal layout remains fixed */}
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 z-50">
          <Link to="/" className="block">
                            <div className="flex items-center py-2">

<img
  src="/rap-logo.png"
  alt="RAP Initiative Logo"
  className="h-12 w-auto object-contain block" // We fixed this height earlier!

              />
            </div>
          </Link>
        </div>

        {/* Dynamic margin spacer */}
        <div className="w-32 sm:w-40 hidden md:block" />

        {/* Desktop Navigation Links and Interactive Toggles */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-[#FF9F00]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            className="text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 mr-2 hover:text-[#FF9F00]"
          >
            Contact
          </a>

          <Link 
            to="/donate" 
            className="bg-[#FF9F00] text-black text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Layout Controller Right Bank */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-black border-b border-neutral-800`}>
        <div className="px-6 py-6 flex flex-col gap-4 pt-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF9F00] py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF9F00] py-2 transition-colors"
          >
            Contact
          </a>
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="bg-[#FF9F00] text-black text-xs font-black uppercase tracking-widest py-3 rounded-full text-center mt-2 hover:bg-white transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;