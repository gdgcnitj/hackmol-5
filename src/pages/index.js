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
import Header from "../components/Hero/Header";
import NavBar from "../components/Hero/NavBar";
import SponsersPage from "../components/sponsers";

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <HeroSection />
      <Marquee />
      <About />
      <Timeline />
      <PrizeSection />
      <Rules />
      <Track />
      <JudgesSection />
      <Testimonies />
      <SponsersPage/>
      <FAQ />
      <Footer />
    </div>
  );
}
