import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Switched = styled.div`
  position: relative;
  width: 3.23rem;
  height: 1.891rem;
  background: #b3b3b3;
  border-radius: 3.2rem;
  padding: 0.4rem;

  &:before {
    content: '';
    position: absolute;
    width: 1.366rem;
    height: 1.366rem;
    border-radius: 35px;
    top: 50%;
    left: 0.4rem;
    background: white;
    transition: 100ms all;
    transform: translate(0, -50%);
  }
`;

export const SwitchInput = styled.input`
  display: none;

  &:checked + ${Switched} {
    background: ${COLORS.pink};

    &:before {
      transform: translate(1.1rem, -50%);
    }
  }
`;
