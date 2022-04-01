import { COLORS } from "constants/colors";
import Card from "components/atoms/Card";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const DetailsWrapper = styled(Card)`
  padding: 2.2rem 1.3rem 0 1.3rem;
`;

export const DetailsHeading = styled.h1`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xxxlarge};
  color: ${COLORS.black};
  margin-bottom: 3.2rem;
  padding-left: 2.5rem;
`;

export const DetailsSubHeading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS.black};
  margin-bottom: 1.6rem;
  padding-left: 2.5rem;
`;

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-200"]};
`;

export const DetailsText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const Container = styled.form`
  .event-heading {
    margin-top: 2rem;
  }
  .notification-heading {
    margin: 2rem 0 2.3rem 0;
  }
`;

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  padding-left: 2.5rem;
  overflow-x: auto;
  .text-editor {
    width: 614px;
    height: 306px;
    border: 1px solid #9a9aa9;
    /* box-sizing: border-box; */
    border-radius: 5px;
    margin-bottom: 2.4rem;
  }

  .details-input {
    width: 61.4rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-top: 0.8rem;
  }

  .message-input {
    width: 61.4rem;
    height: 10.9rem;
    margin-top: 0.8rem;
    padding: 2.2rem 0 6.6rem 2.083rem;
  }

  .switch-wrapper {
    display: flex;
    gap: 3.7rem;
    margin-bottom: 2rem;
  }

  .option-switch {
    margin: 1.6rem 0 2.4rem 0;
  }

  .date {
    margin-bottom: 4rem;
  }

  .registration-switch {
    margin: 2.09rem 0 4rem 0;
  }
  .notification-info {
    margin: 0 0 1.2rem 1.2rem;
  }
  .choose-recipient-input {
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2.4rem 0;
    width: 99.1rem;
  }

  .email-text {
    font-size: ${FONTSIZES.small};
    padding-left: 1.2rem;
  }
  .add-email-btn {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.34rem;
    margin: 1.5rem 0 2rem 1.2rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.base};
  }

  .event-registration-dropdown {
    width: 61.4rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    margin: 0.8rem 0 2.4rem 0;
  }

  .receipt-text {
    font-size: ${FONTSIZES.small};
    padding-left: 1.2rem;
    margin-bottom: 2.6rem;
  }

  .recipient-container {
    margin-top: 2.2rem;
  }

  .recipient-body {
    width: 1083px;
    height: 306px;
    border: 1px solid #9a9aa9;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .recipient-text {
    font-size: ${FONTSIZES.small};
    padding-left: 1.2rem;
    margin: 1.9rem 0 3.2rem 0;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const SwitchLabel = styled.div`
  width: 27.1rem;
  height: 2.1rem;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  .date-time-input {
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 34.9rem;
    height: 6.4rem;
    margin: 0.8rem 0 2.4rem 0;
  }

  .end-date {
    margin-bottom: 0;
  }

  .input-container {
    margin-bottom: 2rem;
  }

  .event-registration-input {
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 54.5rem;
    height: 6.4rem;
    margin: 0.8rem 0 1.6rem 0;
  }

  .category-input {
    margin-bottom: 3.4rem;
  }
  .form-input,
  .address-input {
    margin-bottom: 3rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  padding-bottom: 2rem;

  .icon-container {
    width: 17.4rem;
    height: 8.1rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon-label {
      margin-top: 0.5rem;
    }
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .city-input {
    width: 39.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-top: 0.8rem;
  }

  .state {
    width: 29.6rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-top: 0.8rem;
  }

  .zip {
    width: 29.6rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-top: 0.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 4.109rem;
  padding: 0 3.1rem 11.5rem 0;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem ${COLORS["gray-500"]} solid;
    border-radius: 0.34rem;
    background-color: ${COLORS.white};
    color: ${COLORS["gray-500"]};
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }

  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.34rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }
`;
