import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const PersonalInfoWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 2.434rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const PersonalInfoHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS["header-grey"]};
  padding-bottom: 1.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .heading {
    color: ${COLORS.deepPurple};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
  .info-btn {
    background-color: ${COLORS.white};
    color: ${COLORS["grey-500"]};
    border: 1px solid ${COLORS.deepPurple};
    width: 9.6rem;
    border-radius: 0.5rem;
  }
`;

export const PersonalInfoContainer = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
  display: flex;
  overflow: hidden;
  .info {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["grey-200"]};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .title {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["header-grey"]};
  }

  .mr {
    margin-left: 19.2rem;
  }

  .first-name {
    margin-left: 15.1rem;
  }

  .middle-name {
    margin-left: 14rem;
  }

  .last-name {
    margin-left: 15.4rem;
  }

  .suffix {
    margin-left: 18.3rem;
  }

  .name {
    margin-left: 11.8rem;
  }

  .gender {
    margin-left: 17.7rem;
  }

  .date {
    margin-left: 15.4rem;
  }

  .email {
    color: ${COLORS.deepPurple};
    margin-left: 13.1rem;
  }

  .phone {
    margin-left: 12.6rem;
    color: ${COLORS.deepPurple};
  }

  .address-container {
    line-height: 2rem;
    margin-left: 17rem;
    width: 17rem;
  }
`;
