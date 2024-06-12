import React from 'react'
import "./AllProduct.css"
import img1 from "../../ASSETS/image/orange-1218158_1280.webp"
import img2 from "../../ASSETS/image/vegetable.png"
import img3 from "../../ASSETS/image/meat.png"
import img4 from "../../ASSETS/image/fruit.png"
import ProductCard from './ProductCard'
const AllProduct = () => {
    let data=[
        {
            id:1,
            productimg:img1,
            productname:"Product ",
            productprice:100,
            counttype: "1 kg",
            discountpercent:12
        },
        {
            id:2,
            productimg:img2,
            productname:"Product ",
            productprice:80,
            counttype: "1 each",
            discountpercent:15
        },
        {
            id:3,
            productimg:img3,
            productname:"Product ",
            productprice:400,
            counttype: "1 kg",
            discountpercent:18
        },
        {
            id:4,
            productimg:img4,
            productname:"Product ",
            productprice:200,
            counttype: "1 kg",
            discountpercent:8
        },
        {
            id:5,
            productimg:img2,
            productname:"Product ",
            productprice:80,
            counttype: "1 each",
            discountpercent:15
        },
        {
            id:6,
            productimg:img1,
            productname:"Product ",
            productprice:100,
            counttype: "1 kg",
            discountpercent:12
        },
        {
            id:7,
            productimg:img4,
            productname:"Product ",
            productprice:200,
            counttype: "1 kg",
            discountpercent:8
        },
        {
            id:8,
            productimg:img3,
            productname:"Product ",
            productprice:400,
            counttype: "1 kg",
            discountpercent:18
        },
        {
            id:9,
            productimg:img4,
            productname:"Product ",
            productprice:200,
            counttype: "1 kg",
            discountpercent:8
        },
        {
            id:10,
            productimg:img1,
            productname:"Product ",
            productprice:100,
            counttype: "1 kg",
            discountpercent:12
        }
    ]
  return (
    <div className='allproduct'>
       <h1>All Products</h1>
       <div className="products">
       {
         data.map(item=>{
            return(
                <ProductCard data={item} key={item.id}/>
            )
         })
        }
       </div>

    </div>
  )
}

export default AllProduct