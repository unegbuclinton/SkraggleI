import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { createHouseHold } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { houseHoldValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function CraeteNewHouseHold({ onClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: houseHoldValidationSchema,
    onSubmit: (values) => {
      const body = { name: values.name };
      dispatch(createHouseHold(body)).then(() => onClose());
    }
  });
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>NAME</FormLabel>
          <Input
            className="input-field"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMsg>{formik.errors.name}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
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

export default CraeteNewHouseHold;
