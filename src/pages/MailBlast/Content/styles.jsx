import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";


export const ContentWrapper = styled.div`
  margin-top: 1.6rem;
`;
export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;

  .content-left {
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

  .content-right {
    border: 1px solid ${COLORS["primary-blue"]};
    font-size: ${FONTSIZES.base};
    padding: 1rem 1.4rem 0.9rem 1.4rem;
    text-align: center;

    .content-btn {
      width: 8.2rem;
      height: 2.8rem;
      font-size: ${FONTSIZES.xsmall};
      margin-bottom: 1.8rem;
    }
  }
`;
