import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import { useState } from "react";
import QuizList from "./QuizList.jsx";
import { quizData } from "./quizData.jsx";
import ScorePage from "./ScorePage.jsx";

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

  return (
    <>
      <div id={"test"} className={"font-Rubik h-[812px] max-w-screen-sm bg-light-grey"}>
        {isQuizVisible ? (
          <>
            <Header iconPath={quiz[0].icon} text={quiz[0].title} />
            <QuizList quiz={quiz} maxNumberOfQuestions={maxNumberOfQuestions} handlePlayAgainClick={handlePlayAgainClick} />
          </>
        ) : (
          <>
            <Header />
            <HomePage startQuizHandler={startQuizHandler} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
