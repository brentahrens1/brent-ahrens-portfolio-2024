import { useState } from "react";
import { faq } from "../../utils/faq";
import close from '../../assets/close-icon.svg';

const Faq = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);
  const [indexClicked, setIndexClicked] = useState<number | null>(null);
  const [titleClicked, setTitleClicked] = useState<string>('');

  const handleQuestionClick = (index: number, title: string) => {
    setIndexClicked(index);
    setTitleClicked(title);
    setIsAnswerOpen(true);
  };
  
  const handleAnswerClose = () => {
    setIndexClicked(null);
    setTitleClicked('');
    setIsAnswerOpen(false);
  };

  return (
    <div className="bg-white sm:py-20 flex flex-col sm:gap-16 pb-6 sm:pb-8">
      <div className="border-b py-12 border-black flex justify-start items-center">
        <p className="text-2xl section-h-padding">FAQ</p>
      </div>
      {
        faq.map((faqQuestion, id) => {
          return (
            <div key={id} className="section-h-padding">
              <p className="text-2xl m-6 ml-0">{faqQuestion.title}</p>
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-6">
                {
                  faqQuestion.question.map((question, id) => {
                    return (
                      <div
                        onClick={() => handleQuestionClick(id, faqQuestion.title)}
                        key={id}
                        className={`px-6 py-3 border drop-shadow-button rounded-full cursor-pointer 
                          transition-all duration-200 ease-in-out hover:underline 
                          ${faqQuestion.title === titleClicked && id === indexClicked ?
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
        indexClicked !== null ?
          faq.map((faqAnswer, id) => {
            return (
              faqAnswer.title === titleClicked ? (
                <div 
                  key={id} 
                  className={`items-start bg-black fixed bottom-0 left-0 w-full px-24 py-12 min-h-64 z-10
                  ${isAnswerOpen ? 'flex' : 'hidden'}`}
                >
                  <div onClick={handleAnswerClose} className={`absolute top-7 left-7 cursor-pointer mr-12'}`}>
                    <img src={close} alt="Close Icon" />
                  </div>
                  <p className="text-2xl text-white">{faqAnswer.answers[indexClicked]}</p>
                </div>
              ) : null
            );
          })
        : null
      }
    </div>
  );
};

export default Faq;