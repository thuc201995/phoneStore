import { Row, Col, Button } from "antd";
import React from "react";
import { CardItem } from "../../components";
import { useGetProductQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";
import cn from "classnames";
import { RightOutlined } from "@ant-design/icons";
import "./style.scss";

interface Props {
  category: string;
  className?: string;
}
const CategoryProduct: React.FC<Props> = ({ category, className }) => {
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(category);
  return (
    <div className={cn("category-product", className)}>
      <p className="title mb_20">{product?.title}</p>
      <Row
        gutter={[
          { xs: 8, sm: 8, md: 16, lg: 24 },
          { xs: 8, sm: 8, md: 16, lg: 24 },
        ]}
      >
        {product?.data.map((item: any) => {
          return (
            <Col xs={12} sm={12} md={6} lg={6} key={item.id}>
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
      <div className="wrap-button-see-all">
        <Button type="primary" ghost>
          {`Xem tất cả ${product?.title}`}
          <RightOutlined style={{fontSize: 14}}/>
        </Button>
      </div>
    </div>
  );
};

export default CategoryProduct;
