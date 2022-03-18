import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormWrapper = styled.form`
   margin-top: 6.134rem;

  .forgot-password__card {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    padding-top: 2.4rem;
    padding-bottom: 4rem;
  }

  .forgot-password__heading {
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xlarge};
    line-height: 2.3rem;
    color: ${COLORS["blue-black"]};
    margin-bottom: 9rem;
  }

  p {
    display: flex;
    justify-content: left;
    margin-bottom: 1.5rem;
    line-height: 1.6rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS.deepPurple};
  }
`;

export const ReturnLoginLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.lg};
  line-height: 2.1rem;
  color: ${COLORS["blue-200"]};
  margin-bottom: 4rem;
`;
