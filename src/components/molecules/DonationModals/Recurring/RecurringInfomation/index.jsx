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

function RecurringInformation({ IncrementTab, onCloseModal, formik }) {
  const { contactData } = useSelector((state) => state.contact);

  const giftOption = [{ value: 'Cash', label: 'Cash' }];

  const billOption = [
    { value: 'Day', label: 'Day' },
    { value: 'Week', label: 'Week' },
    { value: 'Month', label: 'Month' },
    { value: 'Yearly', label: 'Yearly' }
  ];

  const recieptOptions = [
    {
      value: 'Log transaction without paymnt or receipt',
      label: 'Log transaction without paymnt or receipt'
    },
    {
      value: 'Log transaction without paymnt or receipt',
      label: 'Make an online payment & generate receipt'
    }
  ];

  const paymentOptions = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Cheque', label: 'Check/Cheque' },
    { value: 'Bank Transfer/EFT', label: 'Bank Transfer/EFT' },
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Online via Stripe', label: 'Online via Stripe' }
  ];

  const contactOptions = contactData?.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  return (
    <InformationWrapper onSubmit={formik.handleSubmit}>
      <Card className="donation-card">
        <DonationLabel>
          <p className="donation-label">Contact</p>
          <SelectDropDown
            className="donation-dropdown"
            options={contactOptions}
            id="contact"
            name="contact"
            type={'text'}
            placeholder="Currency"
            value={formik.values.contact}
            onChange={(value) => formik.setFieldValue('contact', value.value)}
            onBlur={formik.handleBlur}
          />
        </DonationLabel>
        <DonationLabel>
          <p className="donation-label">Gift Type</p>
          <SelectDropDown
            options={giftOption}
            className="donation-dropdown"
            id="giftType"
            name="giftType"
            type={'text'}
            placeholder="Currency"
            value={formik.values.giftType}
            onChange={(value) => formik.setFieldValue('giftType', value.value)}
            onBlur={formik.handleBlur}
          />
        </DonationLabel>
        <div className="donation-text">
          <span>
            <Checkbox pink />
          </span>
          <p>Was the transaction converted from a different currency?</p>
        </div>
        <DonationLabel>
          <p className="donation-label">Payment Method</p>
          <SelectDropDown
            className="donation-dropdown"
            options={paymentOptions}
            id="paymentMethod"
            name="paymentMethod"
            type={'text'}
            placeholder="Currency"
            value={formik.values.paymentMethod}
            onChange={(value) => formik.setFieldValue('paymentMethod', value.value)}
            onBlur={formik.handleBlur}
          />
        </DonationLabel>
        {formik.values.paymentMethod === 'Cheque' && <ChequeInfo />}
        {formik.values.paymentMethod === 'Online_Stripe' && <StripeInfo />}
        <DonationLabel>
          <p className="donation-label">Total Amount of Gift</p>
          <Input
            className="donation-input"
            id="totalAmount"
            name="totalAmount"
            type={'text'}
            placeholder="$"
            value={formik.values.totalAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </DonationLabel>

        <div className="billing">
          <DonationLabel>
            <p className="donation-label">Billing Interval</p>
            <div className="billing">
              <Input
                className="billing-input"
                id="billInterval"
                name="billInterval"
                type={'text'}
                value={formik.values.billInterval}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </DonationLabel>
          <DonationLabel>
            <p className="donation-label">Billing Cycle Every</p>
            <SelectDropDown
              options={billOption}
              className="billing-dropdown"
              id="bill"
              name="bill"
              type={'text'}
              placeholder="Interval"
              value={formik.values.bill}
              onChange={(value) => formik.setFieldValue('bill', value.value)}
              onBlur={formik.handleBlur}
            />
          </DonationLabel>
        </div>
        <DonationLabel>
          <p className="donation-label">Recept Setting</p>
          <SelectDropDown
            className="donation-dropdown"
            id="reciept"
            options={recieptOptions}
            name="reciept"
            type={'text'}
            placeholder="Reciept"
            value={formik.values.reciept}
            onChange={(value) => formik.setFieldValue('reciept', value.value)}
            onBlur={formik.handleBlur}
          />
        </DonationLabel>

        <div className="donation-footer">
          <Button invert auth className="donation-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="button" auth className="donation-save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </div>
      </Card>
    </InformationWrapper>
  );
}

export default RecurringInformation;

const InformationWrapper = styled.form`
  .donation-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    .billing {
      display: flex;
      gap: 3rem;
    }
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
  .donation-text {
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

      background-color: transparent;
      border: 1px solid ${COLORS['moore-grey']};
    }

    &-dropdown {
      max-width: 16.9rem;

      border-radius: 0.5rem;
    }
  }
`;

// const DonationInput = styled.div`
//   .donation-label {
//     margin-bottom: 0.8rem;
//     font-size: ${FONTSIZES.small};
//     font-weight: ${FONTWEIGHTS.normal};
//     color: ${COLORS['grey-500']};
//   }
//   .donation-input {
//     width: 60.2rem;
//     height: 6.4rem;
//     border: 1px solid ${COLORS['moore-grey']};
//     border-radius: 0.5rem;
//     margin-bottom: 2.4rem;
//     background-color: transparent;
//   }
// `;
