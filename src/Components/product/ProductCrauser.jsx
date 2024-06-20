import React from 'react'
import "./ProductCrauser.css"
import img1 from "../../ASSETS/image/orange-1218158_1280.webp"
import img2 from "../../ASSETS/image/vegetable.png"
import img3 from "../../ASSETS/image/meat.png"
import img4 from "../../ASSETS/image/fruit.png"
import ProductCard from './ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductCrauser = () => {
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='productslider'>
        <h1>Related Product</h1>
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} swipeable={true} draggable={true} >
            {data.map((item)=>{
                return <ProductCard key={item.id} data={item} />
            })}
        </Carousel>
        
    </div>
  )
}

export default ProductCrauser