import Card from 'components/atoms/Card/index';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 1.6rem;
  padding-bottom: 3rem;
  height: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  .delete-icon {
    fill: rgba(0, 0, 0, 0.73);
    width: 1.1rem;
    height: 1.2rem;
  }
`;

export const LeftSection = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 34.6rem;
  width: 100%;
  margin-right: 1.6rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  /* height: 74.6rem; */
  height: 100%;
  overflow: auto;

  .action-dropdown__container {
    width: 12rem;
    height: 4.8rem;
    font-size: ${FONTSIZES.xsmall};
  }
`;

export const ContainerDropdwon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: right;
  padding-right: 0.8rem;
  padding-top: 1.6rem;
  margin-bottom: 1.1rem;
  .dropdown-icon {
    width: 0.8rem;
    height: 1.4rem;
  }
`;
export const CampaignNameWrapper = styled.div`
  border-bottom: 1px solid #e6eff1;
  padding-bottom: 1.8rem;
  padding-left: 1.7rem;
  margin-bottom: 2.1em;
  .campaign-name {
    &__title {
      font-size: 12px;
      line-height: 152.69%;
      color: #626262;
      margin-bottom: 1.6rem;
    }

    &__description {
      font-size: 14px;
      font-weight: 400;
      line-height: 152.69%;
      color: #1e003e;
    }

    &__button {
      padding: 0;
      width: 9.173rem;
      height: 3rem;
      background-color: rgba(125, 194, 55, 0.2);
      border-radius: 40px;
      color: #00913a;
      text-align: center;
      line-height: 140%;
    }
  }
`;

export const RightSection = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  height: 100%;
  overflow: auto;

  .campaign-name {
    &__top {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 7.1rem;
      padding-bottom: 6.403rem;
      border-bottom: 1px solid #e6eff1;
      width: 100%;
      height: 12rem;
    }
    &__card {
      display: flex;
      flex-direction: column;
      flex-grow: 4;
      align-items: center;
      .card__title {
        font-weight: ${FONTWEIGHTS.bold};
        font-size: 1.06445rem;
        line-height: 1.2rem;
        color: rgba(19, 41, 61, 0.6);
      }
      .card__description {
        font-weight: ${FONTWEIGHTS.bold};
        font-size: ${FONTSIZES.xlarge};
        line-height: 2.3rem;
        color: ${COLORS.black};
      }
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 12rem;
      padding-bottom: 12rem;
    }
    &__bottom-heading {
      font-size: ${FONTSIZES.lg};
      line-height: 2.1rem;
      color: ${COLORS['black-shade']};
      margin-bottom: 1.3rem;
    }
    &__bottom-paragraph {
      text-align: center;
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: ${COLORS['gray-500']};
    }
    &__transaction-icon {
      display: flex;
      justify-content: center;
      padding-top: 6.4rem;
    }
    &__button-container {
      display: flex;
      justify-content: center;
    }
    &__transaction-button {
      padding: 0;
      width: 14rem;
      height: 4.8rem;
      margin-top: 4rem;
    }
  }
`;
