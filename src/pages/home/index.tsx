import React from "react";
import { Carousel, CardItem } from "../../components";
import { Row, Col, Image } from "antd";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";
import "./style.scss";
const Home = () => {
  return (
    <div>
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

      <div
        className="site-layout-content container"
        style={{ margin: "0 auto" }}
      >
        <Row gutter={20}>
          <Col span={6} xs={24}>
            <CardItem title="iMac M1 2021 24 inch (8GPU/16GB/256GB)"></CardItem>
          </Col>
          <Col span={6} xs={24}>
            <CardItem></CardItem>
          </Col>
          <Col span={6} xs={24}>
            <CardItem></CardItem>
          </Col>
          <Col span={6} xs={24}>
            <CardItem></CardItem>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
