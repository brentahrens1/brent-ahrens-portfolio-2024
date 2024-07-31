type mobileProps = {
  mobile: string,
  title: string,
}

const Mobile = ({ mobile, title }: mobileProps) => {
  return (
    <div className="bg-nightblue border-4 border-nightblue rounded-[30px] relative overflow-hidden pt-14 h-full w-full">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-white rounded-full"></div>
      <img 
        className={`w-full`}
        src={mobile} alt={title}
      />
    </div>
  );
};

export default Mobile;