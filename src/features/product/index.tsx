import { Row, Col } from "antd";
import React from "react";
import { CardItem } from "../../components";
import { useGetProductQuery } from "../api/apiSlice";
import cn from "classnames";
interface Props {
  category: string;
  className?: string;
}
const Product: React.FC<Props> = ({ category, className }) => {
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(category);
  console.log(123, product);
  return (
    <div className={cn(className)}>
      <Row gutter={[20, 20]}>
        {product?.data.map((item: any) => {
          return (
            <Col span={6} key={item.id}>
              <CardItem title={item.name} image={item.image}></CardItem>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Product;
