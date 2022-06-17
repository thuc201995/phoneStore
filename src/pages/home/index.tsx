import React from "react";
import { Carousel, CardItem } from "../../components";
import { Row, Col, Image } from "antd";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";
import "./style.scss";
import { Product } from "../../features";
const Home = () => {
  return (
    <div>
      <div className="home_carrousel_wrapper">
        <Carousel size="large">
          <div>
            <Image
              className="store_carousel_item"
              src={banner_1}
              preview={false}
              height={475}
            >
              1
            </Image>
          </div>
          <div>
            <Image
              className="store_carousel_item"
              src={banner_2}
              preview={false}
              height={475}
            >
              2
            </Image>
          </div>
        </Carousel>
      </div>

      <div
        className="site-layout-content container"
        style={{ margin: "0 auto" }}
      >
        <Product category={"home"} className="mt_20" />
        {/* 
        <Row
          gutter={[
            { xs: 5, lg: 20 },
            { xs: 5, lg: 20 },
          ]}
        >
          <Col lg={6} xs={12}>
            <CardItem title="iMac M1 2021 24 inch (8GPU/16GB/256GB)"></CardItem>
          </Col>
          <Col lg={6} xs={12}>
            <CardItem></CardItem>
          </Col>
          <Col lg={6} xs={12}>
            <CardItem></CardItem>
          </Col>
          <Col lg={6} xs={12}>
            <CardItem></CardItem>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default Home;
