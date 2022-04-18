import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../Utilities/Images/travel1.jpg";
import image2 from "../../../Utilities/Images/travel2.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
