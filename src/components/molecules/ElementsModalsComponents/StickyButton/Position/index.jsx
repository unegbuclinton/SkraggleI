import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useElement } from 'context';
import React from 'react';
import styled from 'styled-components';

function Position() {
  // vars
  const { elementConfig, changeAlignment, changePosition, changeScrollOffset } = useElement();

  return (
    <PositionWrapper>
      <InputWrapper>
        <StickyButtonLabel>Alignment</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Right', value: 'right' }
            ]}
            className="dropdown"
            myValue="left"
            onChange={(e) => changeAlignment(e.value)}
          />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel>Position</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            options={[
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' }
            ]}
            className="dropdown"
            myValue="top"
            onChange={(e) => changePosition(e.value)}
          />
        </Wrapper>
      </InputWrapper>
      <NumberInputWrapper>
        <StickyButtonLabel>Scroll offset</StickyButtonLabel>
        <Wrapper>
          <Input
            onWheel={() => document.activeElement.blur()}
            className="input"
            type="number"
            value={parseFloat(elementConfig.scrollOffset.replace('px', ''))}
            onChange={changeScrollOffset}
          />
        </Wrapper>
        <Pixel>px</Pixel>
      </NumberInputWrapper>
    </PositionWrapper>
  );
}

export default Position;

const PositionWrapper = styled.div`
  margin-top: 3.2rem;
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
