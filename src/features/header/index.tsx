import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Layout, Drawer } from "antd";
import { ReactComponent as Logo } from "../../imgs/logo.svg";
import { ReactComponent as Search } from "../../imgs/search.svg";
import { ReactComponent as ShoppingCart } from "../../imgs/shoppingCart.svg";
import { useNavigate } from "react-router-dom";
import MenuHeader from "../menuHeader";
import { MenuOutlined } from "@ant-design/icons";

import "./style.scss";
import { DrawerComponent } from "../../components";
import { useCheckMobileScreen } from "../../hooks";
import SearchBar from "../searchBar";

type Props = {};
const { Header } = Layout;

const HeaderContainer: React.FC<Props> = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isShowDrawerMobile, setIsShowDrawerMobile] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  const showDrawerMobile = () => {
    setIsShowDrawerMobile(true);
  };

  const onCloseDrawerMobile = () => {
    setIsShowDrawerMobile(false);
  };
  return (
    <Header className={cn("store_header")}>
      <div className="store_header_wrapper container full_width">
        {useCheckMobileScreen() ? (
          <>
            <div className="header-top">
              <div className="icon-drawer" onClick={showDrawerMobile}>
                <MenuOutlined style={{ color: "#ffffff", fontSize: 20 }} />
              </div>
              <div className="header_logo" onClick={() => navigate("/")}>
                <Logo />
              </div>
              <ShoppingCart />
            </div>
            <MenuHeader />
            <DrawerComponent
              title=""
              placement="left"
              onClose={onCloseDrawerMobile}
              visible={isShowDrawerMobile}
            />
          </>
        ) : (
          <>
            <div className="header_logo" onClick={() => navigate("/")}>
              <Logo />
            </div>
            <MenuHeader />
            <Search onClick={() => setIsShowSearchBar(true)} />
            <ShoppingCart />
            <SearchBar
              isShowSearchBar={isShowSearchBar}
              onCloseSearchBar={(status: boolean) => setIsShowSearchBar(status)}
            />
          </>
        )}
      </div>
    </Header>
  );
};
export default HeaderContainer;
