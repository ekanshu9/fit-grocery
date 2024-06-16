import React, { useEffect, useState } from 'react'
import "./ProductPage.css"
import { useParams } from 'react-router'
import img1 from "../../ASSETS/image/1.png"
import img2 from "../../ASSETS/image/2.png"
import img3 from "../../ASSETS/image/3.png"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import ProductReviews from '../PAGES/Review/ProductReviews'
<IoIosArrowBack />

const ProductPage = () => {
    let[active,setActive]=useState(false)
    let{prodid}=useParams()
    let[imageSet, setImageSet]=useState(null);
    let[productData,setProductData]=useState(null);
    let[acitveImg,setActiveImg]=useState({})
    let[count,setCount]=useState(1)
    
    
    let getProductDataById=async()=>{
        let imgSet=()=>{
            setImgid(item.id)
        }
        let  temp= {
            "code":200,
            "message":"success",
            "data":[
                {
                    "productId":1,
                    "productname":"Product1",
                    "productDescription":"    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime facere debitis a nam, dolor, blanditiis sint alias eaque quas aperiam veritatis. Itaque aliquam consequuntur voluptatibus dolor illum architecto dignissimos totam voluptatem dolorem? Aut, recusandae numquam nulla blanditiis ducimus culpa enim id magni tenetur? Voluptatem excepturi tenetur, tempora labore enim laboriosam, dolores odit voluptates possimus ex aliquam fugit incidunt necessitatibus distinctio quos, ullam corporis totam modi! Est obcaecati enim qui illo, quod aperiam reiciendis. Veniam quis illum consectetur est possimus voluptatem sapiente molestias fugiat ipsam natus, inventore neque! Accusamus inventore neque quasi, similique reiciendis dicta tenetur voluptas nisi architecto itaque illum.",
                    "productImg":[
                        { 
                            id:1,
                            image:img1
                        },
                        {
                            id:2,
                            image:img2
                        },{
                            id:3,
                            image:img3
                        }
                    ],
                    "salesprice":100,
                    "discountedprice":80
                    
                }
            ]
        }
        if(temp.code==200){
            setImageSet(temp.data[0].productImg)
            setProductData(temp.data[0])
            setActiveImg(temp.data[0].productImg[0])
        }
        
    }
    useEffect(()=>{getProductDataById()
    },[])
    console.log(acitveImg)
  return (
    <div className='productPage'>
        {/* ProductId{prodid} */}
        <Navbar/>
        <div className="goback">
            <Link to="/" style={{ textDecoration:"none",fontSize:'12px'}} className='back'>
            <button>
            <IoIosArrowBack  />
            
            Go Back
            </button>
            </Link>
            <div className="image">
                <div className="imageset">
                    {imageSet && imageSet.map((item)=>{
                        return <div className="imgsmal" key={item.id} onMouseOver={()=>setActiveImg(item)}>
                            <img src={item.image}  alt="image" className={acitveImg.id==item.id ?"active":"inacitve"}/>
                        </div> 
                    })}
                </div>
                <div className="activeimg">
                  {acitveImg && <img src={acitveImg.image} alt='acitveImg'/>}
                </div>
            </div>
            <div className="prd">
                <div className="prn">
                    <h1>{productData && productData.productname}</h1>
                </div>
                <div className="prsp">
                <span className='discount'><span>&#8377;</span>{productData && productData.discountedprice*count}</span>
            <span className='saleprice' style={{textDecoration:"line-through"}}>
            <span>&#8377;</span>
                {productData && productData.salesprice*count}
                </span>
                </div>
                <div className="prbtn">
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="add">
                <div className="button1">
                <button onClick={()=>{
                    if(count>1)setCount(count-1)
                }}>-</button>
                <p>{count}</p>
                <button onClick={()=> {if(count<8)setCount(count+1)}}>+</button>
                </div>
                
            </div>
        </div>
        <div className="description">
            <div className="rbutton">
                <button className={!active&&"actr"} onClick={()=>{setActive(false)}}>Description</button>
                <button className={active&&"actr"} onClick={()=>{setActive(true)}}>Reviews</button>
               

            </div>
            {
                 active?<ProductReviews/>:<div className='prodesc'>{productData && productData.productDescription}</div>
               }
        </div>
    </div>
  )
}

export default ProductPage