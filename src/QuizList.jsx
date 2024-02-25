import QuizQuestion from "./QuizQuestion.jsx";
import { useState } from "react";

const QuizList = ({ quiz, maxNumberOfQuestions }) => {
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
  );
};

export default QuizList;
