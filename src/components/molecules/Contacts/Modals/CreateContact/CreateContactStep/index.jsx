import React, { useState } from "react";
import { Provider } from "components/molecules/Contacts/Modals/CreateContact/ContactFormContext/MultiFormContext";
import CreateContactStepOne from "../CreateContactStepOne";
import ContactStepTwo from "../CreateContactStepTwo";

const stepOneInitialState = {
  // for form Validation
};

const stepTwoInitialState = {
  // for form Validation
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <CreateContactStepOne />;
    case 1:
      return <ContactStepTwo />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
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