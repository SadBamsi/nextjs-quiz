import React from "react";
import {
  StyledQuiz,
  StyledTitle,
  StyledQuizWrapper,
  StyledQuizHeadPicture,
} from "./styled";

interface IProps {}

export const Quiz: React.FC = () => {
  return (
    <StyledQuizWrapper>
      <StyledTitle>Country Quiz</StyledTitle>
      <StyledQuiz>
        <StyledQuizHeadPicture />
      </StyledQuiz>
    </StyledQuizWrapper>
  );
};
