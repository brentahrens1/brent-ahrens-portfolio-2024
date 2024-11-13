type mobileProps = {
  mobile: string,
  title: string,
}

const Mobile = ({ mobile, title }: mobileProps) => {
  return (
    <div className="bg-nightblue border-4 border-nightblue rounded-[30px] relative overflow-hidden pt-8 h-full w-full">
      <div className="absolute top-[.6rem] left-1/2 -translate-x-1/2 h-[.6rem] w-16 bg-white rounded-full"></div>
      <img 
        className={`w-full`}
        src={mobile} alt={title}
      />
    </div>
  );
};

export default Mobile;