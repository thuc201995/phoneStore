import { Col, Row, Select, Space, Table, Typography } from "antd";
import { Button, Card } from "../components";
import { CreateBook } from "../features";
import { useTranslation, TFunction } from "react-i18next";
import { open } from "../features/createBook/createBookSlice";
import { useDispatch } from "react-redux";

const dataSource = [
  {
    key: "1",
    title: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    title: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    title: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "4",
    title: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "5",
    title: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "6",
    title: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = (t: TFunction): any[] => [
  {
    title: t("book.title"),
    dataIndex: "title",
    key: "title",
    responsive: ["xs", "lg", "md"],
  },
  {
    title: t("book.crawlerPage"),
    dataIndex: "age",
    responsive: ["lg"],
    key: "age",
  },
  {
    title: t("common.status"),
    dataIndex: "address",
    key: "address1",
    responsive: ["lg"],
  },
  {
    title: t("common.updatedAt"),
    dataIndex: "address",
    responsive: ["lg"],
    key: "address2",
  },
];
const Books = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row>
          <Col>
            <Button
              type="primary"
              size="large"
              onClick={() => {
                dispatch(open());
              }}
            >
              {t("book.newBook")}
            </Button>
          </Col>
        </Row>
        <Card>
          <Typography.Title level={5}>{t("book.listBook")}</Typography.Title>
          <Table
            columns={columns(t)}
            dataSource={dataSource}
            className="custom_table"
          />
        </Card>
      </Space>
      <CreateBook></CreateBook>
    </div>
  );
};

export default Books;
