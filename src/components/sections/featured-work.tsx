import youngarts from '../../assets/featured-work/youngarts.png';
import tempopay from '../../assets/featured-work/tempopay.png';

const FeaturedWork = () => {
  return (
    <div className='pb-14 flex flex-col items-center justify-center'>
      <div className='flex justify-center gap-7 mb-40'>
        <div>
          <p className="text-2xl mb-44">Featured Work</p>
          <div className="bg-nightblue rounded-[30px] h-[680px] w-[315px] relative">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-14 max-w-[775px] mb-[260px] min-h-[445px]'>
            <div className='absolute top-6 left-5 flex items-center gap-3'>
              <div className='bg-white w-4 h-4 rounded-full'></div>
              <div className='bg-white w-4 h-4 rounded-full'></div>
              <div className='bg-white w-4 h-4 rounded-full'></div>
            </div>
            <img className='w-full opacity-0' src={youngarts} alt="Young Arts Image" />
          </div>
          <div className='relative border-4 border-tempopay bg-tempopay rounded-[25px] overflow-hidden pt-14 max-w-[775px] min-h-[445px]'>
            <div className='absolute top-6 left-5 flex items-center gap-3'>
              <div className='bg-white w-4 h-4 rounded-full'></div>
              <div className='bg-white w-4 h-4 rounded-full'></div>
              <div className='bg-white w-4 h-4 rounded-full'></div>
            </div>
            <img className='w-full opacity-0' src={tempopay} alt="Young Arts Image" />
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