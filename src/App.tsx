import { Sider, Header, Content, PerfectScroll } from "./features";
import { Layout, Main } from "./components";
import { Route, Routes } from "react-router-dom";
import { Books } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { toggleFixed } from "./features/header/headerSlice";
import { RootState } from "./store";
import "antd/dist/antd.min.css";
import "./App.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const App = () => {
  const dispatch = useDispatch();
  const isFixedHeader = useSelector((state: RootState) => state.header.isFixed);
  const collapsed = useSelector((state: RootState) => state.sider.collapsed);
  const handleScroll = (container: any) => {
    if (container?.target.scrollTop === 0 && isFixedHeader !== false)
      dispatch(toggleFixed());
    if (container?.target.scrollTop > 50 && isFixedHeader !== true)
      dispatch(toggleFixed());
  };
  return (
    <Layout className="app">
      <Sider collapsed={collapsed} />
      <Main>
        <PerfectScroll onScroll={handleScroll} className="content_wrapper">
          <Header></Header>

          <Content>
            <Routes>
              <Route path="/book" element={<Books />} />
            </Routes>
          </Content>
        </PerfectScroll>
      </Main>
    </Layout>
  );
};

export default App;
