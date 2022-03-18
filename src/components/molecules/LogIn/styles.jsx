import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  padding-left: 4.5rem;
  padding-right: 4.5rem;

  .login-heading {
    display: flex;
    justify-content: center;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xlarge};
    line-height: 2.3rem;
    color: ${COLORS["blue-black"]};
    padding-top: 3.44rem;
    padding-bottom: 3.86rem;
  }

  label {
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 1.6rem;
    color: ${COLORS["gray-500"]};
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

export const FormWrapper = styled.form``;

export const LoginLink = styled(Link)`
  &.link {
    &__forgotpassword {
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.small};
      line-height: 1.6REM;
      text-decoration: none;
      display: flex;
      justify-content: right;
      margin-top: 0.8rem;
      margin-bottom: 5.6rem;
      color: #ff576b;
    }

    &__signup {
      color: #1e003e;
    }
  }
`;

