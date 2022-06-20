import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonateLinkField() {
  return <CustomFieldText>The selected campaign does not have custom fields.</CustomFieldText>;
}

export default DonateLinkField;

const CustomFieldText = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;
