
// import Schedule from '../components/Timeline/Schedule'
// import Script from 'next/script'

import PrizeSection from '../components/PrizeSection'

export default function Home() {

  return (
    <div className=''>

      <NavBar />
      
      <Banner />
      {/* <Banner2 /> */}
      <About />
      {/* <Merch /> */}

      {/* <Schedule /> */}
      {/* <TimeLine /> */}
      {/* <TimeLine2/>
      <TimelineMobile/> */}
      {/* <Schedule/> */}

      {/* <Announcement /> */}
      {/* <TrackAndPrices /> */}

      <Tracks/>
      
      <RulesNew />
      <Team />

      <Sponsers/>
      <Collaborators />
      <PastYearStats></PastYearStats>
      <Judges />

      <Testimonies/>
      <FAQ />
      <Footer></Footer>
      <FooterLinks></FooterLinks>
      hi
          <PrizeSection/>
    </div>
  )
}
