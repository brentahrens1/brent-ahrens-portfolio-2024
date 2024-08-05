import Button from "../blocks/buttons/button";

const DevelopmentIncludes = () => {
  return (
    <div className="section-h-padding py-12">
      <h1 className="large-header text-white mb-6 sm:mb-48">Development includes</h1>
      <div className="bg-black flex items-center flex-wrap gap-9">
        <Button text="Front-end development" styles="bg-black hover:text-nightblue" />
        <Button text="Back-end development" styles="bg-black hover:text-nightblue" />
        <Button text="Full responsiveness for  99% + devices" styles="bg-black hover:text-nightblue" />
        <Button text="Bespoke animations and/or WebGL" styles="bg-black hover:text-nightblue" />
        <Button text="WCAG compliance and consultation" styles="bg-black hover:text-nightblue" />
        <Button text="Security practices implementation" styles="bg-black hover:text-nightblue" />
        <Button text="Performance optimisation" styles="bg-black hover:text-nightblue" />
        <Button text="Browser compatibility" styles="bg-black hover:text-nightblue" />
      </div>
    </div>
  );
};

export default DevelopmentIncludes;