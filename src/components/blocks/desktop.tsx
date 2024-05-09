type desktopProps = {
  desktop: string,
  title: string
}

const Desktop = ({ desktop, title }: desktopProps) => {
  return (
    <div className='relative border-4 border-youngarts bg-youngarts rounded-[25px] overflow-hidden pt-14 h-full w-full'>
      <div className='absolute top-5 left-5 flex items-center gap-3'>
        <div className='bg-white w-4 h-4 rounded-full'></div>
        <div className='bg-white w-4 h-4 rounded-full'></div>
        <div className='bg-white w-4 h-4 rounded-full'></div>
      </div>
      <img 
        className={`w-full`}
        src={desktop} alt={title}
      />
    </div>
  );
};

export default Desktop;