import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function CustomField() {
  return (
    <CustomFieldWrapper>The selected campaign does not have custom fields.</CustomFieldWrapper>
  );
}

export default CustomField;

const CustomFieldWrapper = styled.div`
  font-size: ${FONTSIZES.small};
  line-height: 152.69%;
  color: ${COLORS.black};
  margin-left: 2.9rem;
`;
