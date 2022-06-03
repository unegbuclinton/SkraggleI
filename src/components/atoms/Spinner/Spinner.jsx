import { DPIconSpinner } from 'icons';
import React from 'react';
import styled from 'styled-components';

function Spinner() {
  return (
    <SpinnerContainer>
      <DPIconSpinner className="spinner" />
    </SpinnerContainer>
  );
}

export default Spinner;

const SpinnerContainer = styled.span`
  .spinner {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
