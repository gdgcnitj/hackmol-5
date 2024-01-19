// import Script from 'next/script'
import Testimonies from "../components/Testimonies";
import Timeline from "../components/Timeline";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";

export default function Home() {
  return (
    <div>
      <PrizeSection />
      <Timeline />
      <Testimonies />
      <Rules />
      <FAQ />
    </div>
  );
}
