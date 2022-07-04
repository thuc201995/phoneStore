import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import "./style.scss";

interface Props {}
const MenuHeader: React.FC<Props> = ({}) => {
  const menu = useSelector((state: RootState) => state.header.menu);
  const navigate = useNavigate();
  return (
    <div className="menu-custom">
      <Menu
        mode="horizontal"
        className="header_menu"
        defaultSelectedKeys={["2"]}
        items={menu.map((item, index) => {
          const key = index + 1;
          return {
            key,
            label: item.title,
          };
        })}
        inlineIndent={1}
        onClick={(item: any) => {
          navigate(menu[item.key - 1].link || "");
        }}
      />
    </div>
  );
};

export default MenuHeader;
