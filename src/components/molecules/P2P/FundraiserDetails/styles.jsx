import styled, {css} from "styled-components";
import { COLORS } from "constants/colors";
import Card from "components/atoms/Card";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 2.4rem;
`;

export const LeftSidebar = styled(Card)`
  width: 20.9rem;
  height: 42.7rem;
  margin-right: 1.6rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const P2PFundraiserWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;
  margin-bottom: 2.4rem;
  height: 20.4rem;
  flex: 5;
  .fundraiser {
    &__top {
      width: 100%;
      height: 11.5rem;
      display: flex;
      border-bottom: 1px solid #9a9aa9;
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__paragraph {
      margin-bottom: 0.8rem;
      font-size: 12px;
      line-height: 14px;
      color: #9a9aa9;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__id {
      font-size: 1.47rem;
      color: ${COLORS["gray-500"]};
    }
    &__no {
      display: flex;
      align-items: baseline;
      font-size: 1.47rem;
      color: ${COLORS["grey-500"]};
    }
    &__copy-button {
      display: flex;
      left: 0;
      background-color: ${COLORS.white};
      margin: 0;
      padding: 0;
    }
    &__textArea {
      outline: none;
      border: none;
      resize: none;
    }
    &__down {
      display: flex;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__info {
      display: flex;
      flex-direction: column;
      width: 11.9rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20.5rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 17.1rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20.5rem;
    }
    &__active {
      font-size: ${FONTSIZES.base};
      color: #00903a;
      &__supporter {
        font-size: ${FONTSIZES.base};
        color: #8358fe;
      }
      &__raised {
        font-size: ${FONTSIZES.base};
        color: #1e003e;
      }
      &__donations {
        font-size: ${FONTSIZES.base};
        color: #1e003e;
      }
    }
  }
`;

export const P2PFundraiser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  margin-bottom: 2.4rem;
  .fundraiser {
    &__top {
      width: 100%;
      height: 8.4rem;
      display: flex;
      border-bottom: 1px solid #9a9aa9;
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__row {
      display: flex;
      margin-bottom: 1.6rem;
    }
    &__titles {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      width: 16rem;
    }
    &__p1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8358fe;
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &__no {
      display: flex;
      align-items: baseline;
      font-size: 1.47rem;
      color: ${COLORS["grey-500"]};
    }
    &__copy-button {
      width: 2rem;
      left: 0;
      background-color: ${COLORS.white};
      margin: 0;
      padding: 0;
    }
    &__textArea {
      width: 35.2rem;
      font-size: ${FONTSIZES.base};
      display: flex;
      outline: none;
      border: none;
      resize: none;
    }
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  background-color: ${COLORS.white};
  .fundraiser {
    &__top {
      width: 100%;
      height: 8.4rem;
      display: flex;
      border-bottom: 1px solid #9a9aa9;
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__row {
      display: flex;
    }
    &__col1 {
      display: flex;
      flex-direction: column;
      /* margin-right: 17.7rem; */
    }
    &__col2 {
      display: flex;
      flex-direction: column;
    }
    &__titles {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      margin-bottom: 1.6rem;
      width: 16rem;
    }
    &__p1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8358fe;
      text-align: left;
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
    }
    &__p3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
      margin-left: 2.7rem;
    }
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  margin-bottom: 2.4rem;
  padding-bottom: 3rem;
  .fundraiser {
    &__top {
      width: 100%;
      height: 8.4rem;
      display: flex;
      border-bottom: 1px solid #9a9aa9;
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__row {
      display: flex;
    }
    &__col1 {
      display: flex;
      flex-direction: column;
      /* margin-right: 17.7rem; */
    }
    &__col2 {
      display: flex;
      flex-direction: column;
    }
    &__titles {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      margin-bottom: 1.6rem;
      width: 16rem;
    }
    &__p1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8358fe;
      text-align: left;
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
    }
    &__p3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
      margin-left: 2.7rem;
    }
    &__custom-field {
      display: flex;
      width: 100%;
    }
    &__custom-title {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      margin-bottom: 1.6rem;
    }
    &__donations{
        font-size: ${FONTSIZES.base};
        font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;

export const VerticalTabWrapper = styled.div`
 display: flex;
  gap: 7.4rem;
  border-bottom: 1px solid ${COLORS.torquoise};
  .vertical-tab-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
  }
`

export const TabButton = styled.button`
  position: relative;
  width: 10.3rem;
  height: 1.7rem;
  font-size: ${FONTSIZES.normal};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["moore-grey"]};
  margin-bottom: 4.8rem;
  cursor: pointer;
  text-align: left;
  border: none;
  background: transparent;

  ${({ active }) =>
    active &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: .3rem;
        left: -1.9rem;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background-color: ${COLORS.pink};
      }
    `};
`;
