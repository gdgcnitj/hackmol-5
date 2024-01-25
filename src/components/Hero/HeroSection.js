"use client";
import React from "react";
import { useEffect } from "react";
import heroText from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import HeroSectionImg from "../../../public/images/HeroSection.svg";
import Image from "next/image";

function HeroSection() {
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
    document.querySelectorAll("[data-src]").forEach((image) => {
      observer.observe(image);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-[2440px] no-repeat">
      <img className='absolute w-full h-full object-cover' src={HeroSectionImg.src}/>
      <div className="flex flex-col justify-center items-center relative top-[6rem]">
        <div className="hero-logo flex relative py-8">
          <img
            src={heroText.src} // Use data-src for lazy loading
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
          <div
            className="flex relative pb-6 animate-bounce cursor-pointer"
            onClick={() => {
              var scrollDiv = document.getElementById("about").offsetTop;
              window.scrollTo({ top: scrollDiv, behavior: "smooth" });
            }}
          >
            <img data-src={linkArrow.src}  loading="eager" />
          </div>
          <div className="flex flex-col-reverse justify-center items-center gap-4 sm:flex-row">
            <div
              className="apply-button p-2"
              data-hackathon-slug="hackmol-5"
              data-button-theme="light"
              style={{}}
            ></div>
            {/* <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <img data-src={regButtonHover.src} alt="#" loading="lazy" />
              ) : (
                <img data-src={regButton.src} alt="#" loading="lazy" />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
