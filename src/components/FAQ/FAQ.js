import React, { useState } from "react";
import Image from "next/image";

let FAQ = function () {
  const [showAll, setShowAll] = useState(false);
  const [qa, setQA] = useState([
    {
      ques: "What is a Hackathon and who are eligible to participate in HackMol4.0 ?",
      ans: "A Hackathon is an intense event that brings together designers and developers along with industry experts to identify problems and create software solutions, usually within 24-48 hours. If you're a student developer, we'd love to have you at HackMol4.0! Whether that's a undergrad, or graduate, we believe you can get something out of the event.",
    },
    {
      ques: "What can be the size of team?",
      ans: `A team can consist of 1-4 members.\n Pro Tip : Aim to have a mix of people with both design and developer skills. Individual entries are also allowed.`,
    },
    {
      ques: "What if I don't have a team or idea ?",
      ans: "Don't worry, most people don't! We'll have team formation and ideation events geared towards helping you find people to work with. It's perfectly normal to go around to people, tell them you're looking for a team, and ask if you can help out. You can also show yourself off at #teamup on our Discord Server.",
    },
    {
      ques: "When will we receive goodies?",
      ans: "Prizes and goodies are provided by sponsors of the hackathon, hence they are responsible for the delivery of the items.",
    },
  ]);

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div id='FAQ' className="w-full h-full px-10 py-6 bg-stone-900 justify-start items-center ">
       <div className="flex-col w-full items-start gap-14">
         <div className="flex flex-col items-start gap-6 ">
      <div className="w-full self-stretch h-full py-2.5 border-b border-white flex-col items-start gap-5">
      <div className="w-full py-3.5  border-white flex items-center justify-between  gap-5">  
        <div className="text-white w-3/4 text-2xl font-bold font-['Space Grotesk'] leading-7 sm:leading-9">{question}</div>
        <div className="text-white text-5xl font-light font-['Inter'] cursor-pointer" onClick={toggleAnswer}>
          <span>{isOpen ? '-' : '+'}</span>  
          </div>
        </div>
        {isOpen &&  <div className="w-full gap-3 flex items-start  justify-between">
      <div className="w-full text-white text-xl font-normal font-Space-Grotesk leading-loose">
             {answer}    
             </div>  </div>}
      </div>
      </div>
      </div>
      </div>
    );
  };

  const renderQuestions = () => {
    const questionsToShow = showAll ? qa : qa.slice(0, 3);
    return questionsToShow.map((item, index) => <FAQItem key={index} question={item.ques} answer={item.ans} />);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="w-full h-full relative">
        <div className="relative banner-img inset-0 w-full flex flex-row items-center bg-black opacity-70 h-32 md:h-64 ">
          <Image
          src = {`/images/FAQs.png`}
          alt = ''
          width = {1000}
          height = {1000}
          className="w-full h-full object-cover"/>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex items-center  m-auto  text-7xl md:text-9xl font-Minecrafter font-bold leading-10">FAQ</span>
        </div>
      </div>
      <div className="w-full h-full px-1 sm:px-5 pb-8 bg-stone-900 justify-start items-center ">
        <div className="flex-col w-full items-start gap-1">{renderQuestions()}</div>
        {!showAll && (
          <div className=" w-full px-4 py-2  m-auto  justify-center items-center gap-1 sm:gap-2.5 inline-flex cursor-pointer" onClick={handleLoadMore}>
            <div className="border-2 "><div className=" m-3 text-center flex justify-center items-center text-white text-2xl font-bold font-['Space Grotesk'] leading-9">LOAD MORE +</div></div>
          </div>
        )}
      </div>
    </>
  );
};




export default FAQ;
