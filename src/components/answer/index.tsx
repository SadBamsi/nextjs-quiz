import React, { DetailsHTMLAttributes, HTMLAttributes, useState } from "react";
import { IDataProps } from "../quiz";
import { StyledAnswer } from "./styled";

interface IProps {
  value: string;
  changeInfo: (val: boolean) => void;
  rightAnswer: IDataProps;
}

export const Answer: React.FC<IProps> = ({
  value,
  rightAnswer,
  changeInfo,
}) => {
  const [state, setState] = useState(false);
  const [isChecked, setISChecked] = useState(false);
  const checkRightAnswer = (right: any, value: any) => {
    const res = Object.values(right).includes(value);
    setTimeout(() => changeInfo(res), 1000);
    return res
  }
    

  return (
    <StyledAnswer
      onClick={() => {
        setState(checkRightAnswer(rightAnswer, value));
        setISChecked((prev) => !prev);
      }}
      state={state}
      isChecked={isChecked}
    >
      {value}
    </StyledAnswer>
  );
};
