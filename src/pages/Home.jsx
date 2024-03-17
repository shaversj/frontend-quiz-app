import { QUIZ_IMAGES } from "../utils/constants.jsx";

const Home = ({ quizDispatch }) => {
  return (
    <>
      <main className={"px-6 pb-[250px] pt-[29px] md:px-[64px] md:pb-[238px] md:pt-[69px] lg:flex lg:items-start lg:px-[140px] lg:pb-[280px] lg:pt-[99px]"}>
        <div className={"lg:basis-1/2 lg:pt-3"}>
          <h1 className={"font-Rubik-Light text-[40px] leading-[3rem] text-dark-navy md:text-[64px] md:leading-[72px] dark:text-white"}>
            Welcome to the <span className={"font-Rubik-Medium"}>Frontend Quiz!</span>
          </h1>

          <p className={"pt-4 font-Rubik-Italic text-[14px] leading-none text-dark-navy md:pt-4 md:text-[20px] lg:pt-[48px] dark:text-grey-navy"}>
            Pick a subject to get started.
          </p>
        </div>

        <div className={"space-y-3 pt-[40px] md:space-y-6 md:pt-[69px] lg:basis-1/2 lg:pl-[14px] lg:pt-[15px]"}>
          {QUIZ_IMAGES?.data.map((quiz) => (
            <>
              <button
                onClick={() => quizDispatch({ type: "START_QUIZ", title: quiz.title })}
                className={"flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 shadow-lg md:gap-x-[34px] md:rounded-3xl lg:p-5 dark:bg-navy"}
              >
                <svg className={"h-[40px] w-[40px] flex-shrink-0 md:h-[56px] md:w-[56px]"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {quiz.image}
                </svg>
                <h1 className={"font-Rubik-Medium text-[18px] text-dark-navy md:text-[28px] dark:text-white"}>{quiz.title}</h1>
              </button>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
