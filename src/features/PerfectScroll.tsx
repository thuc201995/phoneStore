import { ReactNode } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useCheckMobileScreen } from "../hooks";
type Props = {
  children: ReactNode | ReactNode[];
  [key: string]: any;
};

const PerfectScroll: React.FC<Props> = ({ children, ...props }) => {
  const isMobileDevice = useCheckMobileScreen();
  const As = isMobileDevice ? "div" : PerfectScrollbar;
  return <As {...props}>{children}</As>;
};

export default PerfectScroll;
