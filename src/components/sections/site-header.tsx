import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { timeWithoutSeconds } from "../../utils/time";
import WeatherPopup from "../blocks/weather-popup";
import { projects } from "../../utils/projects";

const SiteHeader = () => {
  const [weatherOpen, setWeatherOpen] = useState<boolean>(false);
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);
  const [animatedIndices, setAnimatedIndices] = useState<number[]>([]);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [pixelate, setPixelate] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    if (buttonHovered) {
      setPixelate(false);

      setAnimatedIndices([currentIndex]);
      currentIndex += 1;

      intervalRef.current = setInterval(() => {
        setAnimatedIndices((prevIndices) => [...prevIndices, currentIndex]);
        currentIndex += 1;

        if (currentIndex >= projects.length) {
          clearInterval(intervalRef.current!);
        }
      }, 5000);
    } else {
      setPixelate(true);

      setTimeout(() => {
        setAnimatedIndices([]);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setPixelate(false);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [buttonHovered]);

  return (
    <div className="w-full flex items-center justify-center h-screen section-h-padding">
      <div className="text-[4.9vw] text-left text-nowrap w-full relative max-w-[1400px] hidden md:block">
        Front-End Engineer, living<br /> in 
        <span
          onMouseEnter={() => setWeatherOpen(true)}
          onMouseLeave={() => setWeatherOpen(false)}
          className="pl-6 relative"
        >
          <WeatherPopup weatherOpen={weatherOpen} />
          Los Angeles (PST-{currentTime})
        </span>
        <br /> creating and building functional<br />
        <div className="relative inline-block mr-6">
          <Link
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            to="/work"
            className="relative border drop-shadow-button rounded-full px-7 py-1 transition-all duration-1000 ease-in-out 
              hover:bg-nightblue hover:text-white bg-offwhite cursor-pointer z-20"
          >
            websites
          </Link>
          <div className="absolute left-0 h-[100px] -bottom-8 bg-white z-10 w-full"></div>
          {
            projects.map((project, index) => {
              return (
                <div 
                  key={project.title}
                  className={`flex flex-col items-center justify-center absolute left-1/2 
                    -translate-x-1/2 top-5 transition-all duration-1000
                    ${animatedIndices.includes(index) ? 'animate-image-rise' : ''}
                    ${pixelate ? 'pixelate-effect' : ''}`}
                >
                  <img className={`w-[300px] transition-all duration-300`} src={project.desktop} alt={project.title} />
                </div>
              )
            })
          }
        </div>
        with trusted
        <span className="group py-1 relative ml-6 border drop-shadow-button rounded-full overflow-clip bg-offwhite hover:bg-nightblue">
          <Link
            to="/services"
            className=" inline-flex relative px-7 py-1 transition-all duration-200 ease-in-out 
              hover:text-white hover:underline cursor-pointer z-10 overflow-clip"
          >
            <span className="group-hover:opacity-0 transition-all duration-100">Services</span>
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
        </span>
      </div>
      <div className="text-[7.3vw] leading-[56px] sm:leading-[85px] text-left text-nowrap w-full relative max-w-[1400px] md:hidden">
        <WeatherPopup weatherOpen={weatherOpen} />
        Front-End developer, <br /> living in 
        <span
          onMouseEnter={() => setWeatherOpen(true)}
          onMouseLeave={() => setWeatherOpen(false)}
          className="pl-6 relative"
        >
          Los Angeles<br />  (PST-{timeWithoutSeconds})
        </span>
        <br /> creating and build <br /> functional
        <div className="relative inline-block ml-4">
          <Link
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            to="/work"
            className="relative border drop-shadow-button rounded-full px-7 py-1 transition-all duration-200 ease-in-out 
              hover:text-nightblue hover:underline bg-offwhite cursor-pointer z-10"
          >
            websites
          </Link>
        </div>
        <br /> with trusted
        <span className="relative ml-4 border drop-shadow-button rounded-full overflow-clip hover:bg-nightblue bg-offwhite py-1">
          <Link
            to="/services"
            className="relative px-7 py-1 transition-all duration-200 ease-in-out 
              hover:text-white hover:underline cursor-pointer z-10 overflow-clip"
          >
            <span className="group-hover:opacity-0 transition-all duration-100">Services</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SiteHeader;