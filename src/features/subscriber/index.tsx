import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import "./style.scss";
const Subscriber = () => {
  return (
    <section className="store_subscriber">
      <Row>
        <Col span={24}>
          <h2 className="store_subscriber_title">
            Đăng ký nhận tin từ ShopDunk
          </h2>
        </Col>
        <Col span={24}>
          <p className="store_subscriber_description mb_0">
            Thông tin sản phẩm mới nhất và chương trình khuyến mãi
          </p>
        </Col>
        <Col span={24}>
          <Form className="store_subscriber_form">
            <Form.Item className="subscriber_input">
              <Input placeholder="Email của bạn" />
            </Form.Item>
            <Button htmlType="submit" className="store_subscriber_submit_btn">
              Đăng ký
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default Subscriber;
