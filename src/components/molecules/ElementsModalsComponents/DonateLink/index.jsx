import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import DonateLinkBehavior from './Behavior';
import DonateLinkField from './CustomFields';

function LinkModal() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <DonateLinkBehavior /> },
    { title: 'CUSTOM FIELDS', component: <DonateLinkField /> }
  ];
  return (
    <DonateLinkWrapper>
      <Heading>
        Get a link that sends visitors to your website and automatically opens donation checkout.
      </Heading>
      <DonateLinkContainer>
        <InputWrapper>
          <DonateLinkLabel>Element name</DonateLinkLabel>
          <Input type="text" className="input-field" placeholder="Donate link #6" />
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
      </DonateLinkContainer>
    </DonateLinkWrapper>
  );
}

export default LinkModal;

const DonateLinkWrapper = styled.div`
  padding: 3.2rem 0 2.4rem 0;
`;

const DonateLinkContainer = styled.div`
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
  .icon {
    margin: 0rem 0 0.8rem 0;
  }
`;

const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
  line-height: 2.7rem;
  padding: 0 2.4rem 0 2.4rem;
`;

const DonateLinkLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  position: relative;
  bottom: 0.8rem;
`;

const InputWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 2.4rem 0 0;
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
