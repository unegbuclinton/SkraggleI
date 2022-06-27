import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function TransactionType({ onClick }) {
  return (
    <TransactionWrapper>
      <TransactionContainer>
        <TransactionText onClick={onClick}>Donation</TransactionText>
        <TransactionText onClick={onClick}>Other Revenue</TransactionText>
      </TransactionContainer>
    </TransactionWrapper>
  );
}

export default TransactionType;

const TransactionWrapper = styled.div`
  position: absolute;
  top: 16.2rem;
  right: 14rem;
  width: 20rem;
  height: 7rem;
  background-color: ${COLORS[['grey-box']]};
`;

const TransactionText = styled.p`
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.medium};
  padding: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.pink};
  }
`;
const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
