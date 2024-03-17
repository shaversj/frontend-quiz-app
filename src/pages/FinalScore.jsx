const FinalScore = ({ iconPath, text, numOfCorrectAnswers, numOfQuestions, quizDispatch }) => {
  return (
    <>
      <div className={"px-6 pt-[32px] text-dark-navy md:px-[64px] lg:flex lg:items-start lg:pl-[140px] lg:pr-[143px] lg:pt-[85px]"}>
        <p className={"font-Rubik-Regular text-[40px] leading-[2.75rem] md:text-[64px] md:leading-[64px] lg:basis-1/2"}>
          <span className={"font-Rubik-Light dark:text-white"}>Quiz completed</span>
          <span className={"block font-Rubik-Medium dark:text-white"}>You scored...</span>
        </p>

        <div className={"lg:basis-1/2"}>
          <div className={"mt-[40px] grid place-items-center gap-y-4 rounded-lg bg-white py-[32px] md:mt-[64px] md:gap-y-[40px] md:rounded-2xl lg:mt-0 dark:bg-navy"}>
            <div className={"flex items-center gap-x-4 md:pt-[18px]"}>
              <img className={"h-[40px] w-[40px] md:h-[56px] md:w-[56px]"} src={iconPath} alt={""} />
              <h1 className={"text-left font-Rubik-Medium text-[18px] leading-6 text-dark-navy md:text-[28px] dark:text-white"}>{text}</h1>
            </div>
            <div className={"flex flex-col items-center md:pb-[14px]"}>
              <strong className={"font-Rubik-Regular text-[88px] leading-none md:text-[133px] dark:text-white"}>{numOfCorrectAnswers}</strong>
              <span className={"dark:text-light-blue block pl-2 font-Rubik-Regular text-[18px] leading-none md:pt-4 md:text-[30px]"}>out of {numOfQuestions}</span>
            </div>
          </div>

          <button
            onClick={() => quizDispatch({ type: "PLAY_AGAIN" })}
            className={"mt-3 w-full rounded-xl bg-secondary-purple py-[19px] leading-none md:mt-[32px] md:rounded-3xl md:py-[32px]"}
          >
            <span className={"font-Rubik-Medium text-[18px] text-white md:text-[28px]"}>Play Again</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FinalScore;
