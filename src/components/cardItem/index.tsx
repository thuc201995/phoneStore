import React from "react";
import { Card } from "antd";
import product_1 from "../../imgs/product/product_1.webp";
import "./style.scss";
const { Meta } = Card;
interface Props {
  title?: string;
  image?: string;
  price?: string | number;
  discountPrice?: string | number;
}
const CardItem: React.FC<Props> = ({ title, image, price, discountPrice }) => {
  return (
    <Card
      cover={
        <img alt="example" className="card_item_img" src={image || product_1} />
      }
      className="card_item"
    >
      <Meta
        title={title || "iPhone 13 Pro Max"}
        description={
          discountPrice ? (
            <span>
              <span className="card_item_old_price mr_5">
                {price?.toLocaleString()}
              </span>
              <span className="card_item_price">
                {discountPrice?.toLocaleString()}
              </span>
            </span>
          ) : (
            <span className="card_item_price">
              Giá từ {price?.toLocaleString()}
            </span>
          )
        }
      />
    </Card>
  );
};

export default CardItem;
