import { createContact, viewContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  createContactStepOneValidationSchema,
  createContactStepTwoValidationSchema
} from 'validation/Schema';
import CreateContactStepOne from '../CreateContactStepOne';
import ContactStepTwo from '../CreateContactStepTwo';

const MultiStepForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();

  const validationSchema =
    currentStep === 0 ? createContactStepOneValidationSchema : createContactStepTwoValidationSchema;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      primary_email: '',
      primary_phone: '',
      emailSubscription: '',
      date: '',
      month: '',
      year: '',
      company: '',
      tags: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      household: '',
      priority: '',
      assignee: ''
    },
    validationSchema,
    onSubmit: (values) => {
      if (currentStep === 0) {
        handleNextStep(values);
      } else {
        handleNextStep(values, true);
      }
    }
  });

  const body = {
    primary_phone: formik.values.primary_phone,
    primary_email: formik.values.primary_email,
    first_name: formik.values.firstName,
    last_name: formik.values.lastName,
    // email_subscription_status: formik.values.emailSubscription,
    email_subscription_status: formik.values.emailSubscription,
    // birth_date: formik.values.date,
    // company: formik.values.company,
    // tags: formik.values.tags,
    address: formik.values.address
    // unit: formik.values.unit,
    // city: formik.values.city,
    // state: formik.values.state,
    // postalCode: formik.values.postalCode,
    // country: formik.values.country,
    // household: formik.values.household,
    // priority: formik.values.priority,
    // assignee: formik.values.assignee
  };

  const handleCreateContact = () => {
    // console.log('Form Submitted', contactDatas);
    dispatch(createContact(body)).then(() => {
      toast.success('Contact Created Successfully');
      onClose();
      dispatch(viewContact());
    });
  };

  const handleNextStep = (newData, final = false) => {
    if (final) {
      handleCreateContact(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    // eslint-disable-next-line react/jsx-key
    <CreateContactStepOne
      formik={formik}
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onClose={onClose}
    />,
    // eslint-disable-next-line react/jsx-key
    <ContactStepTwo
      formik={formik}
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onClose={onClose}
    />
  ];

  return <>{steps[currentStep]}</>;
};
export default MultiStepForm;
