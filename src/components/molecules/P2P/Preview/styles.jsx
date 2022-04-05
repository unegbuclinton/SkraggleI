import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const PreviewWrapper = styled.div`
  display: flex;
  padding-top: 3rem;
  margin-bottom: 2.4rem;

  .preview {
    &__left {
    }
    &__right {
      padding-left: 4rem;
      display: flex;
      flex-direction: column;
    }
    &__profile {
      display: flex;
    }
    &__profile-data {
      margin-left: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__profile {
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS['gray-500']};
      margin-bottom: 0.8rem;
    }
    &__profile-name {
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.normal};
      color: #8358fe;
    }
    &__heading {
      margin-top: 3.2rem;
      font-size: ${FONTSIZES['logo-large']};
      font-weight: ${FONTWEIGHTS.bold};
      color: #1e003e;
      margin-bottom: 6.88rem;
    }
    &__select-donation {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
      color: #3c3c3c;
      margin-top: 3.2rem;
    }
    &__button-container {
      display: flex;
      margin-top: 1.47rem;
    }
    &__button {
      background: #1e003e;
      color: white;
      width: 7.3rem;
      height: 3.646rem;
      border-radius: 0.5rem;
      margin-right: 1.47rem;
    }
    &__input-container {
      display: flex;
      height: 3.646rem;
      width: 33.6rem;
      border-radius: 0.5rem;
      border: 0.920602px solid #e6eff1;
      margin-top: 1.6rem;
    }
    &__dollar {
      background: #e6eff1;
      width: 4.907rem;
      display: flex;
      align-items: center;
    }
    &__input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      padding: 0.5rem;
      text-align: right;
    }
    &__buttons-donate {
      display: flex;
      margin-top: 3.2rem;
    }
    &__donate-button {
      width: 19.981rem;
      height: 5.105rem;
      background: #ff576b;
      border-radius: 0.5rem;
      margin-right: 1.038rem;
    }
    &__fundraise-button {
      width: 19.981rem;
      height: 5.105rem;
      border: 1px solid #ff576b;
      border-radius: 0.5rem;
    }
  }
`;
