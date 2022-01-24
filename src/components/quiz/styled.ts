import styled, { css } from "styled-components";
import Man from "./icons/card-icon.svg";
import RigthIcon from "./icons/right.svg";
import False from "./icons/false.svg";
import Image from "next/image";

export const StyledQuiz = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 68px 32px 32px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #fff;
`;

export const StyledQuizWrapper = styled.div`
  max-width: 465px;
  width: 100%;
`;

export const StyledTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  margin-bottom: 10px;
  color: #f2f2f2;
  text-transform: uppercase;
`;

export const StyledQuizHeadPicture = styled(Man)`
  position: absolute;
  right: 0;
  bottom: calc(100% - 42px);
`;

export const StyledFlag = styled(Image)`
  margin-bottom: 28px;
`;

export const StyledQuizQuestion = styled.h3`
  margin: 0px 0 0;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
  margin-bottom: 32px;
`;

export const StyledAnswerArea = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledRightAnswer = css`
  background-color: #60bf88;
  color: white;
  border-color: transparent;
  :after {
    display: block;
    width: 20px;
    height: 20px;
    content: ${RigthIcon};
  }
`;
export const StyledFalseAnswer = css`
  background-color: #ea8282;
  color: white;
  border-color: transparent;
  :after {
    display: block;
    width: 20px;
    height: 20px;
    content: ${False};
  }
`;

export const StyledAnswer = styled.li`
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
`;
