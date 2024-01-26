import React from "react";

export default function TracksPrizesCards({ props }) {
  return (
    <div className="flex p-8 font-Poppins bg-[#231E35] text-white rounded-xl">
      <div className="flex flex-col items-start w-1/2 h-full gap-2 px-2">
        <div className="h-1/2 w-1/2">
          <img src={props.img.src} className="px-3 min-h-full min-w-full"></img>
        </div>
        <div className=" flex flex-col">
          <h1 className="text-4xl text-wrap">
            <b>{props.title}</b>
          </h1>
          {/* <div className="flex flex-col gap-2 w-10/12">
            <h1 className="text-3xl">
              <b>Prize Pool</b>
            </h1>
            <h2 className="text-2xl">
              <b>{`${props.amount}`}</b>
            </h2>
          </div> */}
          {props.ranks.map((rank) => {
            return (
              <div key={rank.title}>
                <h1 className="text-2xl">
                  <b>{rank.title}</b>
                </h1>
                <h2 className="text-xl">{`${rank.amount}`}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col gap-2 p-4 w-10/12">
          <h1 className="text-3xl">
            <b>Prize Pool</b>
          </h1>
          <h2 className="text-2xl">
            <b>{`${props.amount}`}</b>
          </h2>
        </div>
        {props.points.length > 0 && (
          <div className="p-4">
            <ul>
              {props.points.map((text) => {
                return (
                  <li key={text} className="list-disc text-xl text-wrap p-0.5">{text}</li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
