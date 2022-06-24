import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function CustomField() {
  return <CustomFieldText>The selected campaign does not have custom fields.</CustomFieldText>;
}

export default CustomField;

const CustomFieldText = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
  padding-left: 2.4rem;
  margin-bottom: 5.4rem;
`;
