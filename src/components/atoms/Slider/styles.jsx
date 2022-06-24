import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

const height = '30px';
const thumbHeight = 20;
const trackHeight = '2px';

const upperColor = '#edf5f9';
const lowerColor = '#FF576B';
const thumbColor = '#FF576B';
const thumbHoverColor = '#FF576B';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color, size) => {
  let i = 10;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export const InputContainer = styled.div`
  width: 100%;
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
  top: -2px;
  left: 220px;
  background: transparent;
  color: ${COLORS['grey-500']};
  text-align: center;
  padding-left: 0.6rem;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.normal};

  &::after {
    content: '';
    width: 3.7rem;
    height: 3.7rem;
    position: absolute;
    left: 0;
    background: ${COLORS['turfts-blue']};
    transform: rotate(45deg);
    z-index: -1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
// export const InputSlider = styled.input.attrs({ type: 'range' })`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   outline: 0;
//   height: 2px;
//   width: 29.98rem;
//   border-radius: 5px;
//   color: #ff9800;
//   background-color: ${COLORS['grey-400']};
//   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
//   cursor: pointer;

//   ::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     width: 24px;
//     height: 24px;
//     /* background-image: radial-gradient(circle, #ff576b 40%, #ff576b 45%); */
//     border-radius: 50%;
//     /* box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.12); */
//     /* box-shadow: ${makeLongShadow(upperColor, '-10px')}; */
//     /* transform: translateY(-50%); */
//   }

//   ::-moz-range-thumb {
//     -webkit-appearance: none;
//     width: 24px;
//     height: 24px;
//     background-image: radial-gradient(circle, #ff9800 40%, #f7f7fc 45%);
//     border-radius: 50%;
//     /* box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.12);
//      */
//     box-shadow: ${makeLongShadow(upperColor, '-10px')};
//   }

//   &::-webkit-slider-thumb {
//     position: relative;
//     appearance: none;
//     height: ${thumbHeight}px;
//     width: ${thumbHeight}px;
//     background: ${thumbColor};
//     border-radius: 100%;
//     border: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     box-shadow: ${makeLongShadow(upperColor, '-10px')};
//     transition: background-color 150ms;
//   }

//   &::-webkit-slider-runnable-track {
//     width: 100%;
//     height: ${height};
//     background: ${lowerBackground};
//   }

//   &::-moz-range-track,
//   &::-moz-range-progress {
//     /* width: 100%; */
//     height: ${height};
//     background: ${upperBackground};
//   }

//   &::-moz-range-progress {
//     background: ${lowerBackground};
//   }

//   &::-moz-range-thumb {
//     appearance: none;
//     margin: 0;
//     height: ${thumbHeight};
//     width: ${thumbHeight};
//     background: ${thumbColor};
//     border-radius: 100%;
//     border: 0;
//     transition: background-color 150ms;
//   }

//   &::-ms-track {
//     width: 100%;
//     height: ${height};
//     border: 0;
//     /* color needed to hide track marks */
//     color: transparent;
//     background: transparent;
//   }

//   &::-ms-fill-lower {
//     background: ${lowerBackground};
//   }

//   &::-ms-fill-upper {
//     background: ${upperBackground};
//   }

//   &::-ms-thumb {
//     appearance: none;
//     height: ${thumbHeight};
//     width: ${thumbHeight};
//     background: ${thumbColor};
//     border-radius: 100%;
//     border: 0;
//     transition: background-color 150ms;
//     /* IE Edge thinks it can support -webkit prefixes */
//     top: 0;
//     margin: 0;
//     box-shadow: none;
//   }

//   &:hover,
//   &:focus {
//     &::-webkit-slider-thumb {
//       background-color: ${thumbHoverColor};
//     }
//     &::-moz-range-thumb {
//       background-color: ${thumbHoverColor};
//     }
//     &::-ms-thumb {
//       background-color: ${thumbHoverColor};
//     }
//   }
// `;

export const Range = styled.input`
  border-radius: 50px;
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 210px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, '-9px')};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;
