import React from 'react';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import {
  ButtonContainer,
  CheckBoxWrapper,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper,
  TagContainer,
  TagWrapper,
  ErrorMsg
} from './styles';
import Switch from 'components/atoms/Switch/Switch';
import { createCompanyValidatonSchema } from 'validation/Schema';
import { useFormik } from 'formik';

function CreateCompany({ onClose }) {
  const formik = useFormik({
    initialValues: {
      companyName: '',
      primaryPhone: '',
      tags: ''
    },
    validationSchema: createCompanyValidatonSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>COMPANY NAME</FormLabel>
          <Input
            className="input-field"
            type="text"
            id="company name"
            name="company name"
            placeholder="Company Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <ErrorMsg>{formik.errors.companyName}</ErrorMsg>
          ) : null}
          <FormLabel>PRIMANRY PHONE</FormLabel>
          <Input
            className="input-field"
            id="primary phone"
            name="primary phone"
            type="number"
            placeholder="Primary Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.primaryPhone}
          />
          {formik.touched.primaryPhone && formik.errors.primaryPhone ? (
            <ErrorMsg>{formik.errors.primaryPhone}</ErrorMsg>
          ) : null}
          <FormLabel>TAGS</FormLabel>
          <Input
            className="input-field"
            id="tag"
            name="tag"
            type="text"
            placeholder="Tags"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tags}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <ErrorMsg>{formik.errors.tags}</ErrorMsg>
          ) : null}
          <TagContainer>
            <TagWrapper>
              <h2 className="title">Auto Tag</h2>
              <p className="info">Auto Tag Contacts who fill this form</p>
            </TagWrapper>
            <CheckBoxWrapper>
              <Switch />
            </CheckBoxWrapper>
          </TagContainer>
          <ButtonContainer>
            <Button type="button" className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button className="continue">Save</Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateCompany;
