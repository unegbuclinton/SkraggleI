import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";

import Button from "components/atoms/Button/Button";

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
      color: ${COLORS["purple-solid"]};
    }
    &__heading {
      margin-top: 3.2rem;
      font-size: ${FONTSIZES['logo-large']};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS["blue-black"]};
      margin-bottom: 6rem;
    }
    &__select-donation {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["black-300"]};
      margin-top: 3.2rem;
    }
    &__button-container {
      display: flex;
      margin-top: 1.47rem;
    }
    &__button {
      background: ${COLORS["blue-black"]};
      color: white;
      width: 7.3rem;
      height: 3.646rem;
      border-radius: 0.5rem;
      margin-right: 1.47rem;
    }
    &__notActive {
      background: transparent;
      color: ${COLORS["dark-gray"]};
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
      border: 0.920602px solid ${COLORS.torquoise};
      margin-top: 1.6rem;
    }
    &__dollar {
      background: ${COLORS.torquoise};
      width: 4.907rem;
      display: flex;
      align-items: center;
      justify-content: center;
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
      background: ${COLORS.pink};
      border-radius: 0.5rem;
      margin-right: 1.038rem;
    }
    &__fundraise-button {
      width: 19.981rem;
      height: 5.105rem;
      border: 1px solid ${COLORS.pink};
      border-radius: 0.5rem;
    }
    &__bar-values {
      display: flex;
      gap: 4.59rem;
      padding-top: 1rem;
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["gray-500"]};
      &__initial {
        font-size: 1.02rem;
      }
      &__mid {
      font-size: 1.2315rem;
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["gray-500"]};
    }
    &__high{
      font-size: 1.2315rem;
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["header-grey"]};
    }
    }

    
  }
`;

export const LinksWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
  padding-bottom: 4rem;
  .preview {
    &__link {
      padding-top: 5rem;
      font-weight: 400;
      font-size: 14px;
      line-height: 152.69%;
      text-align: center;
      color: ${COLORS["grey-200"]};
    }
    &__textarea {
      display: flex;
      position: relative;
      width: 46.6rem;
      border: 1px solid ${COLORS.pink};
      border-radius: 0.5rem;
      margin-top: 2.4rem;
      margin-bottom: 5.2rem;
    }
    &__copy-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.9rem;
      position: absolute;
      width: 9.7rem;
      height: 4.7rem;
      border-radius: 0px 5px 5px 0px;
      right: 0;
      bottom: 0;
    }
    &__socialMedia {
      display: flex;
    }
    &__facebook {
      display: flex;
      padding-left: 1.3rem;
      gap: 0.8rem;
      align-items: center;
      width: 22.4rem;
      height: 5.5rem;
      border: 1px solid ${COLORS.pink};
      border-radius: 10rem;
      margin-right: 3.8rem;
      font-size: ${FONTSIZES.lg};
    }
    &__icon-copy {
      fill: white;
    }
  }
`;

export const CopyText = styled.textarea`
  width: 100%;
  outline: none;
  height: 4.6rem;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1.8rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-size: 1.47038rem;
  color: ${COLORS["gray-500"]};
`;

export const ButtonCopy = styled(Button)`
  gap: 0.9rem;
  display: flex;
  position: absolute;
  width: 9.7rem;
  height: 4.7rem;
  border-radius: 0px 5px 5px 0px;
  right: 0;
  bottom: 0;
`;

export const Leaderboard = styled.div`
  margin-top: 7.192rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES["logo-large"]};
  line-height: 3.8rem;
  color: ${COLORS["blue-black"]};

  .leaderboard-icon {
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
`;
