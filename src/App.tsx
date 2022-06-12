import { Layout } from "antd";
import { Header, Footer, Subscriber } from "./features";
import { Route, Routes } from "react-router-dom";
import { Product, Home } from "./pages";
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
          <Route path="iphone" element={<Product category="iphone" />} />
          <Route path="ipad" element={<Product category="ipad" />} />
        </Routes>
      </Content>
      <Subscriber />
      <Footer />
    </Layout>
  );
};

export default App;
