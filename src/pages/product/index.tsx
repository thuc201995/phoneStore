import React from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../../features";

import "./style.scss";
interface Props {
  category: string;
}
const SingleProduct: React.FC<Props> = ({ category }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Product category={category}></Product>
    </div>
  );
};

export default SingleProduct;
