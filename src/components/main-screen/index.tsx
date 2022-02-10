import { StyledMainScreen } from "./styled";

interface IProps {
  isDisabled: boolean;
}

export const MainScreen: React.FC<IProps> = ({ children, isDisabled }) => {
  return <StyledMainScreen isDisabled={isDisabled}>{children}</StyledMainScreen>;
};
