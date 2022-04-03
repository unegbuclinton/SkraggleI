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

export const Container = styled.form`
  .event-heading {
    margin-top: 2rem;
  }
  .notification-heading {
    margin: 2rem 0 2.3rem 0;
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
