'use client'
import MarqueeComponent from "../components/Hero/marquee";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer";
import Temp from "../components/Hero/HeroSection";
import Header from "../components/Hero/Header";
import NavBar from "../components/Hero/NavBar";
import SponsersPage from "../components/sponsers";
import TracksPrizes from "../components/TracksPrizes";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      {/* <StatusHeader text="Registrations are started!"/> */}
      <ParallaxProvider>
      <Header />
      <NavBar />
      {/* <HeroSection /> */}
      <Temp/>
      
       <MarqueeComponent/> 
      <About />
      <Timeline />
      {<TracksPrizes/>}
      <Rules />
      {/* <JudgesSection /> */}
      {/* <Testimonies /> */}
      
     <SponsersPage/>
      <FAQ />
      <Footer /> 
      </ParallaxProvider>
    </>
  );
}
