import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function GeneralSettingsForm({ IncrementTab }) {
  const { campaigns } = useSelector((state) => state?.campaign);
  const { formsByID } = useSelector((state) => state?.forms);
  const { name } = formsByID;

  const campaignoptions = campaigns?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  const formik = useFormik({
    initialValues: {
      formName: name,
      campaign: ''
    }
  });

  useEffect(() => {
    formik.setFieldValue('formName', name);
  }, [name]);

  return (
    <GeneralSettingsFormWrapper onSubmit={formik.handleSubmit}>
      <GeneralSettingsFormCard>
        <label>Form Name</label>
        <Input
          className="modal-input"
          type="text"
          id="formName"
          name="formName"
          placeholder="Lorem Ipsum"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.formName}
          defaultValue={name}
        />
        <label>Campaign</label>
        <SelectDropDown
          className="campaign-dropdown"
          placeholder={'Select a Campaign'}
          id="campaign"
          name="campaign"
          type={'text'}
          options={campaignoptions}
          value={formik.values.campaign}
          onChange={(value) => formik.setFieldValue('campaign', value.value)}
          onBlur={formik.handleBlur}
        />
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Auto Tag</h1>
            <p className="transaction-text">Auto Tag Contacts who fill this form</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Donor Accounts</h1>
            <p className="transaction-text">Create accounts for donors</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Offline Payment</h1>
            <p className="transaction-text">Include Offline Payment</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Donor Accounts</h1>
            <p className="transaction-text">Create accounts for donors</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <div className="underline"></div>
        <div className="designate-donation">
          <div>
            <h1 className="transaction-header">Events</h1>
            <p className="transaction-text">Show Events link on first page of embedded form</p>
          </div>
          <div className="switch">
            <Switch />
          </div>
        </div>
        <ButtonsWrapper>
          <Button className="next-button" onClick={IncrementTab} type="button">
            Next
          </Button>
        </ButtonsWrapper>
      </GeneralSettingsFormCard>
    </GeneralSettingsFormWrapper>
  );
}

export default GeneralSettingsForm;

export const GeneralSettingsFormWrapper = styled.form`
  width: 100%;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex: 0.65;
`;

export const GeneralSettingsFormCard = styled(Card)`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 4rem 4.4rem 2.4rem 4.4rem;

  .modal-input {
    margin-top: 0.72rem;
    margin-bottom: 2.384rem;
    background-color: transparent;
    border: 1px solid #9a9aa9;
    border-radius: 5px;
    width: 100%;
    color: ${COLORS.black};
  }

  label {
    font-size: ${FONTSIZES.small};
    color: #626262;
  }
  .campaign-dropdown {
    margin-top: 0.816rem;
    width: 100%;
  }
  .underline {
    border: 1px solid #e6eff1;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
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

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: right;
  margin-top: 6.4rem;
  margin-bottom: 2.4rem;

  .back-button {
    width: 10.7rem;
    height: 5.1rem;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.340356rem;
    color: ${COLORS['gray-500']};
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.xbold};
  }
  .next-button {
    width: 20.5rem;
    height: 5.1rem;
    background: ${COLORS.pink};
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.base};
    border-radius: 0.340356rem;
    color: ${COLORS.white};
  }
`;
