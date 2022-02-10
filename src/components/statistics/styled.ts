import styled from "styled-components";
import { StyledQuiz } from "../quiz/styled";
import Winner from "./winner-icon.svg";

export const StyledStatistics = styled.div``;

export const StyledStatisticsQuiz = styled(StyledQuiz)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 465px;
  padding: 50px 0;
`;

export const StyledHeaderImage = styled(Winner)`
  margin-bottom: 60px;
`;

export const StyledStatisticsText = styled.p`
  margin: 0;
  padding: 0;
  color: #1d355d;
  font-size: 48px;
  line-height: 72px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StyledStattisticsResult = styled.span`
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #1d355d;
  display: inline-block;
  margin-bottom: 70px;
  strong {
    font-size: 36px;
    color: #60bf88;
  }
`;

export const StyledStatisticsButton = styled.button`
  padding: 20px 0;
  outline: none;
  background-color: transparent;
  border: 2px solid #1d355d;
  box-sizing: border-box;
  border-radius: 12px;
  width: 210px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #1d355d;
  cursor: pointer;
`;
