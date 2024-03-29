import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import { quizData } from "./utils/quizData.jsx";
import useQuizReducer from "./hooks/useQuizReducer.jsx";

function App() {
  const { quizState, quizDispatch } = useQuizReducer(quizData);

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div
          id={"app-container"}
          className={
            "font-Rubik mx-auto min-h-[814px] max-w-screen-sm bg-light-grey bg-light-mobile bg-no-repeat md:min-h-[1024px] md:min-w-[768px] md:max-w-screen-md md:bg-light-tablet lg:min-h-[850px] lg:min-w-[1440px] lg:max-w-screen-lg lg:bg-light-desktop dark:bg-dark-navy dark:bg-dark-mobile dark:md:bg-dark-tablet lg:dark:bg-dark-desktop"
          }
        >
          {quizState.isQuizVisible ? (
            <>
              <Header iconPath={quizState.quizData.icon} text={quizState.quizData.title} />
              <Quiz quizState={quizState} quizDispatch={quizDispatch} />
            </>
          ) : (
            <>
              <Header />
              <Home quizDispatch={quizDispatch} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
