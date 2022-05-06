import React from 'react';

import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';

const ErrorMessage = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

export default ErrorMessage;

const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
`;
