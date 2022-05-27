import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { allHouseHold, createHouseHold } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { houseHoldValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function CreateteNewHouseHold({ onClose }) {
  const { isLoading } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: houseHoldValidationSchema,
    onSubmit: (values) => {
      const body = { name: values.name };
      dispatch(createHouseHold(body)).then(() => {
        onClose();
        toast.success('Successfully Created a new HouseHold');
        dispatch(allHouseHold());
      });
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

            <Button loading={isLoading} type="submit" className="continue">
              Continue
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateteNewHouseHold;
