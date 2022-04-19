import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import styled, { css } from 'styled-components';



export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: max-content;
  cursor: pointer;
  font-size: ${FONTSIZES.small};
  outline: none;

  *:focus {
    outline: none;
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

export const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: ${(props) => (props.size ? props.size : 23.22)}px;
  height: ${(props) => (props.size ? props.size : 23.22)}px;
  position: relative;
  display: inline-block;
  label {
    margin-left: 25px;
    width: fit-content;
  }
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid
      ${(props) =>
        props.borderColor ? props.borderColor : `${COLORS['gray-500']}`};
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#FAFAFA'};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
    border-color: ${(props) => props.checked && `${COLORS.pink}`};
  }
`;

export const Fill = styled.div`
  background: ${(props) =>
    props.fillColor ? props.fillColor : `${COLORS.pink}`};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    /* width: calc(20px - 4px); */
    position: absolute;
    /* height: calc(20px - 4px); */
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid
      ${(props) => (props.borderActive ? props.borderActive : `${COLORS.pink}`)};
    border-radius: 100%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  visibility: hidden;

  &:focus {
    outline: none;
  }

  ${({ checked }) =>
    checked &&
    css`
      & ~ ${Fill} {
        width: 15px;
        height: 15px;
        transition: width 0.2s ease-out, height 0.2s ease-out;

        &::before {
          opacity: 1;
          transition: opacity 1s ease;
        }
      }
    `}/* &:checked {
    & ~ ${Fill} {
      width: 55px;
      height: 15px;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  } */
`;
