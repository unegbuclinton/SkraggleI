import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const FieldWrapper = styled(Card)`
  padding: 3.1rem 2.4rem 63rem 2.4rem;
  margin-top: 1.6rem;
`;

export const Container = styled.div`
  overflow-x: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem 1.2rem 3.1rem;
  border: 0.08rem solid ${COLORS["porcelain-white"]};
  justify-content: space-between;
  min-width: 110.4rem !important;
`;

export const ContentsWrapper = styled.div`
  margin-right: 13.4rem;
  white-space: nowrap;
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-500"]};
    margin-bottom: 0.4rem;
  }
  .heading-text {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS["grey-400"]};
  }
`;

export const SwitchIconWrapper = styled.div`
  margin-right: 5.8rem;
  padding-bottom: 1.4rem;
`;

export const RequiredWrapper = styled.div`
  margin-right: 6.9rem;
  text-align: justify;
  .title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["gray-500"]};
  }

  .price {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-400"]};
  }
`;

export const ViewWrapper = styled.div`
  margin-right: 5.6rem;
  text-align: justify;
  white-space: nowrap;
  .title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["gray-500"]};
  }

  .view {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-400"]};
    white-space: nowrap;
  }
`;

export const ActionWrapper = styled.div`
  margin-left: 4.47rem;
  display: flex;
  gap: 1.6rem;
  .action {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-500"]};
    cursor: pointer;
  }

  .delete {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.pink};
    cursor: pointer;
  }
`;
