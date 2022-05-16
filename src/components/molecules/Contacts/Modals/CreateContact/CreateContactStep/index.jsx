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
      email: '',
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
      alert(JSON.stringify(values, null, 2));
      if (currentStep === 0) {
        handleNextStep(values);
      } else {
        handleNextStep(values, true);
      }
    }
  });

  const endPoint = (contactDatas) => {
    console.log('Form Submitted', contactDatas);
  };

  const handleNextStep = (newData, final = false) => {
    if (final) {
      endPoint(newData);
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
