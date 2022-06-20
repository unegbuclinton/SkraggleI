import React from 'react';
import styled from 'styled-components';
import DonorReadiness from './DonorReadiness';
import DonorType from './DonorType';

function Forcasting() {
  return (
    <ForecastWrapper>
      <DonorType />
      <DonorReadiness />
    </ForecastWrapper>
  );
}

export default Forcasting;

export const ForecastWrapper = styled.div``;
