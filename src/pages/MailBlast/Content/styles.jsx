import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
export const ContentWrapper = styled.div`
  margin-top: 1.6rem;
  .reply-item__left {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .input-check {
      display: flex;
      align-items: center;
      gap: 3.4rem;
    }
  }
  .reciepient {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-left: 4.4rem;
    .reciepient-detail {
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 0.4rem;
    }
  }
  .content-reply-btn {
    width: 18.2rem;
    height: 4.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.bold};
    background: ${COLORS["gray-500"]};
    color: ${COLORS.white};
    text-align: center;
  }
`;
export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  gap: 3.2rem;
  .content-left {
    flex: 1;
    .top {
      display: flex;
      justify-content: space-between;
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
export const ContentBody = styled.div`
  .content-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${COLORS["porcelain-white"]};
    margin: 0 2.3rem 0 2.5rem;
    padding: 0.7rem 1.5rem 0.7rem 2.3rem;
    p {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["black-shade"]};
    }
    &__left {
      display: flex;
      align-items: center;
      gap: 3.4rem;
      .added-text {
      }
    }
    &__right {
      .content-btn {
        width: 14.4rem;
        height: 4.8rem;
        font-size: ${FONTSIZES.small};
        font-weight: ${FONTWEIGHTS.bold};
        border: 1px solid ${COLORS.pink};
        color: ${COLORS.pink};
        text-align: center;
      }
    }
  }
`;