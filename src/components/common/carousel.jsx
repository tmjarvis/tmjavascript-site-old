import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../pages/pageCSS/projectPages.css";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image1}
          alt="First slide"
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon" />
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
