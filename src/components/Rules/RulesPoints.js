import React from "react";

function RulesPoint({ color, alignment, icon }) {
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
        <div className={`font-medium text-xl px-8`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default RulesPoint;
