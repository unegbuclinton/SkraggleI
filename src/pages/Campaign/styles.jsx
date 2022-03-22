import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card/Card";

export const TabLinksWrapper = styled.div`
  background-color: ${COLORS.white};
  height: 8rem;
  display: flex;
  padding-left: 2.5rem;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;

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
  }
`;

export const CampaignBody = styled(Card)`
  background-color: ${COLORS.white};
  margin-top: 1.6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-bottom: 9rem;
`;