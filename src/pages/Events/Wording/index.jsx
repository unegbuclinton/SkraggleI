import Card from 'components/atoms/Card';
import React from 'react';
import styled from 'styled-components';
import BillinInfomation from './BillingInfomation';
import Description from './Description';
import EventInformation from './EventInfomation';
import PaymentInformation from './PaymentInformation';
import ReceiptInformation from './ReceiptInformation';
function Wording() {
  return (
    <MainWrapper>
      <WordingWrapper>
        <Description />
        <BillinInfomation />
        <EventInformation />
        <PaymentInformation />
        <ReceiptInformation />
      </WordingWrapper>
    </MainWrapper>
  );
}
export default Wording;
const MainWrapper = styled.div`
  height: 100%;
`;
const WordingWrapper = styled(Card)`
  height: 100%;
  overflow: auto;
  padding: 3.2rem 2.4rem 3.6rem 2.4rem;
  margin-top: 1.6rem;
`;
