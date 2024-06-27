import { useState } from 'react';

type accordionProps = {
  title: string,
  description: string
}

const Accordion = ({title, description}: accordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  return (
    <>
      <div 
        onMouseEnter={() => setAccordionOpen(!accordionOpen)}
        onMouseLeave={() => setAccordionOpen(!accordionOpen)}
        className="accordion flex flex-col items-center justify-between section-h-padding py-8 border-b border-white"
      >
        <button className="flex items-center justify-between w-full pointer-events-none">
          <p className="large-header text-white text-left">{title}</p>
          <div className={`w-11 h-11 rounded-full border border-white shrink-0 flex items-center justify-center relative p-2 rotate-45 cursor-pointer
            ${accordionOpen ? 'border-nightblue bg-nightblue' : 'border-white bg-transparent'}
          `}>
            <div 
              className={`plus-bar w-8 h-[1px] bg-white absolute top-1/2 rotate-45 -translate-y-1/2 transition-all duration-500
                ${accordionOpen ? 'opacity-0' : 'opacity-100'}`}
              ></div>
            <div 
              className={`plus-bar w-8 h-[1px] bg-white -rotate-45 absolute top-1/2 -translate-y-1/2 transition-all duration-500
              ${accordionOpen ? ' rotate-[135deg]' : '-rotate-45'}`}
            ></div>
          </div>
        </button>
        <div className={`grid overflow-hidden transition-all duration-500 ease-in-out h-0 ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100 h-52' : 'grid-rows-[0fr] opacity-0'
        }`}>
          <p className="text-white text-2xl text-left overflow-hidden min-h-52 flex items-end">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;