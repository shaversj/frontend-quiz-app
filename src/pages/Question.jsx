import QuizButton from "../components/QuizButton.jsx";
import { useState } from "react";

const Question = ({ isAnswerSubmitted, indexOfSelectedAnswer, question, indexOfCurrentQuestion, maxNumberOfQuestions, questionDispatch, indexOfCorrectAnswer }) => {
  const [onSubmitWithoutSelect, setOnSubmitWithoutSelect] = useState(false);
  return (
    <>
      <div className={"px-6 pt-[32px] md:px-[64px] md:pt-[49px] lg:flex lg:items-start lg:gap-x-[28px] lg:px-[140px] lg:pt-[85px]"}>
        <div className={"lg:basis-1/2 lg:pr-[113px]"}>
          <p className={"dark:text-light-blue font-Rubik-Italic text-[14px] text-grey-navy"}>
            Question {indexOfCurrentQuestion + 1} of {maxNumberOfQuestions}
          </p>
          <p className={"pt-3 font-Rubik-Medium text-[20px] leading-6 text-dark-navy md:pt-[27px] md:text-[34px] md:leading-[1.1em] dark:text-white"}>{question.question}</p>
          <progress className={"w-full pt-[24px] md:pt-[40px] lg:pt-[168px]"} max={maxNumberOfQuestions} value={indexOfCurrentQuestion + 1} />
        </div>
        <div className={"pt-[50px] md:pt-[64px] lg:basis-1/2 lg:pt-0"}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (indexOfSelectedAnswer === null || indexOfSelectedAnswer === undefined) {
                setOnSubmitWithoutSelect(true);
                return;
              }
              isAnswerSubmitted
                ? questionDispatch({ type: "GOTO_NEXT_QUESTION", e })
                : (() => {
                    setOnSubmitWithoutSelect(false);
                    questionDispatch({ type: "SUBMIT_ANSWER", e });
                  })();
            }}
            className={""}
          >
            <div className={"space-y-3 md:space-y-4"}>
              {question.options.map((option, idx) => (
                <QuizButton
                  key={idx}
                  iconLetter={String.fromCharCode(65 + idx)}
                  text={option}
                  idx={idx}
                  isSelected={indexOfSelectedAnswer === idx}
                  isCorrect={idx === indexOfCorrectAnswer}
                  isSubmitted={isAnswerSubmitted}
                  questionDispatch={questionDispatch}
                />
              ))}
            </div>

            {isAnswerSubmitted ? (
              <>
                <button type={"submit"} className={"mt-3 w-full rounded-xl bg-secondary-purple py-[19px] leading-none md:mt-[32px] md:rounded-3xl md:py-[32px]"}>
                  <span className={"font-Rubik-Medium text-[18px] text-white md:text-[28px]"}>Next Question</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type={"submit"}
                  className={"mt-3 w-full rounded-xl bg-secondary-purple py-[19px] leading-none hover:bg-[#d494fa] md:mt-[32px] md:rounded-3xl md:py-[32px]"}
                >
                  <span className={"font-Rubik-Medium text-[18px] text-white md:text-[28px]"}>Submit Answer</span>
                </button>
                {onSubmitWithoutSelect && (indexOfSelectedAnswer === null || indexOfSelectedAnswer === undefined) && (
                  <>
                    <div className={"flex items-center justify-center"}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 4C17.5759 4 19.1363 4.31039 20.5922 4.91345C22.0481 5.5165 23.371 6.40042 24.4853 7.51472C25.5996 8.62902 26.4835 9.95189 27.0866 11.4078C27.6896 12.8637 28 14.4241 28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C12.8174 28 9.76515 26.7357 7.51472 24.4853C5.26428 22.2348 4 19.1826 4 16C4 12.8174 5.26428 9.76515 7.51472 7.51472C9.76515 5.26428 12.8174 4 16 4ZM16 6C13.3478 6 10.8043 7.05357 8.92893 8.92893C7.05357 10.8043 6 13.3478 6 16C6 18.6522 7.05357 21.1957 8.92893 23.0711C10.8043 24.9464 13.3478 26 16 26C18.6522 26 21.1957 24.9464 23.0711 23.0711C24.9464 21.1957 26 18.6522 26 16C26 13.3478 24.9464 10.8043 23.0711 8.92893C21.1957 7.05357 18.6522 6 16 6ZM11.678 11.932L11.792 11.792C11.9577 11.6266 12.1762 11.5247 12.4093 11.5038C12.6425 11.483 12.8756 11.5446 13.068 11.678L13.208 11.792L16 14.586L18.792 11.792C18.9577 11.6266 19.1762 11.5247 19.4093 11.5038C19.6425 11.483 19.8756 11.5446 20.068 11.678L20.208 11.792C20.3734 11.9577 20.4753 12.1762 20.4962 12.4093C20.517 12.6425 20.4554 12.8756 20.322 13.068L20.208 13.208L17.414 16L20.208 18.792C20.3734 18.9577 20.4753 19.1762 20.4962 19.4093C20.517 19.6425 20.4554 19.8756 20.322 20.068L20.208 20.208C20.0423 20.3734 19.8238 20.4753 19.5907 20.4962C19.3575 20.517 19.1244 20.4554 18.932 20.322L18.792 20.208L16 17.414L13.208 20.208C13.0423 20.3734 12.8238 20.4753 12.5907 20.4962C12.3575 20.517 12.1244 20.4554 11.932 20.322L11.792 20.208C11.6266 20.0423 11.5247 19.8238 11.5038 19.5907C11.483 19.3575 11.5446 19.1244 11.678 18.932L11.792 18.792L14.586 16L11.792 13.208C11.6266 13.0423 11.5247 12.8238 11.5038 12.5907C11.483 12.3575 11.5446 12.1244 11.678 11.932Z"
                          fill="#EE5454"
                        />
                      </svg>
                      <p className="text-center text-[18px] text-secondary-red">Please select an answer</p>
                    </div>
                  </>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Question;
