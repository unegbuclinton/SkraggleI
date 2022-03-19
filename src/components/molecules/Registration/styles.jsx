import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const Form = styled.form`
  width: 100%;
  padding: 25px 45px 40px 45px;

  .signup-header {
    text-align: center;
    margin-bottom: 3.861rem;
    color: ${COLORS.deepPurple};
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
  }
  .signup-card{
    
  }

  .reg__btn {
    margin-top: 3.3rem;
  }
  .promp-text {
    display: flex;
    justify-content: center;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.medium};
    margin-bottom: 4rem;
    color: ${COLORS["moore-grey"]};
    margin-top: 5.6rem;

    &__path {
      text-decoration: none;
      color: ${COLORS.deepPurple};
    }
  }
  .agreement-container {
    width: 34.2rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    text-align: center;

    &__terms {
      text-decoration: none;
      color: #3759a9;
    }
  }
`;

export const CatchError = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: -0.5rem;
`;
