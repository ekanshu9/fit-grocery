import React, { useState } from 'react'
import "../../css/navbar.css"
import logo from "../../ASSETS/logo.png"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[quantity,setQuantity]=useState(0)
  return (
    <nav>
        <div className="s1">
          <Link to="/">
          <img src={logo} alt="logo" className='logo' />
          </Link>
            
            <div className="searchbar">
                <input type="text" name="" id="" className='search' placeholder='search for product and category' />
                <button>
                <CiSearch className='sicon'/>
                </button>
            </div>
            <div className="right">
                <div className="cart">
                    <span className='qty'>
                        {quantity}</span><CiShoppingCart className='icon kart'/> </div>
                        <CiUser  className='icon user'/>
            </div>
        </div>
        <div className="s2">
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">Category</Dropdown.Toggle>
            <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh Vegetable</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fresh Fruit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">House Cleaning</Dropdown.Item>
      </Dropdown.Menu>
        </Dropdown>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">More</Dropdown.Toggle>
            <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Term & Condition</Dropdown.Item>
      </Dropdown.Menu>
        </Dropdown>
        </div>
       
    </nav>
  )
}

export default Navbar