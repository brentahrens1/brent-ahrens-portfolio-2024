import { useState } from "react";
import Button from "./buttons/button";

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
      className={`py-7 border-b border-black relative w-full overflow-hidden`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
        <div className={
          `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out -z-10 rounded-full
          ${isHovered ? 'duration-[1.3s] scale-150 h-full w-full' : ' scale-0 duration-[1.3s] w-4 h-4 '}`}
          style={{backgroundColor: bgColor}}
        >
        </div>
        <div className="section-h-padding">
          <h1 className="large-header mb-5">{title}</h1>
          <p className="text-2xl text-projectSubText max-w-[545px]">{description}</p>
        </div>
        <div className="flex items-center justify-end gap-8 lg:gap-24 section-h-padding">
          <p className="text-2xl text-projectSubText">{year}</p>
          <div className="flex items-center gap-4">
            <Button styles="hover:text-nightblue" text="Website" url={url} target="_blank" />
            <Button styles="hover:text-nightblue" text="Case Study" url={`/casestudy/${slug}`} />
          </div>
        </div>
      </div>
      <div 
        className={
          `grid grid-cols-2 grid-rows-1 gap-5 section-h-padding overflow-hidden transition-all ease-in-out h-0 w-full lg:w-[52%]
          ${isHovered ? 'grid-rows-[1fr] opacity-100 duration-700 delay-300 h-[170px]' : 'grid-rows-[0fr] duration-700 opacity-0'}
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