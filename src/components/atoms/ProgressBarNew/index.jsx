import { COLORS } from 'constants/colors';
import React from 'react';
import styled, { css } from 'styled-components';

const ProgressBar = ({ value, target, circular, ...rest }) => {
  const range = (value / target) * 100;
  return circular ? (
    <div>Circular</div>
  ) : (
    <ProgressBarWrapper range={range} {...rest}></ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  position: relative;
  background-color: ${COLORS['garage-mix-grey']};
  border-radius: 2rem;
  height: 2rem;

  ${({ circular }) => circular && css`
  //TODO FOR BROTHER CLINTON
    //Put your circular progress bar styling here 
  `}

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: ${({ range }) => range}%;
    height: 100%;
    background-color: ${COLORS.pink};
    border-radius: 2rem;
  }
`;
