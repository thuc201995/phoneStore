import React from "react";
import { Sider, Menu } from "../../components";
import PerfectScroll from "../PerfectScroll";
import { MenuProps } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  MailOutlined,
  BookOutlined,
} from "@ant-design/icons";
import cn from "classnames";
import { useCheckMobileScreen } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { TFunction, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
type MenuItem = Required<MenuProps>["items"][number];
type Props = {
  collapsed: boolean;
};
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: string,
  className?: string
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  } as MenuItem;
};

const items = (t: TFunction): MenuItem[] => [
  getItem(
    "Admin Dashboard",
    "/",
    <PieChartOutlined />,
    undefined,
    undefined,
    "brand_item"
  ),
  getItem("", "12321311123", undefined, undefined, "divider"),
  getItem("Truyện", "/book", <BookOutlined />),
  getItem("", "123213123", undefined, undefined, "divider"),
  getItem(
    "Crawl Data",
    "group11",
    <AppstoreOutlined />,
    [
      getItem("Dữ liệu mới", "1", <PieChartOutlined />),
      getItem("Danh sách Truyện", "2", <PieChartOutlined />),

      getItem("Danh sách truyện", "sub11", <MailOutlined />, [
        getItem("Option 5", "5", <Sider.TextIcon>a</Sider.TextIcon>),
        getItem("Option 6", "6", <Sider.TextIcon>b</Sider.TextIcon>),
        getItem("Option 7", "7", <Sider.TextIcon>c</Sider.TextIcon>),
        getItem("Option 8", "8", <Sider.TextIcon>d</Sider.TextIcon>),
      ]),
    ],
    "group"
  ),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "15", <Sider.TextIcon>a</Sider.TextIcon>),
    getItem("Option 6", "16", <Sider.TextIcon>b</Sider.TextIcon>),
    getItem("Option 7", "17", <Sider.TextIcon>c</Sider.TextIcon>),
    getItem("Option 8", "18", <Sider.TextIcon>d</Sider.TextIcon>),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9", <Sider.TextIcon>o</Sider.TextIcon>),
    getItem("Option 10", "10", <Sider.TextIcon>O</Sider.TextIcon>),
  ]),

  getItem("", "123123123", undefined, undefined, "divider"),
  getItem(
    "Navigation Two",
    "group1",
    <AppstoreOutlined />,
    [
      getItem("Navigation One", "sub111", <MailOutlined />, [
        getItem("Option 5", "51", <Sider.TextIcon>a</Sider.TextIcon>),
        getItem("Option 6", "61", <Sider.TextIcon>b</Sider.TextIcon>),
        getItem("Option 7", "7111", <Sider.TextIcon>c</Sider.TextIcon>),
        getItem("Option 8", "81", <Sider.TextIcon>d</Sider.TextIcon>),
      ]),
    ],
    "group"
  ),
];

// const items: MenuItem[] = [
//   {
//     label: "Admin Dashboard",
//     icon: <PieChartOutlined />,
//     key: "/",
//     className: "brand_item",
//   },
//   {
//     type: "divider",
//   },
//   {
//     label: "Truyện",
//     icon: <MailOutlined />,
//     key: "/truyen",
//   },
//   // {
//   //   label: "Truyện",
//   //   icon: <AppstoreOutlined />,
//   //   key: "/truyen",
//   //   children: [
//   //     {
//   //       label: "Truyện",
//   //       icon: <Sider.TextIcon>a</Sider.TextIcon>,
//   //       key: "/truyen/danh-sach",
//   //     },
//   //     {
//   //       label: "Truyện",
//   //       icon: <Sider.TextIcon>a</Sider.TextIcon>,
//   //       key: "/test/books2",
//   //     },
//   //   ],
//   // },
// ];
const SiderContainer: React.FC<Props> = () => {
  const collapsed = useSelector((state: RootState) => state.sider.collapsed);
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isMobileDevice = useCheckMobileScreen();
  const rootSubmenuKeys = ["sub1", "sub2", "sub11", "sub21"];
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      collapsed={isMobileDevice ? false : collapsed}
      width={250}
      className={cn("custom_sider", { show_menu: isMobileDevice && collapsed })}
    >
      <PerfectScroll>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={items(t)}
          className="custom_menu"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={(e) => navigate(e.key)}
        ></Menu>
      </PerfectScroll>
    </Sider>
  );
};
export default SiderContainer;
