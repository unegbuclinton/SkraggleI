import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import RadioGroup from 'components/atoms/RadioGroup';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function CompleteTransaction({ DecrementTab, formik }) {
  const { isLoading } = useSelector((state) => state.donation);

  return (
    <CompleteWrapper onSubmit={formik.handleSubmit}>
      <Card className="payment-card">
        <p className="radio-label">Payment Option</p>
        <div className="detail-wrapper">
          <RadioGroup
            groupName="payment"
            radioData={[
              {
                labelText: 'Log transaction without paymnt or receipt',
                value: 'Log transaction without paymnt or receipt'
              }
            ]}
          />
        </div>

        <div className="payment-footer">
          <Button invert auth className="payment-cancel-btn" onClick={DecrementTab} type="button">
            Back
          </Button>
          <Button
            auth
            className="payment-save-btn"
            type="submit"
            disabled={(!formik.dirty && !isLoading) || (formik.dirty && isLoading)}>
            {' '}
            Save
          </Button>
        </div>
      </Card>
    </CompleteWrapper>
  );
}

export default CompleteTransaction;

const CompleteWrapper = styled.form`
  .payment-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    .radio-label {
      margin-bottom: 0.8rem;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
    }
    .input-container {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
    }
    .detail-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
    }
    .payment-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 10.8rem;

      .payment-cancel-btn {
        width: 10.7rem;
        height: 5.1rem;
      }
      .payment-save-btn {
        width: 20.5rem;
        height: 5.1rem;
      }
    }
  }
`;
