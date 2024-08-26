import React from 'react'
import VideoSec from './videoSec'
import { Link } from 'react-router-dom'
import BannerContent from './bannerContent'

const HeroBanner = () => {
  return (
    <>
      <div className="bannerArea">
        <div className="container">     
          <BannerContent/>   
          <div className="card">
            <img src="/images/card-1.png" alt="image" />
          </div>
        </div>
        <VideoSec />
      </div>
    </>
  )
}

export default HeroBanner