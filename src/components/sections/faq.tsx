import { useState } from "react";
import { serviceItems } from "../../utils/faq";
import close from '../../assets/close-icon.svg';

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
            <div key={id} className="section-h-padding">
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
                            'bg-offwhite text-black hover:text-nightblue'
                          }
                        `}
                      >
                        <p className="text-2xl">{question}</p>
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
              className={`flex items-start bg-black fixed left-0 w-full px-24 py-12 min-h-[50vh] z-10 transition-all duration-1000
              ${isAnswerOpen ? 'bottom-0' : '-bottom-full'}`}
            >
              <div onClick={handleAnswerClose} className={`absolute top-7 left-7 cursor-pointer mr-12'}`}>
                <img src={close} alt="Close Icon" />
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