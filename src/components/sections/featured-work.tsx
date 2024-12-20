import { useInView } from "react-intersection-observer";
import Button from "../blocks/buttons/button";
import tempopay from '../../assets/projects/tempopay/tempopay-desktop.png';
import wnw from '../../assets/projects/wnw/wnwdesktop.png';
import youngArtsMobile from '../../assets/projects/youngarts/youngarts-mobile.png'
import youngArtsDesktop from '../../assets/projects/youngarts/youngarts-desktop.png'

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
            <div className='relative border-4 border-nightblue bg-nightblue rounded-[25px] overflow-hidden pt-8 max-w-[775px] lg:min-h-[445px] block sm:hidden'>
              <div className='absolute top-[7px] lg:top-5 left-5 flex items-center gap-3'>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
              </div>
              <img
                className={`w-full transition-all duration-700 ${
                  inView2 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={youngArtsDesktop} alt="Young Arts Image"
              />
            </div>
            <div className="bg-nightblue border-4 border-nightblue rounded-[30px] h-[600px] lg:w-[315px] relative overflow-hidden pt-8 hidden sm:block">
              <div className="absolute top-[.6rem] left-1/2 -translate-x-1/2 h-[.7rem] w-16 bg-white rounded-full"></div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView2 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={youngArtsMobile} alt="Young Arts Project" 
              />
            </div>
            <div className='flex flex-col justify-end lg:justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Young Arts</p>
              </div>
              <div className='flex flex-row sm:flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-5 mt-3 lg:mt-0'>
                <Button styles="hover:text-white hover:bg-nightblue" url="https://www.youngarts.org" text="Website" target="_blank" />
                <Button styles="hover:text-white hover:bg-nightblue" url="/casestudy/youngarts" text="Case Study" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div ref={ref1} className='mb-10 lg:mb-[260px]'>
            <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-8 max-w-[775px] lg:min-h-[445px]'>
              <div className='absolute top-[.6rem] left-5 flex items-center gap-3'>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
              </div>
              <img
                className={`w-full transition-all duration-700 ${
                  inView1 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={wnw} alt="Young Arts Image"
              />
            </div>
            <div className='flex flex-col lg:flex-row justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Working Not Working</p>
                <p className='text-sm text-projectSubText max-w-[400px]'>Software Engineer, converted entire website to Tachyons. Built onboarding flows, Status updates, Profile pages and more.</p>
                <p className='text-tiny text-projectSubText max-w-[400px] mt-2'>Ruby on Rails, Tachyons, SASS, Javascript, Figma</p>
              </div>
              <div className='flex gap-5 mt-3 lg:mt-0'>
              <Button styles="hover:text-white hover:bg-nightblue flex items-center justify-center h-[50px]" text="Website" url="https://www.workingnotworking.com" target="_blank" />
              <Button styles="hover:text-white hover:bg-nightblue flex items-center justify-center h-[50px]" url="/casestudy/workingnotworking" text="Case Study" />
              </div>
            </div>
          </div>
          <div ref={ref3}>
            <div className='relative border-4 border-tempopay bg-tempopay rounded-[25px] overflow-hidden pt-8 max-w-[775px] lg:min-h-[445px]'>
              <div className='absolute top-[.6rem] left-5 flex items-center gap-3'>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
                <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
              </div>
              <img 
                className={`w-full transition-all duration-700 ${
                  inView3 ? 'opactiy-100' : 'opacity-0'
                }`}
                src={tempopay} alt="Young Arts Image" 
              />
            </div>
            <div className='flex flex-col lg:flex-row justify-between w-full mt-6'>
              <div>
                <p className='text-xl sm:text-2xl mb-[6px]'>Tempopay</p>
                <p className='text-sm text-projectSubText max-w-[400px]'>Frontend Engineer in collaboration with Redesign Health's design team</p>
                <p className='text-tiny text-projectSubText mt-2'>Next Js, Typescript, Tailwind, Figma, Vercel</p>
              </div>
              <div className='flex gap-5 mt-3 lg:mt-0'>
                <Button styles="hover:text-white hover:bg-nightblue flex items-center justify-center h-[50px]" url="https://www.tempopay.com" text="Website" target="_blank" />
                <Button styles="hover:text-white hover:bg-nightblue flex items-center justify-center h-[50px]" url="/casestudy/tempopay" text="Case Study" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-52'>
        <Button url="/work" text="View all work" styles="bg-offwhite hover:bg-nightblue hover:text-white hover:no-underline" />
      </div>
    </div>
  );
};

export default FeaturedWork;