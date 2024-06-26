import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import WebsiteButton from "../blocks/buttons/website-button";
import Button from "../blocks/buttons/button";
import youngarts from '../../assets/projects/youngarts/youngarts-desktop.png';
import tempopay from '../../assets/projects/tempopay/tempopay-desktop.png';
import wnw from '../../assets/projects/wnw/wnw-mobile.png';
import CaseStudyButton from "../blocks/buttons/case-study-button";

const FeaturedWork = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5, rootMargin: '-100px' });

  return (
    <div className='pb-14 flex flex-col items-center justify-center'>
      <div className='flex justify-center gap-7 mb-40'>
        <div>
          <p className="text-2xl mb-44">Featured Work</p>
          
          <div ref={ref2}>
            <div className="bg-nightblue border-4 border-nightblue rounded-[30px] h-[680px] w-[315px] relative overflow-hidden pt-14">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-white rounded-full"></div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView2 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={wnw} alt="Working Not Working" 
              />
            </div>
            <div className='flex flex-col justify-between w-full mt-6'>
              <div>
                <p className='text-2xl mb-[6px]'>Working Not Working</p>
              </div>
              <div className='flex items-center justify-between gap-5 mt-6'>
                <WebsiteButton url={"www.workingnotworking.com"} />
                <CaseStudyButton slug={"workingnotworking"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div ref={ref1} className='mb-[260px]'>
            <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-14 max-w-[775px] min-h-[445px]'>
              <div className='absolute top-5 left-5 flex items-center gap-3'>
                <div className='bg-white w-4 h-4 rounded-full'></div>
                <div className='bg-white w-4 h-4 rounded-full'></div>
                <div className='bg-white w-4 h-4 rounded-full'></div>
              </div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView1 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={youngarts} alt="Young Arts Image"
              />
            </div>
            <div className='flex items-end justify-between w-full mt-6'>
              <div>
                <p className='text-2xl mb-[6px]'>Young Arts</p>
                <p className='text-sm text-projectSubText'>with The National Foundation for the Advancement of Artists</p>
              </div>
              <div className='flex gap-5'>
                <WebsiteButton url={"www.youngarts.com"} />
                <CaseStudyButton slug={"youngarts"} />
              </div>
            </div>
          </div>
          <div ref={ref3}>
            <div className='relative border-4 border-tempopay bg-tempopay rounded-[25px] overflow-hidden pt-14 max-w-[775px] min-h-[445px]'>
              <div className='absolute top-5 left-5 flex items-center gap-3'>
                <div className='bg-white w-4 h-4 rounded-full'></div>
                <div className='bg-white w-4 h-4 rounded-full'></div>
                <div className='bg-white w-4 h-4 rounded-full'></div>
              </div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView3 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={tempopay} alt="Young Arts Image" 
              />
            </div>
            <div className='flex items-end justify-between w-full mt-6'>
              <div>
                <p className='text-2xl mb-[6px]'>Tempopay</p>
                <p className='text-sm text-projectSubText'>with The National Foundation for the Advancement of Artists</p>
              </div>
              <div className='flex gap-5'>
                <WebsiteButton url={"www.tempopay.com"} />
                <CaseStudyButton slug={"tempopay"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-52'>
        <Button url="/work" text="View all work" hoverTextColor="text-nightblue" fontSize='text-2xl' bgColor="bg-offwhite" />
      </div>
    </div>
  );
};

export default FeaturedWork;