import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonationSetupComponent() {
  return (
    <DonationSetUpWrapper>
      <Card className="donation-setup__card">
        <DonationSetUpLabel>Default Checkout Currency</DonationSetUpLabel>
        <SelectDropDown />
        <DonationSetUpDivider />
      </Card>
    </DonationSetUpWrapper>
  );
}

export default DonationSetupComponent;

const DonationSetUpWrapper = styled.div`
  .donation-setup__card {
    padding: 4.5rem 4.4rem 2.778rem 4.4rem;
  }
`;
const DonationSetUpLabel = styled.label`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-200']};
  margin-bottom: 1.6rem;
`;

const DonationSetUpDivider = styled.div``;
