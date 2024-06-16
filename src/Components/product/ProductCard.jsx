import React, { useState } from 'react'
import "./ProductCard.css"
import { IoIosAdd } from "react-icons/io";
import { SlEye } from "react-icons/sl";
import { Link } from 'react-router-dom';
const ProductCard = ({data}) => {
    const[show ,setShow]=useState(false);
    const[qty,setQty]=useState(0)
   
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
        {
            show?
            <div className='btn'>
                <div className="qty">
                    <button
                    onClick={()=>{
                        if(qty>0)setQty(qty-1)
                    }}>-</button>
                    {qty}
                    <button onClick={()=>setQty(qty+1)}>+</button>
                </div>
                <button onClick={()=>setShow(!show)} className='addtocart'>Add to cart</button>
            </div>:
            <div className="btn">
            <Link to={`/product/${data.id}`} style={{color:"black"}}><SlEye className='icon' /></Link>
            <IoIosAdd className='icon' onClick={()=>setShow(!show)}/>
        </div>
        }
        
        
    </div>
  )
}

export default ProductCard