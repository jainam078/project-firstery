import React from "react";
import Carousel from "react-bootstrap/Carousel";
import First from "../assets/1.webp";
import Second from "../assets/2.webp";
import Third from "../assets/3.webp";
import Four from "../assets/4.webp";
import "./mainheader.css";

const Slider = () => {
  return (
    <div>
      <Carousel className="d-flex justify-content-center bg-light mt-1">
        <Carousel.Item>
          <div className="sliderImage ">
            <img className="img-fluid" src={First} alt="First slide" />
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderImage">
            <img className="img-fluid" src={Second} alt="First slide" />
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderImage">
            <img className="img-fluid" src={Third} alt="First slide" />
          </div>

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <div className="sliderImage">
            <img className="img-fluid" src={Four} alt="First slide" />
          </div>

          {/* <Carousel.Caption>
            <h3>Four slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
