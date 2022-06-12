import React, { ReactNode, useRef } from "react";
import { ReactComponent as Prev } from "../../imgs/prev.svg";
import { ReactComponent as Next } from "../../imgs/next.svg";
import { Carousel as AntCarousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";

import "./style.scss";
interface Props {
  children: ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => {
  const ref = useRef<CarouselRef>(null);

  return (
    <div className="store_carousel">
      <div
        onClick={() => {
          ref.current?.prev();
        }}
        className="carousel_control_prev"
      >
        <Prev />
      </div>
      <AntCarousel dots={false} ref={ref} className="carousel_content" autoplay>
        {children}
      </AntCarousel>
      <div
        onClick={() => {
          ref.current?.next();
        }}
        className="carousel_control_next"
      >
        <Next />
      </div>
    </div>
  );
};

export default Carousel;
