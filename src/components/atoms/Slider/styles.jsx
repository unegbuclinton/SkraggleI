import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const InputContainer = styled.div`
  padding: 5rem 0;
  padding-left: 1rem;
`;

export const SelectValue = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: ${({ value }) => value}px;
  background: transparent;
  color: ${COLORS.white};
  text-align: center;
  padding-left: 0.6rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.bold};

  &::after {
    content: "";
    width: 3.7rem;
    height: 3.7rem;
    position: absolute;
    left: 0;
    background: ${COLORS["turfts-blue"]};
    transform: rotate(45deg);
    z-index: -1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
export const InputSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  width: 29.98rem;
  border-radius: 5px;
  background: ${COLORS["turfts-blue"]};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle ,#ff9800 40%,  #f7f7fc 45%);
    border-radius: 50%;
    box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.12);

  }


  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle ,#ff9800 40%,  #f7f7fc 45%);
    border-radius: 50%;
    box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.12);
  }
`;
