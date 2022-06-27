import CopyField from 'components/atoms/CopyField';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonateLinkField() {
  return (
    <CustomFieldWrapper>
      <CustomFieldText>The selected campaign does not have custom fields.</CustomFieldText>
      <CopyContainer>
        <CopyLabel>HTML CODE</CopyLabel>
        <CopyField grey />
      </CopyContainer>
    </CustomFieldWrapper>
  );
}

export default DonateLinkField;

const CustomFieldWrapper = styled.div`
  margin-top: 3.2rem;
`;

const CustomFieldText = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
  padding-left: 2.4rem;
  margin-bottom: 2.4rem;
`;

const CopyContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding-left: 2.4rem;
  margin-bottom: 9.1rem;
`;

const CopyLabel = styled.label`
  width: 10rem;
  display: flex;
  align-items: center;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;
