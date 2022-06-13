import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import RadioGroup from 'components/atoms/RadioGroup';
import Switch from 'components/atoms/Switch/Switch';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonationSetupComponent({ DecrementTab, IncrementTab }) {
  const defaultCurrency = [
    {
      labelText: 'For one time and recurring donations',
      value: 1
    },
    {
      labelText: 'For one time donations only',
      value: 2
    }
  ];
  const reCurring = [
    {
      labelText: 'Default one time',
      value: 1
    },
    {
      labelText: 'Default monthly',
      value: 2
    },
    {
      labelText: 'Only one time',
      value: 3
    },
    {
      labelText: 'Only monthly',
      value: 4
    }
  ];
  return (
    <DonationSetUpWrapper>
      <Card className="donation-setup__card">
        <DonationSetUpLabel>Default Checkout Currency</DonationSetUpLabel>
        <SelectDropDown className="setup-select" />
        <DonationSetUpDivider />
        <DonationSetUpContainer>
          <div className="inner-container-wrapper">
            <div className="inner-container">
              <DonationSetUpHeader>Allow donor to change default currency</DonationSetUpHeader>
              <DonationSetUpText>Ability to choose default currency</DonationSetUpText>
            </div>
            <div className="inner-container__switch">
              <Switch />
            </div>
          </div>
          <RadioGroup radioData={defaultCurrency} />
        </DonationSetUpContainer>
        <DonationSetUpDivider />
        <DonationSetUpContainer>
          <div className="inner-container-wrapper">
            <div className="inner-container">
              <DonationSetUpHeader>Recurring Giving</DonationSetUpHeader>
              <DonationSetUpText>Ability to choose default currency</DonationSetUpText>
            </div>
          </div>
          <RadioGroup radioData={reCurring} />
        </DonationSetUpContainer>
        <DonationSetUpDivider />
        <DonationSetUpContainer>
          <div className="inner-container-wrapper">
            <div className="inner-container">
              <DonationSetUpHeader>Suggest a recurring gift before checkout</DonationSetUpHeader>
              <p className="inner-container__text">
                When enabled, we ll add an upsell screen for any donor that begins to make a one
                time gift of $200 or less. This upsell will suggest that they switch to making a
                smaller recurring donation. This can convert up to 30% of one time donors to
                recurring donors.
              </p>
            </div>
            <div className="inner-container__switch">
              <Switch />
            </div>
          </div>
        </DonationSetUpContainer>
        <DonationSetUpDivider />
        <DonationSetUpContainer>
          <div className="inner-container-wrapper">
            <div className="inner-container">
              <DonationSetUpHeader>Suggest a recurring gift before checkout</DonationSetUpHeader>
              <p className="inner-container__text">
                When enabled, we ll add an upsell screen for any donor that begins to make a one
                time gift of $200 or less. This upsell will suggest that they switch to making a
                smaller recurring donation. This can convert up to 30% of one time donors to
                recurring donors.
              </p>
            </div>
            <div className="inner-container__switch">
              <Switch />
            </div>
          </div>
        </DonationSetUpContainer>
        <DonationSetUpDivider />
        <DonationSetUpContainer>
          <div className="inner-container-wrapper">
            <div className="inner-container">
              <DonationSetUpHeader>Recurring Giving</DonationSetUpHeader>
              <DonationSetUpText>Ability to choose default currency</DonationSetUpText>
            </div>
          </div>
          <RadioGroup radioData={reCurring} />
        </DonationSetUpContainer>
        <DonationSetUpFooter>
          <Button type="button" className="setup-back__btn" invert auth onClick={DecrementTab}>
            Back
          </Button>
          <Button type="button" className="setup-next__btn" auth onClick={IncrementTab}>
            Next
          </Button>
        </DonationSetUpFooter>
      </Card>
    </DonationSetUpWrapper>
  );
}

export default DonationSetupComponent;

const DonationSetUpWrapper = styled.div`
  max-width: 53rem;
  width: 100%;
  overflow: auto;
  .donation-setup__card {
    padding: 4.5rem 4.4rem 2.778rem 4.4rem;

    .setup-select {
      max-width: 42.2rem;
      width: 100%;
    }
  }
`;
const DonationSetUpLabel = styled.label`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-200']};
  margin-bottom: 1.6rem;
`;

const DonationSetUpDivider = styled.div`
  border: 1px solid ${COLORS.torquoise};
  margin: 3.2rem 0;
`;
const DonationSetUpText = styled.p`
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['grey-200']};
`;

const DonationSetUpContainer = styled.div`
  .inner-container-wrapper {
    display: flex;
    gap: 7.8rem;
    margin-bottom: 2.55rem;

    .inner-container__text {
      width: 26rem;
    }

    .inner-container__switch {
      margin-top: 1rem;
    }
  }
`;
const DonationSetUpHeader = styled.h2`
  color: ${COLORS.deepPurple};
  margin-bottom: 0.8rem;
`;

const DonationSetUpFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  margin-top: 6.4rem;

  .setup-back__btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS['gray-500']};
  }
  .setup-next__btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
