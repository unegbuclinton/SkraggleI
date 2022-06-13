import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import React from 'react';
import {
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  InputWrapper,
  SectionWrapper,
  SwitchLabel,
  SwitchWrapper
} from './styles';

function RegistrationReceipt({ formik, ErrorMsg }) {
  const shirtSizeOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div>
      <DetailsSubHeading className="notification-heading">
        Event registration receipt
      </DetailsSubHeading>
      <SectionWrapper>
        <DetailLabel>Choose a receipt</DetailLabel>
        <SelectDropDown
          className="event-registration-dropdown"
          id="receipt"
          name="receipt"
          onBlur={formik.handleBlur}
          options={shirtSizeOptions}
          value={formik.values.receipt}
          onChange={(value) => formik.setFieldValue('receipt', value.value)}
        />
        {formik.touched.receipt && formik.errors.receipt ? (
          <ErrorMsg>{formik.errors.receipt}</ErrorMsg>
        ) : null}
        <DetailsText className="receipt-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan, massa ac
          adipiscing enim bibendum interdum dictum nunc. Sit nisl etiam.
        </DetailsText>
        <InputWrapper>
          <div>
            <DetailLabel>Receipt title</DetailLabel>
            <Input
              className="event-registration-input"
              type="text"
              id="receiptTitle"
              name="receiptTitle"
              placeholder="Event registration"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.receiptTitle}
            />
            <div className="error-container">
              {formik.touched.receiptTitle && formik.errors.receiptTitle ? (
                <ErrorMsg>{formik.errors.receiptTitle}</ErrorMsg>
              ) : null}
            </div>
          </div>
          <div>
            <DetailLabel>Category</DetailLabel>
            <Input
              className="event-registration-input"
              type="text"
              placeholder="Events"
              id="category"
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.category}
            />
            <div className="error-container">
              {formik.touched.category && formik.errors.category ? (
                <ErrorMsg>{formik.errors.category}</ErrorMsg>
              ) : null}
            </div>
          </div>
        </InputWrapper>
        <InputWrapper>
          <div className="category-input">
            <DetailLabel>Receipt description</DetailLabel>
            <Input
              className="event-description-input"
              id="receiptDescription"
              name="receiptDescription"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.receiptDescription}
            />
            <div className="error-container">
              {formik.touched.receiptDescription && formik.errors.receiptDescription ? (
                <ErrorMsg>{formik.errors.receiptDescription}</ErrorMsg>
              ) : null}
            </div>
          </div>
        </InputWrapper>
        <InputWrapper>
          <div className="form-input">
            <DetailLabel>Form name</DetailLabel>
            <Input
              className="event-registration-input"
              id="formName"
              name="formName"
              type="text"
              placeholder="Big Gorilla Apps"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.formName}
            />
            <div className="error-container">
              {formik.touched.formName && formik.errors.formName ? (
                <ErrorMsg>{formik.errors.formName}</ErrorMsg>
              ) : null}
            </div>
          </div>

          <div className="address-input">
            <DetailLabel>Reply to email address</DetailLabel>
            <Input
              className="event-registration-input"
              id="emailReply"
              name="emailReply"
              type="Events"
              placeholder="johndoe@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailReply}
            />
            <div className="error-container">
              {formik.touched.emailReply && formik.errors.emailReply ? (
                <ErrorMsg>{formik.errors.emailReply}</ErrorMsg>
              ) : null}
            </div>
          </div>
        </InputWrapper>

        <InputWrapper>
          <div className="category-input">
            <DetailLabel>Subject</DetailLabel>
            <Input
              className="event-description-input"
              type="Events"
              id="subject"
              name="subject"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            <div className="error-container">
              {formik.touched.subject && formik.errors.subject ? (
                <ErrorMsg>{formik.errors.subject}</ErrorMsg>
              ) : null}
            </div>
          </div>
        </InputWrapper>
        <SwitchWrapper>
          <SwitchLabel>Including additional recipients</SwitchLabel>
          <Switch />
        </SwitchWrapper>
      </SectionWrapper>
    </div>
  );
}

export default RegistrationReceipt;
