import React from 'react'
import "./SignUp.css"
import loginimg from "../../ASSETS/image/loginimg.jpeg"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
const SignUp = () => {
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
                <h1>Signup</h1>
                <form >
                <div className="forgot">
                        <div className="pass1">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" />
                        </div>
                        <div className="pass2">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="Email">Email</label>
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
                        <Link to="/login">Already have an account?</Link>
                        <button onClick={onSubmit}>Signup</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp