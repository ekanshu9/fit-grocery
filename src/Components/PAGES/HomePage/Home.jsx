import React from 'react'
import Navbar from '../../Navbar/Navbar'
import BannerSlider from '../../Banner/BannerSlider'
import HomeCategories from '../../category/HomeCategories'
import Product_Sidebar from '../../product/Product_Sidebar'
import Footer1 from '../../Footer/Footer1'
import Footer2 from '../../Footer/Footer2'
import ProductReviews from '../Review/ProductReviews'




export const Home = () => {
  return (
    <div>
     <Navbar/>
     <BannerSlider/>
     <HomeCategories/>
     <Product_Sidebar/>
     <Footer1/>
     <Footer2/>
     <ProductReviews/>
    </div>
  )
}
export default Home
