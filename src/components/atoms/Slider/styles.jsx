import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 5rem 0;
  padding-left: 1rem;
`;

export const SelectValue = styled.div`
  width: 5.1rem;
  height: 3.7rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: ${({ value }) => value}px;
  background: ${COLORS["turfts-blue"]};
  color: ${COLORS.white};
  border-radius: 4px;
  text-align: center;
  line-height: 45px;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.bold};
  font-weight: bold;
 
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

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;
