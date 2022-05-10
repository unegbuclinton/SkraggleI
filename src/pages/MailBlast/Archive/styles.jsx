import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ArchiveWrapper = styled.div`
  height: 100vh;

  .archive-card {
    height: 100%;
    margin-top: 1.6rem;
    padding: 3.2rem 2.4rem 0 2.4rem;
  }
`;

export const ArchiveComment = styled.p`
  width: 100%;
  height: 7rem;
  padding: 2.5rem 0 2.4rem 3.6rem;
  background-color: transparent;
  border: 1px solid ${COLORS.torquoise};
  color: ${COLORS['grey-500']};
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.normal};
`;
