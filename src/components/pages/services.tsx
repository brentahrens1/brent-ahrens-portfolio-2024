import ServicesSection from "../sections/services";
import Faq from "../sections/faq";
import DevelopmentIncludes from "../sections/development-includes";
import ProjectsInclude from "../sections/projects-include";

const Services = () => {
  return (
    <div className="pt-52 bg-black">
      <ServicesSection />
      <ProjectsInclude />
      <DevelopmentIncludes />
      <Faq />
    </div>
  );
};

export default Services;