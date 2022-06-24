import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import Appearance from './Appearance';
import Behavior from './Behavior';
import CustomFields from './CustomFields';
import Position from './Position';
import VisibilityTab from './Visibility';

function StickyButton() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'POSITION', component: <Position /> },
    { title: 'APPEARANCE', component: <Appearance /> },
    { title: 'VISIBILITY', component: <VisibilityTab /> },
    { title: 'CUSTOM FIELDS', component: <CustomFields /> }
  ];
  return (
    <StickyButtonWrapper>
      <Heading>Display an animated donation button sticks to any side of your website.</Heading>
      <InputWrapper>
        <Wrapper>
          <StickyButtonLabel>Element name</StickyButtonLabel>
        </Wrapper>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Sticky Button #1" />
          <CheckBoxWrapper>
            <Checkbox pink />
            <CheckBoxLabel>Element is enabled</CheckBoxLabel>
          </CheckBoxWrapper>
        </Wrapper>
      </InputWrapper>
      <Tabs tabs={tabs} inline />
      <ButtonContainer>
        <Button type="button" className="cancel-btn" auth invert>
          Archive
        </Button>
        <Button type="submit" className="save-btn">
          Update Element
        </Button>
      </ButtonContainer>
    </StickyButtonWrapper>
  );
}

export default StickyButton;

const StickyButtonWrapper = styled.div`
  padding: 3.2rem 0 3.2rem 0;
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
`;

const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
  padding: 0 2.4rem 0 2.4rem;
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: center;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin-bottom: 3.3rem;
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4rem 2.4rem 0 0;
  gap: 1.6rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }
  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }
`;
