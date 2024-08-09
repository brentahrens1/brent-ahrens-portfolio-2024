import { Link } from "react-router-dom"
import { useState } from "react";
import { timeWithoutSeconds } from "../../../utils/time";
import WeatherPopup from "../../blocks/weather-popup";
import Button from "../../blocks/buttons/button";

type OverlayProps = {
  isOverlayOpen: boolean,
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay = ({ isOverlayOpen, setIsOverlayOpen }: OverlayProps) => {
  const [weatherOpen, setWeatherOpen] = useState<boolean>(false);

  return (
    <div className={`flex justify-center items-center ${isOverlayOpen ? 'visible' : 'invisible'}`}>
      <div className={`flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full ${isOverlayOpen ? 'transition-all duration-1000 h-screen w-full scale-150 z-10 visible' : 'transition-all w-0 h-0 duration-1000 -z-10 invisible'}`}>
      </div>
      <div className={`h-full w-full py-10 flex items-center justify-center overflow-hidden z-20 relative transition-all max-w-[1200px] ${isOverlayOpen ? 'opacity-100 delay-700 duration-500' : 'opacity-0 duration-300'}`}>
        <div className="flex flex-col justify-between h-full w-full gap-7">
          <div>
            <div className="flex flex-col items-start">
              <span
                onMouseEnter={() => setWeatherOpen(true)}
                onMouseLeave={() => setWeatherOpen(false)}
                className=" text-3xl relative text-white"
              >
                Los Angeles (PST-{timeWithoutSeconds})
                <WeatherPopup weatherOpen={weatherOpen} />
              </span>
              <h1 className=" text-3xl text-white mt-12">Stay Connected</h1>
            </div>
            <div className="flex items-end justify-between">
              {/* <p className="text-2xl text-white">Juankarlomfd@gmail.com</p>
              <p className="text-2xl text-white px-3 py-1 border-cta border-white rounded-full w-28 mt-3 lg:mt-0">Submit</p> */}
              <div className="mt-5 lg:mt-0">
                <a href="/BrentAhrensResume.pdf" className="text-base sm:text-2xl text-white" target="_blank">Resume</a>
                <p className="text-base sm:text-2xl text-white">brentholmesahrens@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden sm:flex items-center justify-between sm:gap-20 border rounded-full section-h-padding bg-offwhite cursor-pointer">
              <Link to="/work" className="py-3">
                <p className=" text-3xl text-black hover:text-nightblue hover:underline">Work</p>
              </Link>
              <Link to="/services" className="py-3">
                <p className=" text-3xl text-black hover:text-nightblue hover:underline">Services</p>
              </Link>
              <Link to="/about" className="py-3">
                <p className=" text-3xl text-black hover:text-nightblue hover:underline">About</p>
              </Link>
            </div>
            <div className="flex sm:hidden flex-col items-center justify-center gap-5 section-h-padding">
              <Button
              url="/work"
              text="Work"
              styles="bg-white w-full hover:text-nightblue"
              />
              <Button
              url="/services"
              text="Services"
              styles="bg-white w-full hover:text-nightblue"
              />
              <Button
              url="/about"
              text="About"
              styles="bg-white w-full hover:text-nightblue"
              />
            </div>
            <div 
              className="hidden sm:flex justify-center items-center gap-20 py-3 border-cta rounded-full transition-all duration-300 
                section-h-padding cursor-pointer mt-12 hover:bg-nightblue hover:border-nightblue"
            >
              <div className="text-center">
                <p className=" text-3xl text-white">Contact</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-16 sm:mt-24">
              <div>
                <p className="text-sm text-lightgray">©Studio Wozzie 2024</p>
              </div>
              <div className="flex items-center gap-14">
                <Link to="https://www.linkedin.com/in/brenthahrens/" target="_blank" className="text-sm text-lightgray">Linkedin</Link>
                <Link to="https://github.com/brentahrens1" className="text-sm text-lightgray">Github</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Overlay