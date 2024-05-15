import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-20">
      <p className="text-7xl leading-86 text-left w-full">
        Front-End developer, living<br/> in Los Angeles (PST-01:59PM)<br/> creating and build functional<br/> 
        <Link
          to="/work"
          className="border drop-shadow-button rounded-full px-7 py-1 mr-6 transition-all duration-200
          ease-in-out hover:text-nightblue hover:underline bg-offwhite cursor-pointer">
          websites
        </Link>
        with trusted
        <Link 
          to="/services"
          className="border drop-shadow-button rounded-full px-7 py-1 mx-6 bg-offwhite cursor-pointer 
          transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
          Services
        </Link>
      </p>
    </div>
  );
};

export default SiteHeader;