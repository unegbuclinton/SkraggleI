import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWebsiteSchema } from 'validation/Schema';
import {
  AddAddressButton,
  CancelButton,
  ModalInput,
  ModalLabel,
  ModalWrapper,
  SaveButton
} from './styles';

function EditWebsiteModalComponent({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const websiteId = eachContact.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      website: '',
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      youtube: '',
      otherWebsite: ''
    },
    validationSchema: editWebsiteSchema,
    onSubmit: (values) => {
      const body = {
        website: values.website,
        twitter: values.twitter,
        facebook: values.facebook,
        instagram: values.instagram,
        linkedin: values.linkedin,
        youtube: values.youtube,
        otherWebsite: values.otherWebsite
      };
      dispatch(updateContact({ body: body, id: websiteId }));
      onClose();
    }
  });
  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <ModalLabel>Wesbsite</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Website"
          id="website"
          name="website"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.website}
        />
        {formik.touched.website && formik.errors.website ? (
          <ErrorMessage>{formik.errors.website}</ErrorMessage>
        ) : null}

        <ModalLabel>Twitter</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Twitter link"
          id="twitter"
          name="twitter"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.twitter}
        />
        {formik.touched.twitter && formik.errors.twitter ? (
          <ErrorMessage>{formik.errors.twitter}</ErrorMessage>
        ) : null}

        <ModalLabel>Facebook</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Facebook Link"
          id="facebook"
          name="facebook"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.facebook}
        />
        {formik.touched.facebook && formik.errors.facebook ? (
          <ErrorMessage>{formik.errors.facebook}</ErrorMessage>
        ) : null}

        <ModalLabel>Instagram</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Instagram Link"
          id="instagram"
          name="instagram"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.instagram}
        />
        {formik.touched.instagram && formik.errors.instagram ? (
          <ErrorMessage>{formik.errors.instagram}</ErrorMessage>
        ) : null}

        <ModalLabel>Linkedin</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Linkedin Link"
          id="linkedin"
          name="linkedin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedin}
        />
        {formik.touched.linkedin && formik.errors.linkedin ? (
          <ErrorMessage>{formik.errors.linkedin}</ErrorMessage>
        ) : null}

        <ModalLabel>Youtube</ModalLabel>
        <ModalInput
          className="modal-inputs"
          type="text"
          placeholder="Enter Youtube Link"
          id="youtube"
          name="youtube"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.youtube}
        />
        {formik.touched.youtube && formik.errors.youtube ? (
          <ErrorMessage>{formik.errors.youtube}</ErrorMessage>
        ) : null}

        <div className="add-address-button">
          <AddAddressButton>Add Other Address</AddAddressButton>
        </div>
        <div className="buttons-container">
          <CancelButton onClick={onClose} auth invert>
            Cancel
          </CancelButton>
          <SaveButton type="submit">Save</SaveButton>
        </div>
      </Card>
    </ModalWrapper>
  );
}

export default EditWebsiteModalComponent;
