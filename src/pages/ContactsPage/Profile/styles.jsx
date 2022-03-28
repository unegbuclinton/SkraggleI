import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const TabLinksWrapper = styled.div`
  /* background-color: ${COLORS.white};
  height: 8rem;
  display: flex;
  padding-left: 2.5rem;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;
  margin-bottom: 2.4rem;

  .link__item__active {
    width: 14.4rem;
    text-decoration: none;
    border-bottom: 2px solid ${COLORS.pink};
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.bold};
    line-height: 1.7rem;
    text-align: center;
    padding-top: 1.6rem;
  }

  .each__link {
    text-decoration: none;
    width: 14.4rem;
    color: #585858;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.bold};
    line-height: 1.7rem;
    text-align: center;
    padding-top: 1.6rem;
  } */
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.572rem;

  .header {
    color: ${COLORS["tabel-btn-grey"]};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.base};
    padding-bottom: 1.6rem;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  margin-bottom: 4.8rem;
`;
