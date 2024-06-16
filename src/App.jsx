


import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import { RouterProvider } from "react-router-dom";
import {routes} from "./Routing/Rounting"

function App() {
 

  return (
    <>
    <RouterProvider router={routes}>
    
    </RouterProvider>
    
    </>
  )
}

export default App
