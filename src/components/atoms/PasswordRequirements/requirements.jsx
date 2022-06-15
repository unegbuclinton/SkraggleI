import React from 'react';
// import { COLORS } from 'constants/colors';
import styled from 'styled-components';
import Requirement from './rquirement';
// import { FONTWEIGHTS, FONTSIZES } from 'constants/font-spec';

const Requirements = ({ long, number, required, lowercase, special }) => (
  <PasswordStrength>
    <Requirement
      htmlFor="password"
      isvalid={required}
      invalidMessage="Password is required"
      validMessage="Password is required"
    />
    <Requirement
      htmlFor="password"
      isvalid={long}
      invalidMessage="At least 8 characters"
      validMessage="At least 8 characters"
    />
    <Requirement
      htmlFor="password"
      isvalid={lowercase}
      invalidMessage="Lower case letter"
      validMessage="Lower case letter"
    />
    <Requirement
      htmlFor="password"
      isvalid={number}
      invalidMessage="Number"
      validMessage="Number"
    />
    <Requirement
      htmlFor="password"
      isvalid={special}
      invalidMessage="Special character"
      validMessage="Special character"
    />
  </PasswordStrength>
);

export default Requirements;

export const PasswordStrength = styled.div`
  /* display: grid;
  grid-template-columns: 0.45fr 0.5fr; */
  margin-bottom: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  h2 {
    margin-bottom: 0.8rem;
  }
`;
