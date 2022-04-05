import React, { useState } from 'react';
import FundraiserLiveComponent from '../FundraiserLiveModalComponent';
import P2PModalComponent from '../P2PFundraiserModalComponent';
import { Provider } from './MultiStepContext';

const stepOneInitialState = {
  // for form Validation
};

const stepTwoInitialState = {
  // for form Validation
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <P2PModalComponent />;
    case 1:
      return <FundraiserLiveComponent />;
    default:
      return null;
  }
};

const MultiStepForm = ({ onClose }) => {
  const [stepOne, setStepOne] = useState(stepOneInitialState);
  const [stepTwo, setStepTwo] = useState(stepTwoInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
      setStepOne(stepOneInitialState);
      setStepTwo(stepTwoInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <Provider value={{ stepOne, setStepOne, next, stepTwo, setStepTwo }}>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;
