import Button from 'components/atoms/Button/Button';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useElement } from 'context';
import { BasicElement } from 'lib';
import React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import DonateAppearance from './Appearance';
import DonateButtonBehavior from './Behavior';
import CustomField from './CustomFields';

function DonateButton() {
  // vars
  const { elementConfig } = useElement();
  const tabs = [
    { title: 'BEHAVIOUR', component: <DonateButtonBehavior /> },
    { title: 'APPEARANCE', component: <DonateAppearance /> },
    { title: 'CUSTOM FIELDS', component: <CustomField /> }
  ];

  const htmlCode = useMemo(() => {
    const htmlCode = new BasicElement(elementConfig).toString();
    console.log('-->', htmlCode);
    return htmlCode;
  }, [JSON.stringify(elementConfig)]);

  return (
    <DonateButtonWrapper>
      <Heading>Display an animated donation button anywhere on your website.</Heading>
      <DonateButtonContainer>
        <InputWrapper>
          <DonateButtonLabel>Element name</DonateButtonLabel>
          <Input type="text" className="input-field" placeholder="Donate button #6" />
        </InputWrapper>
        <Tabs tabs={tabs} inline />
        <CopyContainer>
          <CopyLabel>HTML CODE</CopyLabel>
          <CopyField value={htmlCode} grey />
        </CopyContainer>
        <ButtonContainer>
          <Button type="button" className="cancel-btn" auth invert>
            Archive
          </Button>
          <Button type="submit" className="save-btn">
            Update Element
          </Button>
        </ButtonContainer>
      </DonateButtonContainer>
    </DonateButtonWrapper>
  );
}

export default DonateButton;

const DonateButtonWrapper = styled.div`
  padding: 3.2rem 0 2.4rem 0;
`;

const DonateButtonContainer = styled.div`
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
  padding: 0 2.4rem 0 2.4rem;
`;

const DonateButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  position: relative;
  bottom: 0.8rem;
`;

const InputWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
`;

const CopyContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding-left: 2.4rem;
`;

const CopyLabel = styled.label`
  width: 10rem;
  display: flex;
  align-items: center;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10rem 2.4rem 0 0;
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
