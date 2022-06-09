import Button from 'components/atoms/Button/Button';
import { createEvents, getAllEvents } from 'features/events/eventSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      textarea: '',
      message: '',
      venue: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      settings: '',
      eventStartDate: '',
      eventEndDate: '',
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
      const body = {
        name: values.name,
        description: values.textarea,
        event_image: 'www.image.com',
        event_sold_out_message: values.message,
        venue: values.venue,
        address: values.address,
        city: values.city,
        state: values.state,
        zip_country: values.zip,
        enable_map: true,
        display_option: 'mobile',
        total_participant: values.settings,
        enable_one_time_donation: true,
        start_at: values.eventStartDate,
        end_at: values.eventEndDate,
        event_has_reg_cutoff_date: true,
        admin_notification: ['samson@gmail.com'],
        reciept_type: values.receipt,
        reciept_title: values.receiptTitle,
        reciept_category: values.category,
        reciept_description: values.receiptDescription,
        sender_name: values.receiptDescription,
        reply_email: values.emailReply,
        subject: values.subject,
        body: 'This is just Test'
      };
      dispatch(createEvents(body)).then(() => {
        dispatch(getAllEvents());
        onClose();
      });
    }
  });
  console.log(formik.errors);
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
