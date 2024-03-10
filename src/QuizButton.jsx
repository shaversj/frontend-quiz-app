import Icon from "./Icon.jsx";
import { cn } from "./utils.jsx";
import CircleIcon from "./CircleIcon.jsx";

const QuizButton = ({ iconLetter, text, idx, isSelected, isSubmitted, questionDispatch, isCorrect }) => {
  const addSpaceBetweenColon = /(\d+(\.\d+)?)\:/g;
  return (
    <button
      type={"button"}
      onClick={() => questionDispatch({ type: "SELECT_ANSWER", idx })}
      className={cn(
        "group flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 shadow-lg",
        { "border-4 border-secondary-purple": isSelected },
        { "pointer-events-none": isSubmitted },
        { "pointer-events-none border-4 border-secondary-green": isSelected && isSubmitted && isCorrect },
        { "pointer-events-none border-4 border-secondary-red": isSelected && isSubmitted && !isCorrect },
      )}
    >
      <Icon iconLetter={iconLetter} isSubmitted={isSubmitted} isCorrect={isCorrect} isSelected={isSelected} />
      <span className={"text-left font-Rubik-Medium text-[18px] leading-6 text-dark-navy"}>{text.replace(addSpaceBetweenColon, "$1 : ")}</span>
      {isSubmitted && (isCorrect || (isSelected && isSubmitted && !isCorrect)) && <CircleIcon isCorrect={isCorrect} />}
    </button>
  );
};

export default QuizButton;
