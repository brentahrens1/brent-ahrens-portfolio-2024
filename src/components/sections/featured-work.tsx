import youngarts from '../../assets/featured-work/youngarts.png';
import tempopay from '../../assets/featured-work/tempopay.png';
 import wnw from '../../assets/featured-work/wnw-mobile.png';

import { useInView } from "react-intersection-observer";



const FeaturedWork = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5, rootMargin: '-100px' });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5, rootMargin: '-100px' });

  return (
    <div className='pb-14 flex flex-col items-center justify-center'>
      <div className='flex justify-center gap-7 mb-40'>
        <div>
          <p className="text-2xl mb-44">Featured Work</p>
          <div ref={ref2} className="bg-nightblue border-4 border-nightblue rounded-[30px] h-[680px] w-[315px] relative overflow-hidden pt-14">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-white rounded-full"></div>
            <img 
              className={`w-full transition-all duration-700 ${
                inView2 ? 'opactiy-100' : 'opacity-0'
              }`}
              src={wnw} alt="Working Not Working" 
            />
          </div>
        </div>
        <div>
          <div ref={ref1} className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-14 max-w-[775px] mb-[260px] min-h-[445px]'>
            <div className='absolute top-6 left-5 flex items-center gap-3'>
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
          <div ref={ref3} className='relative border-4 border-tempopay bg-tempopay rounded-[25px] overflow-hidden pt-14 max-w-[775px] min-h-[445px]'>
            <div className='absolute top-6 left-5 flex items-center gap-3'>
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
        </div>
      </div>
      <div className='py-2 px-6 border drop-shadow-button rounded-3xl bg-offwhite cursor-pointer transition-all ease-in-out hover:text-nightblue hover:underline w-52'>
        <p className="text-2xl">View all work</p>
      </div>
    </div>
  );
};

export default FeaturedWork;