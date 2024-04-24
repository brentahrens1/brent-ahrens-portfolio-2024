const Navbar = () => {
  return (
    <nav className="w-full py-10 px-20">
      <div className="flex items-center justify-between w-full">
        <div className="py-2 px-6 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer hover:drop-shadow-none transition-all">
          <p className="text-2xl">Brent Ahrens</p>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-20 px-6 py-3 border rounded-3xl drop-shadow-button bg-offwhite cursor-pointer hover:drop-shadow-none transition-all">
            <div>
              <p className="text-sm">Work</p>
            </div>
            <div>
              <p className="text-sm">Services</p>
            </div>
            <div>
              <p className="text-sm">About</p>
            </div>
          </div>
          <div className="px-6 py-3 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer hover:drop-shadow-none transition-all">
            <p className="text-sm">Schedule a call</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;