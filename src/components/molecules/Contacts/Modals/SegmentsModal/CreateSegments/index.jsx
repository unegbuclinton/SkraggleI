import React from 'react';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { useFormik } from 'formik';
import { segmentValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function CreateNewSegment({ onClose }) {
  const formik = useFormik({
    initialValues: {
      segment: ''
    },
    validationSchema: segmentValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>SEGMENTS</FormLabel>
          <Input
            className="input-field"
            id="segment"
            name="segment"
            type="text"
            placeholder=" Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.segment}
          />
          {formik.touched.segment && formik.errors.segment ? (
            <ErrorMsg>{formik.errors.segment}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button className="continue">Continue</Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateNewSegment;
