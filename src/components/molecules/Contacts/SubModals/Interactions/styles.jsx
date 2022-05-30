import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const InteractionWrapper = styled.form`
  .interaction-card {
    padding: 2.4rem;
    .interaction__footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 3.4rem;
    }

    .interaction__cancel-btn {
      width: 10.7rem;
      height: 5.1rem;
      color: ${COLORS['gray-500']};
    }
    .interaction__save-btn {
      width: 20.5rem;
      height: 5.1rem;
    }
  }
`;

export const InteractionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.416rem;

  .interaction-select {
    width: 100%;
  }
  .interaction-input {
    height: 4.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }

  .upload-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.6rem;
    height: 8.1rem;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS['grey-500']};
  }
  .interaction-checkbox {
    margin-bottom: 1.6rem;
    color: ${COLORS['grey-200']};
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;

export const InteractionLabel = styled.label`
  margin-bottom: 1rem;
  color: ${COLORS['grey-200']};
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  line-height: 1.6rem;
`;

export const InteractionTextarea = styled.textarea`
  resize: none;
  width: 60.2rem;
  height: 16.4rem;
`;
