// import Schedule from '../components/Timeline/Schedule'
// import Script from 'next/script'
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";

export default function Home() {
  return (

    <div>
      <PrizeSection />
      <Rules />
      <FAQ/>
    </div>
  );
}
