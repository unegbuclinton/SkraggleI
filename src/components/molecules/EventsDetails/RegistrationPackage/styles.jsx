import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ContainerWrapper = styled(Card)`
  padding: 3.3rem 3.2rem 0 4.7rem;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 12rem;
  margin-top: 3.2rem;
`;

export const SwitchLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
  width: 8.9rem;
`;

export const HeaderWrapper = styled.div`
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxlarge};
    color: ${COLORS.black};
  }
`;

export const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.black};
  margin-top: 3.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 5rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
  }

  .save-btn {
    width: 20.3rem;
    height: 5.1rem;
    border-radius: 0.3rem;
  }
`;
