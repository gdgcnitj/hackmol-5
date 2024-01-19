import Marquee from "../components/Hero/marquee";
import Testimonies from "../components/Testimonies";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";
import Track from "../components/track";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero/HeroSection";
import JudgesSection from "../components/Judges/JudgesSection";
import { useEffect } from "react";
import Header from "../components/Hero/Header";
import NavBar from "../components/Hero/NavBar";

export default function Home() {
  useEffect(() => {
    document.body.style.zoom = "75%";
  });

  return (
    <div>
      <Header />
      <hr></hr>
      <NavBar />
      {/* <Banner2 /> */}
      {/* <div className="six"></div>
      <div className="five"></div>
      <div className="seven">
        <div className="hidden sm:flex items-center justify-center md:justify-start"></div>
      </div> */}
      {/* <NavBar /> */}
      <HeroSection />
      <Marquee />
      <About />
      <Timeline />
      <PrizeSection />
      <Rules />
      <Track />
      <JudgesSection />
      <Testimonies />
      <FAQ />
      <Footer />
    </div>
  );
}
