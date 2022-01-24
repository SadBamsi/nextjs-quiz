import { url } from "inspector";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Answer } from "../answer";
import {
  StyledQuiz,
  StyledTitle,
  StyledQuizWrapper,
  StyledQuizHeadPicture,
  StyledAnswerArea,
  StyledAnswer,
  StyledQuizQuestion,
  StyledFlag,
} from "./styled";

export interface IDataProps {
  name: string;
  flag: string;
  capital: string;
}

interface IProps {
  data: IDataProps[];
  theme: string;
  isAnswered: () => void;
  rightAnswer?: IDataProps;
}

export const Quiz: React.FC<IProps> = ({
  data,
  theme,
  rightAnswer,
  isAnswered,
}) => {
  const [phraze, setPhraze] = useState("");
  useLayoutEffect(() => {
    switch (theme) {
      case "flag":
        setPhraze("Which country flag is in the picture");
        break;
      case "countryName":
        setPhraze(
          `What is name coutry with that capital ${rightAnswer?.capital}`
        );
        break;
      case "capital":
        setPhraze(`What is the capital of that country ${rightAnswer?.name}`);
        break;
    }
  }, [theme, rightAnswer]);

  return (
    <StyledQuizWrapper>
      <StyledTitle>Country Quiz</StyledTitle>
      <StyledQuiz>
        <StyledQuizHeadPicture />
        {theme === "flag" && (
          <StyledFlag
            width={84}
            height={54}
            src={rightAnswer?.flag || ""}
            alt="flag of the country"
          />
        )}
        <StyledQuizQuestion>{phraze}</StyledQuizQuestion>
        <StyledAnswerArea>
          {data.map((el) => (
            <Answer
              onCheck={isAnswered}
              rightAnswer={
                rightAnswer || {
                  name: "",
                  capital: "",
                  flag: "",
                }
              }
              value={theme === "capital" ? el.capital : el.name}
              key={"" + el.name}
            />
          ))}
        </StyledAnswerArea>
      </StyledQuiz>
    </StyledQuizWrapper>
  );
};
