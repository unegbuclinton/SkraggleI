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

export const DetailsText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  padding-left: 2.5rem;

  .details-input {
    width: 61.4rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2.4rem 0;
  }

  .switch-wrapper {
    display: flex;
    gap: 3.7rem;
    margin-bottom: 2rem;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .city-input {
    width: 39.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2rem 0;
  }

  .state {
    width: 29.6rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2rem 0;
    padding-top: 2.2rem;
  }

  .zip {
    width: 29.6rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2rem 0;
  }
`;
