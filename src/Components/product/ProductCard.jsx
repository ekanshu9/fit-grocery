import React from 'react'
import "./ProductCard.css"
import { IoIosAdd } from "react-icons/io";
import { SlEye } from "react-icons/sl";
const ProductCard = ({data}) => {
  return (
    <div className='product'>
        <div className="s1">
            <img src={data.productimg} alt="product" />
        </div>
        <div className="s2">
            <h1>${data.productprice-(data.productprice/100*data.discountpercent)}<span>${data.productprice}</span></h1>
        </div>
        <div className="s3">
            <p>{data.counttype}</p>
        </div>
        <div className="btn">
            <SlEye className='icon'/>
            <IoIosAdd className='icon'/>
        </div>
    </div>
  )
}

export default ProductCard