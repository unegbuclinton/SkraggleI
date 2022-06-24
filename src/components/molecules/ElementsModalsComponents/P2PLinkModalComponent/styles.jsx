import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const P2PLinkFormWrapper = styled.div`
  .p2plink-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    &__footer {
      padding: 0rem 2.4rem 2.4rem 2.4rem;
    }
  }
`;

export const P2PLinkHeaderText = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
`;

export const P2PLinkFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  .p2plink__input {
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-500']};
  }
`;

export const P2PLinkLabel = styled.label`
  display: flex;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const P2PLinkFooter = styled.div`
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

export const FormLabel = styled.label`
  width: 30%;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.1rem;
`;
