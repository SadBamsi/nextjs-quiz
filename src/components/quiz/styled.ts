import styled from "styled-components";
import Man from "./card-icon.svg";

export const StyledQuiz = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 32px;
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

export const StyledQuizQuestion = styled.h3`
  margin: 0px 0 0;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
`;
