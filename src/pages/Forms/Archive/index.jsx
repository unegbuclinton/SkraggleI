import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Archive() {
  return (
    <ArchiveWrapper>
      <ArchiveContainer>
        <Heading>There are no archived elements.</Heading>
      </ArchiveContainer>
    </ArchiveWrapper>
  );
}

export default Archive;

const ArchiveWrapper = styled(Card)`
  padding: 3.2rem 2.4rem 62.9rem 2.4rem;
`;

const ArchiveContainer = styled.div`
  width: 100%;
  height: 7rem;
  border: 0.08rem solid ${COLORS['porcelain-white']};
  padding: 2.5rem 0 2.4rem 3.6rem;
`;

const Heading = styled.h1`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
`;
