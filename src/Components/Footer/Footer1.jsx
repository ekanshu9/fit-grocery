import React from 'react'
import img from "../../ASSETS/image/footer.png"
import "./Footer1.css"
const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className="img">
            <img src={img} alt="footer1" />
        </div>
        <div className="info">
            <h1>Fresh Vegetables & Fruits at your doorstep</h1>
            <p>We deliver fresh vegetables & fruits at your doorstep. We deliver fresh vegetables & fruits at your doorstep.</p>
        </div>
    </div>
  )
}

export default Footer1