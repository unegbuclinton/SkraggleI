import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonationAmountFormOnce() {
  const designation = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  return (
    <DonationAmountFormWrapper>
      <DonationAmountFormCard>
        <label>Default one time donation amount</label>
        <Input
          className="modal-input"
          type="text"
          id="pledge_name"
          name="pledge_name"
          placeholder="$ 60.00"
          autoWidth
        />
        <label>Suggested donation amount presets</label>
        <div className="row">
          <Input
            containerClass="input-container"
            className="modal-input__suggested"
            type="text"
            id="pledge_name"
            name="pledge_name"
            placeholder="$ 60.00"
          />
          <Input
            containerClass="input-container"
            className="modal-input__suggested"
            type="text"
            id="pledge_name"
            name="pledge_name"
            placeholder="$ 60.00"
          />
        </div>
        <div className="row">
          <Input
            containerClass="input-container"
            className="modal-input__suggested"
            type="text"
            id="pledge_name"
            name="pledge_name"
            placeholder="$ 60.00"
          />
          <Input
            containerClass="input-container"
            className="modal-input__suggested"
            type="text"
            id="pledge_name"
            name="pledge_name"
            placeholder="$ 60.00"
          />
        </div>
        <div className="button-wrapper">
          <Button className="generate-ai">Generate by Ai</Button>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Designate a donation to a cause from</h1>
            <p className="transaction-text">Choose from List</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <SelectDropDown
          placeholder={'Designation List'}
          className="designation-dropdown"
          id="designation"
          name="designation"
          type={'text'}
          options={designation}
        />
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Enable Comment</h1>
            <p className="transaction-text">Allow your donors to add a personal note</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Enable Tribute</h1>
            <p className="transaction-text">
              Allow your donors to make a donation in honor or in memory of someone special.
            </p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
      </DonationAmountFormCard>
    </DonationAmountFormWrapper>
  );
}

export default DonationAmountFormOnce;

export const DonationAmountFormWrapper = styled.form``;

export const DonationAmountFormCard = styled(Card)`
  /* padding: 4rem 4.4rem 2.4rem 4.4rem; */
  padding-top: 3.269rem;

  .transaction-header {
    color: ${COLORS.deepPurple};
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    margin-bottom: 0.8rem;
  }
  .transaction-text {
    color: ${COLORS['grey-400']};
    font-size: ${FONTSIZES.xsmall};
    margin-bottom: 2.55rem;
  }

  .designation-dropdown {
    width: 100%;
  }
  .modal-input {
    margin-top: 0.72rem;
    margin-bottom: 2.384rem;
    background-color: transparent;
    border: 1px solid #9a9aa9;
    border-radius: 5px;
    color: ${COLORS.black};
    &__suggested {
      margin-top: 0.72rem;
      margin-bottom: 1.6rem;
      background-color: transparent;
      border: 1px solid #9a9aa9;
      border-radius: 5px;
      color: ${COLORS.black};
      /* max-width: 21.3rem; */
      width: 100%;
    }
  }

  label {
    font-size: ${FONTSIZES.small};
    color: #626262;
  }
  .row {
    display: flex;
    gap: 1.6rem;
    .input-container {
      /* max-width: 21.3rem; */
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .generate-ai {
    width: 14.4rem;
    height: 4.8rem;
    background: ${COLORS['blue-black']};
    border-radius: 0.5rem;
  }
  .underline {
    border: 1px solid #e6eff1;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
  .designate-donation {
    display: flex;
    /* align-items: center; */
  }
  .switch {
    display: flex;
    justify-content: right;
    flex: 1;
  }
`;
