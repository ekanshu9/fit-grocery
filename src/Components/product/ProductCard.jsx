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
            <h1><span>&#8377;</span>{data.productprice-(data.productprice/100*data.discountpercent)}<p>M.R.P:<span><span>&#8377;</span>{data.productprice}</span></p></h1>
        </div>
        <div className="s3">
            <p>{data.counttype}</p>
        </div>
        <div className="s4">
            <p>{'('}{data.discountpercent}% off{')'}</p>
        </div>
        <div className="btn">
            <SlEye className='icon'/>
            <IoIosAdd className='icon'/>
        </div>
        
    </div>
  )
}

export default ProductCard