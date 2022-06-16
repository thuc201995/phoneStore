import React, { ReactNode, useRef, useState } from "react";
import { ReactComponent as Prev } from "../../imgs/prev.svg";
import { ReactComponent as Next } from "../../imgs/next.svg";
import { Image } from "antd";
import Slider from "react-slick";
import cn from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [slider1, setSlider1] = useState<Slider | undefined>();
  const [slider2, setSlider2] = useState<Slider | undefined>();
  return (
    <div className="product_carrousel">
      <Slider
        asNavFor={slider2}
        ref={(slider: Slider) => setSlider1(slider)}
        className="product_carrousel_large"
        nextArrow={<Next />}
        prevArrow={<Prev />}
      >
        {images?.map((item, index) => {
          return (
            <div key={`large_${index}`}>
              <Image src={item} className="product_carrousel_large_img" />
            </div>
          );
        })}
      </Slider>

      <Slider
        asNavFor={slider1}
        ref={(slider: Slider) => setSlider2(slider)}
        slidesToShow={window.innerWidth <= 760 ? 3 : 5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="product_carrousel_smaller"
        nextArrow={<Next />}
        prevArrow={<Prev />}
      >
        {images?.map((item, index) => {
          return (
            <div key={`small_${index}`}>
              <Image
                src={item}
                preview={false}
                className="product_carrousel_smaller_img"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
