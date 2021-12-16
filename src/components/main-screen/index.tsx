import { StyledMainScreen } from "./styled";

interface IProps {}

export const MainScreen: React.FC<IProps> = ({ children }) => {
  return <StyledMainScreen>{children}</StyledMainScreen>;
};
