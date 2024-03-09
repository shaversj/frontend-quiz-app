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
        { "border-secondary-green pointer-events-none border-4": isSelected && isSubmitted && isCorrect },
        { "border-secondary-red pointer-events-none border-4": isSelected && isSubmitted && !isCorrect },
      )}
    >
      <Icon iconLetter={iconLetter} isSubmitted={isSubmitted} isCorrect={isCorrect} isSelected={isSelected} />
      <h1 className={"text-left font-Rubik-Medium text-[18px] leading-6 text-dark-navy"}>{text.replace(addSpaceBetweenColon, "$1 : ")}</h1>
      {isSubmitted && (isCorrect || (isSelected && isSubmitted && !isCorrect)) && <CircleIcon isCorrect={isCorrect} />}
    </button>
  );
};

export default QuizButton;
