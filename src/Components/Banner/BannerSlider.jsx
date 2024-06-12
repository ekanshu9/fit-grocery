import React from 'react'
import Slider from 'react-slick'
import "./BannerSlider.css"
const BannerSlider = () => {
    const data=[
        {
        id:1,
        img:"https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg",
        title:"Fresh vegitables & fruits at your door step",
        description:"We deliver vegitables and fruits at your door step",
        button:"https://www.google.com"
    },
    {
        id:2,
        img:"https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg",
        title:"Fresh vegitables & fruits at your door step",
        description:"We deliver vegitables and fruits at your door step",
        button:"https://www.google.com"
    }

]

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return (
                        <div key={item.id} className='imagecount'>
                        <img src={item.img} alt={item.title} />
                        <div className="containt">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>Shop More</button>
                        </div>
                    </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider