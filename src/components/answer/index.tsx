import React, { DetailsHTMLAttributes, HTMLAttributes, useState } from "react";
import { IDataProps } from "../quiz";
import { StyledAnswer } from "./styled";

interface IProps {
  value: string;
  onCheck: () => void;
  rightAnswer: IDataProps;
}

const checkRightAnswer = (right: any, value: any) =>
  Object.values(right).includes(value);

export const Answer: React.FC<IProps> = ({ value, rightAnswer, onCheck }) => {
  const [state, setState] = useState(false);
  const [isChecked, setISChecked] = useState(false);

  return (
    <StyledAnswer
      onClick={() => {
        setState(checkRightAnswer(rightAnswer, value));
        setISChecked((prev) => !prev);
        onCheck();
      }}
      state={state}
      isChecked={isChecked}
    >
      {value}
    </StyledAnswer>
  );
};
