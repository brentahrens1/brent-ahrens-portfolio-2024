import Button from "../blocks/buttons/button";

const DevelopmentIncludes = () => {
  return (
    <div className="section-h-padding py-12">
      <h1 className="large-header text-white mb-48">Development includes</h1>
      <div className="bg-black flex items-center flex-wrap gap-9">
        <Button text="Front-end development" bgColor="bg-black" textColor="text-white" />
        <Button text="Back-end development" bgColor="bg-black" textColor="text-white" />
        <Button text="Full responsiveness for  99% + devices" bgColor="bg-black" textColor="text-white" />
        <Button text="Bespoke animations and/or WebGL" bgColor="bg-black" textColor="text-white" />
        <Button text="WCAG compliance and consultation" bgColor="bg-black" textColor="text-white" />
        <Button text="Security practices implementation" bgColor="bg-black" textColor="text-white" />
        <Button text="Performance optimisation" bgColor="bg-black" textColor="text-white" />
        <Button text="Browser compatibility" bgColor="bg-black" textColor="text-white" />
      </div>
    </div>
  );
};

export default DevelopmentIncludes;