import Button from 'components/atoms/Button/Button';
import Switch from 'components/atoms/Switch/Switch';
import React from 'react';
import {
  ButtonContainer,
  ContainerWrapper,
  HeaderWrapper,
  Heading,
  SwitchLabel,
  SwitchWrapper
} from './styles';

function RegistrationPackage({ setClick }) {
  return (
    <ContainerWrapper>
      <HeaderWrapper>
        <h1 className="heading">Registration Package: Bag Pack</h1>
      </HeaderWrapper>
      <Heading>Participant #1</Heading>
      <SwitchWrapper>
        <SwitchLabel>Attending</SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <SwitchWrapper>
        <SwitchLabel>Checked In</SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <ButtonContainer>
        <Button type="button" onClick={() => setClick(false)} className="cancel-btn">
          Cancel
        </Button>
        <Button className="save-btn">Save</Button>
      </ButtonContainer>
    </ContainerWrapper>
  );
}

export default RegistrationPackage;
