import Button from "../blocks/buttons/button";

const ProjectsInclude = () => {
  return (
    <div className="bg-white pb-12">
      <div className="border-b py-12 border-black flex justify-start items-center">
        <p className="text-2xl section-h-padding">All projects include</p>
      </div>
      <div className="section-h-padding mb-6 sm:mt-36">
        <div className="flex flex-col gap-5 mt-7">
          <p className="text-2xl">Modern and responsive web design.</p>
          <p className="text-2xl">Modern and responsive web development.</p>
          <p className="text-2xl">User-friendly content management system with training session and video tutorials.</p>
          <p className="text-2xl">Design, Development, Deployment and Consultation</p>
          <p className="text-2xl">UI/UX</p>
          <p className="text-2xl">SEO Optimization</p>
          <p className="text-2xl">Comprehensive QA & Testing. Technical support and maintenance.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInclude;