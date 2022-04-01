import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import { FONTWEIGHTS } from "constants/font-spec";

export const SubjectWrapper = styled.div`
  .subject-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  }
  .subject-input {
    width: 60.2rem;
    height: 6.4rem;
    padding-left: 1.6rem;
    margin-bottom: 2.5rem;
    background-color: transparent;
    border: 1px solid ${COLORS["gray-500"]};
  }

  .subject-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    margin-top: 47.9rem;
  }

  .subject-cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS["gray-500"]};
  }
  .subject-save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
export const SubjectLabel = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS["black-shade"]};
  margin-bottom: 0.8rem;
`;
