import QuizQuestion from "./QuizQuestion.jsx";
import { useReducer, useState } from "react";
import ScorePage from "./ScorePage.jsx";

const QuizList = ({ quiz, maxNumberOfQuestions, handlePlayAgainClick }) => {
  const [indexOfCurrentQuestion, setIndexOfCurrentQuestion] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [indexOfSelectedAnswer, setIndexOfSelectedAnswer] = useState();
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // const submittedAnswerMatchesAnswer = (indexOfSubmittedAnswer) => {
  //   return quiz.questions[indexOfCurrentQuestion].options[indexOfSubmittedAnswer] === quiz.questions[indexOfCurrentQuestion].answer;
  // };
  //
  // const submitAnswerHandler = (e) => {
  //   e.preventDefault();
  //   if (submittedAnswerMatchesAnswer(indexOfSelectedAnswer)) {
  //     setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
  //   }
  //   setIsAnswerSubmitted(true);
  // };
  //
  // const nextQuestionHandler = (e) => {
  //   e.preventDefault();
  //   setIndexOfCurrentQuestion(indexOfCurrentQuestion + 1);
  //   setIndexOfSelectedAnswer(null);
  //   setIsAnswerSubmitted(false);
  // };
  // const highlightHandler = (idx) => {
  //   setIndexOfSelectedAnswer(idx);
  // };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER":
        setIndexOfSelectedAnswer(action.idx);
        return quiz;
      case "SUBMIT_ANSWER":
        action.e.preventDefault();
        setNumberOfCorrectAnswers(
          numberOfCorrectAnswers + (indexOfSelectedAnswer === state.questions[indexOfCurrentQuestion].options.indexOf(state.questions[indexOfCurrentQuestion].answer) ? 1 : 0),
        );
        setIsAnswerSubmitted(true);
        return quiz;
      case "GOTO_NEXT_QUESTION":
        action.e.preventDefault();
        setIndexOfCurrentQuestion(indexOfCurrentQuestion + 1);
        setIndexOfSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        return quiz;
    }
  };

  const [state, questionDispatch] = useReducer(reducer, quiz);

  return (
    <>
      {indexOfCurrentQuestion >= maxNumberOfQuestions ? (
        <>
          <ScorePage
            text={quiz.title}
            iconPath={quiz.icon}
            numOfCorrectAnswers={numberOfCorrectAnswers}
            numOfQuestions={maxNumberOfQuestions}
            handlePlayAgainClick={handlePlayAgainClick}
          />
        </>
      ) : (
        <>
          <QuizQuestion
            isAnswerSubmitted={isAnswerSubmitted}
            highlightHandler={highlightHandler}
            indexOfSelectedAnswer={indexOfSelectedAnswer}
            question={quiz.questions[indexOfCurrentQuestion]}
            indexOfCurrentQuestion={indexOfCurrentQuestion}
            maxNumberOfQuestions={maxNumberOfQuestions}
            submitAnswerHandler={submitAnswerHandler}
            nextQuestionHandler={nextQuestionHandler}
            questionDispatch={questionDispatch}
          />
        </>
      )}
    </>
  );
};

export default QuizList;
