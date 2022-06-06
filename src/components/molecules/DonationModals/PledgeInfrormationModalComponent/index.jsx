import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
// import DropdownComponent from 'components/atoms/Dropdown';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { useFormik } from 'formik';
import { DPIconDelete, DPIconUploadFile } from 'icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import data from 'utilities/filterData';
import { CreatePledgeSchema } from 'validation/Schema';
import { ButtonsContainer, InstallmentWrapper, ModalWrapper } from './styles';

const PledgeInfoModalComponent = ({ onClose }) => {
  // console.log({ ...rest });

  const [installment, setInstallment] = useState(['']);
  const [amount, setAmount] = useState('');

  const handleChange = (e, index) => {
    const list = [...installment];
    list[index] = e.target.value;
    setInstallment(list);
    formik.setFieldValue('expected_date', [...formik.values.expected_date, list]);
  };
  console.log(installment);

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
    // setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const { contactData } = useSelector((state) => state.contact);
  const contactOptions = contactData.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const formik = useFormik({
    initialValues: {
      contact_id: '',
      pledge_name: '',
      value_donation: '',
      pledge_type: '',
      start_date: '',
      end_date: '',
      attachment: '',
      expected_date: [],
      amount: '',
      interval: '',
      campaign_id: '',
      impact_area: '',
      soft_credit: '',
      source: '',
      keywords: '',
      dedication: '',
      notes: ''
    },
    validationSchema: CreatePledgeSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const body = {
        contact_id: values.contact_id,
        campaign_id: values.campaign_id,
        name: values.pledge_name,
        amount: values.value_donation,
        // amount_currency: va,
        start_date: values.start_date,
        end_date: values.end_date,
        type: values.pledge_type,
        attachments: values.attachment,
        payment_interval: values.interval,
        impact_area: values.impact_area,
        source: values.source,
        keywords: values.keywords,
        dedication: values.dedication,
        notes: values.notes
        // installments: values.,
      };
      console.log(body);
    }
  });

  const pledgeType = [
    { value: 'Donation', label: 'Donation' },
    { value: 'Active', label: 'Active' }
  ];

  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <h1>Contact</h1>
        <SelectDropDown
          className="add-household__dropdown"
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
                  type="text"
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
            id="interval"
            name="interval"
            type={'text'}
            options={contactOptions}
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
          <Button type="submit" className="save-btn">
            Next
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default PledgeInfoModalComponent;
