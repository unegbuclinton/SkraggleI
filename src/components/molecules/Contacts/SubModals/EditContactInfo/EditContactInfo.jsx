import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import { CatchError } from 'components/molecules/Registration/styles';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { EditContactSchema } from 'validation/Schema';
import { EditContactInfoForm, EditContactInfoRow, EditContactlLabel } from './styles';

function EditContactInfo({ onCloseModal }) {
  const { eachContact } = useSelector((state) => state.contact);
  const contactInfoId = eachContact.id;

  const dispatch = useDispatch();
  const [email, setEmail] = useState([
    { placeholder: 'Home Email', id: 'homeEmail', name: 'homeEmail' },
    { placeholder: 'Work Email', id: 'workEmail', name: 'workEmail' }
  ]);

  const [phone, setPhone] = useState([
    { placeholder: 'Home Phone', id: 'homePhone', name: 'homePhone' },
    { placeholder: 'Work Phone', id: 'workPhone', name: 'workPhone' }
  ]);
  const newPhone = { placeholder: 'Other Phone', name: 'otherPhone' };

  const newEmail = { placeholder: 'Other Email', name: 'otherEmail' };

  const addEmail = () => {
    setEmail([...email, newEmail]);
  };

  const addPhone = () => {
    setPhone([...phone, newPhone]);
  };

  const {
    primary_email,
    home_email,
    work_email,
    // other_emails,
    primary_phone,
    home_phone,
    work_phone,
    // other_phones,
    address,
    home_address,
    work_address
    // other_addresses
  } = eachContact;

  const formik = useFormik({
    initialValues: {
      email: primary_email || '',
      homeEmail: home_email || '',
      phone: primary_phone || '',
      workEmail: work_email || '',
      homePhone: home_phone || '',
      workPhone: work_phone || '',
      street: address || '',
      city: '',
      unit: '',
      state: '',
      postal: '',
      country: '',
      homeStreet: home_address || '',
      homeCity: '',
      homeUnit: '',
      homeState: '',
      homePostal: '',
      homeCountry: '',
      workStreet: work_address || '',
      workCity: '',
      workUnit: '',
      workState: '',
      workPostal: '',
      workCountry: ''
    },
    // validationSchema: EditContactSchema,
    onSubmit: (values) => {
      const body = {
        primary_email: values.email,
        home_email: values.homeEmail,
        work_email: values.workEmail,
        home_phone: values.homePhone,
        work_phone: values.workPhone,
        primary_phone: values.phone,
        home_address: values.homeStreet,
        work_address: values.workStreet
      };
      dispatch(updateContact({ body: body, id: contactInfoId }));
      onCloseModal();
    }
  });
  return (
    <EditContactInfoForm onSubmit={formik.handleSubmit}>
      <Card className="contact-info__card">
        <div className="list-input">
          <EditContactlLabel>Email</EditContactlLabel>
          <Input
            autoWidth
            placeholder="Enter Email"
            className="contact-top__input"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <CatchError>{formik.errors.email}</CatchError>
          ) : null}

          <EditContactInfoRow>
            <Input
              placeholder="Home Email"
              id="homeEmail"
              name="homeEmail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="contact-edit__input"
              value={formik.values.homeEmail}
            />
            <Input
              placeholder="Work Email"
              id="workEmail"
              name="workEmail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="contact-edit__input"
              value={formik.values.workEmail}
            />
            {/* {email.map(({ placeholder, name, id, label }) => (
              <div key={Math.random()}>
                <EditContactlLabel>{label}</EditContactlLabel>
                <Input
                  placeholder={placeholder}
                  id={id}
                  name={name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="contact-edit__input"
                />
              </div>
            ))} */}
          </EditContactInfoRow>
          <div className="add-input-btn">
            <Button type="button" className="contact-edit-btn" onClick={addEmail}>
              Add Other Email
            </Button>
          </div>
        </div>

        <div className="list-input">
          <EditContactlLabel>Phone</EditContactlLabel>
          <Input
            autoWidth
            placeholder="Enter Phone"
            className="contact-top__input"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <CatchError>{formik.errors.phone}</CatchError>
          ) : null}
          <EditContactInfoRow>
            <Input
              placeholder="Home Phone"
              id="homePhone"
              name="homePhone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="contact-edit__input"
              value={formik.values.homePhone}
            />
            <Input
              placeholder="Work Phone"
              id="workPhone"
              name="workPhone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="contact-edit__input"
              value={formik.values.workPhone}
            />
            {/* {phone.map(({ placeholder, name, id, label }, index) => {
              let labelName = `${name}${index}`;
              // setDynamicName({ ...dynamicName, labelName });
              return (
                <div key={Math.random()}>
                  <EditContactlLabel>{label}</EditContactlLabel>
                  <Input
                    placeholder={placeholder}
                    id={id}
                    name={labelName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="contact-edit__input"
                  />
                </div>
              );
            })} */}
          </EditContactInfoRow>
          <div className="add-input-btn">
            <Button type="button" className="contact-edit-btn" onClick={addPhone}>
              Add Other Phone
            </Button>
          </div>
        </div>
        <EditContactlLabel>Address</EditContactlLabel>

        <EditContactInfoRow>
          <div>
            <Input
              placeholder="street"
              id="street"
              name="street"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
            {formik.touched.street && formik.errors.street ? (
              <CatchError>{formik.errors.street}</CatchError>
            ) : null}
            <Input
              placeholder="unit"
              id="unit"
              name="unit"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unit}
            />
            {formik.touched.unit && formik.errors.unit ? (
              <CatchError>{formik.errors.unit}</CatchError>
            ) : null}
            <Input
              placeholder="Postal/Zip"
              id="postal"
              name="postal"
              className="contact-edit__input"
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
              placeholder="unit"
              id="unit"
              name="unit"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unit}
            />
            {formik.touched.unit && formik.errors.unit ? (
              <CatchError>{formik.errors.unit}</CatchError>
            ) : null}
            <Input
              placeholder="State"
              id="state"
              name="state"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <CatchError>{formik.errors.state}</CatchError>
            ) : null}
            <Input
              placeholder="Country"
              id="country"
              name="country"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country ? (
              <CatchError>{formik.errors.country}</CatchError>
            ) : null}
          </div>
        </EditContactInfoRow>

        <EditContactlLabel>Home Address</EditContactlLabel>

        <EditContactInfoRow>
          <div>
            <Input
              placeholder="street"
              id="homeStreet"
              name="street"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="unit"
              id="homeUnit"
              name="homeUnit"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="Postal/Zip"
              id="homePostal"
              name="homePostal"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              placeholder="City"
              id="homeCity"
              name="homeCity"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="State"
              id="homeState"
              name="homeState"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="Country"
              id="homeCountry"
              name="homeCountry"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </EditContactInfoRow>

        <EditContactlLabel> Work Address</EditContactlLabel>

        <EditContactInfoRow>
          <div>
            <Input
              placeholder="street"
              id="workStreet"
              name="workStreet"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="unit"
              id="workUnit"
              name="workUnit"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="Postal/Zip"
              id="workPostal"
              name="workPostal"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              placeholder="unit"
              id="workUnit"
              name="WorkUnit"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unit}
            />
            <Input
              placeholder="State"
              id="state"
              name="state"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              placeholder="Country"
              id="workCountry"
              name="workCountry"
              className="contact-edit__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </EditContactInfoRow>

        <div className="edit-contact__footer">
          <Button invert auth className="edit-contact__cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="submit" auth className="edit-contact__save-btn">
            Save
          </Button>
        </div>
      </Card>
    </EditContactInfoForm>
  );
}

export default EditContactInfo;
