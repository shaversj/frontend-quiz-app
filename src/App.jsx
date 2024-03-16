import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import { useReducer, useState } from "react";
import QuizList from "./QuizList.jsx";
import { quizData } from "./quizData.jsx";

const initialState = quizData;
function App() {
  const [isQuizVisible, setIsQuizVisible] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "START_QUIZ":
        const selectedQuiz = quizData.quizzes.filter((quiz) => quiz.title === action.title)[0];
        setIsQuizVisible(true);
        return selectedQuiz;
      case "PLAY_AGAIN":
        setIsQuizVisible(false);
        return initialState;
    }
  };

  const [state, quizDispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div id={"app-container"} className={"font-Rubik h-[812px] max-w-screen-sm bg-light-grey md:h-[1024px] md:max-w-screen-md lg:max-w-screen-lg"}>
        {isQuizVisible ? (
          <>
            <Header iconPath={state.icon} text={state.title} />
            <QuizList quiz={state} quizDispatch={quizDispatch} />
          </>
        ) : (
          <>
            <Header />
            <HomePage quizDispatch={quizDispatch} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
