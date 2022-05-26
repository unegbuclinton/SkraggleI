import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const EditPersonalInfoForm = styled.form`
  .personal-info__card {
    padding: 2.4rem;

    .dob-input {
      width: 100%;
      height: 4.4rem;
      background: ${COLORS.white};
      border: 1px solid ${COLORS['gray-500']};
    }

    .edit__input {
      width: 28.3rem;
      height: 4.4rem;
      background: ${COLORS.white};
      border: 1px solid ${COLORS['gray-500']};
      margin-top: 0.8rem;
    }

    .edit-profile__footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 3.4rem;
    }

    .edit-profile__cancel-btn {
      width: 10.7rem;
      height: 5.1rem;
      color: ${COLORS['gray-500']};
    }
    .edit-profile__save-btn {
      width: 20.5rem;
      height: 5.1rem;
    }
  }
`;

export const EditPersonalInfoRow = styled.div`
  display: flex;
  gap: 2.6rem;

  .edit-personalinfo__dropdown {
    width: 10rem;
    height: 4.4rem;
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }

  .gender-dropdown {
    width: 22rem;
    margin-bottom: 2.6rem;
    margin-top: 0.8rem;
  }
  .personal-label__input {
    /* width: 23.5rem; */
    height: 4.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-top: 0.8rem;
  }
`;
export const EditPersonalLabel = styled.label`
  color: ${COLORS['grey-200']};
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
`;
