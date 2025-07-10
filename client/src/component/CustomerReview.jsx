import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CustomerReview.css";
import cs1 from "../images/cs1.jpg"
import cs2 from "../images/cs2.jpg"
import cs3 from "../images/cs3.jpg"

const CustomerReview = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="csrew" activeIndex={index} onSelect={handleSelect} controls={true} indicators={false} interval={null}>
      <Carousel.Item>
        <div className="testimonial-slide">
          <h3 className="section-title">– CUSTOMER REVIEWS –</h3>
          <img src={cs1} alt="Luca Moretti" className="review-image" />
          <p className="review-text">
            “If you’re looking for luxury products and professional service, look no further.
            I had a great experience…”
          </p>
          <p className="review-author">Luca Moretti – Designer</p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonial-slide">
          <h3 className="section-title">– CUSTOMER REVIEWS –</h3>
          <img src={cs2} alt="Sophia Rossi" className="review-image" />
          <p className="review-text">
            “Amazing quality and top-notch customer support. Highly recommend to everyone.”
          </p>
          <p className="review-author">Sophia Rossi – Photographer</p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonial-slide">
          <h3 className="section-title">– CUSTOMER REVIEWS –</h3>
          <img src={cs3} alt="Marco Bianchi" className="review-image" />
          <p className="review-text">
            “Fast delivery, beautiful packaging, and excellent products. Will shop again!”
          </p>
          <p className="review-author">Marco Bianchi – Stylist</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomerReview;
