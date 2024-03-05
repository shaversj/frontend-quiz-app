import QuizButton from "./QuizButton.jsx";

const QuizQuestion = ({ isAnswerSubmitted, indexOfSelectedAnswer, question, indexOfCurrentQuestion, maxNumberOfQuestions, questionDispatch }) => {
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
              onSubmit={isAnswerSubmitted ? (e) => questionDispatch({ type: "GOTO_NEXT_QUESTION", e }) : (e) => questionDispatch({ type: "SUBMIT_ANSWER", e })}
              className={"space-y-3"}
            >
              {question.options.map((option, idx) => (
                <QuizButton key={idx} iconIndex={idx} text={option} idx={idx} highlightedIndex={indexOfSelectedAnswer} questionDispatch={questionDispatch} />
              ))}
              {isAnswerSubmitted ? (
                <>
                  <button type={"submit"} className={"w-full rounded-xl bg-secondary-purple py-[19px] leading-none"}>
                    <span className={"font-Rubik-Medium text-[18px] text-white"}>Next Question</span>
                  </button>
                </>
              ) : (
                <>
                  <button type={"submit"} className={"w-full rounded-xl bg-secondary-purple py-[19px] leading-none"}>
                    <span className={"font-Rubik-Medium text-[18px] text-white"}>Submit Answer</span>
                  </button>
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
