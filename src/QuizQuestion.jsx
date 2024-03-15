import QuizButton from "./QuizButton.jsx";
import { useState } from "react";

const QuizQuestion = ({ isAnswerSubmitted, indexOfSelectedAnswer, question, indexOfCurrentQuestion, maxNumberOfQuestions, questionDispatch, indexOfCorrectAnswer }) => {
  const [onSubmitWithoutSelect, setOnSubmitWithoutSelect] = useState(false);
  return (
    <>
      <div className={"px-6 pt-[32px]"}>
        <div className={"font-Rubik"}>
          <p className={"font-Rubik-Italic text-[14px] text-grey-navy"}>
            Question {indexOfCurrentQuestion + 1} of {maxNumberOfQuestions}
          </p>
          <p className={"pt-3 font-Rubik-Medium text-[20px] leading-6 text-dark-navy"}>{question.question}</p>
          <progress className={"w-full pt-[24px]"} max={maxNumberOfQuestions} value={indexOfCurrentQuestion + 1} />
          <div className={"pt-[50px]"}>
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
              className={"space-y-3"}
            >
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
              {isAnswerSubmitted ? (
                <>
                  <button type={"submit"} className={"w-full rounded-xl bg-secondary-purple py-[19px] leading-none"}>
                    <span className={"font-Rubik-Medium text-[18px] text-white"}>Next Question</span>
                  </button>
                </>
              ) : (
                <>
                  <button type={"submit"} className={"w-full rounded-xl bg-secondary-purple py-[19px] leading-none hover:bg-[#d494fa]"}>
                    <span className={"font-Rubik-Medium text-[18px] text-white"}>Submit Answer</span>
                  </button>
                  {onSubmitWithoutSelect && (indexOfSelectedAnswer === null || indexOfSelectedAnswer === undefined) && (
                    <p className="text-center text-xs text-secondary-red">Please select an answer</p>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;
