import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { createTags, viewTags } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { tagValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function CreateTags({ onClose }) {
  const { isLoading } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tag: ''
    },
    validationSchema: tagValidationSchema,
    onSubmit: (values) => {
      const body = { name: values.tag };
      dispatch(createTags(body)).then((data) => {
        if (data.payload === undefined) {
          onClose();
        } else {
          onClose();
          toast.success('Tag added Successfully');
          dispatch(viewTags());
        }
      });
    }
  });
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>TAGS</FormLabel>
          <Input
            className="input-field"
            type="text"
            id="tag"
            name="tag"
            placeholder="Tag"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tag}
          />
          {formik.touched.tag && formik.errors.tag ? (
            <ErrorMsg>{formik.errors.tag}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button type="submit" className="continue" disabled={isLoading}>
              Continue
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateTags;
