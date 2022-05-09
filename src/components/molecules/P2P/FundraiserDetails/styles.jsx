import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 2.4rem;
  width: 100%;
  height: 50%;
  gap: 1.6rem;
  .p2p-tabs-wrapper {
    display: flex;
    height: 50.7rem;
    overflow-y: auto;
    position: sticky;
    top: 0;
    background-color: transparent;
  }
  .p2p-tabs {
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: column;
    height: 42.7rem;
    width: 20.9rem;
    padding-left: 3.54rem;
    padding-top: 3.7rem;
    background-color: ${COLORS.white};
    &__bottom{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${COLORS.white};
      color: ${COLORS['gray-500']};
      height: 6.3rem;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
      position: -webkit-sticky;
      position: sticky;
      top: 52rem;
    }
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
