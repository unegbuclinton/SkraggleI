import styled from 'styled-components';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';

export const DonorWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 5.036rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const DonorHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS['header-grey']};
  padding-bottom: 1.7rem;
  .heading {
    color: ${COLORS['header-grey']};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
`;

export const DonorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8.106rem;
  gap: 3rem;
  .donor-info {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS['grey-200']};
    width: 45rem;
    line-height: 2rem;
  }
`;

export const Diamond = styled.div`
  width: 7.163rem;
  height: 7.163rem;
  background: ${COLORS['light-pink']};
  border: 0.2rem solid ${COLORS.pink};
  /* Rotate */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  /* Rotate Origin */
  -webkit-transform-origin: 0 100%;
  -moz-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -o-transform-origin: 0 100%;
  transform-origin: 0 100%;
  margin-left: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .score {
    /* Rotate */
    -webkit-transform: rotate(43.5deg);
    -moz-transform: rotate(43.5deg);
    -ms-transform: rotate(43.5deg);
    -o-transform: rotate(43.5deg);
    transform: rotate(43.5deg);

    color: ${COLORS.pink};
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xxlarge};
  }
`;
