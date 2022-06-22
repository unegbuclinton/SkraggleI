import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconUrl } from 'icons';
import React from 'react';
import styled from 'styled-components';

function DonateLinkBehavior() {
  const radioButton = [
    {
      labelText: 'Allow donor change designation',
      value: 1
    },
    {
      labelText: 'Customize',
      value: 2
    }
  ];
  return (
    <DonateBehaviorWrapper>
      <SelectWrapper>
        <OpenCampaignLabel>Open campaign</OpenCampaignLabel>
        <SelectDropDown className="dropdown" placeholder="BGA Demo #2" />
        <DonateBehaviorLabel>Frequency</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="Default one time" />
        <DonateBehaviorLabel>Designation</DonateBehaviorLabel>
        <SelectDropDown className="dropdown" placeholder="where needed most" />
        <DonateBehaviorLabel>Default amount</DonateBehaviorLabel>
        <CheckboxContainer>
          <Checkbox pink />
          <CheckboxLabel>Allow donor change designation</CheckboxLabel>
        </CheckboxContainer>
      </SelectWrapper>
      <RadioButtonWrapper>
        <RadioGroup className="radio-btn" radioData={radioButton} />
      </RadioButtonWrapper>

      <SelectWrapper>
        <DPIconUrl className="icon" />
        <Input
          className="input-field"
          type="text"
          placeholder="https://Scelerisque gravida ornare eu/......"
        />
      </SelectWrapper>
    </DonateBehaviorWrapper>
  );
}

export default DonateLinkBehavior;

const DonateBehaviorWrapper = styled.div`
  .dropdown {
    width: 100%;
  }
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

const SelectWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
`;

const RadioButtonWrapper = styled.div`
  padding: 0 0 0 1.7rem;
`;
