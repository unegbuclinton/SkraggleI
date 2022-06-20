import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonationSetupFormComponent() {
  return (
    <FormComponentContainer>
      <FormHeaderText>Select Donation Amount</FormHeaderText>
      <div className="form-btns">
        <Button className="form-btn colored-btn" auth>
          $10
        </Button>
        <Button className="form-btn" auth>
          $100
        </Button>
        <Button className="form-btn" auth>
          $500
        </Button>
        <Button className="form-btn" auth>
          $1000
        </Button>
      </div>

      <div className="form-input__container">
        <span className="form-input__kit">$</span>
        <FormHeaderText>Enter Custom Amount</FormHeaderText>
        <Input autoWidth className="form-input" placeholder="$2000" />
      </div>

      <FormParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </FormParagraph>
      <FormButtonWrapper>
        <Button className="form-footer__btn" auth>
          Donate
        </Button>
      </FormButtonWrapper>
    </FormComponentContainer>
  );
}

export default DonationSetupFormComponent;

const FormComponentContainer = styled.div`
  padding: 2.53rem 4.4rem 4.201rem 4.4rem;

  .form-btns {
    display: flex;
    gap: 1.471rem;
    margin-bottom: 2.941rem;

    .form-btn {
      width: 100%;
      max-width: 7.302rem;
      height: 3.646rem;
      background: ${COLORS.white};
      border: 0.920602px solid ${COLORS.torquoise};
      color: ${COLORS['dark-gray']};
      font-weight: ${FONTWEIGHTS.medium};
    }

    .colored-btn {
      background: ${COLORS.deepPurple};
      color: ${COLORS.white};
    }
  }

  .form-input__container {
    position: relative;
    margin-bottom: 2.943rem;

    .form-input {
      background: ${COLORS.white};
      border: 0.920602px solid ${COLORS.torquoise};
      padding-left: 6rem;

      &::placeholder {
        text-align: right;
      }
    }

    .form-input__kit {
      position: absolute;
      top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 4.907rem;
      height: 4.3rem;
      font-size: 1.473rem;
      background: ${COLORS.torquoise};
      color: ${COLORS['dark-gray']};
      border-top-left-radius: 0.46rem;
      border-bottom-left-radius: 0.46rem;
      z-index: 1;
    }
  }
`;

const FormHeaderText = styled.h4`
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.medium};
  line-height: 1.508rem;
  margin-bottom: 1.47rem;
`;

const FormParagraph = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  line-height: 1.964rem;
  color: ${COLORS['dark-gray']};
`;

const FormButtonWrapper = styled.div`
  .form-footer__btn {
    width: 100%;
    height: 5.105rem;
    font-size: ${FONTSIZES.small};
    margin-top: 4.633rem;
  }
`;
