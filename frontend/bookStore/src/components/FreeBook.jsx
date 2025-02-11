import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from './Card';



const FreeBook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

const filterData = list.filter((data)=>(data.category === "free"));
  
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-10">
        <div>
        <h1 className="font-bold text-xl">Free Offered Courses</h1>
        <p className='font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facere!</p>
        </div>
   

    <div className="">

    <Slider {...settings}>
      {filterData.map((item)=>(
        <Card item= {item} key={item.id}/>
      ))}
       
      </Slider>

    </div>
    </div>
  
    </>
  )
}

export default FreeBook