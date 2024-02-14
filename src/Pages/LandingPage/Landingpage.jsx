import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Herosection from '../../Components/HeroSection/Herosection'
import MarqueeSection from '../../Components/Marquee/MarqueeSection'

const Landingpage = () => {
  return (
    <div>
        <Herosection/>
        <MarqueeSection/>
        <Banner/>
    </div>
  )
}

export default Landingpage