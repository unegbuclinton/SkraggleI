import Button from 'components/atoms/Button/Button';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import DonationLevelDraft from 'components/molecules/iFrameComp/DonationLevel';
import Tabs from 'components/molecules/Tabs';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import { renderCompToString } from 'utilities/helpers';
import Behavior from './Behavior';
import DonationBtn from './Button';
import Title from './Title';

function DonationLevels() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'TITLE', component: <Title /> },
    { title: 'BUTTONS', component: <DonationBtn /> }
  ];

  const htmlCode = renderCompToString(<DonationLevelDraft />);
  return (
    <StickyButtonWrapper>
      <Heading>Display an animated donation button sticks to any side of your website.</Heading>
      <InputWrapper>
        <Wrapper>
          <StickyButtonLabel>Element name</StickyButtonLabel>
        </Wrapper>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Donation Lavels #1" />
        </Wrapper>
      </InputWrapper>
      <Tabs tabs={tabs} inline />
      <CopyContainer>
        <CopyLabel>HTML CODE</CopyLabel>
        <CopyField grey value={htmlCode} />
      </CopyContainer>
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

export default DonationLevels;

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
