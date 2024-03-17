import { useReducer, useState } from "react";
export default function useQuizReducer(allQuizData) {
  const [state, setState] = useState({
    isQuizVisible: false,
    indexOfCurrentQuestion: 0,
    numberOfCorrectAnswers: 0,
    indexOfSelectedAnswer: null,
    isAnswerSubmitted: false,
    quizData: null,
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "START_QUIZ":
        const selectedQuiz = allQuizData.quizzes.filter((quiz) => quiz.title === action.title)[0];
        return { ...state, isQuizVisible: true, quizData: selectedQuiz };
      case "PLAY_AGAIN":
        return {
          ...state,
          isQuizVisible: false,
          indexOfCurrentQuestion: 0,
          numberOfCorrectAnswers: 0,
          indexOfSelectedAnswer: null,
          isAnswerSubmitted: false,
          quizData: null,
        };
      case "SELECT_ANSWER":
        return { ...state, indexOfSelectedAnswer: action.idx };
      case "SUBMIT_ANSWER":
        action.e.preventDefault();
        return {
          ...state,
          numberOfCorrectAnswers:
            state.numberOfCorrectAnswers +
            (state.indexOfSelectedAnswer ===
            state.quizData.questions[state.indexOfCurrentQuestion].options?.indexOf(state.quizData.questions[state.indexOfCurrentQuestion].answer)
              ? 1
              : 0),
          isAnswerSubmitted: true,
        };
      case "GOTO_NEXT_QUESTION":
        action.e.preventDefault();
        return {
          ...state,
          indexOfCurrentQuestion: state.indexOfCurrentQuestion + 1,
          indexOfSelectedAnswer: null,
          isAnswerSubmitted: false,
        };
      default:
        return state;
    }
  };

  const [quizState, quizDispatch] = useReducer(reducer, state);

  return {
    quizState,
    quizDispatch,
  };
}
