import React from 'react'
import Navbar from '../../Navbar/Navbar'
import BannerSlider from '../../Banner/BannerSlider'
import HomeCategories from '../../category/HomeCategories'



export const Home = () => {
  return (
    <div>
     <Navbar/>
     <BannerSlider/>
     <HomeCategories/>
    </div>
  )
}
