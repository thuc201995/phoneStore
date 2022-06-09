import React from "react";
import styled from "styled-components";
type Props = {
  column?: boolean;
};
const Layout = styled.section<Props>`
  /* min-height: (100vh -);
  height: (100vh -); */
  display: flex;
`;

export default Layout;
