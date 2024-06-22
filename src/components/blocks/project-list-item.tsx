import { useState } from "react";
import { Link } from "react-router-dom";
import WebsiteButton from "./buttons/website-button";
import CaseStudyButton from "./buttons/case-study-button";

type projectProps = {
  title: string,
  description: string,
  year: string,
  url: string,
  bgColor: string,
  previewImageOne: string,
  previewImageTwo: string,
  slug: string
}

const ProjectListItem = ({
  title, description, year, url, bgColor, previewImageOne, previewImageTwo, slug
}: projectProps) => {
  const [ isHovered, setIsHovered ] = useState<boolean>(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      className={`py-7 border-b border-black relative w-full`}
    >
      <div className="flex items-start justify-between gap-5">
        <div className={
          `absolute top-0 left-0 h-full transition-all ease-in-out -z-10 
          ${isHovered ? 'w-full duration-[6s]' : 'w-[0%] duration-700'}`}
          style={{backgroundColor: bgColor}}
        >
        </div>
        <div className="pl-20">
          <h1 className="text-7xl mb-5">{title}</h1>
          <p className="text-2xl text-projectSubText max-w-[545px]">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-24 pr-20 w-[500px]">
          <p className="text-2xl text-projectSubText">{year}</p>
          <div className="flex items-center gap-4">
            <WebsiteButton url={url} />
            <CaseStudyButton slug={slug} />
          </div>
        </div>
      </div>
      <div 
        className={
          `grid grid-cols-2 grid-rows-1 gap-5 px-20 overflow-hidden transition-all ease-in-out h-0 w-[52%]
          ${isHovered ? 'grid-rows-[1fr] opacity-100 duration-[2s] delay-[6s] h-[170px]' : 'grid-rows-[0fr] duration-[2s] opacity-0'}
          `
        }
      >
        <img className="pt-5" src={previewImageOne} alt={title} />
        <img className="pt-5" src={previewImageTwo} alt={title} />
      </div>
    </div>
  );
};

export default ProjectListItem;