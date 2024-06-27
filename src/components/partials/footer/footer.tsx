import { Link } from "react-router-dom";
import { useState } from "react";
import { timeWithoutSeconds } from "../../../utils/time";
import WeatherPopup from "../../blocks/weather-popup";
import Button from "../../blocks/buttons/button";

const Footer = () => {
  const [weatherOpen, setWeatherOpen] = useState<boolean>(false);

  return (
    <footer className="h-full md:h-screen w-full bg-black section-h-padding pt-24 pb-10 flex items-center justify-center">
      <div className="flex flex-col justify-between h-full w-full gap-7">
        <div>
          <div className="flex flex-col items-start">
            <span
              onMouseEnter={() => setWeatherOpen(true)}
              onMouseLeave={() => setWeatherOpen(false)}
              className="large-header relative text-white"
            >
              Los Angeles (PST-{timeWithoutSeconds})
              <WeatherPopup weatherOpen={weatherOpen} />
            </span>
            <h1 className="large-header text-white mt-12">Stay Connected</h1>
          </div>
          <div className="flex items-end flex-wrap justify-between">
            <p className="text-2xl text-white">Juankarlomfd@gmail.com</p>
            <p className="text-2xl text-white px-3 py-1 border-cta border-white rounded-full w-28 mt-3 lg:mt-0">Submit</p>
            <div className="mt-5 lg:mt-0">
              <p className="text-2xl text-white">FAQ</p>
              <p className="text-2xl text-white">Resume</p>
              <p className="text-2xl text-white">brentholmesahrens@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden sm:flex items-center justify-between sm:gap-20 border rounded-full section-h-padding bg-offwhite cursor-pointer">
            <Link to="/work" className="py-3">
              <p className="large-header text-black hover:text-nightblue hover:underline">Work</p>
            </Link>
            <Link to="/services" className="py-3">
              <p className="large-header text-black hover:text-nightblue hover:underline">Services</p>
            </Link>
            <Link to="/about" className="py-3">
              <p className="large-header text-black hover:text-nightblue hover:underline">About</p>
            </Link>
          </div>
          <div className="flex sm:hidden flex-col items-center justify-center gap-5 section-h-padding">
            <Button
             url="/work"
             text="Work"
             styles="bg-white w-full"
            />
            <Button
             url="/services"
             text="Services"
             styles="bg-white w-full"
            />
            <Button
             url="/about"
             text="About"
             styles="bg-white w-full"
            />
          </div>
          <div className="hidden sm:flex justify-center items-center gap-20 py-3 border-cta rounded-full section-h-padding bg-black cursor-pointer mt-12">
            <div className="text-center">
              <p className="large-header text-white">Schedule a call</p>
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
    </footer>
  );
};

export default Footer;