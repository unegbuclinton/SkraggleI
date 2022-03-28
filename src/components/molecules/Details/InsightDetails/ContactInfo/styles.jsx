import styled from "styled-components";
import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const ContactWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 2.334rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const ContactHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
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
  .heading-btn {
    background-color: ${COLORS.white};
    color: ${COLORS["grey-500"]};
    border: 1px solid ${COLORS.deepPurple};
    width: 9.6rem;
    border-radius: 0.5rem;
  }
`;

export const ContactContainer = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
  display: flex;
  overflow: hidden;

  .title {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["grey-200"]};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .info {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["header-grey"]};
  }

  .email {
    margin-left: 13.1rem;
    color: ${COLORS.deepPurple};
  }

  .home-email {
    margin-left: 14.7rem;
    color: ${COLORS.deepPurple};
  }

  .work-email {
    margin-left: 14.8rem;
  }

  .other-email {
    margin-left: 13.6rem;
  }

  .primary-phone {
    color: ${COLORS.deepPurple};
    margin-left: 12.6rem;
  }

  .phone {
    margin-left: 14.3rem;
  }

  .other-pone {
    margin-left: 13.2rem;
  }

  .address-container {
    line-height: 2rem;
    margin-left: 17rem;
    width: 17rem;
  }

  .home-address {
    margin-left: 13.3rem;
  }

  .work-address {
    margin-left: 13.1rem;
  }

  .other-address {
    margin-left: 11.3rem;
  }
`;
