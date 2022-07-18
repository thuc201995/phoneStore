import React, { useState } from "react";
import { Drawer, Input } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import "./style.scss";

const { Search } = Input;

interface Props {
  isShowSearchBar: boolean;
  onCloseSearchBar: (status: boolean) => void;
}
const SearchBar: React.FC<Props> = ({ isShowSearchBar, onCloseSearchBar }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClose = () => {
    onCloseSearchBar(false);
  };
  const onSearch = () => {
    setIsLoading(true);
  };
  return (
    <div className="search-bar">
      <Drawer
        className="drawer-search-bar"
        title=""
        placement="top"
        onClose={onClose}
        visible={isShowSearchBar}
        extra={
          <Search
            placeholder="Tìm kiếm sản phẩm"
            loading={false}
            onSearch={onSearch}
            prefix={
              <SearchOutlined style={{ color: "#ffffff", fontSize: 20 }} />
            }
            suffix={
              <CloseOutlined
                style={{ color: "#ffffff", fontSize: 20 }}
                onClick={onClose}
              />
            }
          />
        }
      >
        <p>Truy cập nhanh</p>
        <p>iPhone</p>
        <p>Airpods</p>
        <p>SPencil</p>
        <p>Sản phẩm khuyến mãi</p>
        {isLoading && <Spin />}
      </Drawer>
    </div>
  );
};

export default SearchBar;
