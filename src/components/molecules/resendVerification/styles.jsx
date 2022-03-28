import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";

export const ResendLinkWrapper = styled(Card)`
  margin-top: 6.134rem;
  .resend-verification {
    padding: 2.4rem 4rem 4rem;
    &__heading {
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.xlarge};
      line-height: 2.3rem;
      color: ${COLORS.deepPurple};
    }
    &__image-wrapper {
      display: flex;
      justify-content: center;
      padding-top: 6.4rem;
      &--image {
        width: 10.3rem;
      }
    }

    &__info {
      font-style: normal;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.lg};
      line-height: 2.1rem;
      color: ${COLORS["grey-500"]};
      padding-top: 5.6rem;
      width: 35rem;
    }

    &__email {
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.lg};
      line-height: 2.1rem;
      color: ${COLORS.deepPurple};
      padding-top: 1.6rem;
    }

    &__link {
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.lg};
      line-height: 2.1rem;
      color: ${COLORS["blue-200"]};
      padding-top: 5.6rem;
      text-align: center;
    }
  }
`;
