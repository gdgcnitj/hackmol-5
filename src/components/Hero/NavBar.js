import React, {useState} from "react";
import { FaArrowDown, FaArrowUp, FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isNavBarToggled, setIsNavBarToggled] = useState(false);

  return (
    <>
      <div className="flex justify-between p-4 pl-2 pr-2 md:hidden bg-black text-white">
        <FaBars
          className="size-6"
          onClick={() => setIsNavBarToggled(!isNavBarToggled)}
        ></FaBars>
        <div
          className="flex gap-1 items-center"
          onClick={() => setIsNavBarToggled(!isNavBarToggled)}
        >
          <h1>MENU</h1>
          {isNavBarToggled ? (
            <FaArrowUp className="size-5"></FaArrowUp>
          ) : (
            <FaArrowDown className="size-5"></FaArrowDown>
          )}
        </div>
      </div>
      <div
        className={`flex md:hidden flex-col bg-black text-white pl-3.5 transition-all duration-300 ease-out ${
          !isNavBarToggled ? "h-0" : "h-52"
        }`}
      >
        <a href="#about" className="font-bold text-lg font-Poppins">
          ABOUT
        </a>
        <a href="#schedule" className="font-bold text-lg font-Poppins">
          SCHEDULE
        </a>
        <a href="#prizes" className="font-bold text-lg font-Poppins">
          PRIZES
        </a>
        <a href="#rules" className="font-bold text-lg font-Poppins">
          RULES
        </a>
        <a href="#tracks" className="font-bold text-lg font-Poppins">
          TRACKS
        </a>
        <a href="#judges" className="font-bold text-lg font-Poppins">
          JUDGES
        </a>
        <a href="#faq" className="font-bold text-lg font-Poppins">
          FAQ
        </a>
      </div>
      <div className="justify-around bg-black justify-items-center text-white p-2 hidden md:flex">
        <a
          href="#about"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          ABOUT
        </a>
        <a
          href="#schedule"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          SCHEDULE
        </a>
        <a
          href="#prizes"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          PRIZES
        </a>
        <a
          href="#rules"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          RULES
        </a>
        <a
          href="#tracks"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          TRACKS
        </a>
        <a
          href="#judges"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          JUDGES
        </a>
        <a
          href="#faq"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          FAQ
        </a>
      </div>
    </>
  );
}
