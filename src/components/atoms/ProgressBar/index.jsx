import { COLORS } from "constants/colors";
import React from "react";
import styled, { css } from "styled-components";

const ProgressBar = ({ value, target, circular, ...rest }) => {
  const range = (value / target) * 100;
  return circular ? (
    <ProgressBarWrapper range={range} {...rest}></ProgressBarWrapper>
  ) : (
    <ProgressBarWrapper range={range} {...rest}></ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  position: relative;
  background-color: ${COLORS["garage-mix-grey"]};
  border-radius: 2rem;
  height: 2rem;

  ${({ circular }) =>
    circular &&
    css`
      width: 17.4rem;
      height: 17.4rem;
      border-radius: 50%;

      &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: ${({ range }) => range}%;
        height: 100%;
        background-color: ${COLORS.pink};
        border-radius: 50%;
      }
    `}

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: ${({ range }) => range}%;
    height: 100%;
    background-color: ${COLORS.pink};
    border-radius: 2rem;
  }
`;
