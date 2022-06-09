import styled from "styled-components";
import { PageHeader } from "antd";

const Header = styled(PageHeader)`
  background: transparent;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: sticky;
  z-index: 20;
  left: auto;
  right: 0px;
  top: 0.75rem;
  border-radius: 0.75rem;
  padding: 0rem 1rem;
`;

export default Header;
