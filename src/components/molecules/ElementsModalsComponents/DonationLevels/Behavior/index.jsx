import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconEllipse, DPIconPlusPink } from 'icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function Behavior() {
  const [buttons, setButtons] = useState(['']);
  const [amount, setAmount] = useState('');

  const handleChange = (e, index) => {
    const list = [...buttons];
    list[index] = e.target.value;
    setButtons(list);
  };

  // const handleRemove = (index) => {
  //   const list = [...buttons];
  //   list.splice(index, 1);
  //   setButtons(list);
  // };

  const handleAdd = (e) => {
    e.preventDefault();
    setButtons([
      ...buttons,
      {
        id: buttons.length,
        name: amount
      }
    ]);
    setAmount('');
  };
  return (
    <BehaviorWrapper>
      <InputWrapper>
        <StickyButtonLabel className="open-campaign">Open Campaigns</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            className="campaign"
            type="text"
            placeholder="BGA awesome campaign d...."
          />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel className="frequency">Frequency</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            isSearchable={false}
            className="dropdown"
            type="text"
            placeholder="Default one time"
          />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel className="deignation">Designation</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            isSearchable={false}
            className="dropdown"
            type="text"
            placeholder="Match checking setting"
          />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel className="accent">Accent</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            isSearchable={false}
            className="dropdown"
            type="text"
            placeholder="Match checking setting"
          />
        </Wrapper>
      </InputWrapper>
      {buttons.map((name, index) => (
        <div key={index}>
          <DonationInputWrapper>
            <DPIconEllipse className="ellipse" />
            <Container>
              <InputWrapper>
                <StickyButtonLabel className="accent">Accent</StickyButtonLabel>
                <Input className="accent-input" type="text" placeholder="Supporter" />
                <Input
                  className="digit"
                  type="number"
                  onWheel={() => document.activeElement.blur()}
                  id={name}
                  name={name}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="$25"
                />
              </InputWrapper>
              <InputWrapper>
                <StickyButtonLabel className="button-label">Button Label</StickyButtonLabel>
                <Input className="description-input" type="text" placeholder="Donate" />
              </InputWrapper>
              <TextAreaWrapper>
                <StickyButtonLabel className="textarea-label">Description</StickyButtonLabel>
                <TextArea
                  className="description-input"
                  type="text"
                  placeholder="Make a difference today!"
                />
              </TextAreaWrapper>
            </Container>
          </DonationInputWrapper>
        </div>
      ))}

      <Button
        onClick={(e) => {
          handleAdd(e);
        }}
        className="modol-button">
        <DPIconPlusPink />
        Add lavel
      </Button>

      <CheckBoxWrapper className="checkbox">
        <Checkbox pink />
        <CheckBoxLabel>Allow donor to change selected amount</CheckBoxLabel>
      </CheckBoxWrapper>
    </BehaviorWrapper>
  );
}

export default Behavior;

const BehaviorWrapper = styled.div`
  .dropdown {
    width: 30.6rem;
  }
  .accent {
    margin-left: 8.2rem;
  }
  .campaign {
    width: 30.6rem;
    .react-select {
      &__control {
        background-color: ${COLORS.torquoise};
      }
    }
  }
  .radio-label {
    height: 3rem;
  }
  .textarea-label {
    margin-left: 4.7rem;
  }
  .accent-input {
    width: 17.5rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
  .description-input {
    width: 31.2rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
  .digit {
    width: 12.1rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
  .amount-field {
    width: 19.9rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .open-campaign {
    width: 13.8rem;
  }
  .frequency {
    width: 8.3rem;
    margin-left: 5.5rem;
  }
  .deignation {
    margin-left: 4.4rem;
  }
  .ellipse {
    margin-top: 1rem;
  }
  .button-label {
    white-space: nowrap;
    margin-left: 3.7rem;
  }
  .modol-button {
    border: 1px solid ${COLORS.pink};
    border-radius: 0.5rem;
    width: 17.1rem;
    height: 4rem;
    background-color: transparent;
    color: ${COLORS.pink};
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-left: 6.1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-bottom: 2.4rem;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  /* width: 12.6rem; */
`;

const DonationInputWrapper = styled.div`
  display: flex;
  background-color: ${COLORS.torquoise};
  padding: 2rem 0 4rem 2.6rem;
  margin: 0 3rem 2.4rem 6rem;
  border-radius: 0.5rem;
`;

const Container = styled.div``;

const TextArea = styled.textarea`
  width: 31.2rem;
  height: 10.2rem;
  background-color: ${COLORS.white};
  border: 0.1rem solid ${COLORS['gray-500']};
  margin-bottom: 1.8rem;
  border-radius: 0.5rem;
  padding: 0.9rem 0 0 2.4rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 2.7rem 0 4rem 22.8rem;
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;
