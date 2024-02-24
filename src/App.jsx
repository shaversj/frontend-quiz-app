import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import QuizQuestion from "./QuizQuestion.jsx";

function App() {
  return (
    <>
      <div id={"test"} className={"h-[812px] max-w-screen-sm bg-light-grey font-Rubik"}>
        <Header />
        {/*<HomePage />*/}
        <QuizQuestion />
      </div>
    </>
  );
}

export default App;
