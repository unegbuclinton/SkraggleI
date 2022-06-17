import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import {
  ButtonContainer,
  DateContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function CreateContactStepOne({ onClose, formik }) {
  const emailSub = [
    { value: true, label: 'Opted In' },
    { value: false, label: 'Opted Out' },
    { value: null, label: 'Unknown' }
  ];

  const dateOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
  ];

  const monthOptions = [
    { value: 'Jan', label: 'Jan' },
    { value: 'Feb', label: 'Feb' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' }
  ];

  const yearOptions = [
    { value: '1991', label: '1991' },
    { value: '1992', label: '1992' },
    { value: '1993', label: '1993' },
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' }
  ];

  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}>
          <FormLabel>FIRST NAME</FormLabel>
          <Input
            className="input-field"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMsg>{formik.errors.firstName}</ErrorMsg>
          ) : null}
          <FormLabel>LAST NAME</FormLabel>
          <Input
            className="input-field"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMsg>{formik.errors.lastName}</ErrorMsg>
          ) : null}
          <FormLabel>EMAIL</FormLabel>
          <Input
            className="input-field"
            id="primary_email"
            name="primary_email"
            type="primary_email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.primary_email}
          />
          {formik.touched.primary_email && formik.errors.primary_email ? (
            <ErrorMsg>{formik.errors.primary_email}</ErrorMsg>
          ) : null}
          <FormLabel>PHONE</FormLabel>
          <Input
            className="input-field"
            id="primary_phone"
            onWheel={() => document.activeElement.blur()}
            name="primary_phone"
            type="number"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.primary_phone}
          />
          {formik.touched.primary_phone && formik.errors.primary_phone ? (
            <ErrorMsg>{formik.errors.primary_phone}</ErrorMsg>
          ) : null}
          <FormLabel>EMAIL SUBSCRIPTION STATUS</FormLabel>
          <SelectDropDown
            className="email-dropdown"
            placeholder={'Lorem Ipsum'}
            id="emailSubscription"
            name="emailSubscription"
            type={'text'}
            options={emailSub}
            value={formik.values.emailSubscription}
            onChange={(value) => formik.setFieldValue('emailSubscription', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailSubscription && formik.errors.emailSubscription ? (
            <ErrorMsg>{formik.errors.emailSubscription}</ErrorMsg>
          ) : null}
          <FormLabel>BIRTH DATE</FormLabel>
          <DateContainer>
            <div>
              <SelectDropDown
                className="date-dropdown"
                placeholder={'Date'}
                isSearchable={false}
                id="date"
                name="date"
                type={'text'}
                options={dateOptions}
                value={formik.values.date}
                onChange={(value) => formik.setFieldValue('date', value.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date && formik.errors.date ? (
                <ErrorMsg>{formik.errors.date}</ErrorMsg>
              ) : null}
            </div>
            <div>
              <SelectDropDown
                className="date-dropdown"
                placeholder={'Month'}
                isSearchable={false}
                id="month"
                name="month"
                type={'text'}
                options={monthOptions}
                value={formik.values.month}
                onChange={(value) => formik.setFieldValue('month', value.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.month && formik.errors.month ? (
                <ErrorMsg>{formik.errors.month}</ErrorMsg>
              ) : null}
            </div>
            <div>
              <SelectDropDown
                className="date-dropdown"
                placeholder={'Year'}
                isSearchable={false}
                id="year"
                name="year"
                type={'text'}
                options={yearOptions}
                value={formik.values.year}
                onChange={(value) => formik.setFieldValue('year', value.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.year && formik.errors.year ? (
                <ErrorMsg>{formik.errors.year}</ErrorMsg>
              ) : null}
            </div>
          </DateContainer>
          <FormLabel>COMPANY</FormLabel>
          <Input
            className="input-field"
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
          />
          {formik.touched.company && formik.errors.company ? (
            <ErrorMsg>{formik.errors.company}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" type="button" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button type="submit" className="continue">
              Continue
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateContactStepOne;
