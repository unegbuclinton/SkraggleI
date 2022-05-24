import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import { createHouseHold, getAllCompanies } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createCompanyValidatonSchema } from 'validation/Schema';
import {
  ButtonContainer,
  CheckBoxWrapper,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper,
  TagContainer,
  TagWrapper
} from './styles';

function CreateCompany({ onClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      companyName: '',
      primaryPhone: '',
      tags: ''
      // tag: ''
    },
    validationSchema: createCompanyValidatonSchema,
    onSubmit: (values) => {
      const body = {
        company_name: values.companyName,
        primary_phone: values.primaryPhone,
        tags: values.tags
        // tag: values.tag
      };
      dispatch(createHouseHold(body)).then(() => {
        onClose();
        toast.success('new company created successfully');
        dispatch(getAllCompanies());
      });
    }
  });

  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}>
          <FormLabel>COMPANY NAME</FormLabel>
          <Input
            className="input-field"
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <ErrorMsg>{formik.errors.companyName}</ErrorMsg>
          ) : null}
          <FormLabel>PRIMARY PHONE</FormLabel>
          <Input
            className="input-field"
            id="primaryPhone"
            name="primaryPhone"
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
            id="tags"
            name="tags"
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
            <Button type="submit" className="continue">
              Save
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateCompany;
