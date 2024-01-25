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
      rule: "Each team would comprise of 1 to 4 members. Team composition is crucial for collaborative work and fair competition.",
      align: "right",
      svg_url: rec1.src,
    },
    {
      color: "#006CEF",
      rule: "Students from First year only can participate in the Freshers Track and students from 2nd year and beyond can participate in Main Track",
      align: "left",
      svg_url: rec2.src,
    },
    {
      color: "#006CEF",
      rule: "Team members could be from different institutions as well. Collab on different ideas and different technical domains, showcase your techstack and win this Hackmol edition.",
      align: "right",
      svg_url: rec2.src,
    },
    {
      color: "#00F26D",
      rule: "The registration begins on 26th January 2024 and ends on 10 Feb 2024. No extra extensions to be given, kindly fill team details with utmost attention.",
      align: "left",
      svg_url: rec3.src,
    },
    {
      color: "#FECB4A",
      rule: "After registration, you have to submit your idea via PPT before 10th Feb 2024. Qualifying students will be shared the result via registered details.",
      align: "right",
      svg_url: rec4.src,
    }
  ];

  return (
    <div
      id="rules"
      className="border-none w-full bg-white flex justify-center flex-col md:flex-row overflow-auto "
    >
      <div className="rulesLeft white flex flex-col md:flex-row ">
        <div className="md:w-full py-10  md:py-20 ">
          <div className=" px-8 flex flex-col justify-center items-center ">
            <div className=" font-Minecraft text-7xl mb-6 font-Minecrafter text-black">
              RULES
            </div>
            <div className="w-3/4 rules__desc mb-10 text-black font-Space-Grotesk text-center text-xl">
              Each Participant must adhere to Code of Conduct, Registration, Elgibility, Judging Criteria and Disqualification as follows. 
            </div>
            <div className="md:w-3/4 space-y-2 p-4">
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
