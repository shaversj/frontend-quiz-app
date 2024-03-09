import { ICONS } from "./constants.jsx";
import { cn } from "./utils.jsx";

const CircleIcon = ({ isCorrect }) => {
  return (
    <>
      <div className={"ml-auto"}>
        <svg
          className={cn({ "fill-[#26D782]": isCorrect }, { "fill-[#EE5454]": !isCorrect })}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={isCorrect ? ICONS.circleWithX : ICONS.circleWithCheckMark} />
        </svg>
      </div>
    </>
  );
};

export default CircleIcon;
