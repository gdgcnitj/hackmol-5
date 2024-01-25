import React from "react";
import Card from "./Card";
import judgeSampleImage1 from "../../../public/images/judges/anubhav.jpeg";
import judgeSampleImage2 from "../../../public/images/judges/shikhar.jpg";
import judgeSampleImage3 from "../../../public/images/judges/naaz1.jpeg";

export default function CardHolder() {
  const judges = [
    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage1,
      role: "SWE",
      company: "Writesonic",
      linkedinLink: "https://www.linkedin.com/in/anubhav-gupta-6b87711b0/",
      // instaLink: "#",
      twitterLink: "https://twitter.com/GuptaAnubhav12?s=20",
    },

    {
      name: "Shikhar Srivastava",
      imageURL: judgeSampleImage2,
      role: "SOFTWARE ENGINEER",
      company: "Procol",
      linkedinLink: "https://www.linkedin.com/in/shikhar236/",
      instaLink: "#",
      twitterLink: "#",
    },

    {
      name: "Naaz Kakria",
      imageURL: judgeSampleImage3,
      role: "SDE",
      company: "ORACLE",
      linkedinLink: "https://www.linkedin.com/in/naazk3/",
      instaLink: "#",
      twitterLink: "#",
    },

    // {
    //   name: "ANUBHAV GUPTA",
    //   imageURL: judgeSampleImage,
    //   role: "SOFTWARE ENGINEER",
    //   // company: "Lorem epsum",
    //   linkedinLink: "#",
    //   instaLink: "#",
    //   twitterLink: "#",
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-9">
      {judges.map((judge, index) => (
        <Card judge={judge} key={index} />
      ))}
    </div>
  );
}
