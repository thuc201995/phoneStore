import React from "react";
import { Image } from "antd";
import { Carousel, CardItem } from "../../components";
import { BannerAdvertising, Product } from "../../features";
import CategoryProduct from "../../features/categoryProduct";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";
import "./style.scss";

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
        <BannerAdvertising className="mt_30" />
        <CategoryProduct category={"home-page-iphone"} className="mt_50" />
        <CategoryProduct category={"home-page-ipad"} className="mt_50" />
        <CategoryProduct category={"home-page-mac"} className="mt_50" />
        <CategoryProduct category={"home-page-airpods"} className="mt_50" />
        <CategoryProduct category={"home-page-watch"} className="mt_50" />
        <CategoryProduct category={"home-page-phu-kien"} className="mt_50" />
        <CategoryProduct category={"home-page-dich-vu"} className="mt_50" />
      </div>
    </div>
  );
};

export default Home;
