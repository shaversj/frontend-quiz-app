import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import { useReducer, useState } from "react";
import QuizList from "./QuizList.jsx";
import { quizData } from "./quizData.jsx";
import ScorePage from "./ScorePage.jsx";

const initialState = quizData;
function App() {
  const [maxNumberOfQuestions, setMaxNumberOfQuestions] = useState(0);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [activeQuizName, setActiveQuizName] = useState(null);
  const [quiz, setQuiz] = useState(quizData["quizzes"].filter((quiz) => quiz.title === activeQuizName));

  const startQuizHandler = (quizTitle) => {
    const quiz = quizData["quizzes"].filter((quiz) => quiz.title === quizTitle);
    setQuiz(quiz);
    setMaxNumberOfQuestions(quiz[0].questions.length);
    setActiveQuizName(quiz);
    setIsQuizVisible(true);
  };

  const handlePlayAgainClick = () => {
    setMaxNumberOfQuestions(0);
    setActiveQuizName(null);
    setIsQuizVisible(false);
    setQuiz(null);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "START_QUIZ":
        const selectedQuiz = quizData.quizzes.filter((quiz) => quiz.title === action.title)[0];
        setIsQuizVisible(true);
        setMaxNumberOfQuestions(selectedQuiz.questions.length);
        return selectedQuiz;
      case "PLAY_AGAIN":
        setMaxNumberOfQuestions(0);
        setActiveQuizName(null);
        setIsQuizVisible(false);
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div id={"test"} className={"font-Rubik h-[812px] max-w-screen-sm bg-light-grey"}>
        {isQuizVisible ? (
          <>
            <Header iconPath={state.icon} text={state.title} />
            <QuizList quiz={state} maxNumberOfQuestions={maxNumberOfQuestions} handlePlayAgainClick={handlePlayAgainClick} />
          </>
        ) : (
          <>
            <Header />
            <HomePage startQuizHandler={startQuizHandler} dispatch={dispatch} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
