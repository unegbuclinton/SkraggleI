import React, { useState } from 'react';
import CreateContactStepOne from '../CreateContactStepOne';
import ContactStepTwo from '../CreateContactStepTwo';
// import { useDispatch } from 'react-redux';
// import { createContact } from 'features/contact/contactslice';

const MultiStepForm = ({ onClose }) => {
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    date: '',
    emailSubscription: '',
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
  });

  const [currentStep, setCurrentStep] = useState(0);

  const endPoint = (contactDatas) => {
    console.log('Form Submitted', contactDatas);
    // dispatch(createContact(formData))
  };

  const handleNextStep = (newData, final = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (final) {
      endPoint(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  // const handlePrevStep = (newData) => {
  //   setFormData((prev) => ({ ...prev, ...newData }));
  //   setCurrentStep((prev) => prev - 1);
  // };

  const steps = [
    // eslint-disable-next-line react/jsx-key
    <CreateContactStepOne next={handleNextStep} formData={formData} onClose={onClose} />,
    // eslint-disable-next-line react/jsx-key
    <ContactStepTwo
      next={handleNextStep}
      // prev={handlePrevStep}
      onClose={onClose}
      formData={formData}
    />
  ];

  return <>{steps[currentStep]}</>;
};
export default MultiStepForm;
