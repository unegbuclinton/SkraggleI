import Button from 'components/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';

function StripeInfo() {
  return (
    <StripeContainer>
      <Button className="stripe-btn" auth>
        Stripe
      </Button>
    </StripeContainer>
  );
}

export default StripeInfo;

const StripeContainer = styled.div`
  margin-bottom: 2.4rem;

  .stripe-btn {
    height: 3.7rem;
  }
`;
