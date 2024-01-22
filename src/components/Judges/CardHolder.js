import React from "react";
import Card from "./Card";
import judgeSampleImage from "../../../public/images/judges/anubhav.jpeg";

export default function CardHolder() {
  const judges = [
    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SWE",
      company: "Writesonic",
      linkedinLink: "https://www.linkedin.com/in/anubhav-gupta-6b87711b0/",
      // instaLink: "#",
      twitterLink: "https://twitter.com/GuptaAnubhav12?s=20",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      // company: "Lorem epsum",
      linkedinLink: "#",
      instaLink: "#",
      twitterLink: "#",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      // company: "Lorem epsum",
      linkedinLink: "#",
      instaLink: "#",
      twitterLink: "#",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      // company: "Lorem epsum",
      linkedinLink: "#",
      instaLink: "#",
      twitterLink: "#",
    },
  ];

  return (
    <>
      <div className="inline-flex items-center gap-x-9">
        {judges.map((judge,index) => (
          <Card judge={judge} key={index}/>
        ))}
      </div>
    </>
  );
}