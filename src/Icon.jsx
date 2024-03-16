import { cn } from "./utils.jsx";
import { ICONS } from "./constants.jsx";
const Icon = ({ iconLetter, isSelected, isSubmitted, isCorrect }) => {
  return (
    <>
      <svg className={"h-[40px] w-[40px] flex-shrink-0 md:h-[56px] md:w-[56px]"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={cn(
            "fill-light-grey group-hover:fill-[#F6E7FF]",
            { "!fill-secondary-purple": isSelected },
            { "!fill-secondary-green": isSelected && isSubmitted && isCorrect },
            { "!fill-secondary-red": isSelected && isSubmitted && !isCorrect },
          )}
          d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
        />
        <path className={cn("fill-grey-navy", "group-hover:fill-secondary-purple", { "!fill-white": isSelected })} d={ICONS[iconLetter]} />
      </svg>
    </>
  );
};

export default Icon;
