import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import HeroText from "../../../public/images/HeroText.svg";
import LinkArrow from "../../../public/images/LinkArrow.svg";
import HeroSky from "../../../public/images/hero/sky.png";
import HeroMid from "../../../public/images/hero/mid.png";
import HeroBottom from "../../../public/images/hero/bottom.png";

function HeroSection() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };

    return loadScript();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const scrollOptions = {
        top: aboutSection.offsetTop,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  };

  return (
    <div className="relative w-full h-[580px] sm:h-[700px] md:h-[900px] lg:h-[1200px] xl:h-[2100px]  2xl:h-[2200px]  bg-[#070201] overflow-hidden">
       <Parallax className='relative top-0 left-0 w-full' speed={0} >
        <div className="w-full">
          <Image
            width={1920}
            height={1080}
            className="w-full object-contain"
            src={HeroSky}
            alt="Hero Sky"
            placeholder="blur"
          />
        </div>
      </Parallax>
      <Parallax speed={30} className='absolute w-full top-8 xl:top-36 left-0 z-40'>
        <div className="w-full relative lg:relative text-center">
          <div className="flex align-center justify-center py-8">
            <Image
            width={1920}
            height={1080}
              src={HeroText.src}
              className="w-[17rem] sm:w-[20rem] lg:w-[60rem]"
              alt="Hero Text"

             
             
            />
          </div>
          <div className="font-Minecraft text-xl sm:text-2xl lg:text-4xl font-normal flex py-6 flex-col justify-center items-center">
            <div className="flex">THINK OUTSIDE THE BOX</div>
            <div className="flex">HACK INSIDE IT</div>
          </div>
          {/*<div className="text-center font-bold text-white sm:text-black font-Minecraft text-xl lg:text-5xl p-4">
            <b>24-25 February, 2024</b>
          </div>*/}
          <div className="text-center text-xl sm:text-2xl text-white sm:text-black lg:text-4xl font-normal p-4">
            <b>Register till 9 Feb</b>
          </div>
          <div className="flex flex-col justify-center items-center text-white sm:text-black">
            <div className="flex relative text-2xl font-bold font-Space-Grotesk py-3">
              Dig deeper
            </div>
            <div
              className="flex p-6 animate-bounce cursor-pointer"
              onClick={scrollToAbout}
            >
              <img src={LinkArrow.src} width={45} height={30} alt="Link Arrow" />
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-4 sm:flex-wrap">
              <div
                className="apply-button w-[200px] sm:w-[480px] h-[80px] p-2"
                data-hackathon-slug="hackmol-5"
                data-button-theme="light"
              ></div>
                <div className="relative cursor-pointer w-44 sm:w-60 sm:h-50 h-20" onClick={() =>
                  window.open(
                    "https://discord.com/invite/9ZdMjnqt",
                    "_blank",
                    'noreferrer'
                  )
                }>
                  <Image
                    className="w-full"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABICAYAAAB2miDXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgB7d0/aBNRHMDxX4w418EpEC1kCHaRToIgQiEgiJQijg4ugiIdHDsLLg4Org6OolJFEAqCCIKLVQRFpFgNFAcHFwWR1jQJl+T+vHv3LvfnlzbfDxzJ5V5KyeXH773fe3epSHodAWBSSdP4gABQkSpSPWQ+IFlibJH5ACUHU7SNZLz7P2+Iq/WdTevx9tZHmSb12lzktbjPwNR2ryv6fBf5mc1XZ2OPXTpyW1yR+QAlaTJf39Lb6wIgu9TBB8CJf5hmLL7Q7QSU2DIfUwpAgWxzEcPgi6tqrrb/xbx1TQBNWtVOP1/l0xhn4cxHtsO+UORURlsGf7s1fG2xfsj2lnBc9YORggtQkHCPMTwHaAw+phOA4lHtBJT0Ml+GcR6FFUwz//f/nKQV6XaaKpvmqiaBB4ypn/AouAA5WG0/856NKqDbb/5Y38OYD1DimPnoYgJ5I/MBSgg+QEmk23nrypNIo+ZKVQC48A/RTllbkvkAJQQfoITgA5QQfIASgg9QQvABSiJTDY2F04ZmrwVAvsh8gBKuagAKsvHilfU4mQ9QQvABSgg+QAnBBygh+AAlBB+ghOADlBB8gBKCD1BC8AFKIsvLTEtimie5hwuQNzIfoITgA5Q4XdWwWI/+Asvo3vQAxkHmA5T0gq8iAEo39sW0pq6oze/OX/ny/0fs8fnqrLhY39l0en9cO1drVz8E9rlr917TCuzVa1uBfdfvm4uHD34ZX28sBPc/Pd4I7HMle0nqtTnBSJYv/375SQOnGyiZIvvCxcMCYCz9oR6Zb2ythOP8piHsBsWWzuCF83cvC6LCK3+aK2et7cNjjK+PZgTFSTo/k3A+nl67N3jajzumGgAlBB+gJDLm86VGuqBARv54CqPg4ihcBf5887m1/bbxtvsoStL5Ket8GK4KutPdlk1tB8HnX+XSEQB5WY47QOYDyhNYyknBBVBiWlQ97HYeX2oEDjQYxwBD4fFdeO2mAZkPmAQEH6AkVcHFdHMluqJALOu1smQ+QEnmqYakX98EYJZ0C4nECfdwRRSYVoZqJ91OYBIldTttkcsyNEyVtPN4Sch8gJIstw0k8wEZYqjshdW9f/RMdzvR3Y55jzPedlSAcnz3Ht93t2/e9rK7vZMS7QI6Vp/BeES8YQAAAABJRU5ErkJggg=="

                    width={0}
                    height={0}
                  />
                  <div className="font-Minecrafter w-full text-white text-[16px] sm:text-xl font-bold absolute left-0 top-1/4">
                    Join Discord
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Parallax>
     
      <Parallax speed={15} className='absolute top-44 md:top-60 lg:top-80 left-0 w-full' >
        <div className="w-full">
          <Image
            width={1920}
            height={1080}
            className="w-full object-contain"
            src={HeroMid}
            alt="Hero Mid"
            placeholder="blur"
         
          />
        </div>
      </Parallax>
      <Parallax speed={20} className='absolute bottom-10 sm:bottom-0 left-0 w-full'>
        <div className="w-full">
          <Image
            width={1920}
            height={1080}
            className="w-full object-contain"
            src={HeroBottom}
            alt="Hero Bottom"
            placeholder="blur"
            
          />
        </div>
      </Parallax>
    </div>
  );
}

export default HeroSection;
