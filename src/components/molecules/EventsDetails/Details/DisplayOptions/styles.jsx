import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DetailsSubHeading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS.black};
  margin-bottom: 1.6rem;
  padding-left: 2.5rem;
`;

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  padding-left: 2.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  padding-bottom: 2rem;

  .icon-container {
    width: 17.4rem;
    height: 8.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon-label {
      margin-top: 0.5rem;
    }
  }
`;
