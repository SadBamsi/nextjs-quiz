import styled from "styled-components";

interface IProps {
  isDisabled: boolean;
}

export const StyledMainScreen = styled.main<IProps>`
  background: rgba(96, 102, 208, 0.7);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  pointer-events: ${({isDisabled}) => isDisabled ? "none" : "all"};
`;
