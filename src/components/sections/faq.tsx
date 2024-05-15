import { useState } from "react";
import { faq } from "../../utils/faq";

const Faq = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState<boolean>(false);
  const [indexClicked, setIndexClicked] = useState<number | null>(null);

  return (
    <div className="bg-white py-20 px-20 flex flex-col gap-24">
      {
        faq.map((question, id) => {
          return (
            <div key={id}>
              <p className="text-2xl m-6">{question.title}</p>
              <div className="flex items-center gap-6">
                {
                  question.question.map((q, id) => {
                    return (
                      <div
                        onClick={() => setIsQuestionClicked(!isQuestionClicked)}
                        key={id}
                        className={`px-6 py-3 border drop-shadow-button rounded-full cursor-pointer 
                          transition-all duration-200 ease-in-out hover:underline 
                          ${isQuestionClicked ? 'bg-nightblue text-white hover:text-white' : 'bg-offwhite text-black hover:text-nightblue'}`}
                      >
                        <p className="text-2xl">{q}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className="items-center bg-black hidden">
                {
                  question.answers.map((a, id) => {
                    return (
                      <div
                        key={id}
                        className="px-6 py-3 transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
                        {
                          id === indexClicked ?
                          <p className="text-2xl text-white">{a}</p>
                          :
                          null
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Faq;