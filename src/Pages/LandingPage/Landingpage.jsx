import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Herosection from '../../Components/HeroSection/Herosection'
import MarqueeSection from '../../Components/Marquee/MarqueeSection'
import TeamSection from '../../Components/Team/TeamSection'

const Landingpage = () => {
  return (
    <div>
      
        <Herosection/>
        <MarqueeSection/>
        <Banner/>
        <TeamSection/>
    </div>
  )
}

export default Landingpage