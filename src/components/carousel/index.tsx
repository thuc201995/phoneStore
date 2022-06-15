import React, { ReactNode, useRef } from "react";
import { ReactComponent as Prev } from "../../imgs/prev.svg";
import { ReactComponent as Next } from "../../imgs/next.svg";
import { Carousel as AntCarousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import cn from "classnames";
import "./style.scss";
interface Props {
  children: ReactNode;
  size?: "large" | "default";
}

const Carousel: React.FC<Props> = ({ children, size }) => {
  const ref = useRef<CarouselRef>(null);

  return (
    <div className="store_carousel">
      <div
        onClick={() => {
          ref.current?.prev();
        }}
        className={cn("carousel_control_prev", {
          large_size: size === "large",
        })}
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
        className={cn("carousel_control_next", {
          large_size: size === "large",
        })}
      >
        <Next />
      </div>
    </div>
  );
};

export default Carousel;
