// import Script from 'next/script'
import Testimonies from "../components/Testimonies";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";
import Track from "../components/track";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <PrizeSection />
      <Testimonies />
      <Rules />
      <Track/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
