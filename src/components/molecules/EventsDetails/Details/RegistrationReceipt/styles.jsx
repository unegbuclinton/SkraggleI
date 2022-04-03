import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

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

export const SectionWrapper = styled.div`
  width: 100%;
  padding-left: 2.5rem;

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
`;
