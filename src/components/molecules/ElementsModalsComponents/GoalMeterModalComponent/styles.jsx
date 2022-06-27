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
export const GoalMeterFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .archive-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .update-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const CopyContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding-left: 2.4rem;
`;

export const CopyLabel = styled.label`
  width: 10rem;
  display: flex;
  align-items: center;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;
