"use client"
import { useState, useEffect } from "react";
import heroText from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import regButton from "../../../public/images/RegisterButton.svg";
import regButtonHover from "../../../public/images/RegisterButtonHover.svg";
import HeroSectionImg from "../../../public/images/HeroSection.svg"

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full h-[2450px] no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroSectionImg.src})`, }}
    >
      <div className="flex flex-col justify-center items-center relative top-[6rem]">
        <div className="hero-logo flex relative py-8">
          <img
            src={heroText.src}
            alt="#"
            style={{ mixBlendMode: "hard-light" }}
            className="w-[22rem] sm:w-[40rem] lg:w-[60rem]"
          />
        </div>
        <div className="hero-text font-Minecraft text-2xl sm:text-4xl lg:text-6xl font-normal flex relative py-8 flex-col justify-center items-center">
          <div className="flex relative">THINK OUTSIDE THE BOX</div>
          <div className="flex relative">HACK INSIDE IT</div>
        </div>
        <div className="flex relative flex-col justify-center items-center">
          <div className="flex relative text-2xl font-bold font-Space-Grotesk py-3">
            Dig deeper
          </div>
          <div className="flex relative pb-6 animate-bounce">
            <img src={linkArrow.src} alt="#" />
          </div>
          <div className="flex justify-center items-center gap-2"
          >
            <div

              className="apply-button"
              data-hackathon-slug="hackmol-5"
              data-button-theme="light"
              style={{ height: '44px', width: '100px' }}
            ></div>
          <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {isHovered ? (
              < img src={regButtonHover.src} alt="#" />
            ) : (
            <img src={regButton.src} alt="#" />
            )}
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
