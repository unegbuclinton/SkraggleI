import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const MailWrapper = styled.div`
  background-color: ${COLORS.torquoise};
  width: 20.5rem;
  height: 4rem;
  border-radius: 0.5rem;
  p {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-400']};
  }
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;
