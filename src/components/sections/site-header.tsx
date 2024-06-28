import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { timeWithoutSeconds } from "../../utils/time";
import WeatherPopup from "../blocks/weather-popup";
import { projects } from "../../utils/projects";

const SiteHeader = () => {
  const [weatherOpen, setWeatherOpen] = useState<boolean>(false);
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);
  const [currentProjectImage, setCurrentProjectImage] = useState<string>(projects[0].desktop);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (buttonHovered) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % projects.length);
      }, 1100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [buttonHovered]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentProjectImage(projects[count].desktop);
    }, 500);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="w-full flex items-center justify-center h-screen section-h-padding">
      <div className="large-header text-left w-full relative">
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
        <div className="relative inline-block mr-6">
          <Link
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            to="/work"
            className="relative border drop-shadow-button rounded-full px-7 py-1 transition-all duration-200 ease-in-out 
              hover:text-nightblue hover:underline bg-offwhite cursor-pointer z-10"
          >
            websites
          </Link>
          <div 
            className={`flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 transition-all z-0
            ${buttonHovered ? 'bottom-full w-full origin-center duration-700' : 'bottom-0 w-0 origin-center duration-700'}`}
          >
            <img className={`w-[300px] transition-all duration-300`} src={currentProjectImage} alt="Project Image" />
          </div>
        </div>
        with trusted
        <div className="group overflow-hidden relative inline-block mx-6 border drop-shadow-button rounded-full align-middle">
          <Link
            to="/services"
            className="px-7 py-1 bg-offwhite cursor-pointer block
              transition-all duration-200 ease-in-out hover:text-white hover:bg-nightblue"
          >
            <div className="group-hover:opacity-0 transition-all duration-100">Services</div>
            <div 
              className="combined-transform combined-transform-animation absolute top-1/2 left-0 w-100 flex items-center 
                justify-start gap-2 transition-all duration-100 opacity-0 group-hover:opacity-100"
            >
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-base uppercase">Development</p>
                <p className="text-base uppercase">Consulting</p>
                <p className="text-base uppercase">Design</p>
                <p className="text-base uppercase">SEO</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-base uppercase">Development</p>
                <p className="text-base uppercase">Consulting</p>
                <p className="text-base uppercase">Design</p>
                <p className="text-base uppercase">SEO</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;