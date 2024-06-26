import hamburger from '../../../assets/hamburger-icon.svg';
import close from '../../../assets/close-icon.svg';
import { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const openNav = () => {
    setIsNavOpen(true);
    setIsScrolled(false);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsScrolled(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isNavOpen) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className="py-10 section-h-padding fixed top-0 left-0 w-full z-50">
      <div 
        onClick={openNav} className={`absolute top-4 left-0 cursor-pointer 
        ${isScrolled ? 'transition-opacity duration-700 ease-in-out opacity-100 z-10' 
        : 'transition-left duration-200 ease-in-out opacity-0 -z-10'}`}
      >
        <img src={hamburger} alt="Hamburger Icon" />
      </div>
      <div onClick={closeNav} className={`absolute top-10 cursor-pointer mr-12 ${isNavOpen ? 'left-9' : '-left-full'}`}>
        <img src={close} alt="Close Icon" />
      </div>
      <div 
        className={`flex items-center justify-between w-full relative 
        ${isScrolled ? 'transition-opacity duration-200 ease-in-out opacity-0 -z-10' 
        : 'transition-opacity duration-700 ease-in-out z-10'}`}
      >
        <div 
          className={`flex items-center justify-center h-11 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer transition-all ease-in-out hover:text-nightblue hover:underline 
          ${isNavOpen ? ' ml-8' : ''}`}
        >
          <Link to="/" className="text-2xl px-6 h-full w-full flex items-center justify-center">Brent Ahrens</Link>
        </div>
        <div className="hidden lg:flex items-center gap-14">
          <div className="flex items-center border rounded-3xl drop-shadow-button bg-offwhite cursor-pointer transition-all">
            <NavLink to="/work" className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline pl-6 py-3 pr-10'>
              <p className="text-sm">Work</p>
            </NavLink>
            <NavLink
              to="/services" className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3 px-10'>
              <p className="text-sm">Services</p>
            </NavLink>
            <NavLink to="/about" className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline pl-10 pr-6 py-3'>
              <p className="text-sm">About</p>
            </NavLink>
          </div>
          <NavLink
            to="/contact"
            className="px-6 py-3 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer 
              transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
            <p className="text-sm">Schedule a call</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;