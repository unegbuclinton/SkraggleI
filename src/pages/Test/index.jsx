import React from "react";
import styled from "styled-components";
import SubscriptionUpdate from "components/molecules/MailblastModalComponents/SubscriptionUpdate";
const Test = () => {
  return (
    <Wrapper>
      <SubscriptionUpdate />
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
