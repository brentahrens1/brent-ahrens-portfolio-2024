const SiteHeader = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-20">
      <p className="text-7xl leading-86 text-left w-full">
        Front-End developer, living<br/> in Los Angeles (PST-01:59PM)<br/> creating and build functional<br/> 
        <span className="border drop-shadow-button rounded-full px-7 py-1 mr-6 bg-offwhite cursor-pointer">websites</span>
        with trusted
        <span className="border drop-shadow-button rounded-full px-7 py-1 mx-6 bg-offwhite cursor-pointer">services</span>
      </p>
    </div>
  );
};

export default SiteHeader;