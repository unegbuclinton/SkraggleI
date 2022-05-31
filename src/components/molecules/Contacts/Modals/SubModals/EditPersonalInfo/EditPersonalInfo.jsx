import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { CatchError } from 'components/molecules/Registration/styles';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContactProfileSchema } from 'validation/Schema';
import { EditPersonalInfoForm, EditPersonalInfoRow, EditPersonalLabel } from './styles';

function EditPersonalInfo({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const contactId = eachContact.id;
  const dispatch = useDispatch();
  const titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' }
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  const formik = useFormik({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      preferredName: '',
      gender: '',
      phone: '',
      dob: '',
      suffix: '',
      email: '',
      street: '',
      state: '',
      unit: '',
      city: '',
      postal: '',
      country: ''
    },
    validationSchema: editContactProfileSchema,
    onSubmit: (values) => {
      const body = {
        title: values.title,
        first_name: values.firstName,
        last_name: values.lastName,
        preferred_name: values.preferredName,
        gender: values.gender,
        primary_phone: values.phone,
        birth_date: values.dob,
        suffix: values.suffix,
        primary_email: values.email,
        address: values.street,
        state: values.state,
        unit: values.unit,
        city: values.city,
        postal: values.postal,
        country: values.country
      };
      dispatch(updateContact({ body: body, id: contactId }));
      onClose();
    }
  });

  return (
    <EditPersonalInfoForm onSubmit={formik.handleSubmit}>
      <Card className="personal-info__card">
        <EditPersonalInfoRow>
          <div>
            <EditPersonalLabel>Title</EditPersonalLabel>
            <SelectDropDown
              className="edit-personalinfo__dropdown"
              id="title"
              type={'text'}
              options={titleOptions}
              value={formik.values.title}
              onChange={(value) => formik.setFieldValue('title', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <EditPersonalLabel>First Name</EditPersonalLabel>
            <Input
              placeholder="Enter First Name"
              className="personal-label__input"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <CatchError>{formik.errors.firstName}</CatchError>
            ) : null}
          </div>
          <div>
            <EditPersonalLabel>Last Name</EditPersonalLabel>
            <Input
              placeholder="Enter Last Name"
              className="personal-label__input"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <CatchError>{formik.errors.lastName}</CatchError>
            ) : null}
          </div>
        </EditPersonalInfoRow>
        <EditPersonalInfoRow>
          <div>
            <EditPersonalLabel>Suffix</EditPersonalLabel>
            <SelectDropDown
              className="edit-personalinfo__dropdown"
              id="title"
              type={'text'}
              options={titleOptions}
              value={formik.values.suffix}
              onChange={(value) => formik.setFieldValue('suffix', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <EditPersonalLabel>Preferred Name</EditPersonalLabel>
            <Input
              placeholder="Enter Preferred Name"
              className="personal-label__input"
              id="preferredName"
              name="preferredName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.preferredName}
            />
            {formik.touched.preferredName && formik.errors.preferredName ? (
              <CatchError>{formik.errors.preferredName}</CatchError>
            ) : null}
          </div>
          <div>
            <EditPersonalLabel>Gender</EditPersonalLabel>
            <SelectDropDown
              id="title"
              className="gender-dropdown"
              type={'text'}
              options={genderOptions}
              value={formik.values.gender}
              onChange={(value) => formik.setFieldValue('gender', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
        </EditPersonalInfoRow>
        <Input
          placeholder="Select date"
          type="date"
          className="dob-input"
          id="dob"
          name="dob"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dob}
        />
        {formik.touched.dob && formik.errors.dob ? (
          <CatchError>{formik.errors.dob}</CatchError>
        ) : null}
        <EditPersonalInfoRow>
          <div>
            <EditPersonalLabel>Email</EditPersonalLabel>
            <Input
              placeholder="Enter  Email"
              className="edit__input"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <CatchError>{formik.errors.email}</CatchError>
            ) : null}
          </div>
          <div>
            <EditPersonalLabel>Phone</EditPersonalLabel>
            <Input
              placeholder="Enter Phone"
              className="edit__input"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <CatchError>{formik.errors.phone}</CatchError>
            ) : null}
          </div>
        </EditPersonalInfoRow>
        <EditPersonalLabel>Address</EditPersonalLabel>
        <EditPersonalInfoRow>
          <div>
            <Input
              placeholder="Street"
              className="edit__input"
              id="street"
              name="street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
            {formik.touched.street && formik.errors.street ? (
              <CatchError>{formik.errors.street}</CatchError>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Unit"
              className="edit__input"
              id="unit"
              name="unit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unit}
            />
            {formik.touched.unit && formik.errors.unit ? (
              <CatchError>{formik.errors.unit}</CatchError>
            ) : null}
          </div>
        </EditPersonalInfoRow>
        <EditPersonalInfoRow>
          <div>
            <Input
              placeholder="City"
              className="edit__input"
              id="city"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <CatchError>{formik.errors.city}</CatchError>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="State/Province"
              className="edit__input"
              id="state"
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <CatchError>{formik.errors.state}</CatchError>
            ) : null}
          </div>
        </EditPersonalInfoRow>
        <EditPersonalInfoRow>
          <div>
            <Input
              type="number"
              placeholder="Postal/Zip"
              className="edit__input"
              id="postal"
              name="postal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postal}
            />
            {formik.touched.postal && formik.errors.postal ? (
              <CatchError>{formik.errors.postal}</CatchError>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Country"
              className="edit__input"
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />{' '}
            {formik.touched.country && formik.errors.country ? (
              <CatchError>{formik.errors.country}</CatchError>
            ) : null}
          </div>
        </EditPersonalInfoRow>
        <div className="edit-profile__footer">
          <Button invert auth className="edit-profile__cancel-btn" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" auth className="edit-profile__save-btn">
            Save
          </Button>
        </div>
      </Card>
    </EditPersonalInfoForm>
  );
}

export default EditPersonalInfo;
