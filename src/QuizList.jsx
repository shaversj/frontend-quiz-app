import QuizQuestion from "./QuizQuestion.jsx";
import { useState } from "react";
import ScorePage from "./ScorePage.jsx";

const QuizList = ({ quiz, maxNumberOfQuestions, handlePlayAgainClick }) => {
  const [indexOfCurrentQuestion, setIndexOfCurrentQuestion] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState();
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const submittedAnswerMatchesAnswer = (indexOfSubmittedAnswer) => {
    return quiz[0].questions[indexOfCurrentQuestion].options[indexOfSubmittedAnswer] === quiz[0].questions[indexOfCurrentQuestion].answer;
  };

  const submitAnswerHandler = (e) => {
    e.preventDefault();
    if (submittedAnswerMatchesAnswer(highlightedIndex)) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    setIndexOfCurrentQuestion(indexOfCurrentQuestion + 1);
    setHighlightedIndex(null);
    setIsAnswerSubmitted(false);
  };
  const highlightHandler = (idx) => {
    setHighlightedIndex(idx);
  };

  return (
    <>
      {indexOfCurrentQuestion >= maxNumberOfQuestions ? (
        <>
          <ScorePage
            text={quiz[0].title}
            iconPath={quiz[0].icon}
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
            highlightedIndex={highlightedIndex}
            question={quiz[0].questions[indexOfCurrentQuestion]}
            indexOfCurrentQuestion={indexOfCurrentQuestion}
            maxNumberOfQuestions={maxNumberOfQuestions}
            submitAnswerHandler={submitAnswerHandler}
            nextQuestionHandler={nextQuestionHandler}
          />
        </>
      )}
    </>
  );
};

export default QuizList;
