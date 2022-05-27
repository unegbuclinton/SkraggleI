import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const EditContactInfoForm = styled.form`
  .contact-info__card {
    padding: 2.4rem;

    .list-input {
      display: flex;
      flex-direction: column;

      .add-input-btn {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;

        .contact-edit-btn {
          width: 18.2rem;
          height: 5.1rem;
          border-radius: 0.3rem;
          background-color: ${COLORS.torquoise};
          color: ${COLORS['grey-400']};
          align-self: self-end;
        }
      }
    }

    .edit-contact__footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 3.4rem;
    }

    .edit-contact__cancel-btn {
      width: 10.7rem;
      height: 5.1rem;
      color: ${COLORS['gray-500']};
    }
    .edit-contact__save-btn {
      width: 20.5rem;
      height: 5.1rem;
    }
  }

  .contact-top__input {
    width: 98%;
    height: 4.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-top: 0.8rem;
  }
`;

export const EditContactlLabel = styled.label`
  color: ${COLORS['grey-200']};
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
`;
export const EditContactInfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .contact-edit__input {
    width: 28.3rem;
    height: 4.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-top: 0.8rem;
  }

  .contact-edit-btn {
    width: 18.2rem;
    height: 5.1rem;
    background-color: ${COLORS.torquoise};
    color: ${COLORS['grey-400']};
  }

  .contact-info__container {
    display: flex;
    flex-direction: column;
    .contact-edit-btn {
      align-self: self-end;
      margin-bottom: 2.4rem;
    }
  }
`;
