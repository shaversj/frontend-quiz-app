import React from "react";
import { QUIZ_IMAGES } from "./constants.jsx";

const HomePage = ({ quizDispatch }) => {
  return (
    <>
      <main className={"pt-6"}>
        <div className={"px-6"}>
          <h1 className={"text-[40px] font-light leading-[2.82rem] text-dark-navy"}>
            Welcome to the <strong className={"font-medium"}>Frontend Quiz!</strong>
          </h1>

          <p className={"pt-3 text-[14px] italic leading-none text-dark-navy"}>Pick a subject to get started</p>
        </div>

        <div className={"mx-6 space-y-3 pt-[40px]"}>
          {QUIZ_IMAGES?.data.map((quiz) => (
            <>
              <button onClick={() => quizDispatch({ type: "START_QUIZ", title: quiz.title })} className={"flex w-full items-center gap-x-[16px] rounded-lg bg-white p-3"}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {quiz.image}
                </svg>
                <h1 className={"text-[18px] font-medium text-dark-navy"}>{quiz.title}</h1>
              </button>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
