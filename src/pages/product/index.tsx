import React from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../../features";
import { Carousel } from "../../components";
import { Image } from "antd";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";

import "./style.scss";
interface Props {
  category: string;
}
const SingleProduct: React.FC<Props> = ({ category }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container mt_20">
      <Carousel>
        <div>
          <Image className="store_carousel_item" src={banner_1} preview={false}>
            1
          </Image>
        </div>
        <div>
          <Image className="store_carousel_item" src={banner_2} preview={false}>
            2
          </Image>
        </div>
      </Carousel>

      <Product category={category} className="mt_20" />
    </div>
  );
};

export default SingleProduct;
