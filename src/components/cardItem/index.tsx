import React from "react";
import { Card } from "antd";
import product_1 from "../../imgs/product/product_1.webp";
import "./style.scss";
const { Meta } = Card;
interface Props {
  title?: string;
}
const CardItem: React.FC<Props> = ({ title }) => {
  return (
    <Card
      cover={<img alt="example" height={280} src={product_1} />}
      className="card_item"
    >
      <Meta
        title={title || "iPhone 13 Pro Max"}
        description="Giá từ 28.990.000 ₫"
      />
    </Card>
  );
};

export default CardItem;
