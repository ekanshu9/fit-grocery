import React from 'react'
import Navbar from '../../Navbar/Navbar'
import BannerSlider from '../../Banner/BannerSlider'
import HomeCategories from '../../category/HomeCategories'
import Product_Sidebar from '../../product/Product_Sidebar'



export const Home = () => {
  return (
    <div>
     <Navbar/>
     <BannerSlider/>
     <HomeCategories/>
     <Product_Sidebar/>
    </div>
  )
}
