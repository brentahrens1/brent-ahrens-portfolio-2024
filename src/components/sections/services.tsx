import Accordion from "../blocks/accordion";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="border-b py-12 border-white flex justify-start items-center">
        <p className="text-white text-2xl section-h-padding">Services</p>
      </div>
      <Accordion title="Web Development" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
      <Accordion title="Design" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
      <Accordion title="Consulting" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
    </div>
  );
};

export default Services;