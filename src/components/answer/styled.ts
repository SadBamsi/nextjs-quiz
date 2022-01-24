import styled, { css } from "styled-components";

interface IProps {
  state: boolean;
  isChecked: boolean;
}

const right = css`
  background-color: #60bf88;
  color: #ffffff;
  border-color: #60bf88;
  :hover {
    background-color: #60bf88;
  }
`;
const wrong = css`
  background-color: #ea8282;
  color: #ffffff;
  border-color: #ea8282;
  :hover {
    background-color: #ea8282;
  }
`;

export const StyledAnswer = styled.li<IProps>`
  border-radius: 12px;
  border: 2px solid rgba(96, 102, 208, 0.7);
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgba(96, 102, 208, 0.8);
  transition: all 0.3s ease;
  text-align: center;
  padding: 15px 0;
  box-sizing: border-box;
  cursor: pointer;
  :not(:last-of-type) {
    margin-bottom: 25px;
  }
  :hover {
    border-color: transparent;
    background-color: #f9a826;
    color: white;
  }
  ${({ state, isChecked }) => (isChecked ? (state ? right : wrong) : false)}
`;
