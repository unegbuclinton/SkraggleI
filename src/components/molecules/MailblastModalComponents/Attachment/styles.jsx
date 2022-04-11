import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import { FONTWEIGHTS } from "constants/font-spec";

export const Attachwrapper = styled.div`
  .attach-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  }
  .attatch-text {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["black-shade"]};
    margin-bottom: 1.4rem;
  }

  .attach-btn {
    width: 20.5rem;
    height: 5.1rem;
    background: ${COLORS["gray-500"]};
    color: ${COLORS.white};
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.bold};
  }

  .attach-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    margin-top: 10rem;
  }

  .attach-cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS["gray-500"]};
  }
  .attach-save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
