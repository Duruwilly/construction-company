import React from 'react'
import About from './About'
import Heroe from './Heroe'
import Portfolio from './Portfolio'
import Services from './Services'
import Teams from './Teams'
import Testimonials from './Testimonials'
import VisionAndMission from './VisionAndMission'

const Home = () => {
  return (
    <div>
     <Heroe />
     <Services />
     <About />
     <Teams />
     <Portfolio />
     <VisionAndMission />
     <Testimonials />
    </div>
  )
}

export default Home