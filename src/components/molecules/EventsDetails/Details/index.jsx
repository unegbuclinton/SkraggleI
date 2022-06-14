import Button from 'components/atoms/Button/Button';
import { updateEvent } from 'features/events/eventSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminNotification from './AdminNotification';
import CutOffDate from './CutOffDate';
import DisplayOptions from './DisplayOptions';
import DisplaySettings from './DisplaySettings';
import EventInformation from './Information';
import EventLocation from './Location';
import RecipientBody from './RecipientBody';
import RegistrationReceipt from './RegistrationReceipt';
import { ButtonWrapper, Container, DetailsHeading, DetailsWrapper, ErrorMsg } from './styles';

function Details() {
  const { eachEvent } = useSelector((state) => state.events);
  console.log(eachEvent);
  const dispatch = useDispatch();
  const eventId = eachEvent.id;
  const {
    name,
    event_sold_out_message,
    venue,
    address,
    city,
    state,
    zip_country,
    total_participant,
    start_at,
    end_at,
    reciept_title,
    reciept_category,
    reciept_description,
    from_name,
    reply_email,
    subject
  } = eachEvent;
  const formik = useFormik({
    initialValues: {
      name: name,
      message: event_sold_out_message,
      venue: venue,
      address: address,
      city: city,
      state: state,
      zip: zip_country,
      settings: total_participant,
      eventStartDate: start_at,
      startTime: '',
      endTime: end_at,
      registrationDate: '',
      receipt: reciept_description,
      receiptTitle: reciept_title,
      email: '',
      category: reciept_category,
      receiptDescription: reciept_description,
      formName: from_name,
      emailReply: reply_email,
      subject: subject
    },

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
      dispatch(updateEvent({ body: body, id: eventId }));
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
