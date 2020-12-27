import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.scss'
import img1 from '../../assets/img/1st_screen.png'
import img2 from '../../assets/img/2nd_screen.png'
import img3 from '../../assets/img/3rd_screen_middle.png'
import img4 from '../../assets/img/4th_screen.png'
import img5 from '../../assets/img/5th_screen.png'
import frame from '../../assets/img/frame.png'

export default class CenterMode extends Component {
  render() {
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
      arrows: false
    };
    return (
      <div className="box-carousel">
        <div className="frame">
          <img alt="" src={frame}/>
        </div>
        <Slider {...settings}>
          <div className="image-carousel">
            <img src={img1} alt=""/>
          </div>
          <div className="image-carousel">
            <img src={img2} alt=""/>
          </div>
          <div className="image-carousel">
            <img src={img3} alt=""/>
          </div>
          <div className="image-carousel">
            <img src={img4} alt=""/>
          </div>
          <div className="image-carousel">
            <img src={img5} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}