import QuizQuestion from "./QuizQuestion.jsx";
import { useReducer, useState } from "react";
import QuizScore from "./QuizScore.jsx";

const QuizList = ({ quiz, quizDispatch }) => {
  const [indexOfCurrentQuestion, setIndexOfCurrentQuestion] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [indexOfSelectedAnswer, setIndexOfSelectedAnswer] = useState();
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const maxNumberOfQuestions = quiz.questions.length;

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER":
        setIndexOfSelectedAnswer(action.idx);
        return state;
      case "SUBMIT_ANSWER":
        action.e.preventDefault();
        setNumberOfCorrectAnswers(
          numberOfCorrectAnswers + (indexOfSelectedAnswer === state.questions[indexOfCurrentQuestion].options.indexOf(state.questions[indexOfCurrentQuestion].answer) ? 1 : 0),
        );
        setIsAnswerSubmitted(true);
        return state;
      case "GOTO_NEXT_QUESTION":
        action.e.preventDefault();
        setIndexOfCurrentQuestion(indexOfCurrentQuestion + 1);
        setIndexOfSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        return state;
    }
  };

  const [state, questionDispatch] = useReducer(reducer, quiz);

  return (
    <>
      {indexOfCurrentQuestion >= maxNumberOfQuestions ? (
        <>
          <QuizScore text={quiz.title} iconPath={quiz.icon} numOfCorrectAnswers={numberOfCorrectAnswers} numOfQuestions={maxNumberOfQuestions} quizDispatch={quizDispatch} />
        </>
      ) : (
        <>
          <QuizQuestion
            isAnswerSubmitted={isAnswerSubmitted}
            indexOfSelectedAnswer={indexOfSelectedAnswer}
            question={quiz.questions[indexOfCurrentQuestion]}
            indexOfCurrentQuestion={indexOfCurrentQuestion}
            maxNumberOfQuestions={maxNumberOfQuestions}
            questionDispatch={questionDispatch}
          />
        </>
      )}
    </>
  );
};

export default QuizList;
