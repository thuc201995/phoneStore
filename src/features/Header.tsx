import React from "react";
import { Header } from "../components";
import cn from "classnames";
import { MenuUnfoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Row, Typography, Segmented } from "antd";
import { useTranslation } from "react-i18next";
type Props = {
  isFixed?: boolean;
  toggleCollapse?: VoidFunction;
};
const HeaderContainer: React.FC<Props> = ({ isFixed, toggleCollapse }) => {
  const { i18n } = useTranslation();
  return (
    <Header className={cn("custom_header", { fixed_header: isFixed })}>
      <Row>
        <Col lg={12} xs={24}>
          <Row align="middle">
            <Col lg={12} xs={18}>
              <Row>
                <Breadcrumb>
                  <Breadcrumb.Item href="">
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="">
                    <span>Application List</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
              </Row>
              <Row>
                <Typography.Title level={5}>Sale</Typography.Title>
              </Row>
            </Col>
            <Col>
              <MenuUnfoldOutlined
                onClick={toggleCollapse}
                style={{ fontSize: 24 }}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Segmented
            className="change_language_segmented"
            onChange={(e: any) => i18n.changeLanguage(e)}
            defaultValue="en"
            options={[
              {
                label: "Vi",
                value: "vi",
              },
              {
                label: "Eng",
                value: "en",
              },
            ]}
          />
        </Col>
      </Row>
    </Header>
  );
};
export default HeaderContainer;
