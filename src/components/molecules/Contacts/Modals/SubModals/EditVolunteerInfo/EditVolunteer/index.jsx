import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { volunteerValidationSchema } from 'validation/Schema';
import { ButtonContainer, ErrorMsg, Label, ModalForm, VolunteerEditWrapper } from './styles';

function VolunteerEdit({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const volunteernId = eachContact.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tShirtSize: ''
    },
    validationSchema: volunteerValidationSchema,
    onSubmit: (values) => {
      const body = {
        tShirtSize: values.tShirtSize
      };
      dispatch(updateContact({ body: body, id: volunteernId }));
      onClose();
    }
  });

  const shirtSizeOptions = [
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' }
  ];

  return (
    <VolunteerEditWrapper>
      <ModalForm onSubmit={formik.handleSubmit}>
        <Label>T- Shirt Size</Label>
        <SelectDropDown
          className="select"
          id="tShirtSize"
          name="tShirtSize"
          type={'text'}
          options={shirtSizeOptions}
          value={formik.values.tShirtSize}
          onChange={(value) => formik.setFieldValue('tShirtSize', value.value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tShirtSize && formik.errors.tShirtSize ? (
          <ErrorMsg>{formik.errors.tShirtSize}</ErrorMsg>
        ) : null}

        <ButtonContainer>
          <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className={'save-btn'}>
            Save
          </Button>
        </ButtonContainer>
      </ModalForm>
    </VolunteerEditWrapper>
  );
}

export default VolunteerEdit;
