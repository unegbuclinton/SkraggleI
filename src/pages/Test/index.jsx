import React from "react";
import styled from "styled-components";
import SubscriptionUpdate from "components/molecules/MailblastModalComponents/SubscriptionUpdate";
import CreateTransaction from "components/molecules/DonationModals/CreateTransaction/DonationInfomation";
import RecurringInformation from "components/molecules/DonationModals/Recurring/RecurringInfomation";

const Test = () => {
  return (
    <Wrapper>
      <RecurringInformation />
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
