import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carrouselData from "../../data/carrouselData";
import "./carousel.css";

const ImgSlider = () => {
  const carousel = carrouselData.map((element, index) => {
    return (
      <Carousel.Item key={index} bsPrefix="carousel-item">
        <img className="d-block w-100 " src={element.img} alt="First slide" />
        <Carousel.Caption>
          <div className="caption-container">
          <h3 className="caption-title">{element.text}</h3>
          <p>{element.sub}</p>
          </div>
    
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Carousel fade touch controls={false}>
      {carousel}
    </Carousel>
  );
};

export default ImgSlider;
