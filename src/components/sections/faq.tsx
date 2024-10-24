import { useState } from "react";
import { serviceItems } from "../../utils/faq";

const Faq = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);
  const [indexClicked, setIndexClicked] = useState<number>(0);
  const [titleClicked, setTitleClicked] = useState<string>('');

  const handleQuestionClick = (index: number) => {
    setIndexClicked(index);
    setIsAnswerOpen(true);
  };
  
  const handleAnswerClose = () => {
    setIndexClicked(0);
    setTitleClicked('');
    setIsAnswerOpen(false);
  };

  return (
    <div className="bg-white sm:py-20 flex flex-col sm:gap-16 pb-20">
      <div className="border-b py-12 border-black flex justify-start items-center">
        <p className="text-2xl section-h-padding">FAQ</p>
      </div>
      {
        serviceItems.map((faqQuestion, id) => {
          return (
            <div key={id} className="section-h-padding pt-10 md:pt-0">
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-10 flex-wrap">
                {
                  faqQuestion.question.map((question, id) => {
                    return (
                      <div
                        onClick={() => handleQuestionClick(id)}
                        key={id}
                        className={`px-6 py-3 border drop-shadow-button rounded-full cursor-pointer 
                          transition-all duration-200 ease-in-out hover:underline 
                          ${isAnswerOpen && id === indexClicked ?
                            'bg-nightblue text-white hover:text-white' : 
                            'bg-offwhite text-black hover:bg-nightblue hover:text-white hover:no-underline'
                          }
                        `}
                      >
                        <p className="text-lg md:text-2xl">{question}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

      {
        serviceItems.map((faqAnswer, id) => {
          return (
            <div 
              key={id} 
              className={`flex items-start bg-black fixed left-0 w-full px-5 md:px-24 py-24 md:py-12 min-h-[70vh] md:min-h-[50vh] z-10 transition-all duration-1000
              ${isAnswerOpen ? 'bottom-0' : '-bottom-full'}`}
            >
              <div
               onClick={handleAnswerClose} 
               className={`absolute top-5 md:top-7 left-5 md:left-7 cursor-pointer mr-12 rounded-full w-11 h-11 bg-white`}
              >
                <div className={`h-[2.5px] w-5 bg-black absolute left-1/2 duration-500 -translate-x-1/2 -translate-y-1/2 ${isAnswerOpen ? 'rotate-[135deg] top-[50%] delay-[1s]' : 'top-[40%]'}`}></div>
                <div className={`h-[2.5px] w-5 bg-black absolute left-1/2 duration-500 -translate-x-1/2 -translate-y-1/2 ${isAnswerOpen ? '-rotate-[135deg] top-[50%] delay-[1s]' : 'top-[60%]'}`}></div>
              </div>
              <p className="text-2xl text-white">{faqAnswer.answers[indexClicked]}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Faq;