type desktopProps = {
  desktop: string,
  title: string
}

const Desktop = ({ desktop, title }: desktopProps) => {
  return (
    <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-8 h-full w-full'>
      <div className='absolute top-[.6rem] left-5 flex items-center gap-3'>
        <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
        <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
        <div className='bg-white w-[10px] h-[10px] rounded-full'></div>
      </div>
      <img 
        className={`w-full h-full object-cover`}
        src={desktop} alt={title}
      />
    </div>
  );
};

export default Desktop;