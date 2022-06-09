import styled from "styled-components";
import { Card as AntCard } from "antd";

const Card = styled(AntCard)`
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem;
`;

export default Card;
