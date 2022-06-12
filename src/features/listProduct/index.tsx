import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Layout, Menu } from "antd";
import { ReactComponent as Logo } from "../../imgs/logo.svg";
import { ReactComponent as Search } from "../../imgs/search.svg";
import { ReactComponent as ShoppingCart } from "../../imgs/shoppingCart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

import "./style.scss";
type Props = {};
const { Header } = Layout;

const HeaderContainer: React.FC<Props> = () => {
  const { i18n } = useTranslation();
  const menu = useSelector((state: RootState) => state.header.menu);
  const navigate = useNavigate();
  return (
    <Header className={cn("store_header")}>
      <div className="store_header_wrapper container">
        <div className="header_logo" onClick={() => navigate("/")}>
          <Logo />
        </div>
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

        <Search />
        <ShoppingCart />
      </div>
    </Header>
  );
};
export default HeaderContainer;
