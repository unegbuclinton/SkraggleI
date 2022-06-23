import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  return (
    <DonateBehaviorWrapper>
      <SelectWrapper>
        <OpenCampaignLabel>Show donations to</OpenCampaignLabel>
        <SelectDropDown className="dropdown" placeholder="All campaigns" />
        <DonateBehaviorLabel>Donor’s name</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Shorted full name" />
        <CheckboxContainer className="checkbox-wrapper">
          <Checkbox pink />
          <CheckboxLabel>Donation amount</CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer className="checkbox-container">
          <Checkbox pink />
          <CheckboxLabel>Donor’s location</CheckboxLabel>
        </CheckboxContainer>
      </SelectWrapper>
    </DonateBehaviorWrapper>
  );
}

export default Behavior;

const DonateBehaviorWrapper = styled.div`
  .dropdown {
    width: 100%;
  }
  .checkbox-container {
    margin-bottom: 2.5rem;
  }
  .checkbox-wrapper {
    margin-top: 2.5rem;
  }
`;

const SelectWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
`;

const OpenCampaignLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  margin-bottom: 0.8rem;
  cursor: default;
`;

const DonateBehaviorLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  margin-bottom: 0.8rem;
  padding-top: 2.4rem;
  cursor: default;
`;

const CheckboxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  margin: 0.2rem 0 1.3rem 0;
`;
