import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Switch from 'components/atoms/Switch/Switch';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function SupportTabComponent({ IncrementTab, DecrementTab }) {
  return (
    <SupportTabWrapper>
      <SupportCardWrapper className="support-card">
        <SupportTabContainer>
          <SupportHeaderWrapper>
            <SupportHeader>Ask for mailing address</SupportHeader>
            <Switch />
          </SupportHeaderWrapper>
          <SupportTabText>
            You have the option to collect a donors mailing address after the transaction is
            completed. This way you wont lose the donation because of extra form fields.
          </SupportTabText>
        </SupportTabContainer>
        <SupportTabDivider />
        <SupportTabContainer>
          <SupportHeaderWrapper>
            <SupportHeader>Ask for phone number</SupportHeader>
            <Switch />
          </SupportHeaderWrapper>
          <SupportTabText>
            This gives your donors the option to provide a phone number prior to checkout. We
            recommend leaving phone optional if possible; requiring a phone number of all donors may
            cause you to lose donations due to extra form fields.
          </SupportTabText>
        </SupportTabContainer>
        <SupportTabDivider />
        <SupportTabContainer>
          <SupportHeaderWrapper>
            <SupportHeader>Allow to donate anonymously</SupportHeader>
            <Switch />
          </SupportHeaderWrapper>
          <SupportTabText>
            This gives your donors the option to have their donation remain anonymous.
          </SupportTabText>
        </SupportTabContainer>
        <SupportTabDivider />
        <SupportTabContainer>
          <SupportHeaderWrapper>
            <SupportHeader>Allow donors to give on behalf of a company</SupportHeader>
            <Switch />
          </SupportHeaderWrapper>
          <SupportTabText>
            We recommend that you enable this option when you anticipate a lot of corporate donors
            being directed to this giving form.
          </SupportTabText>
        </SupportTabContainer>
        <SupportTabDivider />
        <SupportTabFooter>
          <Button className="support-back__btn" invert auth onClick={DecrementTab}>
            Back
          </Button>
          <Button className="support-next__btn" auth onClick={IncrementTab} n>
            Next
          </Button>
        </SupportTabFooter>
      </SupportCardWrapper>
    </SupportTabWrapper>
  );
}

export default SupportTabComponent;

const SupportTabWrapper = styled.div`
  max-width: 53rem;
  width: 100%;
<<<<<<< HEAD
  height: 100%;
  overflow: hidden;
=======
>>>>>>> f349565b0209c87266bed6c20ead0652dd764fcd
  .support-card {
    padding: 4rem 6.246rem 2.4rem 4.4rem;
  }
`;

export const SupportCardWrapper = styled(Card)`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const SupportTabContainer = styled.div``;

const SupportTabDivider = styled.div`
  max-width: 42.2rem;
  width: 100%;
  border: 1px solid ${COLORS.torquoise};
  margin: 3.2rem 0;
`;
const SupportTabText = styled.p`
  width: 37.7rem;
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['grey-200']};
`;

const SupportHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;
const SupportHeader = styled.h1`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS.deepPurple};
`;
const SupportTabFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .support-back__btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS['gray-500']};
  }
  .support-next__btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
