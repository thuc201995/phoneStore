import React from "react";
import { useGetProductQuery } from "../api/apiSlice";
interface Props {
  category: string;
}
const Product: React.FC<Props> = ({ category }) => {
  const data = useGetProductQuery(category);
  console.log(123, category);
  return <div>aaa</div>;
};

export default Product;
