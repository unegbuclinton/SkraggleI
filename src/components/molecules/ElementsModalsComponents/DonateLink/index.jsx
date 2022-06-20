import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function LinkModal() {
  return (
    <DonateLinkWrapper>
      <Heading>
        Get a link that sends visitors to your website and automatically opens donation checkout.
      </Heading>
      <DonateLinkContainer>
        <DonateLinkLabel>Element name</DonateLinkLabel>
        <Input type="text" className="input-field" placeholder="Donate link #6" />
        {/* <DonateButtonBehavior />
        <DonateAppearance />
        <CustomField /> */}
      </DonateLinkContainer>
    </DonateLinkWrapper>
  );
}

export default LinkModal;

const DonateLinkWrapper = styled.div`
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
`;

const DonateLinkContainer = styled.form`
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

const DonateLinkLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  position: relative;
  bottom: 0.8rem;
`;
