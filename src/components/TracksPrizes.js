import React from "react";
import TracksPrizesCards from "./TracksPrizesCards";
import main from "../../public/images/left1.png";
import freshers from "../../public/images/right3.png";
import polygon from "../../public/SponserLogos/PolygonDark.png";
import replit from "../../public/SponserLogos/replit_3.png";
import SpecialTracks from "./SpecialTracks";

export default function TracksPrizes() {
  const trackArr = [
    {
      img: main,
      title: "Main Track",
      desc: "For 2nd year and above students",
      amount: "₹ 60000",
      ranks: [
        {
          amount: "₹ 30000",
          title: "Winner",
        },
        {
          amount: "₹ 20000",
          title: "1st Runner Ups",
        },
        {
          amount: "₹ 10000",
          title: "2nd Runner Ups",
        },
      ],
      points: [
        "Partner Tshirts",
        "60 days free Balsamiq cloud promo code",
        "1 year subscription to Wolfram|Alpha Pro",
        "Course codes for Leading Learners Courses ",
      ],
    },
    {
      img: freshers,
      title: "Freshers Track",
      desc: "For 1st year students only",
      amount: "₹ 6000",
      ranks: [
        {
          amount: "₹ 3000",
          title: "Winner",
        },
        {
          amount: "₹ 2000",
          title: "1st Runner Ups",
        },
        {
          amount: "₹ 1000",
          title: "2nd Runner Ups",
        },
      ],
      points: [
        "Partner Tshirts",
        "60 days free Balsamiq cloud promo code",
        "1 year subscription to Wolfram|Alpha Pro",
        "Course codes for Leading Learners Courses ",
      ],
    },
  ];

  const specialTracks = [
    {
      img: polygon,
      companyName: "Polygon Special Track",
      amount: "$ 350",
      points: [
        {
          amount: "$ 150",
          title: "Ethereum Track",
        },
        {
          amount: "$ 200",
          title: "Ethereum + Polygon Track",
        },
      ],
    },
    {
        img: replit,
        companyName: "Replit Special Track",
        amount: "$ 50",
        points: [
          {
            amount: "$ 50",
            title: "Replit Track",
          }
        ],
      },
  ];

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h1 className="font-Minecraft text-6xl text-center">Tracks</h1>
      <div className="flex flex-wrap justify-center gap-6 m-4">
        {trackArr.map((track) => (
          <TracksPrizesCards props={track} />
        ))}
      </div>
      <h1 className="font-Minecraft text-6xl text-center">Special Tracks</h1>
      <div className="flex flex-wrap justify-center gap-6 m-4">
        {specialTracks.map((track) => (
          <SpecialTracks props={track} />
        ))}
      </div>
    </div>
  );
}
