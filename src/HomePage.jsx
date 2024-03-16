import React from "react";
import { QUIZ_IMAGES } from "./constants.jsx";

const HomePage = ({ quizDispatch }) => {
  return (
    <>
      <main className={"px-6 pt-6 md:px-[64px] lg:flex lg:items-start lg:px-[140px] lg:pt-[99px]"}>
        <div className={"lg:basis-1/2"}>
          <h1 className={"font-Rubik-Light text-[40px] leading-[2.82rem] text-dark-navy md:text-[64px] md:leading-[64px]"}>
            Welcome to the <strong className={"font-Rubik-Medium"}>Frontend Quiz!</strong>
          </h1>

          <p className={"pt-3 font-Rubik-Italic text-[14px] leading-none text-grey-navy md:pt-4 md:text-[16px] lg:pt-[48px]"}>Pick a subject to get started.</p>
        </div>

        <div className={" space-y-3 pt-[40px] md:space-y-6 md:pt-[66px] lg:basis-1/2 lg:pt-0"}>
          {QUIZ_IMAGES?.data.map((quiz) => (
            <>
              <button
                onClick={() => quizDispatch({ type: "START_QUIZ", title: quiz.title })}
                className={"flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 md:rounded-3xl"}
              >
                <svg className={"h-[40px] w-[40px] flex-shrink-0 md:h-[56px] md:w-[56px]"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {quiz.image}
                </svg>
                <h1 className={"font-Rubik-Medium text-[18px] text-dark-navy md:text-[22px]"}>{quiz.title}</h1>
              </button>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
