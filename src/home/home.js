import React from 'react'
import Header from '../components/header'
import HeroBanner from '../components/heroBanner'
import IconBoxItem from '../components/iconBoxItem'
import IconBox from '../components/iconBox'
import CardSec from '../components/cardSec'
import CategoryTab from '../components/categoryTab'
import CompareCardsSec from '../components/compareCardsSec'
import LoungeFinder from '../components/loungeFinder'
import AboutUsSec from '../components/aboutUs'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Header />
      <div class="contentWrapper">
      <HeroBanner/>
      <IconBox/>
      <CardSec/>
      <CategoryTab/>
      <CompareCardsSec/>
      <LoungeFinder/>
      <AboutUsSec/>
      </div>
      <Footer/>
   
    </>
  )
}

export default Home