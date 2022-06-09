import {
  Col,
  Form,
  Row,
  Select,
  Space,
  Drawer,
  Input,
  DatePicker,
  Radio,
  Switch,
  Checkbox,
} from "antd";
import { Button } from "../../components";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { close } from "./createBookSlice";
import { useTranslation } from "react-i18next";
import { useCheckMobileScreen } from "../../hooks";

const { Option } = Select;

const CreateBook = () => {
  const isOpen = useSelector((state: RootState) => state.createBook.isOpen);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isMobileDevice = useCheckMobileScreen();
  const handleClose = () => {
    dispatch(close());
  };
  return (
    <Drawer
      title={t("book.createANewBook")}
      width={isMobileDevice ? "100%" : "50%"}
      onClose={handleClose}
      visible={isOpen}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={handleClose}>{t("common.cancel")}</Button>
          <Button onClick={handleClose} type="primary">
            {t("common.submit")}
          </Button>
        </Space>
      }
    >
      <Form
        layout="vertical"
        hideRequiredMark
        className="bold_capitalize_lable"
      >
        <Form.Item
          name="title"
          label={t("book.title")}
          rules={[{ required: true, message: t("book.pleaseEnterBookTitle") }]}
        >
          <Input placeholder={t("book.pleaseEnterBookTitle")} />
        </Form.Item>

        <Form.Item name="author" label={t("book.author")}>
          <Input placeholder={t("book.pleaseEnterTheAuthor")} />
        </Form.Item>
        <Form.Item name={t("book.category")} label="category">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value={"A"} style={{ lineHeight: "32px" }}>
                  A
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="release_date"
          label={t("book.releaseDate")}
          rules={[{ required: true, message: "Please enter user name" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder={t("book.selectDate")}
          />
        </Form.Item>

        <Form.Item label={t("book.status")} name="status">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="completed">{t("book.completed")}</Radio.Button>
            <Radio.Button value="in_progress">
              {t("book.inProgress")}
            </Radio.Button>
            <Radio.Button value="stopped">{t("book.stopped")}</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t("book.publish")} valuePropName="publish">
          <Switch />
        </Form.Item>
        <Form.Item name={"introduction"} label={t("book.introduction")}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default CreateBook;
