import React, { DetailsHTMLAttributes, HTMLAttributes, useRef, useState } from "react";
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
  const ref = useRef(null)

  const checkRightAnswer = (right: any, value: any) => {
    const res = Object.values(right).includes(value);
    changeInfo(res);
    return res
  }
    

  return (
    <StyledAnswer
      ref={ref}
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
