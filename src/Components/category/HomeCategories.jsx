import React from 'react'
import "./HomeCategory.css"
import img1 from "../../ASSETS/image/vegetable.png"
import img2 from "../../ASSETS/image/fruit.png"
import img3 from "../../ASSETS/image/orange-1218158_1280.webp"
import img4 from "../../ASSETS/image/home.png"
const HomeCategories = () => {
  return (
    <div className='homecategory'>
        <div className="container">
            <img src={img1} alt="img1" />
            <div className="containt">
            <h1 >Vegetables at your doorstep</h1>
            <span>Shop vegetables now </span>
            </div>
        </div>
        <div className="container">
            <img src={img2} alt="img 2" />
            <div className="containt">
            <h1 >Vegetables at your doorstep</h1>
            <span>Shop vegetables now </span>

            </div>
        </div>
        <div className="container">
            <img src={img3} alt="img3" />
            <div className="containt">
            <h1 >Vegetables at your doorstep</h1>
            <span>Shop vegetables now </span>

            </div>
        </div>
        <div className="container">
            <img src={img4} alt="img4" />
            <div className="containt">
            <h1 >Vegetables at your doorstep</h1>
            <span>Shop vegetables now </span>
            </div>
            
        </div>
    </div>
  )
}

export default HomeCategories