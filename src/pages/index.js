import Banner2 from "../components/hero/banner";
import Hackmol from   "../components/hero/img";
import Register from  "../components/hero/reg";
import Log from "../components/hero/logo";
import NavBar from "../components/hero/nav";
import Link from 'next/link'
import Testimonies from "../components/Testimonies";
import Rules from "../components/Rules/Rules";
import FAQ from "../components/FAQ/FAQ";
import PrizeSection from "../components/PrizeSection";
import Track from "../components/track";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero/HeroSection";




export default function Home() {
  return (
    <div>
   <Banner2/>
<div className="six">
<Log/>
</div>
<div className='five'>
<Hackmol/>
</div>
<div className="seven">
<div className='hidden sm:flex items-center justify-center md:justify-start'>
                           
                           
                           <Link
                               target='_blank'
                               rel='noreferrer'
                               href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                               <button
                                   
                                   onClick={() => console.log('connect')} >
                                  <h3 className="mol">Register</h3>
                                  <Register/>
                               </button>
                           </Link>
                       </div>
</div>

<NavBar/>
<HeroSection />
<PrizeSection />
      <Testimonies />
      <Rules />
      <Track/>
      <FAQ/>
      <Footer/>

    </div>
  );
}
