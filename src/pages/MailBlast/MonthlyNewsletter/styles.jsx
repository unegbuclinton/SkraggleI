import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const NewstellerWrapper = styled.div`
  margin-top: 1.6rem;
`;

export const NewstellerTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;

  .newsteller-left {
    .top {
      display: flex;
      justify-content: space-between;
      gap: 51.4rem;
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS["gray-500"]};
      margin-bottom: 1.6rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.bold};
      gap: 51rem;

      .left {
        color: ${COLORS["grey-500"]};
      }

      .right {
        color: ${COLORS["navy-blue"]};
      }
    }
  }

  .newsteller-right {
    border: 1px solid ${COLORS["primary-blue"]};
    font-size: ${FONTSIZES.base};
    padding: 1rem 1.4rem 0.9rem 1.4rem;
    text-align: center;

    .newsteller-btn {
      width: 8.2rem;
      height: 2.8rem;
      font-size: ${FONTSIZES.xsmall};
      margin-bottom: 1.8rem;
    }
  }
`;

export const NewstellerBody = styled.div`
  padding-left: 2.4rem;
  .body-header {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS["grey-500"]};
    padding-bottom: 4.6rem;

    .added-text {
      color: ${COLORS["navy-blue"]};
    }
  }
`;
