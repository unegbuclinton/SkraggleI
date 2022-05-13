import React from 'react';
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';
import data from 'utilities/filterData.json';

function RecurringInformation({ IncrementTab, onCloseModal }) {
  return (
    <InformationWrapper>
      <Card className="donation-card">
        <DonationLabel>
          <p className="donation-label">Contact</p>
          <DropdownComponent className="donation-dropdown" data={data} />
        </DonationLabel>
        <DonationLabel>
          <p className="donation-label">Gift Type</p>
          <DropdownComponent className="donation-dropdown" data={data} />
        </DonationLabel>
        <div className="transaction-text">
          <span>
            <Checkbox pink />
          </span>
          <p>Was the transaction converted from a different currency?</p>
        </div>
        <DonationInput>
          <p className="donation-label">Payment Method</p>
          <Input className="donation-input" placeholder="$" />
        </DonationInput>
        <DonationLabel>
          <p className="donation-label">Total Amount of Gift</p>
          <DropdownComponent className="donation-dropdown" data={data} />
        </DonationLabel>

        <DonationLabel>
          <p className="donation-label">Billing Cycle Every</p>
          <div className="billing">
            <Input className="billing-input" placeholder="$" />
            <DropdownComponent className="billing-dropdown" data={data} />
          </div>
        </DonationLabel>

        <DonationLabel>
          <p className="donation-label">Recept Setting</p>
          <DropdownComponent className="donation-dropdown" data={data} />
        </DonationLabel>

        <div className="donation-footer">
          <Button invert auth className="donation-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button auth className="donation-save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </div>
      </Card>
    </InformationWrapper>
  );
}

export default RecurringInformation;

const InformationWrapper = styled.div`
  .donation-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    .donation-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 10.8rem;

      .donation-cancel-btn {
        width: 10.7rem;
        height: 5.1rem;
      }
      .donation-save-btn {
        width: 20.5rem;
        height: 5.1rem;
      }
    }
  }
  .transaction-text {
    display: flex;
    gap: 1.1rem;
    align-items: center;
    margin-bottom: 2.5rem;

    p {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;
const DonationLabel = styled.div`
  .donation-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .donation-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
  }
  .billing {
    max-width: 30.4rem;
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
    margin-bottom: 2.4rem;

    &-input {
      max-width: 11.9rem;
      height: 6.4rem;
      background-color: transparent;
      border: 1px solid ${COLORS['moore-grey']};
    }

    &-dropdown {
      max-width: 16.9rem;
      height: 6.4rem;
      border: 1px solid ${COLORS['moore-grey']};
      border-radius: 0.5rem;
    }
  }
`;

const DonationInput = styled.div`
  .donation-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .donation-input {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
    background-color: transparent;
  }
`;