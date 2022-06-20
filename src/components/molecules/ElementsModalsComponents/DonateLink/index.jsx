import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function LinkModal() {
  return (
    <DonateButtonWrapper>
      <Heading>
        Get a link that sends visitors to your website and automatically opens donation checkout.
      </Heading>
      <DonateButtonContainer>
        <DonateButtonLabel>Element name</DonateButtonLabel>
        <Input type="text" className="input-field" placeholder="Donate button #6" />
        {/* <DonateButtonBehavior />
        <DonateAppearance />
        <CustomField /> */}
      </DonateButtonContainer>
    </DonateButtonWrapper>
  );
}

export default LinkModal;

const DonateButtonWrapper = styled.div`
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
`;

const DonateButtonContainer = styled.form`
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
`;

const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
  line-height: 2.7rem;
`;

const DonateButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  position: relative;
  bottom: 0.8rem;
`;
