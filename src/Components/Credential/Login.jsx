import React from 'react'
import "./Login.css"
import Navbar from '../Navbar/Navbar'
import loginimg from "../../ASSETS/image/loginimg.jpeg"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigation=useNavigate()
    let onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <Navbar />
        <div className="logincontainer">
            <div className="loginimg">
                <img src={loginimg} alt="" />
            </div>
            <div className="loginform">
            <h1>Login</h1>
                <form >
                    
                    <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <div className="button">
                        <Link to="/forgotpassword">Forgot password?</Link>
                        <button onClick={onSubmit}>Login</button>
                        <h5>Or</h5>
                        <button onClick={()=>{navigation("/signup")}}>Signup</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login