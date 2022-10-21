import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carrouselData } from "../../data/carrouselData";
import "./introCarrousel.css";

export const IntroCarrousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay
    autoplay: true,

    autoplaySpeed: 5000,
    cssEase: "linear",
    //swipe to slide
    className: "center",

    centerPadding: "60px",

    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const carrouselElements = carrouselData.map((element, index) => {
    return (
      <div key={index} className="carrousel-element">
        <img
          className="carrousel-img"
          src={element.img}
          alt={element.text}
        ></img>
        <div className="carrousel-text">
          <h3>{element.text}</h3>
          <p>{element.sub}</p>
        </div>
      </div>
    );
  });
  return <Slider {...settings}>{carrouselElements}</Slider>;
};
