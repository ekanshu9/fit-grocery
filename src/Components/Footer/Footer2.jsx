import React from 'react'
import "./Footer2.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import img from "../../ASSETS/logo.png"
import visa from "../../ASSETS/image/visa.png"
const Footer2 = () => {
  return (
    <div className='footer2'>
        <div className="top">
        <div className="info1 ">
            <img src={img } alt="img" />
            <p>Fit Grocery is a leading online grocery store in the USA. We are committed to providing the best quality products at the best prices.</p>
            <div className="icon">
            <FaFacebook style={{fontSize:"25px",color:"#1877F2"}} />
            <FaTwitter style={{fontSize:"25px",color:"#1DA1F2"}} />
            <FaInstagram style={{fontSize:"25px", }}  className='insta'/>
            <FaYoutube style={{fontSize:"25px", color:"red"}} />
            </div>
        </div>
        <div className="info2 ">
            <h4>About Us</h4>
            <a href="#">About us</a>
            <a href="">Contct us</a>
            <a href="#">About team</a>
            <a href="#">Customer Support</a>
        </div>
        <div className="info3 ">
            <h4>Our Information</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Return Policy</a>
            <a href="#">Site map</a>
        </div>
        <div className="info4 ">
            <h4>Community</h4>
            <a href="#">Announcement</a><a href="#">Answer center</a><a href="#">Discussion boards</a><a href="#">Giving works</a>
        </div>
        <div className="info5 ">
            <h4>Subscribe Now</h4>
            <p><a href="">Subscribe your email for newsletter and featured news based on your interest</a></p>
            <div className="email">
            <MdOutlineMailOutline className='icon1'/>
            <input type="email" name="" id="" placeholder='Enter your email'/>
            <IoIosArrowDropright className='icon1' style={{
                color:"#7ED957"
            }}/>
            </div>
        </div>
        </div>
        
        <div className="bottom">
            <p>© Copyright 2023 Fit Grocery, Inc. All rights reserved</p>
            <img src={visa} alt="" />
        </div>
    </div>
  )
}

export default Footer2