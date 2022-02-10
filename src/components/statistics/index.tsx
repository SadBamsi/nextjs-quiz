import React from "react";
import { StyledTitle } from "../quiz/styled";
import { StyledHeaderImage, StyledStatistics, StyledStatisticsButton, StyledStatisticsQuiz, StyledStatisticsText, StyledStattisticsResult } from "./styled";

interface IData {
    counter: number;
    right: number;
    wrong: number;
}

interface IProps {
    data: IData;
    restartGame: () => void;
};

export const Statistics: React.FC<IProps> = ({ data, restartGame }) => {
    const { right, wrong } = data;
return (
    <StyledStatistics>
        <StyledTitle>
            Country Quiz
        </StyledTitle>
        <StyledStatisticsQuiz>
            <StyledHeaderImage />
            <StyledStatisticsText>
                Results
            </StyledStatisticsText>
            <StyledStattisticsResult>
                You got <strong>{right}</strong> correct answers
            </StyledStattisticsResult>
            <StyledStatisticsButton onClick={restartGame}>
                Try again
            </StyledStatisticsButton>
        </StyledStatisticsQuiz>
</StyledStatistics>
);
};
