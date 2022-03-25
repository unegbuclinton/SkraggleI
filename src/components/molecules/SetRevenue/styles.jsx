import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import styled from "styled-components";

export const SetRevenueWrapper = styled.div`
  width: 65rem;
  .revenue-card {
    padding: 1.6rem 2.4rem 0 0.4rem;
  }
`;
export const RevenueLabel = styled.p`
  padding: 2.4rem 0 0.5rem 0;
  color: ${COLORS["grey-200"]};
`;
export const SetInputField = styled.input`
  width: 30.5rem;
  height: 6.5rem;
  outline: none;
  padding-left: 2.083rem;
  border: 0.1rem solid ${COLORS["moore-grey"]};
  border-radius: 0.5rem;
`;
export const RevenueFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 6.4rem 2.4rem 2.4rem 0;
  gap: 1.6rem;
  .footer-btn {
    width: 14rem;
  }
  .set-revenue-btn{
    height: 4.8rem;
  }
`;

export const CardItems = styled.div`
  display: flex;
  align-items: center;
  gap: 3.6rem;
  padding-left: 2.4rem;

  .revenue-card__right {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  .revenue-card__option {
    font-size: ${FONTSIZES.small};
  }
`;
