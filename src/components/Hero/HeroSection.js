import React, { useState } from "react";
import { useEffect } from "react";
import heroText from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import HeroSectionImg from "../../../public/images/HeroSection.svg";
import regButtonHover from "../../../public/images/RegisterButtonHover.svg";
import regButton from "../../../public/images/RegisterButton.svg";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
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
      <img
        className="absolute w-full h-full object-cover"
        src={HeroSectionImg.src}
      />
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
        <div className="text-center text-5xl p-4"><b>24-25 February, 2024</b></div>
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
            <img src={linkArrow.src} loading="eager" />
          </div>
          <div className="flex md:flex-col items-center gap-4 sm:flex-wrap">
            <div
              className="w-[480px] h-[80px] p-2"
              data-hackathon-slug="hackmol-5"
              data-button-theme="light"
              style={{}}
            ></div>
            <button
              onClick={() =>
                window.open("https://discord.gg/nPF8XgfZ", "_blank")
              }
            >
              <div className="relative sm:w-60 sm:h-50 h-20 w-80">
                <img
                  className="w-full h-full"
                  src={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABICAYAAAB2miDXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgB7d0/aBNRHMDxX4w418EpEC1kCHaRToIgQiEgiJQijg4ugiIdHDsLLg4Org6OolJFEAqCCIKLVQRFpFgNFAcHFwWR1jQJl+T+vHv3LvfnlzbfDxzJ5V5KyeXH773fe3epSHodAWBSSdP4gABQkSpSPWQ+IFlibJH5ACUHU7SNZLz7P2+Iq/WdTevx9tZHmSb12lzktbjPwNR2ryv6fBf5mc1XZ2OPXTpyW1yR+QAlaTJf39Lb6wIgu9TBB8CJf5hmLL7Q7QSU2DIfUwpAgWxzEcPgi6tqrrb/xbx1TQBNWtVOP1/l0xhn4cxHtsO+UORURlsGf7s1fG2xfsj2lnBc9YORggtQkHCPMTwHaAw+phOA4lHtBJT0Ml+GcR6FFUwz//f/nKQV6XaaKpvmqiaBB4ypn/AouAA5WG0/856NKqDbb/5Y38OYD1DimPnoYgJ5I/MBSgg+QEmk23nrypNIo+ZKVQC48A/RTllbkvkAJQQfoITgA5QQfIASgg9QQvABSiJTDY2F04ZmrwVAvsh8gBKuagAKsvHilfU4mQ9QQvABSgg+QAnBBygh+AAlBB+ghOADlBB8gBKCD1BC8AFKIsvLTEtimie5hwuQNzIfoITgA5Q4XdWwWI/+Asvo3vQAxkHmA5T0gq8iAEo39sW0pq6oze/OX/ny/0fs8fnqrLhY39l0en9cO1drVz8E9rlr917TCuzVa1uBfdfvm4uHD34ZX28sBPc/Pd4I7HMle0nqtTnBSJYv/375SQOnGyiZIvvCxcMCYCz9oR6Zb2ythOP8piHsBsWWzuCF83cvC6LCK3+aK2et7cNjjK+PZgTFSTo/k3A+nl67N3jajzumGgAlBB+gJDLm86VGuqBARv54CqPg4ihcBf5887m1/bbxtvsoStL5Ket8GK4KutPdlk1tB8HnX+XSEQB5WY47QOYDyhNYyknBBVBiWlQ97HYeX2oEDjQYxwBD4fFdeO2mAZkPmAQEH6AkVcHFdHMluqJALOu1smQ+QEnmqYakX98EYJZ0C4nECfdwRRSYVoZqJ91OYBIldTttkcsyNEyVtPN4Sch8gJIstw0k8wEZYqjshdW9f/RMdzvR3Y55jzPedlSAcnz3Ht93t2/e9rK7vZMS7QI6Vp/BeES8YQAAAABJRU5ErkJggg=="
                  }
                />
                <h1 className="font-Minecrafter text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4">
                  Join Discord
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
