import Button from 'components/atoms/Button/Button';
import DropdownComponent from 'components/atoms/Dropdown';
import Input from 'components/atoms/Input/Input';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  dateDate,
  monthData,
  subcription,
  yearsData,
} from 'utilities/modalData';
import { createContactStepOneValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  DateContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper,
} from './styles';

function CreateContactStepOne({ onClose, next, formData }) {
  const [selected, setSelected] = useState('select');
  const [selectDate, setSelectDate] = useState('Date');
  const [selectMonth, setSelectMonth] = useState('Month');
  const [selectYear, setSelectYear] = useState('Year');

  const formik = useFormik({
    initialValues: formData,
    validationSchema: createContactStepOneValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      next(values);
    },
  });

  // console.log(formik.errors);

  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
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
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}
          <FormLabel>EMAIL SUBSCRIPTION STATUS</FormLabel>
          {/* <select
            name="subcription"
            id="subcription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailSubcription}
          >
            <option value="">select</option>
            {subcription.map((item, index) => (
              <option value="" id={index}>
                {item.name}
              </option>
            ))}
          </select> */}
          {/* {formik.touched.emailSubcription && formik.errors.emailSubcription ? (
            <ErrorMsg>{formik.errors.emailSubcription}</ErrorMsg>
          ) : null} */}
          <DropdownComponent
            className="email-dropdown"
            id="emailSubcription"
            name="emailSubcription"
            selected={selected}
            setSelected={setSelected}
            data={subcription}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.emailSubcription}
          />
          {/* {formik.touched.emailSubcription && formik.errors.emailSubcription ? (
            <ErrorMsg>{formik.errors.emailSubcription}</ErrorMsg>
          ) : null} */}
          <FormLabel>BIRTH DATE</FormLabel>
          <DateContainer>
            <div>
              <DropdownComponent
                className="date-dropdown"
                id="date"
                name="date"
                selected={selectDate}
                setSelected={setSelectDate}
                data={dateDate}
                // onChange={(e) => setSelectDate(e.target.value)}
                // onBlur={formik.handleBlur}
                // value={formik.values.date}
              />
              {/* {formik.touched.date && formik.errors.date ? (
                <ErrorMsg>{formik.errors.date}</ErrorMsg>
              ) : null} */}
            </div>
            <div>
              <DropdownComponent
                className="date-dropdown"
                id="month"
                name="month"
                selected={selectMonth}
                setSelected={setSelectMonth}
                data={monthData}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.month}
              />
              {/* {formik.touched.month && formik.errors.month ? (
                <ErrorMsg>{formik.errors.month}</ErrorMsg>
              ) : null} */}
            </div>
            <div>
              <DropdownComponent
                className="date-dropdown"
                id="year"
                name="year"
                selected={selectYear}
                setSelected={setSelectYear}
                data={yearsData}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.year}
              />
              {/* {formik.touched.year && formik.errors.year ? (
                <ErrorMsg>{formik.errors.year}</ErrorMsg>
              ) : null} */}
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
            <Button
              className="cancel"
              type="button"
              onClick={onClose}
              auth
              invert
            >
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
