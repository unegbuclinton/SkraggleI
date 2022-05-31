import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function EmptyState({ svg, title, contactTitle, name, onClick }) {
  return (
    <EmptystateWrapper>
      <div>
        <SvgContainer>{svg}</SvgContainer>
        <StateTitle>{contactTitle}</StateTitle>
        <EmptyStateTitle>{title}</EmptyStateTitle>
        <Button className="empty-state-btn" onClick={onClick}>
          {name}
        </Button>
      </div>
    </EmptystateWrapper>
  );
}

export default EmptyState;

const EmptystateWrapper = styled(Card)`
  height: 46.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-state-btn {
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xsmall};
    border-radius: 0.36304rem;
  }
`;

const StateTitle = styled.p`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};
  margin-bottom: 2.5rem;
`;

const EmptyStateTitle = styled.div`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};
  margin: 1.8rem 0 2.5rem 0;
  text-align: center;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
