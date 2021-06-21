
import React from "react";
import {Carousel} from "react-bootstrap";
import assignment from "../image/assignment.jpg";
import errand2 from "../image/errand.jpg";
import food1 from "../image/Food.jpg";

const CarouselContainer=()=>{
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={assignment}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Want to get your assignments to your lecturer without stress?Look no further</h3>
      <p>Quality services at a relatively fast rate!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={errand2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Too Busy to run errands?</h3>
      <p>We have available delivery mem just for you!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Can't Go To Night Market for Food?</h3>
      <p>We will bring your food to your Doorstep.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
    export default CarouselContainer;