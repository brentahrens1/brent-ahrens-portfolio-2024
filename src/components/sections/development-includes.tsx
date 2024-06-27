import Button from "../blocks/buttons/button";

const DevelopmentIncludes = () => {
  return (
    <div className="section-h-padding py-12">
      <h1 className="large-header text-white mb-48">Development includes</h1>
      <div className="bg-black flex items-center flex-wrap gap-9">
        <Button text="Front-end development" styles="bg-black text-white" />
        <Button text="Back-end development" styles="bg-black text-white" />
        <Button text="Full responsiveness for  99% + devices" styles="bg-black text-white" />
        <Button text="Bespoke animations and/or WebGL" styles="bg-black text-white" />
        <Button text="WCAG compliance and consultation" styles="bg-black text-white" />
        <Button text="Security practices implementation" styles="bg-black text-white" />
        <Button text="Performance optimisation" styles="bg-black text-white" />
        <Button text="Browser compatibility" styles="bg-black text-white" />
      </div>
    </div>
  );
};

export default DevelopmentIncludes;