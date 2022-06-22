import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Position() {
  return (
    <PositionWrapper>
      <InputWrapper>
        <StickyButtonLabel>Alignment</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown className="dropdown" placeholder="Left" />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel>Position</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown className="dropdown" placeholder="Top" />
        </Wrapper>
      </InputWrapper>
      <NumberInputWrapper>
        <StickyButtonLabel>Scroll offset</StickyButtonLabel>
        <Wrapper>
          <Input
            onWheel={() => document.activeElement.blur()}
            className="input"
            type="number"
            placeholder="0"
          />
        </Wrapper>
        <Pixel>px</Pixel>
      </NumberInputWrapper>
    </PositionWrapper>
  );
}

export default Position;

const PositionWrapper = styled.div`
  .dropdown {
    width: 30.6rem;
  }
  .input {
    width: 8.9rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
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
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: center;
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  width: 9.8rem;
`;

const Wrapper = styled.div`
  margin-bottom: 1.6rem;
`;

const NumberInputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  padding-left: 11.2rem;
`;

const Pixel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  height: 4.4rem;
  display: flex;
  align-items: center;
`;
