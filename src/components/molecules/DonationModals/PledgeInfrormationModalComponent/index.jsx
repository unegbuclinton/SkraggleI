import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { DPIconDelete, DPIconUploadFile } from 'icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonsContainer, InstallmentWrapper, ModalWrapper } from './styles';

const PledgeInfoModalComponent = ({ onClose, IncrementTab, formik }) => {
  console.log(formik.values);
  const [installment, setInstallment] = useState(['']);
  const [amount, setAmount] = useState('');

  const handleChange = (e, index) => {
    const list = [...installment];
    list[index] = e.target.value;
    setInstallment(list);
    formik.setFieldValue('expected_date', [...formik.values.expected_date, list]);
  };

  const handleRemove = (index) => {
    const list = [...installment];
    list.splice(index, 1);
    setInstallment(list);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setInstallment([
      ...installment,
      {
        id: installment.length,
        name: amount
      }
    ]);
    setAmount('');
  };

  const { contactData } = useSelector((state) => state.contact);
  const contactOptions = contactData?.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const pledgeType = [
    { value: 'Donation', label: 'Donation' },
    { value: 'Active', label: 'Active' }
  ];

  const currency = [
    { value: 'USD', label: 'USD' },
    { value: 'PKR', label: 'PKR' },
    { value: 'CNY', label: 'CNY' }
  ];

  const paymentInterval = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Yearly', label: 'Yearly' }
  ];

  return (
    <ModalWrapper
      onSubmit={() => {
        formik.handleSubmit;
      }}>
      <Card>
        <h1>Contact</h1>
        <SelectDropDown
          className="add-household__dropdown"
          isSearchable={false}
          id="contact_id"
          name="contact_id"
          type={'text'}
          options={contactOptions}
          value={formik.values.contact_id}
          onChange={(value) => formik.setFieldValue('contact_id', value.value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.contact_id && formik.errors.contact_id ? (
          <ErrorMessage>{formik.errors.contact_id}</ErrorMessage>
        ) : null}

        <h1>Pledge Name</h1>
        <Input
          className="pledge-modal"
          type="text"
          id="pledge_name"
          name="pledge_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pledge_name}
        />
        {formik.touched.pledge_name && formik.errors.pledge_name ? (
          <ErrorMessage>{formik.errors.pledge_name}</ErrorMessage>
        ) : null}

        <h1>Full Value of Donation</h1>
        <Input
          className="pledge-modal"
          onWheel={() => document.activeElement.blur()}
          type="number"
          id="value_donation"
          name="value_donation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.value_donation}
        />
        {formik.touched.value_donation && formik.errors.value_donation ? (
          <ErrorMessage>{formik.errors.value_donation}</ErrorMessage>
        ) : null}

        <h1>Pledge Type</h1>
        <SelectDropDown
          className="add-household__dropdown"
          isSearchable={false}
          id="pledge_type"
          name="pledge_type"
          type={'text'}
          options={pledgeType}
          value={formik.values.pledge_type}
          onChange={(value) => formik.setFieldValue('pledge_type', value.value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.pledge_type && formik.errors.pledge_type ? (
          <ErrorMessage>{formik.errors.pledge_type}</ErrorMessage>
        ) : null}

        <h1>Start Date</h1>
        <Input
          className="modal-inputs"
          type="date"
          placeholder="Enter Amount"
          id="start_date"
          name="start_date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.start_date}
        />
        {formik.touched.start_date && formik.errors.start_date ? (
          <ErrorMessage>{formik.errors.start_date}</ErrorMessage>
        ) : null}

        <h1>End Date</h1>
        <Input
          className="modal-inputs"
          type="date"
          placeholder="Enter Amount"
          id="end_date"
          name="end_date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.end_date}
        />
        {formik.touched.end_date && formik.errors.end_date ? (
          <ErrorMessage>{formik.errors.end_date}</ErrorMessage>
        ) : null}

        <h1>Attachments</h1>
        <FileUploadButton imgPreview="img-preview">
          <DPIconUploadFile />
        </FileUploadButton>

        <h1>Installments</h1>
        {installment.map((name, index) => (
          <>
            <InstallmentWrapper>
              <div className="installments">
                <Input
                  className="installments-date"
                  containerClass="input-container"
                  type="date"
                  id={name}
                  name={name}
                  placeholder="Expected Date"
                  onChange={(e) => handleChange(e, index)}
                  onBlur={formik.handleBlur}
                  // value={name}
                />
                <Input
                  className="installments-amount"
                  containerClass="input-container"
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.amount}
                />
                <SelectDropDown
                  className="amount-currency"
                  isSearchable={false}
                  id="amount_currency"
                  name="amount_currency"
                  type={'text'}
                  placeholder="Currency"
                  options={currency}
                  value={formik.values.amount_currency}
                  onChange={(value) => formik.setFieldValue('amount_currency', value.value)}
                  onBlur={formik.handleBlur}
                />
                <DPIconDelete className="icon-delete" onClick={() => handleRemove(index)} />
              </div>
            </InstallmentWrapper>
            <div className="installments-amount-wrapper">
              {formik.touched.expected_date && formik.errors.expected_date ? (
                <ErrorMessage>{formik.errors.expected_date}</ErrorMessage>
              ) : null}
              {/* {formik.touched.amount && formik.errors.amount ? (
                <ErrorMessage>{formik.errors.amount}</ErrorMessage>
              ) : null} */}
            </div>
          </>
        ))}

        <Button
          type="button"
          className="installment-btn__pink"
          onClick={(e) => {
            handleAdd(e);
          }}>
          Add Installment
        </Button>

        <h1>OR</h1>

        <h1>Payment Interval</h1>
        <div className="calculate-installment">
          <SelectDropDown
            className="dropdown-installment"
            isSearchable={false}
            id="interval"
            name="interval"
            type={'text'}
            options={paymentInterval}
            value={formik.values.interval}
            onChange={(value) => formik.setFieldValue('interval', value.value)}
            onBlur={formik.handleBlur}
          />
          <Button type="button" className="installment-btn__calculate">
            Calculate Installment
          </Button>
        </div>

        <ButtonsContainer>
          <Button onClick={onClose} className="back-btn" auth invert>
            Back
          </Button>
          <Button type="button" className="save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default PledgeInfoModalComponent;
