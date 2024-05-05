import Accordion from "../blocks/accordion";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="border-b py-12 border-white flex justify-start items-center">
        <p className="text-white text-2xl px-20">Services</p>
      </div>
      <Accordion title="All in One Service" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
      <Accordion title="Project Based Development" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
      <Accordion title="Scalable Dev Partnership" description="With our AIO service, we're able to handle one-off projects with a comprehensive package of consultation, design, development, and deployment." />
    </div>
  );
};

export default Services;