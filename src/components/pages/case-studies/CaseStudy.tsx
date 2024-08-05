import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { projects } from "../../../utils/projects";
import ProjectListItem from "../../blocks/project-list-item";
import Mobile from "../../blocks/mobile";
import Desktop from "../../blocks/desktop";
import Button from '../../blocks/buttons/button';

const CaseStudy = () => {
  const [ isDesktop, setIsDesktop ] = useState<boolean>(true);
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mt-48 flex flex-col items-center justify-center">
      {
        project.iframe ?
          <div className={`border-4 border-${project.bgColor} rounded-3xl overflow-hidden ${isDesktop ? 'mt-0' : '-mt-10'}`}>
            <iframe
              width={isDesktop ? '890' : '300'}
              height={isDesktop ? '504' : '544'}
              style={{ border:" 0" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={project.url}>
            </iframe>
          </div>
          :
          <div className="flex items-center justify-center section-h-padding">
            <div className={`h-[520px] w-[250px] -mt-10 ${isDesktop ? 'hidden' : 'block'}`}>
              <Mobile mobile={project.mobile} title={project.title} />
            </div>
            <div className={`max-w-[775px] lg:h-[480px] ${isDesktop ? 'block' : 'hidden'}`}>
              <Desktop desktop={project.desktop} title={project.title} />
            </div>
          </div>
      }
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between mt-8 lg:mt-28 section-h-padding">
        <p className="large-header mb-3 lg:mb-0">{project.title}</p>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center justify-between lg:w-[500px]">
          <p className="text-projectSubText text-2xl">{project.year}</p>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setIsDesktop(!isDesktop)}
              className="px-6 py-3 border drop-shadow-button rounded-full bg-offwhite cursor-pointer 
                transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
              <p className="text-sm">{isDesktop ? 'View Mobile' : 'View Desktop'}</p>
            </div>
            <Button 
              url={project.url} 
              text='Website'
            />
          </div>
        </div>
      </div>
      <div className="self-start mt-12 section-h-padding">
        <p className="text-projectSubText text-2xl">{project.description}</p>
        <div className="flex items-center flex-wrap mt-12">
          <p className="text-projectSubText text-2xl mr-5">Tags:</p>
          <div className="flex items-center flex-wrap gap-5 mt-3 lg:mt-0">
            {
              project.tags.map(tag => {
                return (
                  <div
                    className="px-6 py-3 border drop-shadow-button rounded-full bg-offwhite cursor-pointer 
                      transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
                    <p className="text-sm">{tag}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <p className="text-2xl self-start section-padding-l border-b border-black w-full pb-8 pt-24">Featured Projects</p>
      {
        projects.map(project => {
          return (
            <>
                {
                  project.featured ?
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
                  :
                  null
                }
            </>
          )
        })
      }
    </div>
  );
};

export default CaseStudy;