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

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  padding-left: 2.5rem;

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
`;

export const DetailsText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

// export const SwitchWrapper = styled.div`
//   display: flex;
//   gap: 3.2rem;
// `;

// export const SwitchLabel = styled.div`
//   width: 27.1rem;
//   height: 2.1rem;
//   font-weight: ${FONTWEIGHTS.normal};
//   font-size: ${FONTSIZES.lg};
//   color: ${COLORS.black};
// `;
