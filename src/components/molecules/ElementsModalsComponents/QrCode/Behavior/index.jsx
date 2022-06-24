import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconUrl } from 'icons';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  return (
    <DonateBehaviorWrapper>
      <SelectWrapper>
        <OpenCampaignLabel>Open campaign</OpenCampaignLabel>
        <SelectDropDown className="dropdown" placeholder="Select campaign" />
        <DonateBehaviorLabel>Frequency</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Match checkout setting" />
        <DonateBehaviorLabel>Designation</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Match checkout setting" />
        <DonateBehaviorLabel>Default amount</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Match checkout setting" />
        <DonateBehaviorLabel>
          <DPIconUrl />
        </DonateBehaviorLabel>
        <Input type="text" className="input-field" placeholder="https;//loremipsam....." />
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
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 5rem;
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
