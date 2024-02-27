const ScorePage = ({ iconPath, text, numOfCorrectAnswers, numOfQuestions }) => {
  return (
    <>
      <div className={"px-6 pt-[32px] text-dark-navy"}>
        <p className={"font-Rubik-Regular text-[40px] leading-[2.75rem]"}>
          <span className={"font-Rubik-Light"}>Quiz completed</span> <span className={"font-Rubik-Medium text-[40px]"}>You scored...</span>
        </p>

        <div className={"mt-[40px] grid place-items-center gap-y-4 rounded-lg bg-white py-[32px]"}>
          <div className={"flex items-center gap-x-4"}>
            <img className={"h-[40px] w-[40px]"} src={"src/assets/images/html.svg"} alt={""} />
            <h1 className={"font-Rubik-Medium text-left text-[18px] leading-6 text-dark-navy"}>HTML</h1>
          </div>
          <strong className={"font-Rubik-Regular text-[88px] leading-none"}>8</strong>
          <span className={"font-Rubik-Regular block text-[18px] leading-none"}>out of 10</span>
        </div>

        <button type={"submit"} className={"mt-3 w-full rounded-xl bg-secondary-purple py-[19px] leading-none"}>
          <span className={"font-Rubik-Medium text-[18px] text-white"}>Play Again</span>
        </button>
      </div>
    </>
  );
};

export default ScorePage;
