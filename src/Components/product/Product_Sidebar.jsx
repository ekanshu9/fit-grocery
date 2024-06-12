import React from 'react'
import "./Product_Sidebar.css"
import AllProduct from './AllProduct'
import Category_Sidebar from './Category_Sidebar'

const Product_Sidebar = () => {
  return (
    <div className='productsidebar'>
        <Category_Sidebar/>
        <AllProduct/>
    </div>
  )
}

export default Product_Sidebar