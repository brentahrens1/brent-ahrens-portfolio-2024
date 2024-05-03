import hamburger from '../../../assets/hamburger-icon.svg';
import close from '../../../assets/close-icon.svg';
import { useEffect, useState } from 'react';

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
    <nav className="py-10 px-20 fixed top-0 left-0 w-full">
      <div onClick={openNav} className={`absolute top-4 cursor-pointer ${isScrolled ? 'transition-opacity duration-700 ease-in-out opacity-100 z-10' : 'transition-left duration-200 ease-in-out opacity-0 -z-10'}`}>
        <img src={hamburger} alt="Hamburger Icon" />
      </div>
      <div onClick={closeNav} className={`absolute top-10 cursor-pointer mr-12 ${isNavOpen ? 'left-9' : '-left-full'}`}>
        <img src={close} alt="Close Icon" />
      </div>
      <div className={`flex items-center justify-between w-full relative ${isScrolled ? 'transition-opacity duration-200 ease-in-out opacity-0 -z-10' : 'transition-opacity duration-700 ease-in-out z-10'}`}>
        <div className={`py-2 px-6 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer transition-all ease-in-out ${isNavOpen ? ' ml-8' : ''}`}>
          <p className="text-2xl">Brent Ahrens</p>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-20 px-6 py-3 border rounded-3xl drop-shadow-button bg-offwhite cursor-pointer transition-all">
            <div>
              <p className="text-sm">Work</p>
            </div>
            <div>
              <p className="text-sm">Services</p>
            </div>
            <div>
              <p className="text-sm">About</p>
            </div>
          </div>
          <div className="px-6 py-3 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer transition-all">
            <p className="text-sm">Schedule a call</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;