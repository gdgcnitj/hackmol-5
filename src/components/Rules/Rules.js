import React from "react";
import RulesPoints from "./RulesPoints";
import rec1 from "../../../public/elements/rec1.svg";
import rec2 from "../../../public/elements/rec2.svg";
import rec3 from "../../../public/elements/rec3.svg";
import rec4 from "../../../public/elements/rec4.svg";

function Rules() {
  const rules = [
    {
      color: "#FF8EFF",
      rule: "Each team would comprise of 1 to 4 members",
      align: "right",
      svg_url: rec1.src,
    },
    {
      color: "#006CEF",
      rule: "Team members could be from different institutions as well",
      align: "right",
      svg_url: rec2.src,
    },
    {
      color: "#00F26D",
      rule: "The registration begins on 15th Jan,2023 and ends on 5th Feb,2023",
      align: "left",
      svg_url: rec3.src,
    },
    {
      color: "#FECB4A",
      rule: "After registration, you have to submit your idea via PPT before 10th Feb 2023",
      align: "left",
      svg_url: rec4.src,
    },
  ];

  return (
    <div
      id="rules"
      className="border-none w-full bg-white flex justify-center flex-col md:flex-row overflow-auto "
    >
      <div className="rulesLeft white flex flex-col md:flex-row ">
        <div className="md:w-full py-10  md:py-20 ">
          <div className=" px-8 flex flex-col justify-center items-center ">
            <div className="rules__title font-extrabold text-8xl mb-6 font-Minecrafter text-black">
              RULES
            </div>
            <div className="w-3/4 rules__desc mb-10 text-black font-Space-Grotesk text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              facilis vero sed consequatur porro aut ducimus culpa. Quaerat
              animi molestiae incidunt quisquam quae dignissimos, sequi ullam
              ratione veniam, laboriosam ab.
            </div>
            <div className="md:w-3/4 space-y-2">
              {rules.map((ele,index) => (
                <RulesPoints
                  key={index}
                  Desc={ele.rule}
                  color={ele.color}
                  alignment={ele.align}
                  icon={ele.svg_url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
