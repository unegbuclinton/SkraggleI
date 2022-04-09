import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";
import Card from "components/atoms/Card";

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 2.4rem;
  width: 100%;
  .vertical-tab-wrapper {
    display: flex;
    gap: 1.6rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }
  .vertical-tabs{
    width: 20.9rem;
    height: fit-content;
    padding-left: 3.54rem;
    padding-top: 3.7rem;
    background-color: ${COLORS.white};
    display: flex;
    flex-direction: column;
  }

  .vertical-wrapper{
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSidebar = styled(Card)`
  width: 20.9rem;
  margin-right: 1.6rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

