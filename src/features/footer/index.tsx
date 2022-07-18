import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Layout, Row, Col, Divider, Collapse } from "antd";
import { ReactComponent as Logo } from "../../imgs/logo.svg";
import { ReactComponent as Facebook } from "../../imgs/facebook.svg";
import { ReactComponent as Youtube } from "../../imgs/youtube.svg";
import { ReactComponent as Zalo } from "../../imgs/zalo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useCheckMobileScreen } from "../../hooks";

import "./style.scss";

type Props = {};
const { Footer } = Layout;
const { Panel } = Collapse;

const FooterContainer: React.FC<Props> = () => {
  const { i18n } = useTranslation();
  const data = useSelector((state: RootState) => state.footer.dataFooter);

  return (
    <Footer className={cn("store_footer")}>
      <div className="container">
        <Row className="mb_40" gutter={[16, 24]}>
          <Col xs={24} sm={24} md={24} lg={5}>
            <Row gutter={[0, 18]}>
              <Col>
                <Logo />
              </Col>
              <Col className="content_d2d2d7">
                <p className="mb_0">
                  Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng
                  tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store
                  nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của
                  Apple cho người dùng Việt Nam.
                </p>
              </Col>
              <Col>
                <Facebook className="footer_icon_item" />
                <Youtube className="footer_icon_item" />
                <Zalo className="footer_icon_item" />
              </Col>
            </Row>
          </Col>

          {/* <Col lg={{ span: 3, offset: 1 }} xs={24}>
            <h2 className="heading_title">Sản phẩm</h2>
            {data.sanPham.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.link} className="content_7a7a7a capitalize">
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={24}>
            <h2 className="heading_title">Thông tin</h2>
            {data.thongTin.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.link} className="content_7a7a7a capitalize">
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={24}>
            <h2 className="heading_title">Chính sách</h2>
            {data.chinhSach.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.link} className="content_7a7a7a capitalize">
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </Col>
          <Col lg={{ span: 3, offset: 1 }} xs={24}>
            <h2 className="heading_title">Địa chỉ</h2>
            {data.diaChi.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.link} className="content_7a7a7a capitalize">
                    {item.title}
                  </Link>
                </div>
              );
            })}
            <h2 className="heading_title">Liên hệ</h2>
            {data.lienHe.map((item, index) => {
              return (
                <div key={index} className="content_7a7a7a capitalize">
                  {item.title}
                  <span> {item.value}</span>
                </div>
              );
            })}
          </Col> */}
          {useCheckMobileScreen() ? (
            <>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Collapse bordered={false} expandIconPosition="right">
                  {data.map((item: any, idx: number) => (
                    <Panel header={item.label} key={idx}>
                      {item.data.map((elm: any, idxItem: number) => {
                        return (
                          <div key={idxItem}>
                            <Link
                              to={elm.link}
                              className="content_7a7a7a capitalize"
                            >
                              {elm.title}
                            </Link>
                          </div>
                        );
                      })}
                    </Panel>
                  ))}
                </Collapse>
              </Col>
            </>
          ) : (
            <>
              {data.map((item: any, idx: number) => (
                <Col xs={6} sm={6} md={6} lg={3}>
                  <div key={idx}>
                    <h2 className="heading_title">{item.label}</h2>
                    {item.data.map((elm: any, idxItem: number) => {
                      return (
                        <div key={idxItem}>
                          <Link
                            to={elm.link}
                            className="content_7a7a7a capitalize"
                          >
                            {elm.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
        <Row>
          {/* <Divider className="divide_424245" /> */}
          <Col className="content_7a7a7a">
            <div>
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
              & ĐT TP. Hà Nội cấp ngày 08/06/2016.
            </div>
            <div>
              Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố
              Hà Nội, Việt Nam
            </div>
            <div>
              Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
              lienhe@shopdunk.com
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};
export default FooterContainer;
