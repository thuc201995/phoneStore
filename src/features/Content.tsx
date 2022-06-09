import { ReactNode } from "react";
import { Content } from "../components";
type Props = {
  children: ReactNode;
};
const ContentComponent: React.FC<Props> = ({ children }) => {
  return <Content>{children}</Content>;
};
export default ContentComponent;
