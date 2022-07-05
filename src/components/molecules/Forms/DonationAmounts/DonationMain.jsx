import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import FormCardLayout from 'components/layouts/FormCardLayout';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
import DonationAmount from './DonationAmount';

function DonationAmounts({ IncrementTab, DecrementTab }) {
  const [button1, setButton1] = useState();
  const [button2, setButton2] = useState();
  const [button3, setButton3] = useState();
  const [button4, setButton4] = useState();

  const buttonsGroup = [
    {
      id: '1',
      title: button1 ? `${button1}` : '$10'
    },
    {
      id: '2',
      title: button2 ? `${button2}` : '$10'
    },
    {
      id: '3',
      title: button3 ? `${button3}` : '$10'
    },
    {
      id: '4',
      title: button4 ? `${button4}` : '$10'
    }
  ];

  const [active, setActive] = useState(1);
  const [amount, setAmount] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    setActive(event.target.id);
    setAmount(event.target.title);
  };

  const handleChange = (value) => {
    setAmount(value);
  };

  const handleChange1 = (value) => {
    setButton1(value);
  };
  const handleChange2 = (value) => {
    setButton2(value);
  };
  const handleChange3 = (value) => {
    setButton3(value);
  };
  const handleChange4 = (value) => {
    setButton4(value);
  };

  return (
    <DonationMainWrapper>
      <DonationAmount
        IncrementTab={IncrementTab}
        DecrementTab={DecrementTab}
        handleChange1={handleChange1}
        handleChange2={handleChange2}
        handleChange3={handleChange3}
        handleChange4={handleChange4}
      />
      <FormCardLayout>
        <FormComponentContainer>
          <FormHeaderText>Select Donation Amount</FormHeaderText>
          <div className="form-btns">
            {buttonsGroup.map((btn) => (
              <Button
                key={btn.id}
                className={active === btn.id ? 'preview__button' : 'preview__notActive'}
                id={btn.id}
                title={btn.title}
                onClick={handleClick}>
                {btn.title}
              </Button>
            ))}
          </div>

          <div className="form-input__container">
            <span className="form-input__kit">$</span>
            <FormHeaderText>Enter Custom Amount</FormHeaderText>
            <Input
              autoWidth
              className="form-input"
              placeholder="$2000"
              value={amount}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>

          <FormParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FormParagraph>
          <FormButtonWrapper>
            <Button className="form-footer__btn" auth>
              Donate
            </Button>
          </FormButtonWrapper>
        </FormComponentContainer>
      </FormCardLayout>
    </DonationMainWrapper>
  );
}

export default DonationAmounts;

export const DonationMainWrapper = styled.div`
  display: flex;
  flex: 1 auto;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const FormComponentContainer = styled.div`
  padding: 2.53rem 2.2rem 4.201rem 2.2rem;

  .preview {
    &__button {
      background: ${COLORS['blue-black']};
      color: white;
      max-width: 7.3rem;
      height: 3.646rem;
      border-radius: 0.5rem;
    }
    &__notActive {
      background: transparent;
      color: ${COLORS['dark-gray']};
      width: 7.3rem;
      height: 3.646rem;
      border-radius: 0.5rem;
      margin-right: 1.47rem;
    }
  }

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
      text-align: right;

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
