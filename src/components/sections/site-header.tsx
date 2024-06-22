import { Link } from "react-router-dom";
import { useState } from "react";
import { timeWithoutSeconds } from "../../utils/time";
import WeatherPopup from "../blocks/weather-popup";

const SiteHeader = () => {
  const [weatherOpen, setWeatherOpen] = useState<boolean>(false);
  

  return (
    <div className="w-full flex items-center justify-center h-screen px-20">
      <div className="text-4xl leading-[45px] md:text-5xl md:leading-[58px] xl:text-7xl xl:leading-86 text-left w-full relative">
        Front-End developer, living<br /> in 
        <span
          onMouseEnter={() => setWeatherOpen(true)}
          onMouseLeave={() => setWeatherOpen(false)}
          className="pl-6 relative"
        >
          Los Angeles (PST-{timeWithoutSeconds})
          <WeatherPopup weatherOpen={weatherOpen} />
        </span>
        <br /> creating and build functional<br />
        <Link
          to="/work"
          className="border drop-shadow-button rounded-full px-7 py-1 mr-6 transition-all duration-200 ease-in-out hover:text-nightblue hover:underline bg-offwhite cursor-pointer">
          websites
        </Link>
        with trusted
        <Link
          to="/services"
          className="border drop-shadow-button rounded-full px-7 py-1 mx-6 bg-offwhite cursor-pointer transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
          Services
        </Link>
      </div>
    </div>
  );
};

export default SiteHeader;