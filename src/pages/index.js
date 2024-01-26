import Marquee from "../components/Hero/marquee";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer";
import HeroSection from "../components/Hero/HeroSection";
import Header from "../components/Hero/Header";
import NavBar from "../components/Hero/NavBar";
import SponsersPage from "../components/sponsers";
import TracksPrizes from "../components/TracksPrizes";

export default function Home() {
  return (
    <>
      {/* <StatusHeader text="Registrations are started!"/> */}
      <Header />
      <NavBar />
      <HeroSection />
      <Marquee />
      <About />
      <Timeline />
      {<TracksPrizes/>}
      {/* <PrizeSection /> */}
      <Rules />
      {/* <Track /> */}
      {/* <JudgesSection /> */}
      {/* <Testimonies /> */}
      
      <SponsersPage/>
      <FAQ />
      <Footer />
    </>
  );
}
