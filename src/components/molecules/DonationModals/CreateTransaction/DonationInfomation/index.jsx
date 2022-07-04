import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ChequeInfo from '../../paymentInfoComponent/ChequeInfo';
import StripeInfo from '../../paymentInfoComponent/StripeInfo';

function DonationInformation({ onCloseModal, IncrementTab, formik }) {
  const { contactData } = useSelector((state) => state.contact);

  const contactOptions = contactData?.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const giftOption = [{ value: 'Cash', label: 'Cash' }];

  const paymentOptions = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Cheque', label: 'Check/Cheque' },
    { value: 'Bank Transfer/EFT', label: 'Bank Transfer/EFT' },
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Online_Stripe', label: 'Online via Stripe' }
  ];

  return (
    <TransactionWrapper>
      <Card className="transaction-card">
        <TransactionLabel>
          <p className="transaction-label">Contact</p>
          <SelectDropDown
            className="transaction-dropdown"
            options={contactOptions}
            id="contact"
            name="contact"
            type={'text'}
            placeholder="Contact"
            value={formik.values.contact}
            onChange={(value) => formik.setFieldValue('contact', value.value)}
            onBlur={formik.handleBlur}
          />
        </TransactionLabel>
        <TransactionLabel>
          <p className="transaction-label">Gift Type</p>
          <SelectDropDown
            options={giftOption}
            className="transaction-dropdown"
            id="giftType"
            name="giftType"
            type={'text'}
            placeholder="Currency"
            value={formik.values.giftType}
            onChange={(value) => formik.setFieldValue('giftType', value.value)}
            onBlur={formik.handleBlur}
          />
        </TransactionLabel>

        <div className="transaction-text">
          <span>
            <Checkbox pink />
          </span>
          <p>Was the transaction converted from a different currency?</p>
        </div>
        <TransactionLabel>
          <p className="transaction-label">Total Amount of Gift</p>
          <Input
            className="transaction-input"
            id="totalAmount"
            name="totalAmount"
            type={'text'}
            placeholder="$"
            value={formik.values.totalAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </TransactionLabel>
        <TransactionLabel>
          <p className="transaction-label">Payment Method</p>
          <SelectDropDown
            className="transaction-dropdown"
            options={paymentOptions}
            id="paymentMethod"
            name="paymentMethod"
            type={'text'}
            placeholder="Currency"
            value={formik.values.paymentMethod}
            onChange={(value) => formik.setFieldValue('paymentMethod', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.values.paymentMethod === 'Cheque' && <ChequeInfo formik={formik} />}
          {formik.values.paymentMethod === 'Online_Stripe' && <StripeInfo formik={formik} />}
        </TransactionLabel>

        <TransactionInput>
          <p className="transaction-label">Date Received</p>
          <Input
            className="transaction-input"
            placeholder="Dec 23, 2021 - 09:20 AM"
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </TransactionInput>

        <div className="transaction-footer">
          <Button invert auth className="transaction-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="button" auth className="transaction-save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </div>
      </Card>
    </TransactionWrapper>
  );
}

export default DonationInformation;

const TransactionWrapper = styled.form`
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
