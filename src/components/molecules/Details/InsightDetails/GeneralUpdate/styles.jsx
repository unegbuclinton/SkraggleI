import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const GeneraUpdateWrapper = styled(Card)`
  padding: 2.4rem 4rem 7.427rem 4rem;
  margin-bottom: 1.6rem;
`;

export const GeneralUpdateHeading = styled.div`
  border-bottom: 0.1rem ${COLORS['header-grey']} solid;
  .heading {
    color: ${COLORS['header-grey']};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
    padding-bottom: 1.7rem;
  }
`;

export const UpdateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 18.068rem; */
`;

export const UpdateContent = styled.div`
  text-align: center;
  padding-top: 5.227rem;
  .digit {
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xxlarge};
  }
  .text {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['snooze-grey']};
    padding-top: 2.246rem;
  }
`;
