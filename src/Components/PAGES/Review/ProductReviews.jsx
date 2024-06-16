    import React, { useEffect, useState } from 'react'
import "./ProductReviews.css"
import { FaStar } from "react-icons/fa";
import CustomerReview from './CustomerReview';
const ProductReviews = () => {
    const[rating,setRating]=useState(0);
    const [hasNewReview, setHasNewReview] = useState(false);
    const[currentDate,setCurrentDate]=useState("")
    //!get system date
    
    useEffect(()=>{
        let d=new Date();
        let day=d.getDate();
        let month=d.getMonth()+1;
        let year=d.getFullYear();
        setCurrentDate(day+"-"+month+"-"+year);
    },[])
    // alert(currentDate)
    
    //For error
    const[error,setError]=useState({});
    const validationError={};
    //get localstorage data and we use this data to update local storage when we store new customer review
    const getLocalData=()=>{
        let container=localStorage.getItem("container")
        if(container)return container
        else return []
    }
    //update local storage array

    let[task,setTask]=useState(getLocalData());
    
    const[reviewDetail,setReviewDetail]=useState({
        Name:"",
        email:"",
        review:"",
        customerRating:rating
        
    })
    console.log(rating);
    let{Name,email,review}=reviewDetail;
    let handleChange=(e)=>{
        let{name,value}=e.target;
        setReviewDetail({...reviewDetail,[name]:value});
    }
    let handleSubmit=(e)=>{
        
        e.preventDefault();
        if(Name==""){
            validationError.Name="This field is mandatory"
        }

        if(email==""){
            validationError.email="This field is mandatory"
        }else if(!/\S+@\S+\.\S+/.test(email)){
            validationError.email="This should be a valid email"
        }

        if(review=="")validationError.review="This field is mandatory"

        const updatedReviewDetail = {
        ...reviewDetail,
        customerRating: rating,date:currentDate
    };
    setError(validationError);
    if(Object.keys(validationError).length === 0){
        setTask([...task, updatedReviewDetail]);
        
        
        setHasNewReview(true);
        

    }
    // localStorage.clear()
    
    
        setReviewDetail({
            Name:"",
            email:"",
            review:"",
            customerRating:0,
            date:""
        })
    }
    
    useEffect(()=>{
        // Only update localStorage if there's a new review
        if(hasNewReview){
            localStorage.setItem("container",JSON.stringify(task));
            setHasNewReview(false); // Reset flag after saving
        }
    },[task, hasNewReview])
    

    console.log(JSON.parse(localStorage.getItem("container")))
  return (
    <div className='prdrw'>
        <div className="form">
            <form >
                <div className="name">
                    <label htmlFor="">Name</label>
                    <input type="text" name="Name" id="" value={Name} onChange={handleChange}/>
                    <p style={{color:"red",fontSize:"15px"}}>{error.Name&&error.Name}</p>
                </div>
                <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" value={email} onChange={handleChange}/>
                    <p style={{color:"red",fontSize:"15px"}}>{error.email&&error.email}</p>
                </div>
                <div className="review">
                    <label htmlFor="">Review</label>
                    <textarea name="review" rows={10}  cols={50} id="" value={review} onChange={handleChange}></textarea>
                    <p style={{color:"red",fontSize:"15px"}}>{error.review && error.review}</p>
                </div>
                <div className="rating">
                    <label htmlFor="">Rating</label>
                    <div className="star">
                    <FaStar onClick={()=>setRating(1)} className={rating>0&&"rate"}/>
                    <FaStar  onClick={()=>setRating(2)} className={rating>1&&"rate"}/>
                    <FaStar onClick={()=>setRating(3)} className={rating>2&&"rate"}/>
                    <FaStar onClick={()=>setRating(4)} className={rating>3&&"rate"}/>
                    <FaStar onClick={()=>setRating(5)} className={rating>4&&"rate"}/>
                    </div>
                    <div className="button">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="cards">
            <CustomerReview/>
        </div>
    </div>
  )
}

export default ProductReviews