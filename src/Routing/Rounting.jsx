
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../Components/product/ProductPage";
import Home from "../Components/PAGES/HomePage/Home";

export let routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/product/:prodid",
        element:<ProductPage/>
    }
])