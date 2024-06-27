import { NavLink } from "react-router-dom"

type OverlayProps = {
  isOverlayOpen: boolean
}

const Overlay = ({ isOverlayOpen }: OverlayProps) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-white z-10 ${isOverlayOpen ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col items-center gap-14 w-full">
        <div className="flex flex-col justify-center items-center cursor-pointer transition-all w-full h-full">
          <NavLink
            to="/services" className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3 px-10'>
            <p className="text-2xl">Services</p>
          </NavLink>
          <NavLink 
            to="/about"
            className='transition-all duration-200 ease-in-out hover:text-nightblue hover:underline py-3'
          >
            <p className="text-2xl">About</p>
          </NavLink>
          <NavLink
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