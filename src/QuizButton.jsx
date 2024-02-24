import React from "react";

const QuizButton = ({ icon, text }) => {
  const addSpaceBetweenColon = /(\d+(\.\d+)?)\:/g;
  return (
    <button className={"flex w-full items-center gap-x-[16px] rounded-xl bg-white p-3 shadow-lg"}>
      <span>{icon}</span>
      <h1 className={"font-Rubik-Medium text-left text-[18px] leading-6 text-dark-navy"}>{text.replace(addSpaceBetweenColon, "$1 : ")}</h1>
    </button>
  );
};

export default QuizButton;
