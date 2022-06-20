import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import { useSelector } from 'react-redux';
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
  const { companies } = useSelector((state) => state.contact);
  const emailSub = [
    { value: 'Opted In', label: 'Opted In' },
    { value: 'Opted Out', label: 'Opted Out' },
    { value: 'Unknown', label: 'Unknown' }
  ];

  const generateArrayOfDate = () => {
    var days = [];
    for (var i = 1; i <= 31; i++) {
      days.push({ value: i, label: i });
    }

    return days;
  };

  const generateArrayOfYears = () => {
    var max = new Date().getFullYear();
    var min = max - 22;
    var years = [];
    for (var i = max; i >= min; i--) {
      years.push({ value: i, label: i });
    }

    return years;
  };

  const generateArrayOfMonths = () => {
    const monthss = [...Array(12).keys()].map((key) =>
      new Date(0, key).toLocaleString('en', { month: 'long' })
    );

    var month = [];
    for (var i = 0; i <= 11; i++) {
      month.push({ value: monthss[i], label: monthss[i] });
    }

    return month;
  };

  var years = generateArrayOfYears();
  var months = generateArrayOfMonths();
  var date = generateArrayOfDate();
  console.log(date);

  const companyOption = companies?.map((current) => ({ value: current?.id, label: current?.name }));
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
                options={date}
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
                options={months}
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
                options={years}
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
          <SelectDropDown
            className="date-dropdown"
            placeholder={'Company'}
            isSearchable={false}
            id="company"
            name="company"
            type={'text'}
            options={companyOption}
            value={formik.values.company}
            onChange={(value) => formik.setFieldValue('company', value.value)}
            onBlur={formik.handleBlur}
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
