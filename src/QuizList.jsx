import QuizQuestion from "./QuizQuestion.jsx";
import { useReducer, useState } from "react";
import QuizScore from "./QuizScore.jsx";

const QuizList = ({ quiz, quizDispatch }) => {
  const [state, setState] = useState({
    indexOfCurrentQuestion: 0,
    numberOfCorrectAnswers: 0,
    indexOfSelectedAnswer: null,
    isAnswerSubmitted: false,
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER":
        return { ...state, indexOfSelectedAnswer: action.idx };
      case "SUBMIT_ANSWER":
        action.e.preventDefault();
        return {
          ...state,
          numberOfCorrectAnswers:
            state.numberOfCorrectAnswers +
            (state.indexOfSelectedAnswer === quiz.questions[state.indexOfCurrentQuestion].options?.indexOf(quiz.questions[state.indexOfCurrentQuestion].answer) ? 1 : 0),
          isAnswerSubmitted: true,
        };
      case "GOTO_NEXT_QUESTION":
        action.e.preventDefault();
        return { ...state, indexOfCurrentQuestion: state.indexOfCurrentQuestion + 1, indexOfSelectedAnswer: null, isAnswerSubmitted: false };
    }
  };

  const [questionState, questionDispatch] = useReducer(reducer, state);
  const maxNumberOfQuestions = quiz.questions.length;
  const indexOfCorrectAnswer = quiz.questions[questionState.indexOfCurrentQuestion]?.options?.indexOf(quiz.questions[questionState.indexOfCurrentQuestion].answer);

  return (
    <>
      {questionState.indexOfCurrentQuestion >= maxNumberOfQuestions ? (
        <>
          <QuizScore
            text={quiz.title}
            iconPath={quiz.icon}
            numOfCorrectAnswers={questionState.numberOfCorrectAnswers}
            numOfQuestions={maxNumberOfQuestions}
            quizDispatch={quizDispatch}
          />
        </>
      ) : (
        <>
          <QuizQuestion
            isAnswerSubmitted={questionState.isAnswerSubmitted}
            indexOfSelectedAnswer={questionState.indexOfSelectedAnswer}
            question={quiz.questions[questionState.indexOfCurrentQuestion]}
            indexOfCurrentQuestion={questionState.indexOfCurrentQuestion}
            maxNumberOfQuestions={maxNumberOfQuestions}
            questionDispatch={questionDispatch}
            indexOfCorrectAnswer={indexOfCorrectAnswer}
          />
        </>
      )}
    </>
  );
};

export default QuizList;
