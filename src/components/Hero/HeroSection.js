import React from "react";
import heroSection from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import regButton from "../../../public/images/RegisterButton.svg";

function HeroSection() {
  return (
    <div className="relative w-full h-[1972px] bg-cover overflow-y-auto" style={{ backgroundImage: "url('/images/HeroSection.svg')" }}>
      <img src={heroSection.src} alt="#" />
      <div className="font-Minecrafter text-6xl font-black">THINK OUTSIDE THE BOX</div>
      <div className="font-Minecrafter text-6xl font-black">HACK INSIDE IT</div>
      <div>Dig deeper</div>
      <img src={linkArrow.src} alt="#" />
      <img src={regButton.src} alt="#" />
    </div>
  );
}

export default HeroSection;
