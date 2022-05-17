import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  createContactStepOneValidationSchema,
  createContactStepTwoValidationSchema
} from 'validation/Schema';
import CreateContactStepOne from '../CreateContactStepOne';
import ContactStepTwo from '../CreateContactStepTwo';

const MultiStepForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleCreateContact = () => {};

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
