import { NavLink } from "react-router-dom"

type OverlayProps = {
  isOverlayOpen: boolean,
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay = ({ isOverlayOpen, setIsOverlayOpen }: OverlayProps) => {
  return (
    <div className={`flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full ${isOverlayOpen ? 'transition-all duration-1000 h-screen w-full scale-150 z-10 visible' : 'transition-all w-0 h-0 duration-1000 -z-10 invisible'}`}>
      <div className="flex flex-col items-center gap-14 w-full">
        <div className={`flex flex-col justify-center items-center cursor-pointer transition-all w-full h-full ${isOverlayOpen ? 'transition-all duration-1000 opacity-100 delay-300': 'transition-all duration-1000 opacity-0'}`}>
          <NavLink
            onClick={() => setIsOverlayOpen(false)}
            to="/services" className='text-white transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3 px-10'>
            <p className="text-2xl">Services</p>
          </NavLink>
          <NavLink 
            onClick={() => setIsOverlayOpen(false)}
            to="/about"
            className='text-white transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3'
          >
            <p className="text-2xl">About</p>
          </NavLink>
          <NavLink
            onClick={() => setIsOverlayOpen(false)}
            to="/contact"
            className="px-6 py-3 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer 
              transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
            <p className="text-2xl">Schedule a call</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Overlay