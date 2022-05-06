import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import Card from 'components/atoms/Card';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
export const MainWrapper = styled.div`
  display: flex;
  margin-top: 2.4rem;
  width: 100%;
  .vertical-tab-wrapper {
    display: flex;
    gap: 1.6rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }
  .vertical-tabs {
    width: 20.9rem;
    height: fit-content;
    padding-left: 3.54rem;
    padding-top: 3.7rem;
    background-color: ${COLORS.white};
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    &__bottom {
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
  .vertical-wrapper {
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
