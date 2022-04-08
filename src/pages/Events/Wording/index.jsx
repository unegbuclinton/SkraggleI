import React from "react";
import Description from "./Description";
import BillinInfomation from "./BillingInfomation";
import EventInformation from "./EventInfomation";
import PaymentInformation from "./PaymentInformation";
import ReceiptInformation from "./ReceiptInformation";
import styled from "styled-components";
import Card from "components/atoms/Card";

function Wording() {
  return (
    <div>
      <WordingWrapper>
        <Description />
        <BillinInfomation />
        <EventInformation />
        <PaymentInformation />
        <ReceiptInformation />
      </WordingWrapper>
    </div>
  );
}

export default Wording;

const WordingWrapper = styled(Card)`
  padding: 3.2rem 2.4rem 3.6rem 2.4rem;
  margin-top: 1.6rem;
`;
