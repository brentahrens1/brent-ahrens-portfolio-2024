import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-screen w-full bg-black px-20 pt-24 pb-10 flex items-center justify-center">
      <div className="flex flex-col justify-between h-full w-full gap-7">
        <div>
          <div className="flex flex-col items-start">
            <h1 className="text-7xl text-white font-normal">Los Angeles (PST-01:59PM)</h1>
            <h1 className="text-7xl text-white mt-12">Stay Connected</h1>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-2xl text-white">Juankarlomfd@gmail.com</p>
            <p className="text-2xl text-white px-3 py-1 border-cta border-white rounded-full w-28">Submit</p>
            <div>
              <p className="text-2xl text-white">FAQ</p>
              <p className="text-2xl text-white">Resume</p>
              <p className="text-2xl text-white">brentholmesahrens@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-20 border rounded-full px-20 bg-offwhite cursor-pointer">
            <Link to="/work" className="py-3">
              <p className="text-7xl text-black">Work</p>
            </Link>
            <Link to="/services" className="py-3">
              <p className="text-7xl text-black">Services</p>
            </Link>
            <Link to="/about" className="py-3">
              <p className="text-7xl text-black">About</p>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-20 py-3 border-cta rounded-full px-20 bg-black cursor-pointer mt-12">
            <div className="text-center">
              <p className="text-7xl text-white">Schedule a call</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-24">
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