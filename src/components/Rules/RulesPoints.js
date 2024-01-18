import React from "react";

function RulesPoint({ Desc, color, alignment, icon }) {
  const getAlign = () => {
    return alignment === "left" ? "flex-row-reverse" : "";
  };

  return (
    <div className={`flex ${getAlign()} items-center `}>
      <div
        className={`hidden sm:block z-30`}
        style={{
          marginLeft: alignment === "left" ? "-3rem" : "0",
          marginRight: alignment === "right" ? "-3rem" : "0",
        }}
      >
        <img src={icon} alt="img" />
      </div>
      <div
        className={`bg-white w-full h-full p-2 border-5 flex justify-center font-bold text-center`}
        style={{
          borderColor: color,
          borderWidth: "0.25rem",
          borderStyle: "solid",
        }}
      >
        <div className={`font-medium text-xl px-8 font-Space-Grotesk`}>
          {Desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi sequi recusandae ullam molestias sed, vero enim neque esse,
          aperiam hic.
        </div>
      </div>
    </div>
  );
}

export default RulesPoint;
