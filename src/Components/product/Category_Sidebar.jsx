import React from 'react'
import "./Category_Sidebar.css"
import img1 from "../../ASSETS/image/1.png";
import img2 from "../../ASSETS/image/2.png";
import img3 from "../../ASSETS/image/3.png";
import img4 from "../../ASSETS/image/meat.png";
const Category_Sidebar = () => {
    let data=[
        {
            id:1,
            categroryimg:img1,
            categoryName:"Category 1"
        },
        {
            id:2,
            categroryimg:img2,
            categoryName:"Category 2"
        },
        {
            id:3,
            categroryimg:img3,
            categoryName:"Category 3"
        },
        {
            id:4,
            categroryimg:img4,
            categoryName:"category 4"
        },
        {
            id:5,
            categroryimg:img1,
            categoryName:"Category 5"
        },
        {
            id:6,
            categroryimg:img2,
            categoryName:"Category 6"
        },
        {
            id:7,
            categroryimg:img3,
            categoryName:"Category 7"
        },
        {
            id:8,
            categroryimg:img4,
            categoryName:"category 8"
        }
    ]
  return (
    <div className='categorysidebar'>
        {data.map(item=>{
            return(
                <div className="category" key={item.id}>
                <img src={item.categroryimg} alt={item.categoryName} />
                <p>{item.categoryName}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Category_Sidebar