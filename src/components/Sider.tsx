import styled from "styled-components";
import { Layout } from "antd";
import { ReactElement } from "react";
import { Content } from ".";
const { Sider: AntSider } = Layout;

const Sider = styled(AntSider)`
  flex: 0 0 "250px";
  width: "250px" !important;
  min-width: "250px" !important;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  transform: translateX(0px);
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  border-radius: 0.75rem;
  height: calc(100vh - 2rem);
  /* max-height: calc(100vh - 2rem); */
  overflow: auto;
  align-self: center;
  color: white;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    display: none;
    z-index: 100;
  }
`;

type BrandProps = {
  text?: string;
  logo?: Element | ReactElement;
  collapsed?: boolean;
};
const Brand = styled.div<BrandProps>`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  min-height: 40px;
  display: flex;
  text-align: center;
  padding: 1rem 0 0 2rem;
`;

const Divider = styled.hr`
  flex-shrink: 0;
  border: 0px solid rgba(0, 0, 0, 0.08);
  height: 0.0625rem;
  margin: 1rem 0px;
  opacity: 0.25;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  ) !important;
`;

const TextIcon = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 400 !important;
  display: flex;
  align-items: center;
  font-size: 0.875rem !important;
  text-transform: uppercase;
`;

export default Object.assign(Sider, { Brand, Divider, TextIcon });
