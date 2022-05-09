import React from 'react';
import { Container, DetailsHeading, DetailsWrapper, ButtonWrapper, ErrorMsg } from './styles';
import Button from 'components/atoms/Button/Button';
import EventInformation from './Information';
import EventLocation from './Location';
import DisplayOptions from './DisplayOptions';
import DisplaySettings from './DisplaySettings';
import CutOffDate from './CutOffDate';
import AdminNotification from './AdminNotification';
import RegistrationReceipt from './RegistrationReceipt';
import RecipientBody from './RecipientBody';
import { useFormik } from 'formik';
import { detailsValidationSchema } from 'validation/Schema';
import { useNavigate } from 'react-router-dom';

function Details() {
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
      startTime: '',
      endTime: '',
      registrationDate: '',
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

  const navigate = useNavigate();

  const cancel = () => {
    let path = '/events';
    navigate(path);
  };

  return (
    <DetailsWrapper>
      <DetailsHeading>A day with orphans</DetailsHeading>
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
          <Button type="button" onClick={cancel} className="cancel-btn">
            Cancel
          </Button>
          <Button className="save-btn">Save</Button>
        </ButtonWrapper>
      </Container>
    </DetailsWrapper>
  );
}

export default Details;
