import React from "react";
import Description from "./Description";
import BillinInfomation from "./BillingInfomation";
import EventInformation from "./EventInfomation";
import PaymentInformation from "./PaymentInformation";
import ReceiptInformation from "./ReceiptInformation";

function Wording() {
  return (
    <div>
      <Description />
      <BillinInfomation />
      <EventInformation />
      <PaymentInformation />
      <ReceiptInformation />
    </div>
  );
}

export default Wording;
