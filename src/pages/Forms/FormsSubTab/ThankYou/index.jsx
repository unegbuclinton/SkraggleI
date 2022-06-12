import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import RadioGroup from 'components/atoms/RadioGroup';
import Switch from 'components/atoms/Switch/Switch';
// import DashboardLayout from 'components/layouts/DashboardLayout';
import FormCardLayout from 'components/layouts/FormCardLayout';
import DonationSetupFormComponent from 'components/molecules/Forms/donationSetup/DonationSetupFormComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

// import FormsSubTab from '..';

function ThankYouComponent({ IncrementTab, DecrementTab }) {
  const radioButton = [
    {
      labelText: 'Redirect to URL',
      value: 1
    },
    {
      labelText: 'Offer social media sharing buttons',
      value: 2
    }
  ];
  return (
    <>
      <ThankYouWrapper>
        <ThankYouContainer>
          <HeadingContainer>
            <Heading>Thank You Screen</Heading>
            <Switch />
          </HeadingContainer>
          <ThankYouText>
            Choose what your donors should see after completing all steps of this campaign&apos;s
            donation checkout.
          </ThankYouText>
          <RadioGroupContainer>
            <RadioGroup radioData={radioButton} />
          </RadioGroupContainer>
          <Line />
          <ButtonContainer>
            <Button className="cancel" type="button" proute auth invert onClick={DecrementTab}>
              Back
            </Button>
            <Button type="button" className="continue" onClick={IncrementTab}>
              Next
            </Button>
          </ButtonContainer>
        </ThankYouContainer>
        <FormCardLayout>
          <DonationSetupFormComponent />
        </FormCardLayout>
      </ThankYouWrapper>
    </>
  );
}

export default ThankYouComponent;

const ThankYouWrapper = styled.div`
  display: flex;
  gap: 1.692rem;
  /* margin-top: 5.9rem; */
`;
const RadioGroupContainer = styled.div``;

const Heading = styled.h1`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['header-grey']};
`;

const HeadingContainer = styled.div`
  display: flex;
  gap: 24.8rem;
  margin-bottom: 0.8rem;
`;

const ThankYouText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['grey-200']};
  margin-bottom: 1.75rem;
`;

const Line = styled.div`
  width: 100%;
  border: 0.1rem solid ${COLORS.torquoise};
  margin-top: 3.35rem;
`;

const ThankYouContainer = styled(Card)`
  max-width: 53rem;
  width: 100%;
  padding: 4rem 2.4rem 2.4rem 4.4rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 35.5rem;
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  .cancel {
    width: 14rem;
    height: 4.8rem;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    border-radius: 0.5rem;
  }

  .continue {
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
  }
`;
