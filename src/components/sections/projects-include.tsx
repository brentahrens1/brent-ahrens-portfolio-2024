import Button from "../blocks/buttons/button";

const ProjectsInclude = () => {
  return (
    <div className="bg-white pb-12">
      <div className="border-b py-12 border-black flex justify-start items-center">
        <p className="text-2xl section-h-padding">All projects include</p>
      </div>
      <div className="section-h-padding mb-6 sm:mt-36">
        <div className="flex flex-col gap-5 mt-7">
          <p className="text-2xl">User-friendly no code content management with training.</p>
          <p className="text-2xl">Deployment assistance.Development/Deployment consultation.</p>
          <p className="text-2xl">UI/UX consultation.</p>
          <p className="text-2xl">SEO analytics setup.</p>
          <p className="text-2xl">Comprehensive QA & Testing.Onboarding technical support and maintenance.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInclude;