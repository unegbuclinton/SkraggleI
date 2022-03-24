import { COLORS } from "constants/colors";
import { FONTWEIGHTS } from "constants/font-spec";
import { FONTSIZES } from "constants/font-spec";
import styled from "styled-components";
import { Navlinks } from "../CampaignDetails/Nav/styles";

export const WidgetWrapper = styled.div`
  width: 65rem;

  .widget-container {
    display: flex;
    gap: 9rem;
    border-bottom: 1px solid ${COLORS["porcelain-white"]};

    .widget-links {
      display: flex;
      flex-direction: column;
      margin-top: 3.9rem;
    }
    .widget-content {
      margin-top: 2.4rem;
    }
  }
`;

export const WidgetLink = styled(Navlinks)`
  width: 10.3rem;
  text-decoration: none;
  font-size: ${FONTSIZES.normal};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["moore-grey"]};
  margin: 0 0 4.7rem 5.4rem;

  .active {
    color: red;
  }
`;

export const WidgetBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2.4rem;
  margin-top: 1.1rem;

  .btn-wrapper {
    width: 14rem;

  }
`;
