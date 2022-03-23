import styled from "styled-components";
import { COLORS } from "constants/colors";
import Card from "components/atoms/Card/Card";

export const CampaignBody = styled(Card)`
  background-color: ${COLORS.white};
  margin-top: 1.6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-bottom: 9rem;
`;