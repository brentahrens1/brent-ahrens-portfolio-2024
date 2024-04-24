const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <p>Brent Ahrens</p>
        </div>
        <div className="flex items-center">
          <div>
            <p>Work</p>
          </div>
          <div>
            <p>Services</p>
          </div>
          <div>
            <p>About</p>
          </div>
        </div>
        <div>
          <p>Schedule a call</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;