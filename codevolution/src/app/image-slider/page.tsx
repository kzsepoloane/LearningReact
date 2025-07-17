"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./image-slider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
