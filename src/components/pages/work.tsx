import ProjectListItem from "../blocks/project-list-item";
import { projects } from "../../utils/projects";

const Work = () => {
  return (
    <div className=" mt-52">
      <div className="flex items-center justify-between border-b border-black pb-5 gap-5">
        <p className="text-2xl pl-20">Project List</p>
        <p className="text-2xl w-[500px] pr-20">Year</p>
      </div>
      {
        projects.map(project => {
          return (
            <ProjectListItem
              key={project.title}
              title={project.title}
              description={project.description}
              year={project.year}
              url={project.url}
              previewImageOne={project.previewImageOne}
              previewImageTwo={project.previewImageTwo}
              bgColor={project.bgColor}
              slug={project.slug}
            />
          )
        })
      }
    </div>
  );
};

export default Work;