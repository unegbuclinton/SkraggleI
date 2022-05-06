import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const WebsiteWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 1.634rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const WebsiteHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS['header-grey']};
  padding-bottom: 1.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .heading {
    color: ${COLORS['header-grey']};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
  .heading-btn {
    background-color: ${COLORS.white};
    color: ${COLORS['grey-500']};
    border: 1px solid ${COLORS.deepPurple};
    width: 9.6rem;
    border-radius: 0.5rem;
  }
`;

export const WebsiteContainer = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
  display: flex;
  overflow: hidden;
  gap: 12.2rem;
  .title {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS['grey-200']};
    font-weight: ${FONTWEIGHTS.normal};
    width: 10.1rem;
  }

  .info {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['header-grey']};
  }
`;
