import styled from "styled-components";
import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const ReconmendationWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 3.966rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const RecomendationHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS["header-grey"]};
  padding-bottom: 1.7rem;
  .heading {
    color: ${COLORS.deepPurple};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
`;

export const ContentsWrapper = styled.div`
  padding-top: 2.568rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  padding-top: 1rem;
  margin-left: 3.2rem;
  .content-heading {
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    padding-bottom: 0.7rem;
  }

  .content-info {
    color: ${COLORS["grey-200"]};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    &__digit {
      color: ${COLORS.pink};
    }
  }
`;
