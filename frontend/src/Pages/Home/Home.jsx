import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import Location from '../../components/Location'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Location/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home


