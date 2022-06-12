import { Layout, Image, Row, Col } from "antd";
import { Header, Footer, Subscriber } from "./features";
import { Route, Routes } from "react-router-dom";
import { Product, AppleWatch, IPad, IPhone, PhuKien, Home } from "./pages";
import "antd/dist/antd.min.css";
import "./App.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="iphone" element={<Product category="iphone" />} />
          <Route path="ipad" element={<Product category="ipad" />} />
          {/* 
          <Route path="mac" element={<Product />} />
          <Route path="apple-watch" element={<Product />} />
          <Route path="am-thanh" element={<Product />} />
          <Route path="phu-kien" element={<Product />} /> */}
        </Routes>
      </Content>
      <Subscriber />
      <Footer />
    </Layout>
  );
};

export default App;
