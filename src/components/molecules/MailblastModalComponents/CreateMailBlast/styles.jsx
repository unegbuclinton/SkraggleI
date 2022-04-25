import { COLORS } from "constants/colors";
import { FONTSIZES,FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const CreateMailWrapper = styled.div`
  .edit-card {
    padding: 3.2rem 2.4rem 2.455rem 2.4rem;

    .edit-mail-body {
      margin-bottom: 15.045rem;
    }

    .edit-mail-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
    }

    .edit-cancel-btn {
      width: 10.7rem;
      height: 5.1rem;
      color: ${COLORS["gray-500"]};
    }
    .edit-save-btn {
      width: 20.5rem;
      height: 5.1rem;
    }
  }

  .edit-input {
    width: 60.2rem;
    height: 6.4rem;
    padding-left: 1.6rem;
    background-color: transparent;
    border: 1px solid ${COLORS["gray-500"]};
    margin-bottom: 0.8rem;
  }
  .edit-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    padding: 0 1.6rem;
    border: 1px solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    margin-bottom: 0.8rem;
  }
`;

export const CreateLabel = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS["black-shade"]};
  margin-bottom: 0.8rem;
`;
