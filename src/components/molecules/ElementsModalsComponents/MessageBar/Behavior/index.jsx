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
        <OpenCampaignLabel>Open campaign</OpenCampaignLabel>
        <SelectDropDown className="dropdown" placeholder="My awesome campaign #5" />
        <DonateBehaviorLabel>Frequency</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Match checkout setting" />
        <DonateBehaviorLabel>Default amount</DonateBehaviorLabel>
        <CheckboxContainer>
          <Checkbox pink />
          <CheckboxLabel>Match checkout setting</CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer className="checkbox-container">
          <Checkbox pink />
          <CheckboxLabel>Customize</CheckboxLabel>
        </CheckboxContainer>
      </SelectWrapper>
    </DonateBehaviorWrapper>
  );
}

export default Behavior;

const DonateBehaviorWrapper = styled.div`
  margin-top: 3.2rem;
  .dropdown {
    width: 31.2rem;
  }
  .checkbox-container {
    margin-bottom: 2.5rem;
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
