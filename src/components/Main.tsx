import styled from "styled-components";
type Props = {
  column?: boolean;
};
const Main = styled.section<Props>`
  max-height: calc(100vh - 2rem);
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  @media only screen and (max-width: 600px) {
    margin-left: unset;
  }
`;

export default Main;
