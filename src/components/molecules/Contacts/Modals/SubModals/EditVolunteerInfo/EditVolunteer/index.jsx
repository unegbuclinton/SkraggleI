import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { useFormik } from 'formik';
import React from 'react';
import { volunteerValidationSchema } from 'validation/Schema';
import { ButtonContainer, ErrorMsg, Label, ModalForm, VolunteerEditWrapper } from './styles';

function VolunteerEdit({ onClose }) {
  const formik = useFormik({
    initialValues: {
      tShirtSize: ''
    },
    validationSchema: volunteerValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
