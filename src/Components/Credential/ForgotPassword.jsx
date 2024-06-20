import React from 'react'
import "./ForgotPassword.css"
import loginimg from "../../ASSETS/image/loginimg.jpeg"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    let onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <Navbar/>
        <div className="logincontainer">
            
            <div className="loginimg">
                <img src={loginimg} alt="" />
            </div>
            <div className="loginform">
            <h2>Forgot Password</h2>
                <form >
                    <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                    </div>
                    <div className="forgot">
                        <div className="pass1">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                        </div>
                        <div className="pass2">
                        <label htmlFor="">Confirm New Password</label>
                        <input type="password" name="" id="" />
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/login">Try Login again?</Link>
                        <button onClick={onSubmit}>Verify</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default ForgotPassword