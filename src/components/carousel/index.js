import React from "react";
import Slider from "react-slick";
import './carousel.scss'
import frame from '../../assets/img/frame.png'


function CenterMode({projectImages}) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-dots-slider",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px 20px 10px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    arrows: false,
    edgeFriction: 0.5
  };
  return (
    <div className="box-carousel">
      <div className="frame">
        <img alt="" src={frame}/>
      </div>
      <Slider {...settings}>
        {
          projectImages.items.map( (item) => (
            <div className="image-carousel" key={item.url}>
              <img src={item.url} alt={item.title}/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
  
}

export default CenterMode
