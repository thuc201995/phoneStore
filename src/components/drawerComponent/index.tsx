import React from "react";
import { Drawer, DrawerProps } from "antd";
import { Input } from "antd";
import "./style.scss";

interface Props extends DrawerProps {
  Props?: DrawerProps;
}
const { Search } = Input;

const DrawerComponent: React.FC<Props> = ({ ...Props }) => {
  return (
    <Drawer className="drawer-stote" {...Props}>
      <Search placeholder="Tìm kiếm sản phẩm" loading={false} />
      <p>Truy cập nhanh</p>
      <p>iPhone</p>
      <p>Airpods</p>
      <p>SPencil</p>
      <p>Sản phẩm khuyến mãi</p>
    </Drawer>
  );
};

export default DrawerComponent;
