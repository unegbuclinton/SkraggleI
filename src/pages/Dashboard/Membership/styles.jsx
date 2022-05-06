import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { FONTWEIGHTS } from 'constants/font-spec';

export const MembershipWrapper = styled.div`
  height: 46.7rem;
  margin-bottom: 1.6rem;

  .membership-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0;
    padding: 2.4rem 0rem 1.7rem 4rem;
  }
`;
export const MembershipBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 39.9rem;
  margin: 0rem 3.1rem 0rem 3.9rem;
  border-top: 1px solid ${COLORS.torquoise};

  .membership-content {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin-bottom: 3rem;
  }
  .membership-btn {
    font-size: ${FONTSIZES.xsmall};
    padding: 1.1rem 0;
  }
`;
