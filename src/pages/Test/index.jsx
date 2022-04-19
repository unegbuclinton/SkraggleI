import React from "react";
import styled from "styled-components";
import SubscriptionUpdate from "components/molecules/MailblastModalComponents/SubscriptionUpdate";
import CreateTransaction from "components/molecules/DonationModals/CreateTransaction/DonationInfomation";
import RecurringInformation from "components/molecules/DonationModals/Recurring/RecurringInfomation";
import RecurringAssociation from "components/molecules/DonationModals/Recurring/RecurringAssociation";
import RecurringModal from "pages/Donations/DonationModals/RecurringModal";
import CompleteTransaction from "components/molecules/DonationModals/CreateTransaction/CompleteTransaction";
import CreateTransactionModal from "pages/Donations/DonationModals/CreateTransactionModal";
import Checkbox from "components/atoms/CheckBox";

const Test = () => {
  return (
    <Wrapper>
      <Checkbox />
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  .checkbox {
    width: 2rem;
    height: 2rem;
  }
`;
