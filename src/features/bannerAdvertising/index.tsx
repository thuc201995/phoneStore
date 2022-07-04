import React from "react";
import { Row, Col, Image } from "antd";
import cn from "classnames";
import { fallbackIMG } from "../../common/constants";
import "./style.scss";

const mockData = [
  {
    label: "a",
    src: "https://shopdunk.com/wp-content/uploads/2022/06/Pen.jpg",
  },
  {
    label: "a",
    src: "https://shopdunk.com/wp-content/uploads/2022/06/AirPods.jpg",
  },
  {
    label: "a",
    src: "https://shopdunk.com/wp-content/uploads/2022/06/Care.jpg",
  },
];
interface Props {
  className?: string;
}

const BannerAdvertising:React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("baner-advertising", className)}>
      <Row gutter={[24, 24]}>
        {mockData.map((item: any, idx: number) => (
          <Col xs={24} sm={24} md={8} lg={8} key={idx}>
            <Image
              width={"100%"}
              height={"auto"}
              preview={false}
              fallback={fallbackIMG}
              src={item.src}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BannerAdvertising;
