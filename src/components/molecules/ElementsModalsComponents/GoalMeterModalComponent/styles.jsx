import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const GoalMeterWrapper = styled.div`
  .goalmeter-card {
    padding: 3.2rem 3.8rem 3.24rem 2.9rem;
  }
`;

export const GoalMeterHeaderText = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
`;

export const GoalMeterFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;

  .goal-meter__input {
    width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
`;

export const GoalMeterLabel = styled.label`
  width: 30%;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;
