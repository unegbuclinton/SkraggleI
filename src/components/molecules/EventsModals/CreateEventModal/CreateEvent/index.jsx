import Button from 'components/atoms/Button/Button';
import { useFormik } from 'formik';
import React from 'react';
import { detailsValidationSchema } from 'validation/Schema';
import AdminNotification from './AdminNotification';
import CutOffDate from './CutOffDate';
import DisplayOptions from './DisplayOptions';
import DisplaySettings from './DisplaySettings';
import EventInformation from './Information';
import EventLocation from './Location';
import RecipientBody from './RecipientBody';
import RegistrationReceipt from './RegistrationReceipt';
import { ButtonWrapper, Container, DetailsWrapper, ErrorMsg } from './styles';

function CreateEvent({ onClose }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
      venue: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      settings: '',
      eventStartDate: '',
      eventStartDateTwo: '',
      startTime: '',
      endTime: '',
      registrationDate: '',
      registrationEndTime: '',
      receipt: '',
      receiptTitle: '',
      email: '',
      category: '',
      receiptDescription: '',
      formName: '',
      emailReply: '',
      subject: ''
    },
    validationSchema: detailsValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <DetailsWrapper>
      <Container onSubmit={formik.handleSubmit}>
        <EventInformation formik={formik} ErrorMsg={ErrorMsg} />
        <EventLocation formik={formik} ErrorMsg={ErrorMsg} />
        <DisplayOptions />
        <DisplaySettings formik={formik} ErrorMsg={ErrorMsg} />
        <CutOffDate formik={formik} ErrorMsg={ErrorMsg} />
        <AdminNotification formik={formik} ErrorMsg={ErrorMsg} />
        <RegistrationReceipt formik={formik} ErrorMsg={ErrorMsg} />
        <RecipientBody />
        <ButtonWrapper>
          <Button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </ButtonWrapper>
      </Container>
    </DetailsWrapper>
  );
}

export default CreateEvent;
