import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import data from 'utilities/filterData.json';

function DonationInformation({ onCloseModal, IncrementTab }) {
  return (
    <TransactionWrapper>
      <Card className="transaction-card">
        <TransactionLabel>
          <p className="transaction-label">Contact</p>
          <DropdownComponent className="transaction-dropdown" data={data} />
        </TransactionLabel>
        <TransactionLabel>
          <p className="transaction-label">Gift Type</p>
          <DropdownComponent className="transaction-dropdown" data={data} />
        </TransactionLabel>

        <div className="transaction-text">
          <span>
            <Checkbox pink />
          </span>
          <p>Was the transaction converted from a different currency?</p>{' '}
        </div>
        <TransactionLabel>
          <p className="transaction-label">Total Amount of Gift</p>
          <DropdownComponent className="transaction-dropdown" data={data} />
        </TransactionLabel>
        <TransactionLabel>
          <p className="transaction-label">Payment Method</p>
          <DropdownComponent className="transaction-dropdown" data={data} />
        </TransactionLabel>
        <TransactionInput>
          <p className="transaction-label">Date Received</p>
          <Input className="transaction-input" placeholder="Dec 23, 2021 - 09:20 AM" disabled />
        </TransactionInput>

        <div className="transaction-footer">
          <Button invert auth className="transaction-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button auth className="transaction-save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </div>
      </Card>
    </TransactionWrapper>
  );
}

export default DonationInformation;

const TransactionWrapper = styled.div`
  .transaction-card {
    padding: 3.2rem 1.4rem 2.4rem 2.4rem;

    .transaction-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 10.8rem;

      .transaction-cancel-btn {
        width: 10.7rem;
        height: 5.1rem;
      }
      .transaction-save-btn {
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

const TransactionLabel = styled.div`
  .transaction-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .transaction-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
  }
`;
const TransactionInput = styled.div`
  .transaction-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .transaction-input {
    width: 31.2rem;
  }
`;
