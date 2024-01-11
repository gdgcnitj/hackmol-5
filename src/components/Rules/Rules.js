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
            <div className="rules__title text-4xl mb-6  font-Space-Grotesk">
              <svg
                width="234"
                height="42"
                viewBox="0 0 234 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 42V0H36V6H42V24H30V30H36V36H42V42H24V36H18V30H12V42H0ZM12 24H24V18H30V6H12V24ZM54 42V36H48V0H60V36H78V0H90V36H84V42H54ZM102 42V0H114V36H138V42H102ZM144 42V0H186V6H156V18H180V24H156V36H186V42H144ZM198 42V36H192V30H204V36H222V24H198V18H192V6H198V0H228V6H234V12H222V6H204V18H228V24H234V36H228V42H198Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
            <div className="w-3/4 rules__desc mb-10 text-black  font-Plus-Jakarta text-center">
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
