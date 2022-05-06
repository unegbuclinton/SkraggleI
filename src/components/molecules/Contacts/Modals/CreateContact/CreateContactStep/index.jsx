/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import CreateContactStepOne from '../CreateContactStepOne';
import ContactStepTwo from '../CreateContactStepTwo';

const MultiStepForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  const [currentStep, setCurrentStep] = useState(0);

  const endPoint = (contactDatas) => {
    console.log('Form Submitted', contactDatas);
  };

  const handleNextStep = (newData, final = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (final) {
      endPoint(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <CreateContactStepOne next={handleNextStep} formData={formData} onClose={onClose} />,
    <ContactStepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      onClose={onClose}
      formData={formData}
    />
  ];

  return <div>{steps[currentStep]}</div>;
};
export default MultiStepForm;
