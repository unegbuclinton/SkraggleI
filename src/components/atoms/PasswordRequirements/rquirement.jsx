/* eslint-disable no-extra-boolean-cast */
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const Requirement = ({ htmlFor, isvalid, validMessage, invalidMessage }) => {
  return (
    // <RequirementWrapper>
    //   <label htmlFor={htmlFor} className={!isvalid ? `invalid` : `valid`}>
    //     <span>{!isvalid ? invalidMessage : validMessage}</span>
    //   </label>
    // </RequirementWrapper>
    <>
      {!isvalid ? (
        <RequirementWrapperInValid>
          <label htmlFor={htmlFor} className={!isvalid ? `invalid` : `valid`}>
            <span>{!isvalid ? invalidMessage : validMessage}</span>
          </label>
        </RequirementWrapperInValid>
      ) : (
        <RequirementWrapper>
          <label htmlFor={htmlFor} className={!isvalid ? `invalid` : `valid`}>
            <span>{!isvalid ? invalidMessage : validMessage}</span>
          </label>
        </RequirementWrapper>
      )}
    </>
  );
};

export default Requirement;

export const RequirementWrapper = styled.p`
  margin-bottom: 0.4rem;
  width: fit-content;
  padding: 0.6rem 1.4rem;
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.medium};
  border-radius: 4rem;
  background-color: #7be382;
  align-items: center;
  text-align: center;
`;

export const RequirementWrapperInValid = styled.p`
  margin-bottom: 0.4rem;
  width: fit-content;
  padding: 0.6rem 1.4rem;
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.medium};
  border-radius: 4rem;
  background-color: ${COLORS['gray-500']};
  align-items: center;
  text-align: center;
`;
