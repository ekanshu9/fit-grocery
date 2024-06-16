import React from 'react'
import { FaStar } from "react-icons/fa";
import "./CustomerReview.css"
const CustomerReview = () => {
    let data=JSON.parse(localStorage.getItem("container"))

  return (
    <div className='container'>
        <h3> Product Reviews</h3>
        {data&&data.map((item,index)=>{
            return(
                <div className="card" key={index}>
            <div className="top">
                <h4>{item.Name}</h4>
                <div className="right">
                    <div className="star">
                    <FaStar  style={{margin:"5px"}}  className={item.customerRating>0&&"rate"}/>
                    <FaStar style={{margin:"5px"}}  className={item.customerRating>1&&"rate"}/>
                    <FaStar style={{margin:"5px"}} className={item.customerRating>2&&"rate"}/>
                    <FaStar style={{margin:"5px"}} className={item.customerRating>3&&"rate"}/>
                    <FaStar style={{margin:"5px"}} className={item.customerRating>4&&"rate"}/>
                    </div>
                    <div className="date">{item.date}</div>
                </div>
            </div>
            <p>{item.review}</p>
        </div>
            )
        })}
        
    </div>
  )
}

export default CustomerReview