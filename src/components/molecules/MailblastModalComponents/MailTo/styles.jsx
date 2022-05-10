import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { FONTWEIGHTS } from 'constants/font-spec';

export const MailToWrapper = styled.div`
  .mailto-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  }
  .mailto-input {
    width: 60.2rem;
    height: 6.4rem;
    padding-left: 1.6rem;
    margin-bottom: 2.5rem;
    background-color: transparent;
    border: 1px solid ${COLORS['gray-500']};
  }
  .toggle-swicth {
    display: flex;
    gap: 2.7rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    margin-bottom: 2.6rem;
  }
  .send-email {
    margin-bottom: 30rem;
    .input-box {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 2.5rem;
    }
    #email {
      width: 54.7rem;
      border: none;
      background: ${COLORS.torquoise};
      font-size: ${FONTSIZES.small};
      padding: 2.1rem 3.6rem 1.4rem 2.8rem;
    }
  }

  .mailto-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
  }

  .mail-cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS['gray-500']};
  }
  .mail-save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const MailToLabel = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['black-shade']};
  margin-bottom: 0.8rem;
`;
