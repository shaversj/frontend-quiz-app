import Icon from "./Icon.jsx";

const QuizButton = ({ iconIndex, text, idx, highlightedIndex, questionDispatch, isSubmitted }) => {
  const isSelected = highlightedIndex === idx;
  const isCorrect = "";
  let buttonColor = "";
  let iconColor = "";
  if (isSelected && isSubmitted && isCorrect) {
    // green border and green checkmark
    buttonColor = "";
  } else if (isSubmitted && isCorrect) {
    // green checkmark
    buttonColor = "";
  } else if (isSelected && isSubmitted && !isCorrect) {
    // red border and red x
    buttonColor = "";
  } else if (isSelected) {
    buttonColor = "flex w-full items-center gap-x-[16px] rounded-xl border-4 border-secondary-purple bg-white p-3 shadow-lg";
  } else {
    buttonColor = "flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 shadow-lg";
  }
  const addSpaceBetweenColon = /(\d+(\.\d+)?)\:/g;
  return (
    <button
      type={"button"}
      onClick={() => questionDispatch({ type: "SELECT_ANSWER", idx })}
      className={
        highlightedIndex === idx
          ? "flex w-full items-center gap-x-[16px] rounded-xl border-4 border-secondary-purple bg-white p-3 shadow-lg"
          : "flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 shadow-lg"
      }
    >
      <span>
        <Icon iconIndex={iconIndex} classNames={""} highlightedIndex={highlightedIndex} />
      </span>
      <h1 className={"text-left font-Rubik-Medium text-[18px] leading-6 text-dark-navy"}>{text.replace(addSpaceBetweenColon, "$1 : ")}</h1>
    </button>
  );
};

export default QuizButton;
