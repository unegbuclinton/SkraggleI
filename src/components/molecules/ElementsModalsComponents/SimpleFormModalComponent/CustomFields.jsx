import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function CustomFields() {
  return (
    <CustomFieldWrapper>The selected campaign does not have custom fields.</CustomFieldWrapper>
  );
}

export default CustomFields;

const CustomFieldWrapper = styled.div`
  font-size: ${FONTSIZES.small};
  line-height: 152.69%;
  color: ${COLORS.black};
  margin: 3.2rem 0 0 2.9rem;
`;
