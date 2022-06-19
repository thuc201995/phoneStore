import { Layout } from "antd";
import { Header, Footer, Subscriber } from "./features";
import { Route, Routes } from "react-router-dom";
import {ProductList, Home, ProductDetail, AccessoryPage} from "./pages";
import "antd/dist/antd.min.css";
import "./App.scss";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="iphone" element={<ProductList category="iphone" />} />
          <Route path="ipad" element={<ProductList category="ipad" />} />
          <Route path="iphone/:id" element={<ProductDetail />} />
          <Route path="ipad/:id" element={<ProductDetail />} />
          <Route path="phu-kien" element={<AccessoryPage category="accessory"/>} />
        </Routes>
      </Content>
      <Subscriber />
      <Footer />
    </Layout>
  );
};

export default App;
