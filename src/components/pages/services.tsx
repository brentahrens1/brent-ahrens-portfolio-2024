import ServicesSection from "../sections/services";
import Faq from "../sections/faq";
import DevelopmentIncludes from "../sections/development-includes";

const Services = () => {
  return (
    <div className="pt-52 bg-black">
      <ServicesSection />
      <DevelopmentIncludes />
      <Faq />
    </div>
  );
};

export default Services;