import Banner2 from "../components/hero/banner";
import Hackmol from "../components/hero/img";
import Register from "../components/hero/reg";
import Log from "../components/hero/logo";
import NavBar from "../components/hero/nav";
import Link from 'next/link'
import Marquee from "../components/Hero/marquee";
import Testimonies from "../components/Testimonies";
import About from "../components/About";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";
import Track from "../components/track";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero/HeroSection";
import JudgesSection from "../components/Judges/JudgesSection";




export default function Home() {
  return (
    <div>
      <Banner2 />
      <div className="six">
        <Log />
      </div>
      <div className='five'>
        <Hackmol />
      </div>
      <div className="seven">
        <div className='hidden sm:flex items-center justify-center md:justify-start'>
          
            <button
              onClick={() => console.log('connect')} >
              <h3 className="mol">Register</h3>
              <Register />
            </button>
        </div>
      </div>
      <NavBar />
      <HeroSection />
      <Marquee />
      <About />
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
