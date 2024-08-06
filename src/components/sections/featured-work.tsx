import { useInView } from "react-intersection-observer";
import Button from "../blocks/buttons/button";
import tempopay from '../../assets/projects/tempopay/tempopay-desktop.png';
import wnw from '../../assets/projects/wnw/wnwdesktop.png';
import youngArtsMobile from '../../assets/projects/youngarts/youngarts-mobile.png'

const FeaturedWork = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5, rootMargin: '-100px' });

  return (
    <div className='pb-14 flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row justify-center lg:gap-7 mb-40 section-h-padding'>
        <div className="mb-10 lg:mb-0">
          <p className="text-2xl mb-10 lg:mb-44">Featured Work</p>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-0 sm:gap-6 lg:gap-0" ref={ref2}>
            <div className="bg-nightblue border-4 border-nightblue rounded-[30px] h-[600px] lg:w-[315px] relative overflow-hidden pt-14">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-white rounded-full"></div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView2 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={youngArtsMobile} alt="Working Not Working" 
              />
            </div>
            <div className='flex flex-col justify-end lg:justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Young Arts</p>
              </div>
              <div className='flex flex-row sm:flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-5 mt-3 lg:mt-0'>
                <Button url="www.youngarts.org" text="Website" />
                <Button url="/casestudy/youngarts" text="Case Study" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div ref={ref1} className='mb-10 lg:mb-[260px]'>
            <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-7 lg:pt-14 max-w-[775px] lg:min-h-[445px]'>
              <div className='absolute top-[7px] lg:top-5 left-5 flex items-center gap-3'>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
              </div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView1 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={wnw} alt="Young Arts Image"
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-end justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Working Not Working</p>
                <p className='text-sm text-projectSubText'>with The National Foundation for the Advancement of Artists</p>
              </div>
              <div className='flex gap-5 mt-3 lg:mt-0'>
              <Button text="Website" url="www.workingnotworking.com" target="_blank" />
              <Button url="/casestudy/workingnotworking" text="Case Study" />
              </div>
            </div>
          </div>
          <div ref={ref3}>
            <div className='relative border-4 border-tempopay bg-tempopay rounded-[25px] overflow-hidden pt-7 lg:pt-14 max-w-[775px] lg:min-h-[445px]'>
              <div className='absolute top-[7px] lg:top-5 left-5 flex items-center gap-3'>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
                <div className='bg-white w-[13px] h-[13px] lg:w-4 lg:h-4 rounded-full'></div>
              </div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView3 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={tempopay} alt="Young Arts Image" 
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-end justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Tempopay</p>
                <p className='text-sm text-projectSubText'>with The National Foundation for the Advancement of Artists</p>
              </div>
              <div className='flex gap-5 mt-3 lg:mt-0'>
                <Button url="www.tempopay.com" text="Website" />
                <Button url="/casestudy/tempopay" text="Case Study" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-52'>
        <Button url="/work" text="View all work" styles="hover:text-nightblue bg-offwhite" />
      </div>
    </div>
  );
};

export default FeaturedWork;