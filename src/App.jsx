import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import { quizData } from "./utils/quizData.jsx";
import useQuizReducer from "./hooks/useQuizReducer.jsx";

function App() {
  const { quizState, quizDispatch } = useQuizReducer(quizData);

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div id={"app-container"} className={"font-Rubik mx-auto max-w-screen-sm bg-light-grey md:max-w-screen-md lg:min-w-[1440px] lg:max-w-screen-lg"}>
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
