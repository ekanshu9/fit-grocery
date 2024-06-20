
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../Components/product/ProductPage";
import Home from "../Components/PAGES/HomePage/Home";
import Login from "../Components/Credential/Login";
import ForgotPassword from "../Components/Credential/ForgotPassword";
import SignUp from "../Components/Credential/SignUp";

export let routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/product/:prodid",
        element:<ProductPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/forgotpassword",
        element:<ForgotPassword/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    }
])