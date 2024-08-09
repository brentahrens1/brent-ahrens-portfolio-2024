import close from '../../../assets/close-icon.svg';
import { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Overlay from './overlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

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
      if (window.scrollY > 50 && !isNavOpen && window.innerWidth > 1024) {
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
        className={`flex items-center justify-between w-full relative`}
      >
        <div 
          onClick={() => setIsOverlayOpen(!isOverlayOpen)} 
          className={`drop-shadow-button w-11 h-11 rounded-full bg-white gap-[6px] cursor-pointer z-50
            flex-col items-center justify-center overflow-hidden ${isScrolled ? 'flex -translate-x-6 xl:-translate-x-14' : 'flex lg:hidden'}`}
          >
          <div 
            className={`bg-black h-[2.5px] w-5 
            ${isOverlayOpen ? 'rotate-[228deg] translate-y-2 duration-700' : 'duration-700 rotate-0 delay-75'}`}>
          </div>
          <div 
            className={`bg-black h-[2.5px] w-5 
            ${isOverlayOpen ? '-translate-x-[80px] duration-500 delay-75' : 'duration-500'}`}>
          </div>
          <div 
            className={`bg-black h-[2.5px] w-5 
            ${isOverlayOpen ? '-rotate-[228deg] -translate-y-2 duration-700' : 'duration-700 rotate-0 delay-75'}`}>
          </div>
        </div>
        <div className={
          `flex items-center justify-end lg:justify-between w-full 
          ${isScrolled ? 'transition-opacity duration-200 ease-in-out opacity-0 -z-10'
            : 'transition-opacity duration-700 ease-in-out z-20'}`
        }>
          <div 
            className={`flex items-center justify-center h-11 border drop-shadow-button rounded-3xl
            bg-offwhite cursor-pointer transition-all ease-in-out hover:bg-nightblue hover:text-white hover:border-nightblue`}
          >
            <Link 
              onClick={() => setIsOverlayOpen(false)}
              to="/" 
              className="text-2xl px-6 h-full w-full flex items-center justify-center"
            >
              Brent Ahrens
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-14">
            <div className="flex items-center border rounded-3xl drop-shadow-button bg-offwhite cursor-pointer transition-all overflow-hidden">
              <NavLink 
                to="/work" 
                className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline pl-6 py-3 pr-10'
              >
                <p className="text-sm">Work</p>
              </NavLink>
              <NavLink
                to="/services" className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3 px-10'>
                <p className="text-sm">Services</p>
              </NavLink>
              <NavLink 
                to="/about" 
                className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline pl-10 pr-6 py-3'
              >
                <p className="text-sm">About</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Overlay isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
    </nav>
  );
};

export default Navbar;