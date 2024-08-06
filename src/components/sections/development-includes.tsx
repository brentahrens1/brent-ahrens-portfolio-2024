import Button from "../blocks/buttons/button";

const DevelopmentIncludes = () => {
  return (
    <div className="section-h-padding py-12">
      <h1 className="large-header text-white mb-6 sm:mb-48">Development includes</h1>
      <div className="bg-black flex items-center flex-wrap gap-9">
        <Button text="Front-end development" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Back-end development" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Full responsiveness for  99% + devices" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Bespoke animations and/or WebGL" styles="bg-black hover:no-underline cursor-default" />
        <Button text="WCAG compliance and consultation" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Security practices implementation" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Performance optimization" styles="bg-black hover:no-underline cursor-default" />
        <Button text="Browser compatibility" styles="bg-black hover:no-underline cursor-default" />
      </div>
    </div>
  );
};

export default DevelopmentIncludes;