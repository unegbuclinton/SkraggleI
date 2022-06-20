import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { createVolunteer, getAllVolunteer } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { VolunteerValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  VolunteerForm,
  VolunteerLabel,
  VolunteerWrapper
} from './styles';

function CreateVolunteerModal({ onClose }) {
  const dispatch = useDispatch();
  const { eachContact } = useSelector((state) => state.contact);
  const volunteerId = eachContact.id;
  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '',
      endDate: '',
      fee: ''
    },
    validationSchema: VolunteerValidationSchema,
    onSubmit: (values) => {
      const body = {
        name: values.name,
        start_at: values.startDate,
        end_at: values.endDate,
        contact_id: volunteerId,
        fee: values.fee
      };
      dispatch(createVolunteer(body)).then(() => {
        onClose();
        toast.success('Volunteer created successfully');
        dispatch(getAllVolunteer());
      });
    }
  });
  return (
    <VolunteerWrapper>
      <VolunteerForm onSubmit={formik.handleSubmit}>
        <VolunteerLabel>Activity Name</VolunteerLabel>
        <Input
          className="input-field"
          type="text"
          id="name"
          name="name"
          placeholder="Activity Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMsg>{formik.errors.name}</ErrorMsg>
        ) : null}
        <VolunteerLabel>Start Date</VolunteerLabel>
        <Input
          className="input-field"
          type="date"
          id="startDate"
          name="startDate"
          placeholder="Start Date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startDate}
        />
        {formik.touched.startDate && formik.errors.startDate ? (
          <ErrorMsg>{formik.errors.startDate}</ErrorMsg>
        ) : null}
        <VolunteerLabel>Expiration date</VolunteerLabel>
        <Input
          className="input-field"
          type="date"
          id="endDate"
          name="endDate"
          placeholder="End Date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endDate}
        />
        {formik.touched.endDate && formik.errors.endDate ? (
          <ErrorMsg>{formik.errors.endDate}</ErrorMsg>
        ) : null}
        <VolunteerLabel>Fee</VolunteerLabel>
        <div className="money-input">
          $
          <Input
            className="money-input__figure"
            onWheel={() => document.activeElement.blur()}
            type="number"
            id="fee"
            name="fee"
            placeholder="Fee"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fee}
          />
        </div>
        <div className="error">
          {formik.touched.fee && formik.errors.fee ? (
            <ErrorMsg>{formik.errors.fee}</ErrorMsg>
          ) : null}
        </div>
        <VolunteerLabel>Status</VolunteerLabel>
        <Input
          className="input-field"
          type="text"
          id="status"
          name="status"
          placeholder="Status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
        />
        {formik.touched.status && formik.errors.status ? (
          <ErrorMsg>{formik.errors.status}</ErrorMsg>
        ) : null}
        <ButtonContainer>
          <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </ButtonContainer>
      </VolunteerForm>
    </VolunteerWrapper>
  );
}

export default CreateVolunteerModal;
