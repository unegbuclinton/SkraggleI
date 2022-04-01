import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const KeyPerformanceIndicatiors = () => {
  return (
    <KPIWrapper>
      <KPIHeader>Key Performance Indicators (KPIs)</KPIHeader>
      <KPIContentWrapper></KPIContentWrapper>
    </KPIWrapper>
  );
};

export default KeyPerformanceIndicatiors;

const KPIWrapper = styled(Card)`
  padding: 0 4.7rem 0 4.1rem;
  flex: 1;
`;

const KPIHeader = styled.div`
  padding: 2.4rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const KPIContentWrapper = styled.div`
  padding: 8.7rem 0 15.5rem;
`;
