const Footer = () => {
  return (
    <footer className="h-screen w-full bg-black px-20 pt-24 pb-10 flex items-center justify-center">
      <div className="max-w-6xl flex flex-col justify-between h-full">
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
          <div className="flex items-center justify-between gap-20 py-3 border rounded-full px-20 bg-offwhite cursor-pointer">
            <div>
              <p className="text-7xl text-black">Work</p>
            </div>
            <div>
              <p className="text-7xl text-black">Services</p>
            </div>
            <div>
              <p className="text-7xl text-black">About</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-20 py-3 border-cta rounded-full px-20 bg-black cursor-pointer mt-12">
            <div className="text-center">
              <p className="text-7xl text-white">Schedule a call</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-24">
            <div>
              <p className="text-sm text-lightgray">© 2010 — 2020</p>
            </div>
            <div className="flex items-center gap-14">
              <p className="text-sm text-lightgray">Linkedin</p>
              <p className="text-sm text-lightgray">Github</p>
              <p className="text-sm text-lightgray">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;