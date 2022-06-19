import { Row, Col } from "antd";
import React from "react";
import { CardItem } from "../../components";
import { useGetProductQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";
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
  return (
    <div className={cn("container", className)}>
      <Row
        gutter={[
          { xs: 5, lg: 20 },
          { xs: 5, lg: 20 },
        ]}
      >
        {product?.data.map((item: any) => {
          return (
            <Col lg={8} xs={12} key={item.id}>
              <Link to={item.id}>
                <CardItem
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  discountPrice={item.discount_price}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Product;
