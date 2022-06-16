import React from "react";
import { useLocation } from "react-router-dom";
import { ProductView } from "../../features";
import { Image } from "antd";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";

import "./style.scss";
interface Props {}
const SingleProduct: React.FC<Props> = () => {
  return (
    <div className="container full_width mt_20">
      <ProductView />
    </div>
  );
};

export default SingleProduct;
