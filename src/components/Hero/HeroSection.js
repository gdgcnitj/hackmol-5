"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import heroText from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import regButton from "../../../public/images/RegisterButton.svg";
import regButtonHover from "../../../public/images/RegisterButtonHover.svg";
import HeroSectionImg from "../../../public/images/HeroSection.svg";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // IntersectionObserver to handle lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            observer.unobserve(lazyImage);
          }
        });
      },
      { rootMargin: "0px 0px 100px 0px" } // Adjust the rootMargin as needed
    );

    // Observe each image with the 'lazy' attribute
    document.querySelectorAll('[data-src]').forEach((image) => {
      observer.observe(image);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full h-[2450px] no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroSectionImg.src})` }}
    >
      <div className="flex flex-col justify-center items-center relative top-[6rem]">
        <div className="hero-logo flex relative py-8">
          <img
            data-src={heroText.src} // Use data-src for lazy loading
            alt="#"
            style={{ mixBlendMode: "hard-light" }}
            className="w-[22rem] sm:w-[40rem] lg:w-[60rem]"
            loading="lazy" // Enable lazy loading
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
            <img data-src={linkArrow.src} alt="#" loading="lazy" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div
              className="apply-button"
              data-hackathon-slug="hackmol-5"
              data-button-theme="light"
              style={{ height: '44px', width: '100px' }}
            ></div>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {isHovered ? (
                <img data-src={regButtonHover.src} alt="#" loading="lazy" />
              ) : (
                <img data-src={regButton.src} alt="#" loading="lazy" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
