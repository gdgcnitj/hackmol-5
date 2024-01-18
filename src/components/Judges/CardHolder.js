import React from "react";
import Card from "./Card";
import judgeSampleImage from "../../../public/images/judges/Judge.svg";

export default function CardHolder() {
  const judges = [
    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      company: "Lorem epsum",
      linkedinLink: "https://www.linkedin.com/in/arnav-anand-923232270/",
      instaLink: "https://www.instagram.com/neo.anderson.7/",
      twitterLink: "https://twitter.com/thisis_arnav",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      company: "Lorem epsum",
      linkedinLink: "https://www.linkedin.com/in/arnav-anand-923232270/",
      instaLink: "https://www.instagram.com/neo.anderson.7/",
      twitterLink: "https://twitter.com/thisis_arnav",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      company: "Lorem epsum",
      linkedinLink: "https://www.linkedin.com/in/arnav-anand-923232270/",
      instaLink: "https://www.instagram.com/neo.anderson.7/",
      twitterLink: "https://twitter.com/thisis_arnav",
    },

    {
      name: "ANUBHAV GUPTA",
      imageURL: judgeSampleImage,
      role: "SOFTWARE ENGINEER",
      company: "Lorem epsum",
      linkedinLink: "https://www.linkedin.com/in/arnav-anand-923232270/",
      instaLink: "https://www.instagram.com/neo.anderson.7/",
      twitterLink: "https://twitter.com/thisis_arnav",
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
