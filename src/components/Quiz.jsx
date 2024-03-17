import Question from "../pages/Question.jsx";
import FinalScore from "../pages/FinalScore.jsx";

const Quiz = ({ quizDispatch, quizState }) => {
  const maxNumberOfQuestions = quizState.quizData.questions.length;
  const indexOfCorrectAnswer = quizState.quizData.questions[quizState.indexOfCurrentQuestion]?.options?.indexOf(
    quizState.quizData.questions[quizState.indexOfCurrentQuestion].answer,
  );

  return (
    <>
      {quizState.indexOfCurrentQuestion >= maxNumberOfQuestions ? (
        <>
          <FinalScore
            text={quizState.quizData.title}
            iconPath={quizState.quizData.icon}
            numOfCorrectAnswers={quizState.numberOfCorrectAnswers}
            numOfQuestions={maxNumberOfQuestions}
            quizDispatch={quizDispatch}
          />
        </>
      ) : (
        <>
          <Question
            isAnswerSubmitted={quizState.isAnswerSubmitted}
            indexOfSelectedAnswer={quizState.indexOfSelectedAnswer}
            question={quizState.quizData.questions[quizState.indexOfCurrentQuestion]}
            indexOfCurrentQuestion={quizState.indexOfCurrentQuestion}
            maxNumberOfQuestions={maxNumberOfQuestions}
            questionDispatch={quizDispatch}
            indexOfCorrectAnswer={indexOfCorrectAnswer}
          />
        </>
      )}
    </>
  );
};

export default Quiz;
